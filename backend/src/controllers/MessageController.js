
const Message = require("../schemas/Message")

class MessageController {

  async store(req, res) {
    const { authorId, message, image, name, url, user } = req.body;

    if (!authorId) {
      return res.status(400).json({ error: "Uninformed author id" })
    }

    if (!message) {
      return res.status(400).json({ error: "Enter a valid message" })
    }

    const messageCreate = await Message.create({
      message,
      authorId,
    })

    const { _id } = messageCreate;

    let virtualJson;
    if (user) {
      virtualJson = {
        message,
        _id,
        authorId: {
          provider: true,
          image,
          name,
          url
        }
      }
    }
    else {
      virtualJson = {
        message,
        _id,
        authorId: {
          provider: false,
          image,
          name,
          url,
        }
      }
    }

    try {
      req.io.emit('newMessage', virtualJson);
      res.status(201).send("CREATED.")
    } catch (e) {
      res.status(500).send("ERROR => " + e)

      return res.json({ messageCreate })
    }
  }

  async index(req, res) {
    const { page } = req.params;

    const paginate = 25;

    const message = await Message.find().limit(paginate)
      .skip((page - 1) * paginate).populate('authorId').sort({ createdAt: -1 });

    //deixando mensagens em ordem crescente
    const reverseMessage = [...message].reverse()

    return res.send(reverseMessage)
  }

  async delete(req, res) {
    await Message.deleteMany()
    return res.json()
  }

}

module.exports = new MessageController();