
function opera(x) {
   let  value = document.getElementById("screen").innerText;
    switch (x) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case "+":
            value = value + x;
            break;
        case "-":
             value = value + x;
            break;
        case "*":
            value = value + x;
            break;
        case "/":
            value = value + x;
            break;
        case "=":
            value = eval(value);
            break;
        case "C":
            value=document.getElementById("screen").innerText = "";
            break;
    }
    document.getElementById("screen").innerText = value;
}

