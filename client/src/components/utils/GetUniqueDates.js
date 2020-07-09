import moment from "moment";

export const uniqueDates = (array) => {
    const sDate = date => {
        return moment(date).format('YYYY-MM-DD')
    }
    const getAllDate = array.map(list => new Date(list.serviceDate))
    const getUniqueDate = [...new Set(getAllDate.map(date => sDate(date)))]
    const uniqueDate = [...new Set(getUniqueDate.map(date => new Date(date)))]
    return uniqueDate
}

export const getDateType = (date, time) => {
    let d = date,
        s = time,
        parts = s.match(/(\d+)\:(\d+) (\w+)/),
        hours = /am/i.test(parts[3]) ? parseInt(parts[1], 10) : parseInt(parts[1], 10) + 12,
        minutes = parseInt(parts[2], 10);
        d.setHours(hours, minutes,0,0);
    return d
}

export const getDate = date => {
    return moment(date).format('DD/MM/YYYY')
}

export const getMonthDate = date => {
    return moment(date).format('DD-MMM-YYYY')
}

export const getShortMonth = date => {
    return moment(date).format('DD MMM')
}

export const getShortDay = date => {
    return moment(date).format('ddd')
}

export const getTime = time => {
    return moment(time).format('hh:mm A')
}