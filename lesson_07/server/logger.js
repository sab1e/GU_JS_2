const fs = require('fs');
const logFile = './server/db/stats.json';
let log = {
    time: '',
    action: '',
    product_name: '',
};

function logger (action, product_name) {
    log.action = action;
    log.product_name = product_name;
    log.time = new Date;

    fs.readFile(logFile, 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
        } else {
            let logData = JSON.parse(data);
            logData.statistics.push(log);
            fs.writeFile(logFile, JSON.stringify(logData, null, 4, ),(err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
}

module.exports = logger;
