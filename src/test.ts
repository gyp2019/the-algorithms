function sum(x, y) {
  return x + y;
}

function sum2(x: number, y: number): number {
  return x + y;
}

function sum3({ x, y }) {
  return x + y;
}

function sum4({ x, y }: { x: number, y: number }): number {
  return x + y;
}

function sum5({ x: val1, y: val2 }) {
  return val1 + val2;
}

function sum6({ x: val1, y: val2 }: { x: number, y: number }): number {
  return val1 + val2;
}

// sum61({ x: 1, a: 2, b: 3 })
function sum61({ x, ...y }) {
  return x + y.a + y.b;
}

// sum61({ x: 1, a: 2, b: 3 })
function sum62({ x, ...y }: { x: number, a: number, b: number }): number {
  return x + y.a + y.b;
}

function sum63({ x, y = 10 }) {
  return x + y;
}

function sum64({ x, y = 10 }: { x: number, y: number }): number {
  return x + y;
}

function sum65({ x, y = 10, ...z }) {
  return x + y + z.a + z.b;
}

function sum66({ x, y = 10, ...z }: { x: number, y: number, a: number, b: number }): number {
  return x + y + z.a + z.b;
}


function sum7(x, y = 10) {
  return x + y;
}

function sum8(x: number, y: number = 10): number {
  return x + y;
}

function sum9({ x, y = 10 }) {
  return x + y;
}

function sum10({ x, y = 10 }: { x: number, y: number }): number {
  return x + y;
}

// sum11([1, 2])
function sum11(arr) {
  return arr[0] + arr[1];
}

function sum12(arr: number[]): number {
  return arr[0] + arr[1];
}

// sum13(1,2,3,4);
// sum12(...arr);
function sum13(x, ...arr) {
  return x + arr[0];
}

function sum14(x: number, ...arr: number[]): number {
  return x + arr[0];
}

// sum15([1, 2])
function sum15([x, y]) {
  return x + y;
}

function sum16([x, y]: number[]): number {
  return x + y;
}

// sum15([1, 2])
// sum15([1])
function sum17([x, y = 10]) {
  return x + y;
}

function sum18([x, y = 10]: number[]): number {
  return x + y;
}
