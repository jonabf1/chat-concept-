const User = require("../schemas/User")
const api = require("../services/api")

class UserGithubController {

  async store(req, res) {
    const { user } = req.body;
    
    if (!user) {
      return res.status(401).send({ error: "Uninformed user" })
    }

    const userGet = await api.get(`/users/${user}`);

    const userExist = await User.findOne({ user });

    if (userExist) {
      return res.json(userExist)
    }

    if (!userGet) {
      return res.status(401).send({ error: "Github user does not exist" })
    }

    const { name, avatar_url, html_url } = userGet.data;

    const userCreate = await User.create({ user, name, image: avatar_url, url: html_url, provider: true })

    return res.json(userCreate)

  }
}

module.exports = new UserGithubController();