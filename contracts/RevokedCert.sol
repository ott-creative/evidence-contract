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
    string issuer;
  }

  mapping(string=>RevokedInfo) public revokedCerts;

  event RevokeCert(string indexed certNo, uint revokedTime, bytes32 certType, string issuer);

  constructor() public {
    admins[msg.sender] = true;
    adminCount = 1;
  }

  modifier onlyAdmin() {
    require(admins[msg.sender], "Not Admin");
    _;
  }

  /// @notice 获取撤销证书信息
  /// @dev 同一证书只能撤销一次
  /// @param revokedTime 撤销时间，时间戳形式
  /// @param certType 证书类型
  /// @param certNo 证书唯一标识
  /// @param issuer 发行者did
  function revoke(
    uint revokedTime,
    bytes32 certType,
    string memory certNo,
    string memory issuer
  ) public onlyAdmin {
    require(revokedCerts[certNo].isAcitve == false, "Certificate has been revoked");

    revokedCerts[certNo] = RevokedInfo(true, revokedTime, certType, issuer);
    emit RevokeCert(certNo, revokedTime, certType, issuer);
  }

  /**
  * @notice 获取撤销证书信息
  * @param certNo 证书唯一标识
  * @return RevokedInfo 该数组有以下元素：
              - isAcitve：撤销是否有效；
              - revokedTime 撤销时间；
              - certType：证书类型；
              - issuer：发行者did；
  */
  function getRevokedInfo(string memory certNo) view public returns (RevokedInfo memory) {
    return(revokedCerts[certNo]);
  }
}