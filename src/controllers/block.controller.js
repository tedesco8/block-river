let _blockService = null;
class BlockController {
  constructor({ BlockService }) {
    _blockService = BlockService;
  }

  async get(req, res) {
    const { houseId } = req.params;
    const house = await _blockService.get(houseId);
    return res.send(house);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const houses = await _blockService.getAll(pageSize, pageNum);
    return res.send(houses);
  }

  async create(req, res) {
    const { body } = req;
    const createdHouse = await _blockService.create(body);
    return res.status(201).send(createdHouse);
  }

  async update(req, res) {
    const { body } = req;
    const { houseId } = req.params;
    const updatedHouse = await _blockService.update(houseId, body);
    return res.send(updatedHouse);
  }

  async delete(req, res) {
    const { houseId } = req.params;
    const deletedHouse = await _blockService.delete(houseId);
    return res.send(deletedHouse);
  }

  async getUserHouses(req, res) {
    const { houseId } = req.params;
    const houses = await _blockService.getUserHouses(houseId);
    return res.send(houses);
  }

  async upvoteHouse(req, res) {
    const { houseId } = req.params;
    const house = await _blockService.upvoteHouse(houseId);
    return res.send(house);
  }

  async downvoteHouse(req, res) {
    const { houseId } = req.params;
    const house = await _blockService.downvoteHouse(houseId);
    return res.send(house);
  }
}

module.exports = BlockController;
