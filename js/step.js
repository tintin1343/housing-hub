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

        console.log("onState" + localStorage.getItem("onStep"));
        console.log("Active id"+ stepper.getActiveId());
        console.log("go to"+ (stepper.getActiveId() + Number(localStorage.getItem("onStep")) - 1 ));

        if(stepper.getActiveId() < 9){
            console.log("in 9 or less");
            stepper.goto(stepper.getActiveId() + Number(localStorage.getItem("onStep")) - 1 );
        }
        else {
            console.log("go to 1");
            stepper.goto(stepper.getActiveId());
        }
        

        // Just looping and adding listener to event onstepnext to the all steps
        for (var i = 0; i < steps.length; i++) {
            step = steps[i];
            // When user clicks on [data-stepper-next] button of step
            step.addEventListener('onstepnext', function (e) {
                // {element}.MaterialStepper.next() change the state of current step to "completed"
                // and move one step forward
                stepper.next();
                console.log("in stepper next");
                if(stepper.getActiveId() < 9) {
                    localStorage.setItem("onStep", stepper.getActiveId());
                } else {
                    localStorage.setItem("onStep", 1);
                }
                if (stepper.getActiveId() == 9){
                    $("#after-complete").css("display","block");
                } else{
                    $("#after-complete").css("display","none");
                }

            });

            step.addEventListener('onstepback', function (event) {
                // When the step (this) action button/link with [data-stepper-back] attribute is clicked
                // you can call the back() method or do anything else.
                stepper.goto((stepper.getActiveId()) - 1 );
                localStorage.setItem("onStep", stepper.getActiveId());
                if (stepper.getActiveId() < 9){
                    $("#after-complete").css("display","none");
                }


            });

           // stepper.goto((stepper.getActiveId() + localStorage.getItem("onStep") - 1 ));

        }

        // When all steps are completed this event is dispatched
        element.addEventListener('onsteppercomplete', function (e) {
            console.log("In complete...")

            if (stepper.getActiveId() == 9){
                $("#after-complete").css("display","block");
                $("#after-complete").addClass("page-scroll");
            } else{
                $("#after-complete").css("display","none");
               // $("#after-complete").addClass("page-scroll");
            }
            //stepper.setActiveId(1);
            localStorage.setItem("onStep", 10);
            console.log("reset id "+ localStorage.getItem("onStep"));
            console.log("after reset "+ localStorage.getItem("onStep") +" " + stepper.getActiveId() );

        });
    };

    window.addEventListener('load', demoLinear);
})();