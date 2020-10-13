module.exports = function check(str, bracketsConfig) {
  const strArr = str.split('');
  strArr.forEach(element => {
    if (bracketsConfig.indexOf(element) < 0) {
      return false
    }
  });

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
        if (strArr[i] === bracketsConfig[j][0] && strArr[i+1] === bracketsConfig[j][1]) {
            strArr.splice(i, 2)
            i = -1;
            break
        }
    }
      
  }

  if (strArr.length === 0) {
      return true
  }
  return false
}
