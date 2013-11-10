function foo(name) {
   this.name = name;
};

foo.prototype.move = function() {
    console.log(this.name+' is moving');
};
var too = {
    fname: 'gayatri',
    nm :function(name) {
       fname= name;
       },
    move: function() {
        console.log(this.fname+ ' is walking');
    }
};

function boo() {
   
}
boo.prototype = new foo('Abhishek');
boo.prototype.too = too;
var b = new boo();
b.move();
b.too.move();
console.log(b.test);
