const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");

const Routes = require("../routes");

// routes
const {
  UserRoutes,
  BlockRoutes,
  BlockChainRoutes,
  AuthRoutes,
} = require("../routes/index.routes");

// controllers
const {
  UserController,
  BlockController,
  BlockChainController,
  AuthController,
} = require("../controllers");

// services
const {
  HomeService,
  UserService,
  BlockService,
  BlockChainService,
  AuthService,
} = require("../services");

// repositories
const {
  UserRepository,
  BlockRepository,
  BlockChainRepository,
} = require("../repositories");

// models
const { UserModel, BlockChainModel, BlockModel } = require("../models");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
    ArticleRoutes: asFunction(BlockRoutes).singleton(),
    CategoryRoutes: asFunction(BlockChainRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    UserController: asClass(UserController.bind(UserController)).singleton(),
    BlockController: asClass(BlockController.bind(BlockController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    BlockChainController: asClass(
      BlockChainController.bind(BlockChainController)
    ).singleton(),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    BlockChainService: asClass(BlockChainService).singleton(),
    BlockService: asClass(BlockService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    BlockRepository: asClass(BlockRepository).singleton(),
    BlockChainRepository: asClass(BlockChainRepository).singleton(),
  })
  .register({
    UserModel: asValue(UserModel),
    BlockModel: asValue(BlockModel),
    BlockChainModel: asValue(BlockChainModel),
  });

module.exports = container;
