module.exports = function(){
    this.Given(/^given step$/, function (callback) {
        callback();
    });

    this.When(/^when step$/, function (callback) {
        callback();
    });
}