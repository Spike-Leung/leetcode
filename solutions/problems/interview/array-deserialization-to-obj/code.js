function deserialization(targets) {
  const _top = Symbol("top");
  const _empty = Symbol("empty");
  const _endKey = Symbol("end");

  Array.prototype[_top] = function() {
    return this.length > 0 ? this[this.length - 1] : undefined;
  };

  Array.prototype[_empty] = function() {
    return this.length === 0;
  };

  targets = targets.concat([-1, _endKey]);

  const levelStack = [{ level: -2 }];
  const objStack = [Object.create(null)];

  for (let i = 0; i < targets.length; i += 2) {
    const level = targets[i];
    const key = targets[i + 1];

    // 当 levelTop.level >= level 时，要一直出栈，找到匹配到 level，所以得用 while
    while (!levelStack[_empty]()) {
      const levelTop = levelStack[_top]();

      if (levelTop.level >= level) {
        const { key } = levelStack.pop();
        const objTop = objStack.pop();

        if (Object.keys(objTop).length === 0) {
          objStack[_top]()[key] = null;
        }
      } else {
        // 每次入栈后，进入下一个 for 循环，判断下一组数据
        if (key === _endKey) break;
        const parent = objStack[_top]();
        parent[key] = Object.create(null);
        objStack.push(parent[key]);
        levelStack.push({ level, key });
        break;
      }
    }
  }

  return objStack[0];
}

module.exports = deserialization;
