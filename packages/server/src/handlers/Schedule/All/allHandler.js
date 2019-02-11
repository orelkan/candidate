allHandler = (request, h) => {
    from = request.query.from;
    to = request.query.to;
    let fromDate = new Date(parseInt(from.substring(4,8)),
        parseInt(from.substring(2,4)),
        parseInt(from.substring(0,2)),
        0, 0, 0, 0);
    let toDate = new Date(parseInt(to.substring(4,8)),
        parseInt(to.substring(2,4)),
        parseInt(to.substring(0,2)),
        0, 0, 0, 0);
    return data.filter( interview => interview.date <= toDate && interview.date >= fromDate);
}

module.exports = allHandler;
