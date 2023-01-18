const monthName = function (selectMonth) {
    monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthList[selectMonth.getMonth()];
}
console.log(monthName(new Date("08/03/2014")));