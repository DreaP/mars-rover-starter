const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');
const Rover = require('../rover.js');

describe("Rover Class", function(){

//test 7 

  it("constructor sets position and default values for mode and generatorWatts", function(){
    let rover = new Rover (3000);
    assert.strictEqual(rover.position , 3000);
    assert.strictEqual(rover.mode , 'NORMAL');
    assert.strictEqual(rover.generatorWatts , 110);
  });

  //test 8 

  it("response returned by receiveMessage contains name of message", function(){
    let commands = [new Command('STATUS CHECK'), new 
    Command('MODE_CHANGE', 'LOW_POWER')]
     let message = new Message('TEST 8', commands);
     let rover = new Rover (3000);
     let actual = rover.receiveMessage(message).message;
    assert.strictEqual(actual, message.name);
  });

  //test 9

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let commands = [new Command('STATUS CHECK'), new 
    Command('MODE_CHANGE', 'LOW_POWER')]
     let message = new Message('TEST 9', commands);
     let rover = new Rover (3000);
     let actual = rover.receiveMessage(message).message;
    assert.strictEqual(actual, message.name);
  });

  //test 10

   it("responds correctly to status check command", function(){
     let commands = [new Command('STATUS_CHECK')]; 
     let message = new Message('TEST 10', commands);
     let rover = new Rover (3000);
     let actual = rover.receiveMessage(message).results[0];
    assert.deepStrictEqual(actual,{completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 3000}});
    
   });

   //Test 11

   it("responds correctly to mode change command", function(){
     let commands = [new Command('MODE_CHANGE', 'NORMAL')];
     let message = new Message('Test 11', commands);
     let rover = new Rover (3000);
     let actual = rover.receiveMessage(message).results[0];
     assert.deepStrictEqual(actual,{completed: true});
   })

   //Test 12

   it("responds with false completed value when attempting to move in LOW_POWER mode" , function(){
     let commands = [new Command('MODE_CHANGE', 'LOW_POWER'),new Command ('MOVE', 3)];
     let message = new Message('Test 12', commands);
     let rover = new Rover (3000);
     let actual = rover.receiveMessage(message).results[1];
     assert.deepStrictEqual(actual,{completed: false});
   })

   it("responds with position for move command" , function(){
     let commands = [new Command ('MOVE', 3), new Command ('STATUS_CHECK')];
     let message = new Message('Test 13', commands);
     let rover = new Rover (3000);
     let actual = rover.receiveMessage(message).results[1].roverStatus.position;
     assert.deepStrictEqual(actual,3);
   })

  });