var expect = require('chai').expect;
var assert = require('chai').assert;
var dLList = require('../lib/doublelinklist.js');
var dll = new dLList
dll.insert(2);
dll.insert(5);
dll.insert(45);
dll.insert(91);
dll.insert(180);
var dllStr = dll.toString;
console.log('this is the list start for the tests: ')

describe('Double Linked List HERE:', function(){
  it('should be able to add a node to the head', function(){
    // console.log(dll);
    // console.log(dll.toString);
    console.log(dll.toString());

    expect(dll.toString()).to.include('180');
    dll.remove(180);
    expect(dll.toString()).to.not.include('180');


    // var newdll = dll.insert(998);
    // console.log(newdll);
    // assert((dll.head()) == 180, "this is the true");
  });

  it('should be able to remove any element from list', function(){
    dll.remove(180);
    dll.remove(2);
    var newdll = dll.insert(998);
    expect(dll).to.not.include('2');
    expect(dll).not.to.include('180');
    dllStr = dll;
    console.log(dllStr.slice(0, 3));
    expect(dll.slice(0, 3)).to.include('998');
    //remove head
    //expect(list.head).not.to.equal(val);
    //remove middle of list somewhere
    //expect(list.val).not.to.equal(val);
    //
  });

  it('should be able to find any value and return true/false', function(){
    assert(dll.search(91), "Test isn't working");
    expect(dll.search(180)).to.equal(false);
    assert(!dll.search(180), "This is the false message?");
    expect(dll.search(91)).to.equal(true);

    //expect(list.search(nonvalue)).to.equal(false);
  });

  it('should be able to print a string with the toString method', function(){
    dll.insert(181);
    dll.insert(675);
    console.log(dll.toString() + ' RANDOM STRING');
    expect(dll).to.be.a('string');
    expect(dll).to.include('675, 181, 998, 91, 45, 5');
    expect(dll).to.not.include('187, 91, 45, 5, 2');
  });
})
