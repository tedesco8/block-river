const BaseRepository = require("./base.repository");
let _blockModel = null;

class BlockRepository extends BaseRepository {
  constructor({ BlockModel }) {
    super(BlockModel);
    _blockModel = BlockModel;
  }

  async getUserHouses(author) {
    return await _blockModel.find({ author });
  }
}

module.exports = BlockRepository;
