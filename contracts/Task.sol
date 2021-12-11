pragma solidity >=0.4.25 <0.7.0;

contract Task{
  enum Status { ToDo, InProgress, Done}
  Status status;
  address addr;
  int public difficulty;
  string public description;
  address User;
  constructor(int diff, string memory desc,address owner) public {
    difficulty = diff;
    description = desc;
    User = owner;
  }
}