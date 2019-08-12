const cisDept = ['Mike', 'Clayton', 'Terrill', 'Danny', 'Jennifer'];
const dmpDept = ['Raymond', 'Cynthia', 'Bryan'];
let itDiv = cisDept.concat(dmpDept);
console.log(itDiv);

itDiv = dmpDept.concat(cisDept);
console.log(itDiv);

itDiv = [...cisDept, ...dmpDept];
console.log(itDiv);

itDiv = [...dmpDept, ...cisDept];
console.log(itDiv);


const itDiv2 = ['Mike', 'Clayton', 'Terrill', 'Raymond', 'Cynthia', 'Danny', 'Jennifer'];
const dmpDept2 = itDiv2.splice(3, 3);
const cisDept2 = itDiv2;
console.log(dmpDept2);
console.log(cisDept2);
