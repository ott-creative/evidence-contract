const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

// 部署结果
//    Deploying 'Migrations'
//    ----------------------
//    > transaction hash:    0xf6de80e40e646cf39c714816af96d5be303cd07fa8446aa8abef859e97e213cc
//    > Blocks: 1            Seconds: 4
//    > contract address:    0x894344A685c494BaB8F1DA3D61a79AED95CC20D0
//    > block number:        14743
//    > block timestamp:     0x6247e30d
//    > account:             0x13A52aaB892e1322e8b52506276363d4754c122e
//    > balance:             0
//    > gas used:            215327 (0x3491f)
//    > gas price:           0 gwei
//    > value sent:          0 ETH
//    > total cost:          0 ETH

//    ✓ Saving migration to chain.
//    > Saving migration to chain.
//    > Saving artifacts
//    -------------------------------------
//    > Total cost:                   0 ETH