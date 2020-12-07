export function getClosestDataId(el) {
  return el.closest('[data-id]').dataset.id
}

export function getClassName(parentClassName, ...args) {
  if (args.length >= 2) {
    const classes = args.map(cN => (parentClassName + '_' + cN));
    return classes.join(' ');
  }
  if (args.length === 1) {
    return parentClassName + '__' + args[0];
  }
  return parentClassName
}