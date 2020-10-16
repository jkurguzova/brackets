module.exports = function check(str, bracketsConfig) {
if (str.length <= 1)
return false;
let matchingOpeningBracket;
let ch;
let stack = [];
bracketsConfig = bracketsConfig.reduce((acc, val) => acc.concat(val), []);
let openingBrackets = bracketsConfig.filter((e, i) => !(i % 2));
let closingBrackets = bracketsConfig.filter((e, i) => (i % 2));
for (let i = 0; i < str.length; i++) {
    ch = str[i];
    if (closingBrackets.indexOf(ch) > -1 && closingBrackets.indexOf(ch) != openingBrackets.indexOf(ch)) {
        matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
        if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
            return false;}
    } else if (closingBrackets.indexOf(ch) > -1 && closingBrackets.indexOf(ch) == openingBrackets.indexOf(ch)) {
        if (stack.indexOf(ch) > -1) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
            if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
                return false;}
        } else { stack.push(ch); }
    } else {
        stack.push(ch);
    }
};

return (stack.length == 0);
}

