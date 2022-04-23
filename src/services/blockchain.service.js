const BaseService = require("./base.service");
let _blockChainRepository = null,
  _blockRepository = null;

class BlockChainService extends BaseService {
  constructor({ BlockChainRepository, BlockRepository }) {
    super(BlockChainRepository, BlockRepository);
    _blockChainRepository = BlockChainRepository;
    _blockRepository = BlockRepository;
  }

  async getHouseComments(houseId) {
    if (!houseId) {
      const error = new Error();
      error.status = 400;
      error.message = "houseId must be sent";
      throw error;
    }

    const house = await _blockRepository.get(houseId);

    if (!house) {
      const error = new Error();
      error.status = 404;
      error.message = "house does not exist";
      throw error;
    }

    const { comments } = house;
    return comments;
  }

  async createComment(comment, houseId, userId) {
    if (!houseId) {
      const error = new Error();
      error.status = 400;
      error.message = "houseId must be sent";
      throw error;
    }

    const house = await _blockRepository.get(houseId);

    if (!house) {
      const error = new Error();
      error.status = 404;
      error.message = "house does not exist";
      throw error;
    }

    const createdComment = await _blockChainRepository.create({
      ...comment,
      author: userId
    });
    house.comments.push(createdComment);

    return await _blockRepository.update(houseId, { comments: house.comments });
  }
}

module.exports = BlockChainService;
