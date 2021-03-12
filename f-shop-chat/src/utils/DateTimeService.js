class DateService {
    formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var days = date.getDate();
        var months = date.getMonth()+1;
        // var ampm = hours >= 12 ? 'pm' : 'AM';
        // hours = hours % 12;
        // hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        days = days < 10 ? '0'+days : days;
        months = months < 10 < 10 ? '0'+months : months;
        // var strTime = hours + ':' + minutes + ' ' + ampm;
        var strTime = hours < 10 ? '0'+hours + ':' + minutes : hours + ':' + minutes;
        return days + "/" + months + "/" + date.getFullYear() + " " + strTime;
    }

    convert(str) {
        if (str === '' || str === null || str === undefined) return '';
        var date = new Date(str);
        return this.formatDate(date);
    }
}
export default new DateService()