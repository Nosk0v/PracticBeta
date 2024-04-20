// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract translation10116 {
  function BinaryToDecimalSix(uint16 decimalNumber) public pure returns(string memory) {
 require(decimalNumber >= 0 && decimalNumber <= 65535);
 string memory hexString = toHexString(decimalNumber);
 return hexString;
}


function toHexString(uint16 decimalNumber) internal pure returns (string memory) {
 bytes memory buffer = new bytes(4);
 uint256 mask = 15;

 for (uint256 i = 0; i < 4; i++) {
 uint256 digit = decimalNumber & mask;
 buffer[3 - i] = toHexChar(digit);
 decimalNumber >>= 4;
 }
return string(buffer);
}

function toHexChar(uint256 digit) internal pure returns (bytes1) {
 if (digit < 10) {
 return bytes1(uint8(digit) + 48);
 } else {
 return bytes1(uint8(digit - 10 + 65));
 }
}
}