/**
 * 实现一个异步任务执行器 AsyncWorker
 *
 * 此 AsyncWorker: 最多只能同时执行 capacity
 * 个异步任务. 若正在执行的任务数达到 capacity,
 * 则新加入的任务需要等待其中一个正在执行的任务完
 * 成后才能被执行.
 */
/*
class AsyncWorker {
  constructor(capacity) {}
  exec(task) {}
}
*/

class AsyncWorker {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = []; // 待执行
    this.run = []; // 正在执行
  }

  exec(task) {
    this.queue.push(task);
    return this.schedule();
  }

  schedule() {
    // 没得到限制，则从 queue 中取一个任务出来执行
    if (this.run.length < this.capacity && this.queue.length) {
      const task = this.queue.shift();

      // 当 task 完成，成功失败都要把当前的 promise 从 run 中移除
      const promise = task()
            .then((val) => {
              this.run.splice(this.run.indexOf(promise), 1);
              return val;
            }).catch((error) => {
              this.run.splice(this.run.indexOf(promise), 1);
              // 如果 task 执行是 reject 返回时也是一个 reject 状态的 promise
              return Promise.reject(error);
            });

      this.run.push(promise);

      return promise;
    } else {
      // run 达到限制时，run 中任意一个 promise 完成，则执行下一个 task，注意 reject 也要处理
      return Promise.race(this.run).then(() => this.schedule(), () => this.schedule());
    }
  }
}

module.exports = AsyncWorker;
