const AsyncWorker = require("./code");

async function testAsyncWorker() {
  const start = Date.now();

  const createTask = (timeout, error) => {
    return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject(error);
        } else {
          resolve(timeout);
        }
      }, timeout);
    });
  };

  const worker = new AsyncWorker(2);

  const tasks = [
    {
      status: "fulfilled",
      value: 100,
      idealCost: 100,
      task: worker.exec(createTask(100)),
    },
    {
      status: "fulfilled",
      value: 201,
      idealCost: 200,
      task: worker.exec(createTask(201)),
    },
    {
      status: "rejected",
      reason: "REJECTED",
      idealCost: 300,
      task: worker.exec(createTask(202, "REJECTED")),
    },
    {
      status: "fulfilled",
      value: 203,
      idealCost: 400,
      task: worker.exec(createTask(203)),
    },
    {
      status: "fulfilled",
      value: 300,
      idealCost: 600,
      task: worker.exec(createTask(300)),
    },
  ];

  for (let index = 0; index < tasks.length; index++) {
    const t = tasks[index];

    let result;

    try {
      const value = await t.task;
      result = { status: "fulfilled", value };
    } catch (e) {
      result = { status: "rejected", reason: e };
    }

    const realCost = Date.now() - start;
    const idealCost = (realCost - (realCost % 100)) | 0;

    if (idealCost !== t.idealCost) {
      throw new Error(
        `unexpected time cost: ${idealCost}, expected is ${t.idealCost} for ${index}`
      );
    }

    if (result.status !== t.status) {
      throw new Error(`unexpected status ${result.status} for ${index}`);
    }

    if (
      t.status === "fulfilled" &&
        result.status === "fulfilled" &&
        result.value !== t.value
    ) {
      throw new Error(
        `unexpected fulfilled value ${result.value}, expected is ${t.value} for ${index}`
      );
    }

    if (
      t.status === "rejected" &&
        result.status === "rejected" &&
        result.reason !== t.reason
    ) {
      throw new Error(
        `unexpected rejected reason ${result.reason}, expected is ${t.reason} for ${index}`
      );
    }
  }
}



(async function() {
  console.log("Testing...");
  try {
    await testAsyncWorker();
    console.log("PASSED!");
  } catch (e) {
    console.log(e.stack || e);
  }

}());
