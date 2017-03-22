/*
[x] denotes zero or one occurrences of x.

{x} denotes zero or more occurrences of x.

(x | y) means one of either x or y.
*/

Language = __ args:(DefDecl)*

DefDecl = id:Identifier _ ":" _ defn:Definition __ { return{id: id, defn: defn}; }

Definition = rules:(_ Rule _)* { return rules.map(rule => rule[1]); };

Rule = Identifier /
"[" _ defn:Definition _ "]" { return {type: "?", defn: defn}; } /
"{" _ defn:Definition _ "}" { return {type: "*", defn: defn}; } /
"(" _ defn1:Definition _ "|" _ defn2:Definition _ ")"  { return {type: "either", defn1: defn, defn2: defn}; } /
"(" _ defn:Definition _ ")" /
Character;

Identifier = x:([a-zA-Z0-9]+) { return x.join(""); };

Character = [.;@*,<>=?&^":|+-/%!()~] / "[]";

Integer "integer"
  = [0-9]+ { return parseInt(text(), 10); }

_ "whitespace"
  = ([ \t] / "\n ")* { return; }

__ = [ \t\n]*;

