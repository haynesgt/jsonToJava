let fs = require("fs");
let txt = fs.readFileSync(process.argv[2]);

let obj = JSON.parse(txt, null, 2);

console.log(
  obj.rules.map(
    function(rule) {
      return rule.type + ":\n"
        +
          (
           rule.rules.length > 0
             ?
               "    "
             :
               ""
          )
        +
          rule.rules.join("\n    ")
        +
          "\n";
    }
  ).join("\n")
);
