function matchPattern(inputLine, pattern) {
  if (pattern.length === 1) {
    return inputLine.includes(pattern);
  } else if (pattern === "\\d") {
    return /\d/.test(inputLine);
  } else if (pattern === "\\w") {
    return /\w/.test(inputLine);
  } else if (pattern[0] === "[" && pattern[pattern.length - 1] === "]") {
    let op;
    if (pattern[1] === "^") {
      op = !pattern.slice(2, pattern.length - 1).includes(inputLine);
    } else {
      op = pattern.slice(1, pattern.length - 1).includes(inputLine);
    }
    return op;
  } else {
    throw new Error(`Unhandled pattern ${pattern}`);
  }
}

function main() {
  const pattern = process.argv[3];
  // const inputLine = require("fs").readFileSync(0, "utf-8").trim();
  const inputLine = "banana";
  if (process.argv[2] !== "-E") {
    process.exit(1);
  }

  if (matchPattern(inputLine, pattern)) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

main();
