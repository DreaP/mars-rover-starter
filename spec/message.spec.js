const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');
describe("Message Class", function(){

  it( "constructor sets name", function(){
    assert.throws(
      function() {
        new Message(); 
      },
      {
        message: 'Message type required.'
  });
});
});

describe("Message Class", function(){

  it("constructor sets name", function(){
    const com1 = new Command ('MOVE', 20);
    const mess1 = new Message ('NAME',com1);
     assert.strictEqual(mess1.name , 'NAME');
  });
});

describe("Message Class", function(){

  it("constructor sets name", function(){
    const com1 = new Command ('MOVE', 'MOVE');
    const mess1 = new Message ('MOVE');
    const commands = [com1,mess1];
     assert.strictEqual(mess1.name , 'MOVE');
  });
});




