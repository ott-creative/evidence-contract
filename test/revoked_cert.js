
const RevokedCert = artifacts.require("RevokedCert");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("RevokedCert",  accounts =>  {
  it("write and read", async function () {
    const contract = await RevokedCert.new();
    const admin = accounts[0];

    assert.isTrue(await contract.admins(admin), "admin account is not exists");

    const revokedTime = 1650443352;
    const certType = web3.utils.asciiToHex("kyc");
    const certNo = "xxxxxx";
    const issuer = "zzzzzz";

    const illegalAdmin = accounts[1];
    await assertThrows(
      contract.revoke(revokedTime, certType, certNo, issuer, {from: illegalAdmin}),
      "Not Admin"
    )

    await contract.revoke(revokedTime, certType, certNo, issuer);
    const getData = await contract.getRevokedInfo(certNo);
    assert.equal(getData[0], true);
    assert.equal(getData[1], revokedTime);
    assert.equal(getData[3], issuer);
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
