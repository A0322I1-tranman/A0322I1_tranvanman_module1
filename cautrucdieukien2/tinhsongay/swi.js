function tet2() {
    var number = Number(document.getElementById("txtmonth").value);
    switch (number) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("Tet").innerHTML= "Tháng" + number + "có 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("Tet").innerHTML= "Tháng" + number + "có 30 ngày";
            break;
        case 2:
            document.getElementById("Tet").innerHTML= "Tháng" + number + "có 28 hoặc 29 ngày";
            break;
        default:
            document.getElementById("Tet").innerHTML= " Bạn nhập sai ";
    }
}
function tet1() {
    var number1 = Number(document.getElementById("txtmonth1").value);
    switch (number1) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("Tet1").innerHTML= "Tháng" + number1 + "có 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("Tet1").innerHTML= "Tháng" + number1 + "có 30 ngày";
            break;
        case 2:
            document.getElementById("Tet1").innerHTML= "Tháng" + number1 + "có 28 hoặc 29 ngày";
            break;
        default:
            document.getElementById("Tet1").innerHTML= " Bạn nhập sai ";
    }
}
