const {NOT_DIVIDABLE_BY_0, WRONG_INPUT} = require('./errors');
const calculate = (strInput) => {
  if(strInput.includes('/0')) return NOT_DIVIDABLE_BY_0
  const checkResult = strInput.includes('--') ? strInput.replace('--','+') : strInput
  try {
    let res;
    if(eval(checkResult)===0) res = 0
    else res = eval(checkResult) || ""  + ""
    if(Math.round(res) !== res) {
      res = res.toFixed(2);
      return String(res);
    }
    return String(res);
  } catch (e) {
    return WRONG_INPUT
  }
}
module.exports = calculate
