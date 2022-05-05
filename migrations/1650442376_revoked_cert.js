const RevokedCert = artifacts.require("RevokedCert");

module.exports = function(deployer) {
  deployer.deploy(RevokedCert);
};

// Replacing 'RevokedCert'
// -----------------------

// > transaction hash:    0x0853f0ee12530d9417c6eb0a483976720552b10f3523faec7b645e116d498ffe
// > Blocks: 3            Seconds: 17
// > contract address:    0x81539C31A4a5DBA71097fC808d6579023b9CBeE1
// > block number:        84
// > block timestamp:     0x6273c1b9
// > account:             0x13A52aaB892e1322e8b52506276363d4754c122e
// > balance:             0
// > gas used:            970511 (0xecf0f)
// > gas price:           0 gwei
// > value sent:          0 ETH
// > total cost:          0 ETH