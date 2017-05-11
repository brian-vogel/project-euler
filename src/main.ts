import * as problems from './problems/problems-index';

for(let func in problems) {
  console.log(func + ':', problems[func]());
}
