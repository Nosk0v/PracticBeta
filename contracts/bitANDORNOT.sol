// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract bitANDORNOT {
  function AndOrNot(uint8 a, uint8 b, bytes32 operation) public pure returns (uint8) {
        if (operation == "AND") {
            return a & b; // Побитовое AND
        } else if (operation == "OR") {
            return a | b; // Побитовое OR
        } else if (operation == "NOT") {
            return uint8(~a); // Побитовое NOT
        }
        revert("Invalid operation");
    }
}
