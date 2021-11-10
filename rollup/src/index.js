import ddd from 'test-module-2';
import VirtualModule from 'virtual-module';

const arrowFn = () => {
  console.log('1');
};

console.log('ddd', ddd);
console.log('VirtualModule', VirtualModule);

arrowFn();

export default {
  version: __VERSION__,
  arrowFn,
};
