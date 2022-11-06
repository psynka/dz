var divide = function(dividend, divisor) {
    i = 0
    if ((divisor < 0 & dividend > 0) | (divisor > 0 & dividend < 0))
    {
        minus = -1
    }
    else
    {
        minus = 1
    }
    let res = 0
    divisor = Math.abs(divisor)
    divide = Math.abs(dividend)
    while (res+divisor < dividend)
    {

        res += divisor
        i+= 1
    }
    if (minus < 0)
    {return Math.max(minus*i, minus  * 2**31)}
    else {return Math.min(i, 2**31 -1 )}

};

console.log(divide(10,3))