pragma solidity >=0.4.25 <0.7.0;
import "./Task.sol";

contract Board{
  Task[] task;

  function addTask(int diff,string memory desc) public returns (bool allisgood){
    task.push(new Task(diff,desc,msg.sender));
    return true;
  }
  function viewTask() public view returns (string memory) {
    string memory list = "";
    for (uint i = 0; i < task.length; i++) {
        list = string(abi.encodePacked(list, task[i].description, ";"));
    }
    return list;
  }
  function getAllTask() public view returns(Task[] memory){
    return task;
  }
  function getTask(uint id) public returns(Task){
    return task[id];
  }
  function nbrTask() public view returns (uint){
    return task.length;
  }
 }