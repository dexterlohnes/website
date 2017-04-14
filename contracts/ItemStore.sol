pragma solidity ^0.4.0;

import "./Item.sol";

contract ItemStore {
    enum ItemStatus { EMA, EMC, EMD, EMI, EMH }

    string test;
    mapping(string => Item) items;
    address owner;

    function ItemStore(){
        owner = msg.sender;
    }

    function getItem(string s10) returns (Item itemAddress) {
        return items[s10];
    }

    function addItem(string s10) {
        items[s10] = new Item(s10);
    }
}
