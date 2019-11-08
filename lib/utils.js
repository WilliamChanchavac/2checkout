var request = require('request');
var moment = require('moment-timezone');
var crypto = require('crypto');

exports.execute = function (args, callback) {

    // specific date time
    var requestDateTime = moment().tz(args.timeZone).format('YYYY-MM-DD HH:mm:ss');

    // create hmac md5
    var cryptoHmac = crypto.createHmac('md5', args.secretKey);
    var text = cryptoHmac.update(
        args.vendorCode.length +
        args.vendorCode +
        requestDateTime.length +
        requestDateTime
    );
    var hmac = text.digest('hex');
    var xAvangateAuthentication =  `code="${args.vendorCode}" date="${requestDateTime}" hash="${hmac}"`;

    // options request
    options = {
        uri: args.domain + args.path,
        method: args.method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-Avangate-Authentication": xAvangateAuthentication
        },
        timeout: 30000
    };

    if (args.method !== "GET") {
        options.json = args.payload;
    }

    // request
    request(options, function (error, response, body) {
        var parsedResponse;
        if (error) {
            callback(new Error('Unable to connect to 2Checkout API'));
        } else {

            try {
                parsedResponse = JSON.parse(body);
            } catch (e) {
                callback(new Error('Error parsing JSON response from 2Checkout API.'));
                return;
            }

            callback(null, parsedResponse);

        }

    });
};