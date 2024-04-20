// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract translation8110 {
  function octal(uint octalnumber) public pure returns(uint){
      uint decimalnumber =0;
      uint base = 1 ;
      uint temp = octalnumber;

      while(temp > 0)
      {
        uint lastdigit = temp %10;
        temp = temp /10;
        decimalnumber+=lastdigit * base;
        base = base * 8;
      }
      return decimalnumber;
  } 
}
