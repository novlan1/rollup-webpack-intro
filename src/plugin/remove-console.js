export default function removeConsole() {
  return {
    name: 'remove-console',
    transform(code, id) {
      const Reg = /console\.log\(.*\)/g;
      return code.replace(Reg, '');
    },
  };
}
