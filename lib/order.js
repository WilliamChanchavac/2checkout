var utils = require("./utils");

var order = module.exports = function (options) {
    this.options = options;
};

order.prototype.new = function (args, callback) {
    this.options.path = "/orders/";
    this.options.method = "POST";
    this.options.payload = args;
    return utils.execute(this.options, callback);
};

order.prototype.findOne = function (args, callback) {
    this.options.path = "/orders/" + args.OrderReference + "/";
    this.options.method = "GET";
    this.options.payload = {};
    return utils.execute(this.options, callback);
};
