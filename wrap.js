const wrap = (line, maxLen) => {
  let solution = "";
  let currentLine = '';
  let currentLen = currentLine.length;
  let overMaxLen = line.split(" ").some(element => {
    return element.length > maxLen;
    // solution = "too long!";
  });
  console.log(overMaxLen);
  line.split(" ").forEach(element => {
    debugger;
    if ((currentLine.length + element.length) < maxLen) {
      currentLine += element + ' ';
    } else {
      solution += `${currentLine.substring(0, currentLine.length - 1)}\n`;
      currentLine = '';
    }
  });
  // line.slice(0, maxLen)
  return overMaxLen ? "too long!" : solution;
};

wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)

module.exports = wrap;
