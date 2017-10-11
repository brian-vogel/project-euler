import * as problems from './problems/problems-index';

const title = 'Run time';
console.time(title)
for(let func in problems) {
  console.log(func + ':', problems[func]());
}
console.timeEnd(title)
