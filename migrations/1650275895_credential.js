const Credential = artifacts.require("Credential");

module.exports = function(deployer) {
  deployer.deploy(Credential);
};

// Replacing 'Credential'
// ----------------------
// > transaction hash:    0x0c0390a8f24f83198fffedcf69ea04ffe07692006c510f862fca0d16fbaa5286
// > Blocks: 4            Seconds: 21
// > contract address:    0x57b7b6F72129F86C1FE37862b241c0e4c752E183
// > block number:        75
// > block timestamp:     0x6273c18c
// > account:             0x13A52aaB892e1322e8b52506276363d4754c122e
// > balance:             0
// > gas used:            1462296 (0x165018)
// > gas price:           0 gwei
// > value sent:          0 ETH
// > total cost:          0 ETH
