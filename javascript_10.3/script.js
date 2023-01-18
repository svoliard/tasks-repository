function min_date(allDates) {
    let minDate = allDates[0],
        minDateObj = new Date(allDates[0]);
    allDates.forEach(function (date, index) {
        if (new Date(date) < minDateObj) {
            minDate = date;
            minDateObj = new Date(date);
        }
    });
    return minDate;
}
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));