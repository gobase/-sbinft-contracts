//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../access/AdminUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract AdminUpgradeableMock is  UUPSUpgradeable,AdminUpgradeable {
    function __AdminUpgradeableMock_init() external initializer {
        AdminUpgradeable.__Admin_init();
    }

    function _authorizeUpgrade(address _newImplementation)
    internal
    virtual
    override
    onlyAdmin
  {}
}
