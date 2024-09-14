let  num_1 = Number(prompt("Enter your 1st Number"));
let  num_2 = Number(prompt("Enter your 2nd Number"));
let operator = prompt("Choose Your  basic operation");

if(num_1 == "0" && num_2 == "0"){
  alert("please enter values")
}else if (isNaN(num_1) || isNaN(num_2)) {
    alert("Please enter numeric values for both numbers")}
    else if(operator !== "+" && "-" && "*" && "/"){
        alert("Please enter (+,-,*,/)")
    }
if(operator == "+"){
    alert("result: " + (num_1+num_2))
 
}else if(operator == "-"){
    alert("result: " + num_1-num_2)

}else if(operator == "*"){
    alert("result: " + num_1*num_2)

}else if(operator == "/"){
    alert("result: " + num_1/num_2)
}