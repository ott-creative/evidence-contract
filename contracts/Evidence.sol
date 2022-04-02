// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract Evidence {
  mapping(address=>bool) public admins;
  uint public adminCount;
  mapping(string=>string) public evidences;

  event SaveEvidence(string indexed key, string data);

  constructor() public {
    admins[msg.sender] = true;
    adminCount = 1;
  }

  modifier onlyAdmin() {
    require(admins[msg.sender], "Not Admin");
    _;
  }

  function setAdmin(address admin, bool isActive) public onlyAdmin {
    if (admins[admin] != isActive) {
      if (isActive) {
        adminCount += 1;
      } else {
        adminCount -= 1;
      }
    }
    require(adminCount!=0, "Please keep at least one admin");
    admins[admin] = isActive;
  }

  function saveEvidence(string memory key, string memory data) public onlyAdmin {
    evidences[key] = data;
    emit SaveEvidence(key, data);
  }

  function getEvidence(string memory key) view public returns (string memory) {
    return evidences[key];
  }
}
