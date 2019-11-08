var utils = require("./utils");

var subscription = module.exports = function (options) {
    this.options = options;
};

subscription.prototype.assignToAnotherCustomer = function (args, callback) {
    this.options.path = "/subscriptions/" + args.SubscriptionReference + "/customer/";
    this.options.method = "POST";
    this.options.payload = args;
    return utils.execute(this.options, callback);
};

subscription.prototype.update = function (args, callback) {
    this.options.path = "/subscriptions/" + args.SubscriptionReference + "/";
    this.options.method = "PUT";
    this.options.payload = args;
    return utils.execute(this.options, callback);
};

subscription.prototype.findOne = function (args, callback) {
    this.options.path = "/subscriptions/" + args.SubscriptionReference + "/";
    this.options.method = "GET";
    this.options.payload = {};
    return utils.execute(this.options, callback);
};

subscription.prototype.enable = function (args, callback) {
    this.options.path = "/subscriptions/" + args.SubscriptionReference + "/";
    this.options.method = "POST";
    this.options.payload = {};
    return utils.execute(this.options, callback);
};

subscription.prototype.disable = function (args, callback) {
    this.options.path = "/subscriptions/" + args.SubscriptionReference + "/";
    this.options.method = "DELETE";
    this.options.payload = {};
    return utils.execute(this.options, callback);
};