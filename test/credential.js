const Credential = artifacts.require("Credential");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Credential", accounts => {
  it("simple test", async () => {
    const contract = await Credential.new();
    const admin = accounts[0];

    assert.isTrue(await contract.admins(admin), "admin account is not exists");

    const key = "zhangsan@gmail.com";
    const cipherData = "xxxxx";
    const pubKeys = ["yyyyyy"];
    const cipherKeys = ["zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"];

    const illegalAdmin = accounts[1];
    await assertThrows(
      contract.saveCredential(key, cipherData, pubKeys, cipherKeys, {from: illegalAdmin}),
      "Not Admin"
    )

    await contract.saveCredential(key, cipherData, pubKeys, cipherKeys);
    const getData = await contract.getCredential(key, pubKeys[0]);
    assert.equal(getData[0], cipherData);
    assert.equal(getData[1], cipherKeys[0]);

    await contract.appendAuthorize(key, ["sss"], ["ooo"]);
    const getData2 = await contract.getCredential(key, "sss");
    assert.equal(getData2[0], cipherData);
    assert.equal(getData2[1], "ooo");
  });
});

async function assertThrows(promise, errStr) {
  try {
    await promise;
    throw new Error('not found exception');
  } catch (e) {
    assert.include(e.message, errStr);
  }
}