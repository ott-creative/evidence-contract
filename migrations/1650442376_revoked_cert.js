const RevokedCert = artifacts.require("RevokedCert");

module.exports = function(deployer) {
  deployer.deploy(RevokedCert);
};

// Replacing 'RevokedCert'
// -----------------------
// > transaction hash:    0xae8020af1329d99861d251535e04f7629001c50571a8ac998ce6007dc7bc384a
// > Blocks: 2            Seconds: 9
// > contract address:    0x29Ded3d061d6845a5E169fcc5Ef526Ae826Ce65d
// > block number:        174984
// > block timestamp:     0x6260fe21
// > account:             0x13A52aaB892e1322e8b52506276363d4754c122e
// > balance:             0
// > gas used:            970511 (0xecf0f)
// > gas price:           0 gwei
// > value sent:          0 ETH
// > total cost:          0 ETH