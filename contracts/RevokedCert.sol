// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;
pragma abicoder v2;

contract RevokedCert {
  mapping(address=>bool) public admins;
  uint public adminCount;

  struct RevokedInfo {
    bool isAcitve;
    uint revokedTime;
    bytes32 certType;
    string holder;
    string issuer;
  }

  mapping(string=>RevokedInfo) public revokedCerts;

  event RevokeCert(string indexed certNo, uint revokedTime, bytes32 certType, string holder, string issuer);

  constructor() public {
    admins[msg.sender] = true;
    adminCount = 1;
  }

  modifier onlyAdmin() {
    require(admins[msg.sender], "Not Admin");
    _;
  }

  function revoke(
    uint revokedTime,
    bytes32 certType,
    string memory certNo,
    string memory holder,
    string memory issuer
  ) public onlyAdmin {
    require(revokedCerts[certNo].isAcitve == false, "Certificate has been revoked");

    revokedCerts[certNo] = RevokedInfo(true, revokedTime, certType, holder, issuer);
    emit RevokeCert(certNo, revokedTime, certType, holder, issuer);
  }

  function getRevokedInfo(string memory certNo) view public returns (RevokedInfo memory) {
    return(revokedCerts[certNo]);
  }
}