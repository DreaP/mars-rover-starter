const assert = require('assert');
const Command = require('../command.js');

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command(); 
      },
      {
        message: 'Command type required.'
      }
    );
  });

});

describe("Command class", function() {

   it("constructor sets command type", function(){
     const com1 = new Command ('NAME',32);
     assert.strictEqual(com1.commandType , 'NAME');
   });
});   
describe("Command Class", function(){

  it("constructor sets a value passed in as the 2nd argument", function(){
    const com1 = new Command ('NAME',32);
     assert.strictEqual(com1.value , 32);
  });
});