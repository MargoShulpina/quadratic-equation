module.exports = function solveEquation(equation) {
  let arr = equation.replace("* x^2", ",").replace("* x",",").replace(/\ /g,"").split(",");
  let a = Number(arr[0]);
  let b = Number(arr[1]);
  let c = Number(arr[2]);
  let x1 = (- b - Math.sqrt(b * b - 4 * a * c))/(2 * a);
  let x2= (- b + Math.sqrt(b * b - 4 * a * c))/(2 * a);
        
  return (x1<x2) 
    ? [Math.round(x1), Math.round(x2)] 
    : [Math.round(x2), Math.round(x1)];
}
