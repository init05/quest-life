const formatDate = (date : Date, currentDate : Date) => {
    if (date.getTime() < currentDate.getTime()) {
        return `${date.toUTCString()}`
        // return `${date.getUTCDate()} ${months[date.getMonth()]} ${dayDictionary[date.getDay()]}`
    } else if (date === currentDate) {
        return `${date.toUTCString()}`
        // return `${date.toUTCString()} ${dayDictionary[date.getDay()]}`
    } else {
        return `${date.toUTCString()}`
        // return `${date.toUTCString()} ${dayDictionary[date.getDay()]}`
    }
}
export default formatDate;