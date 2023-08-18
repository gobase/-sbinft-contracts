//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Context.sol";

/**
 * @title Admin 2.0 with additional features
 * - Enumerable admin list using function getAdminList()
 * - Can't remove the last admin
 * - Can't add already added admin
 *
 * @author SBINFT Co., Ltd.
 */
abstract contract AdminV2 is Context {
  event AdminAdded(address);
  event AdminRemoved(address);

  /**
   * @dev 管理者のマッピング。管理者でないならばfalseを返す。
   */
  mapping(address => bool) internal _admin;
  // List of Admins to be able to be enumerable
  address[] internal _adminList;

  /**
   * @dev デプロイ時にデプロイ者を管理者に追加する。
   */
  constructor() {
    _addAdmin(_msgSender());
  }

  /**
   * @dev 管理者を複数追加
   * @notice deprecated use addAdminBatch() function instead
   */
  function addAdmin(address[] calldata newAdmin) public virtual onlyAdmin {
    for (uint256 idx = 0; idx < newAdmin.length; idx++) {
      _addAdmin(newAdmin[idx]);
    }
  }

  /**
   * @dev 管理者を複数追加
   */
  function addAdminBatch(address[] calldata newAdmin) public virtual onlyAdmin {
    for (uint256 idx = 0; idx < newAdmin.length; idx++) {
      _addAdmin(newAdmin[idx]);
    }
  }

  /**
   * @dev 管理者を一人追加
   * 無制限 Internal function
   */
  function _addAdmin(address newAdmin) internal virtual {
    require(
      newAdmin != address(0),
      "Admin:addAdmin newAdmin is the zero address"
    );
    require(
      isAdmin(newAdmin) == false,
      "Admin:addAdmin newAdmin is already an admin"
    );

    _admin[newAdmin] = true;
    _adminList.push(newAdmin);

    emit AdminAdded(newAdmin);
  }

  /**
   * @dev 管理者を一人削除
   */
  function removeAdmin(address admin) public virtual onlyAdmin {
    require(
      _admin[admin],
      "Admin:removeAdmin trying to remove non existing Admin"
    );

    _removeAdmin(admin);
  }

  /**
   * @dev 管理者を一人削除
   * 無制限 Internal function
   */
  function _removeAdmin(address admin) internal virtual {
    require(
      _adminList.length > 1,
      "Admin:_removeAdmin can't remove last admin"
    );

    delete _admin[admin];

    // Find index to delete
    uint256 indexToDelete;
    for (uint256 idx = 0; idx < _adminList.length; idx++) {
      if (_adminList[idx] == admin) {
        indexToDelete = idx;
        break;
      }
    }

    // Swap last item to the index where item to be removed
    _adminList[indexToDelete] = _adminList[_adminList.length - 1];

    // pop the last index to fix length of array
    _adminList.pop();

    emit AdminRemoved(admin);
  }

  /**
   * @dev
   * Adminかどうかのチェック
   */
  function isAdmin(address checkAdmin) public view virtual returns (bool) {
    return _admin[checkAdmin];
  }

  /**
   * @dev Returns list of Admins
   */
  function getAdminList() external view virtual returns (address[] memory) {
    return _adminList;
  }

  /**
   * @dev Throws if called by any account other than Admin.
   */
  modifier onlyAdmin() {
    require(_admin[_msgSender()], "Admin:onlyAdmin caller is not an Admin");
    _;
  }
}
