// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;
pragma abicoder v2;

contract Credential {
  mapping(address=>bool) public admins;
  uint public adminCount;

  struct Cert {
    string cipherData;
    mapping(string=>string) cipherKeys;
  }

  mapping(string=>Cert) public credentials;


  event SaveCredential(string indexed key, string cipherData, string[] pubKeys, string[] cipherKeys);

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

  /// @dev 存储加密证书
  /// @param key 证书持有者唯一标识
  /// @param cipherData 证书密文数据
  /// @param pubKeys 可解密查看证书的公钥列表
  /// @param cipherKeys 对称密钥密文列表，和pubKeys一一对应
  function saveCredential(
    string memory key,
    string memory cipherData,
    string[] memory pubKeys,
    string[] memory cipherKeys
  ) public onlyAdmin {
    require(pubKeys.length == cipherKeys.length, "pubKeys and cipherKeys must be the same length");
    credentials[key].cipherData = cipherData;
    for (uint256 index = 0; index < pubKeys.length; index++) {
      credentials[key].cipherKeys[pubKeys[index]] = cipherKeys[index];
    }
    emit SaveCredential(key, cipherData, pubKeys, cipherKeys);
  }

  function getCredential(string memory key, string memory pubKey) view public returns (string memory, string memory) {
    return(
      credentials[key].cipherData,
      credentials[key].cipherKeys[pubKey]
    );
  }

  function appendAuthorize(
    string memory key,
    string[] memory pubKeys,
    string[] memory cipherKeys
  ) public onlyAdmin {
    require(pubKeys.length == cipherKeys.length, "pubKeys and cipherKeys must be the same length");
    for (uint256 index = 0; index < pubKeys.length; index++) {
      credentials[key].cipherKeys[pubKeys[index]] = cipherKeys[index];
    }
    emit SaveCredential(key, credentials[key].cipherData, pubKeys, cipherKeys);
  }

}
