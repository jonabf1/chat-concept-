const User = require("../schemas/User")

class UserVisitorController {

  async store(req, res) {
    const { name, image } = req.body;

    if (!name) {
      return res.status(401).send({ error: "Uninformed name" })
    }

    const provider = false;

    const user = await User.create({ name, provider, image })

    return res.json(user)
  }

}

module.exports = new UserVisitorController();