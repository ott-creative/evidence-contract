const RevokedCert = artifacts.require("RevokedCert");

module.exports = function(deployer) {
  deployer.deploy(RevokedCert);
};

// Replacing 'RevokedCert'
// -----------------------
// > transaction hash:    0xa618b74babc595cd1a544e16bad09835aa4d5be84b441e8dd91503f3ad51bbf3
// > Blocks: 0            Seconds: 5
// > contract address:    0xF1112F3A59034AE704CBD1a7d936B8fD8EC94b94
// > block number:        160203
// > block timestamp:     0x625fdd70
// > account:             0x13A52aaB892e1322e8b52506276363d4754c122e
// > balance:             0
// > gas used:            946000 (0xe6f50)
// > gas price:           0 gwei
// > value sent:          0 ETH
// > total cost:          0 ETH