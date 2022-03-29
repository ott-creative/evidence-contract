const Evidence = artifacts.require("Evidence");

contract("Evidence", accounts => {
  it("simple test", async () => {
    const contract = await Evidence.new();
    const admin = accounts[0];

    assert.isTrue(await contract.admins(admin), "admin account is not exists");

    const key = "zhangsan@gmail.com";
    const data = "xxxxx";

    const illegalAdmin = accounts[1];
    await assertThrows(
      contract.saveEvidence(key, data, {from: illegalAdmin}),
      "Not Admin"
    )

    await contract.saveEvidence(key, data);
    const getData = await contract.getEvidence(key);
    assert.equal(getData, data);
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
