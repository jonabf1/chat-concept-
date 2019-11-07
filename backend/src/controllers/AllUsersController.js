const User = require("../schemas/User")

class AllUsersController {

  async index(req, res) {
    const user = await User.find();

    return res.json(user)

  }
}

module.exports = new AllUsersController();