//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Admin is Ownable {
  event AdminAdded(address);
  event AdminRemoved(address);

  //Permitted Admin map
  mapping(address => bool) private _admin;

  constructor() {
    _addAdmin(_msgSender());
  }

  /**
   * @dev
   * 複数Admin権限者を追加
   */
  function addMultiAdmin(address[] memory newAdmin) public onlyAdmin {
    for (uint256 idx = 0; idx < newAdmin.length; idx++) {
      addAdmin(newAdmin[idx]);
    }
  }

  /**
   * @dev
   * Admin権限者を追加
   */
  function addAdmin(address newAdmin) public onlyAdmin {
    require(
      newAdmin != address(0),
      "Admin:addAdmin newAdmin is the zero address"
    );

    _addAdmin(newAdmin);
  }

  /**
   * @dev
   * Admin権限者を追加
   * 無制限 Internal function
   */
  function _addAdmin(address newAdmin) internal {
    _admin[newAdmin] = true;
    emit AdminAdded(newAdmin);
  }

  /**
   * @dev
   * Admin権限者を削除
   */
  function removeAdmin(address admin) public onlyAdmin {
    require(
      _admin[admin],
      "Admin:removeAdmin trying to remove non existing Admin"
    );

    delete _admin[admin];
    emit AdminRemoved(admin);
  }

  /**
   * @dev
   * Adminかどうかのチェック
   */
  function isAdmin(address checkAdmin) public view returns (bool) {
    return _admin[checkAdmin];
  }

  /**
   * @dev Throws if called by any account other than Admin.
   */
  modifier onlyAdmin() {
    require(_admin[_msgSender()], "Admin:onlyAdmin caller is not an Admin");
    _;
  }
}
