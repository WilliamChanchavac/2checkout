var order = require("./lib/order"),
    subscription = require("./lib/subscription");

var Twocheckout = module.exports = function (options) {
    // Setup Options
    if (typeof options.vendorCode !== 'undefined') {
        this.vendorCode = options.vendorCode;
    } else {
        this.vendorCode = "randomCode";
    }

    if (typeof options.timeZone !== 'undefined') {
        this.timeZone = options.timeZone;
    } else {
        this.timeZone = "UTC";
    }

    if (typeof options.secretKey !== 'undefined') {
        this.secretKey = options.secretKey;
    } else {
        this.secretKey = "randomSecretKey";
    }

    this.domain = 'https://api.2checkout.com/rest/5.0';

    // Setup Methods
    this.subscription = new subscription(this);
    this.order = new order(this);

    return this;
};
