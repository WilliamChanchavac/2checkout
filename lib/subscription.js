var utils = require("./utils");

var subscription = module.exports = function (options) {
    this.options = options;
};

subscription.prototype.assignToAnotherCustomer = function (args) {
    this.options.path = "/subscriptions/" + args.SubscriptionReference + "/customer/";
    this.options.method = "POST";
    this.options.payload = args;
    return utils.execute(this.options);
};

subscription.prototype.update = function (args) {
    this.options.path = "/subscriptions/" + args.SubscriptionReference + "/";
    this.options.method = "PUT";
    this.options.payload = args;
    return utils.execute(this.options);
};

subscription.prototype.findOne = function (args) {
    this.options.path = "/subscriptions/" + args.SubscriptionReference + "/";
    this.options.method = "GET";
    this.options.payload = {};
    return utils.execute(this.options);
};

subscription.prototype.enable = function (args) {
    this.options.path = "/subscriptions/" + args.SubscriptionReference + "/";
    this.options.method = "POST";
    this.options.payload = args;
    return utils.execute(this.options);
};

subscription.prototype.disable = function (args) {
    this.options.path = "/subscriptions/" + args.SubscriptionReference + "/";
    this.options.method = "DELETE";
    this.options.payload = {};
    return utils.execute(this.options);
};

subscription.prototype.history = function (args) {
    this.options.path = "/subscriptions/" + args.SubscriptionReference + "/history/";
    this.options.method = "GET";
    this.options.payload = {};
    return utils.execute(this.options);
};