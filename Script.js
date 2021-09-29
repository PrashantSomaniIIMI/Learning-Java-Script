number = Number(prompt("input a number"))
origin = 0
result = 0
while (origin <= number ) {
       result = result+(Math.pow(2,origin))
       origin = origin + 1
}
alert (result)