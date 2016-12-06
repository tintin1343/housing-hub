/**
 * Created by Nitin on 12/5/2016.
 */
(function () {
    // Stepper linear demonstration
    var demoLinear = function (e) {
        // Select stepper container element
        var element = document.querySelector('ul.mdl-stepper');
        // var steps = element.querySelectorAll('li.mdl-step');
        //console.log('element '+ element);
        if (!element) return;

        // Get the MaterialStepper instance of element to control it
        var stepper = element.MaterialStepper;
        //console.log('stepper '+ stepper);
        var steps = element.querySelectorAll('.mdl-step');
        var step;

        // Just looping and adding listener to event onstepnext to the all steps
        for (var i = 0; i < steps.length; i++) {
            step = steps[i];
            // When user clicks on [data-stepper-next] button of step
            step.addEventListener('onstepnext', function (e) {
                // {element}.MaterialStepper.next() change the state of current step to "completed"
                // and move one step forward
                stepper.next();
            });

            step.addEventListener('onstepback', function (event) {
                // When the step (this) action button/link with [data-stepper-back] attribute is clicked
                // you can call the back() method or do anything else.
                stepper.goto((stepper.getActiveId()) - 1 );
            });

        }

        // When all steps are completed this event is dispatched
        element.addEventListener('onsteppercomplete', function (e) {
            $("#after-complete").css("display","block");
           // alert("Move to sections");
           // window.location.href = '#feature-icons';
        });
    };

    window.addEventListener('load', demoLinear);
})();