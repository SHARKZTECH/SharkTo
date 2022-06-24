//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions{
    uint256 transactionCounter;

    event Transfer(address from,address receiver,uint amount,string message,uint256 timeStamp,string keyword);

    struct TransferSruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timeStamp;
        string keyword;
    }

    TransferSruct[] transactions;

    function addToBlockchain(address payable receiver,uint amount,string memory message,string memory keyword) public{
        transactionCounter ++;
        transactions.push(TransferSruct(msg.sender,receiver,amount,message,block.timestamp,keyword));   
        emit Transfer(msg.sender,receiver,amount,message,block.timestamp,keyword);    
    }
     function getAllTransactions() public view returns(TransferSruct[] memory){
         return transactions;        
    }
     function getTransactinCount() public view returns(uint256){
         return transactionCounter;        
    }


}