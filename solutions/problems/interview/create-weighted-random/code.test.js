const createWeightedRandom = require("./code");

function assert(value, message) {
  if (value !== true) {
    throw new Error(message);
  }
}

function testCreateWeightedRandom() {
  const input = [4, 2, 1, 3];
  const sampling = createWeightedRandom(input);
  const count = [0, 0, 0, 0];

  for (let i = 0; i < 10000; i++) {
    count[sampling()]++;
  }

  const rates = count.map((i) => Math.round(i / 1000));

  assert(
    JSON.stringify(rates) === "[4,2,1,3]",
    `${rates} is not same to ${input}`
  );
}

(async function(){
  try {
    console.log("Testing ...");
    await testCreateWeightedRandom();
    console.log("PASSED!");
  } catch (e) {
    console.log(e.stack || e);
  }
}());
