let fs = require("fs");
let txt = fs.readFileSync(process.argv[2]);

let lines = txt.toString().split("\n");

let obj = {
  rules:
    lines.reduce(
      function(accum, line) {
        if (line.length == 0) {
          accum.push(false);
        } else if (line[0] !== " ") {
          accum[accum.length - 1] = {
            type: line.match("[^: ]*").toString(),
            rules: []
          };
        } else {
          accum[accum.length - 1]
            .rules.push(line.trim());
        }
        return accum;
      },
      [false]
    ).filter(function(x) { return x; })
};

console.log(JSON.stringify(obj, null, 2));
