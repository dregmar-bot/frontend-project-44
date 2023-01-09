export const askTheExpression = () => console.log('What is the result of the expression?');

export const takeExpression = (firOperand, secOperand, oper) => firOperand + oper + secOperand;

export const makeExpression = (firOperand, secOperand, oper) => {
  let result = 0;
  const handleExpression = () => {
    if (oper === '+') {
      result = firOperand + secOperand;
    } else if (oper === '-') {
      result = firOperand - secOperand;
    } else if (oper === '*') {
      result = firOperand * secOperand;
    }
  };
  handleExpression();
  return result.toString();
};
