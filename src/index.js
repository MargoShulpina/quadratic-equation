module.exports = function solveEquation(equation) {
  let num = equation.replace(" * x^2 ",",")
        let num2 = num.replace(" * x",",")
        let num3 = num2.replace(/\ /g,"")
        var arr = num3.split(",")
        var a = Number(arr[0])
        var b = Number(arr[1])
        var c = Number(arr[2])
        var d = (- b - Math.sqrt(b * b - 4 * a * c))/(2 * a)
        var e = (- b + Math.sqrt(b * b - 4 * a * c))/(2 * a)
        
       if (d<e){
        return [Math.round(d), Math.round(e)];}
        else{
         return [Math.round(e), Math.round(d)]}
      
    

}
