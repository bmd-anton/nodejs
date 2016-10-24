const http = require('http');
const assert = require('assert');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

function add (a, b) {
  return a + b;
}

// define a simple function with callback(err, value)
function sayHello(name, callback) {
  var error = false;
  var str   = "Hello "+name;
  callback(error, str);
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  var expected = add(1,2);
  var list1 = [1, 2, 3, 4, 5];
  var list2 = [1, 2, 3, 4, 5];
  var person1 = { "name":"john", "age":"21" };
  var person2 = { "name":"john", "age":"21" };

  assert( expected == 3, 'one plus two is three');
  assert.ok( expected == 3, 'one plus two is three');
  assert.equal( expected, '3', 'one plus two is three');
  assert.notEqual( expected, 4, 'one plus two is not three');
  assert.strictEqual( expected, 3, 'one plus two is three(strict)');
  assert.notStrictEqual( expected, 4, 'one plus two is three(strict)');
  assert.deepEqual(person1, person2, 'two persons are identical');
  assert.notDeepEqual(person1, list2, 'two persons are not identical');
  assert.throws(
    function() {
      //console.log(adds(3, 5));
      console.log("Nothing to see here throws");
      throw new Error("Wrong value");
    },Error);
  assert.doesNotThrow(
    function() {
      console.log("Nothing to see here doesNotThrow");
    },Error);
  // use the function
  sayHello('World', function(err, value){
    assert.ifError(err);
    assert.equal(value, "Hello World", 'value is Hello World');
  })
  //assert.fail(21, 42, 'Test Failed', '###')
  //assert(true);  // OK
  //assert(1);     // OK
  //assert(false);
  //throws "AssertionError: false == true"
  //assert(0);
  // throws "AssertionError: 0 == true"
  //assert(false, 'it\'s false');
//  // throws "AssertionError: it's false"
});
