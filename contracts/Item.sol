pragma solidity ^0.4.0;

contract Item {
    enum ItemStatus { EMA, EMC, EMD, EMI, EMH }

    string test;
    string s10;
    ItemStatus status;

    function Item(string code){
        s10 = code;
        status = ItemStatus.EMA;
    }

    function setS10(string code){
        s10 = code;
    }

    function getS10(string code) returns (string s10){
        return s10;
    }

    function setStatus(uint statusCode) {
        status = ItemStatus(statusCode);
    }

    function getStatus() returns (ItemStatus statusCode) {
        return status;
    }
}
