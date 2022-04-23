const BaseRepository = require("./base.repository");
let _blockChainModel = null;

class BlockChainRepository extends BaseRepository {
  constructor({ BlockChainModel }) {
    super(BlockChainModel);
    _blockChainModel = BlockChainModel;
  }
}

module.exports = BlockChainRepository;
