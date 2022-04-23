const BaseRepository = require("./base.repository");
let _userModel = null;

class UserRepository extends BaseRepository {
  constructor({ UserModel }) {
    super(UserModel);
    _userModel = UserModel;
  }

  async getUserByUsername(username) {
    return await _userModel.findOne({ username });
  }
}

module.exports = UserRepository;
