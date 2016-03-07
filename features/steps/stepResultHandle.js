module.exports = function(){
    this.registerHandler('StepResult', function (event, callback) {
        var stepResult = event.getPayloadItem('stepResult');
        var step = stepResult.getStep();

        console.log('StepName: [' + step.getName() + '], isHidden: [' + step.isHidden() + '], status: [' + stepResult.getStatus() + ']');
        callback();
    });
}