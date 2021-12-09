pragma solidity >=0.4.25 <0.7.0;
import "./Task.sol";

contract Board{
  Task[] task = new Task[](50);

  function addTask(int diff,string memory desc) public returns (bool allisgood){
    task.push(new Task(diff,desc,msg.sender));
    return true;
  }
}