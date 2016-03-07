module.exports = function(){
    this.After(function(scenario){
            console.log('Screenshot taken, but I just destroyed yours results, haha')
    })

    //this.registerHandler('StepResult', function (event, callback) {
    //    var stepResult = event.getPayloadItem('stepResult');
    //
    //    if (stepResult.getStatus() != 'passed'){
    //        console.log('Screenshot taken, but results are fine.');
    //    }
    //    callback();
    //});
}