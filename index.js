const URLify = (str, len) => {
  let countSpaces = 0
  for (let i = 0; i < len; i++) {
    if (str[i] === " ") {
      countSpaces++;
    }
  }
  let newStr = str.trim().replace(/\s/g, "%20");
  let realStr = newStr.slice(0,len+countSpaces*2)

  return realStr;
};

module.exports = URLify;

