module.exports = function (plop) {
  plop.setHelper("getFolder", (n) => {
    const l = n.length;

    if (l === 3) {
      return `${n[0]}00-${n[0]}99`;
    } else if (l === 4) {
      return `${n[0]}${n[1]}00-${n[0]}${n[1]}99`;
    }

    return "0-99";
  });

  plop.setHelper("getDesc", (link) => {
    return link.split("/problems/")[1].slice(0, -1);
  });

  plop.setGenerator("new-problem", {
    description: "Add a problem",
    // Array of inquirer prompts
    // https://github.com/SBoudrias/Inquirer.js/#question
    prompts: [
      {
        name: "number",
        type: "input",
        message: "Serial number:",
      },
      {
        name: "link",
        type: "input",
        message: "Problem link:",
      },
      {
        name: "func",
        type: "input",
        message: "Function:",
      },
    ],
    // array of actions
    actions: [
      {
        type: "addMany",
        destination:
          plop.getPlopfilePath() +
          `/problems/{{getFolder number}}/{{number}}-{{getDesc link}}`,
        templateFiles: "./plop/*",
      },
    ],
  });
};
