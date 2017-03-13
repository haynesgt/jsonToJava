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
          rule.rules.map(
            function(rule) {
              return rule
                .replace(
                  /(\.|\*|;|:|@|<|>|\?|\&|=|,|\^|\%|\||\!|-|\+|\/|\[\])+/g,
                  function(match) {
                    return "\"" + match + "\"";
                  }
                )
                .replace(
                  /([^a-zA-Z]|^)([a-z][a-zA-Z]*)/g,
                  function(match, p1, p2, offset, string) {
                    return p1 + "\"" + p2 + "\"";
                  }
                )
                .replace(
                  /\[\([^\]]\+\)\]/,
                  function(match, p1, offset, string) {
                    return p1 + "*";
                  }
                );
            }
          ).join("\n    ")
        +
          "\n";
    }
  ).join("\n")
);
