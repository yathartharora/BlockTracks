// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity ^0.4.25;

contract Firms{
    struct Register{
        string name;
        bytes4 id;
        address sender;
    }
    
    Register[] public register;
    mapping(bytes4 => bool) public isregistered;
    
    function createnewFirm(string name, bytes4 id) public{
        
        require(!isregistered[id]);
    
        Register memory newRegister = Register({
            name: name,
            id: id,
            sender: new Tracking(msg.sender)
        });
        
        register.push(newRegister);
        isregistered[id] = true;
    }
    
    function getDeployedContracts() public view returns(Register[]){
        return register;
    }

    function isRegistered(bytes4 id) public view returns(bool){
        return isregistered[id];
    }
}

contract Tracking {
    
    address manager;
    mapping(bytes32 => bool) registered; 
    
    modifier restricted(){
        require(manager==msg.sender);
        _;
    }
    constructor (address sender) public {
        manager = sender;
    }
    
    function Register(bytes32 hash) public restricted{
        require(!registered[hash]);
        registered[hash] = true;
        
    }
    
    function checkValidity(bytes32 hash) public view returns(bool){
        return registered[hash];
    }
}
