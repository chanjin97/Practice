console.log(1);
console.log(2);
function fn1(a, b, callback) {
  console.log(3);

  callback();
}

function fn2() {
  console.log(4);
}

fn2();
