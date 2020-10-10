const moment = require('moment');
const fs = require('fs');
const logFile = './server/db/stats.json';

const logger = (action, product_name) => {
    fs.readFile(logFile, 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
        } else {
            const logData = JSON.parse(data);
            logData.push({
                time: moment().format('DD MMM YYYY, h:mm:ss a'),
                action: action,
                product_name: product_name,
            });
            fs.writeFile(logFile, JSON.stringify(logData, null, 4, ),(err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
}

module.exports = logger;
