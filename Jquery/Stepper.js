
export const StepperModule=(()=>{

    const stepper=()=>{
        let i = 0;  
        const steppers = $(".step");
        const next = $("#nextBTN");
        const prev = $("#prevBTN");

        
        if (i===0){
            prev.addClass("Inactive");
            next.addClass("extraPadding");
        }

        next.click(function() {
            console.log("i ",i);
            var isValid=false;
            var mainValid=true;

            if(i==0){
                if(validateStepOne()==false){
                    openToast("Fill All The Fields","danger");
                }else{
                    i++;
                    steppers.removeClass("active");
                    steppers.eq(i).addClass("active");
                    prev.removeClass("Inactive");

                    $("#second").css("background-color","white");
                    $("#first").css("background-color","rgb(9, 137, 146)")
                    $("#third").css("background-color","rgb(9, 137, 146)")

                    next.removeClass("extraPadding");
                }

            }else{
                if (i==1){
                    // console.log("validation ",validateStepTwo());
                    if(validateStepTwo()==false){
                        openToast("Fill All The Fields","danger");
                    }else{
                        i++;
                        steppers.removeClass("active");
                        steppers.eq(i).addClass("active");
                        prev.removeClass("Inactive");
                        next.addClass("Inactive");
                        $("#third").css("background-color","white");
                        $("#second").css("background-color","rgb(9, 137, 146)")
                        $("#first").css("background-color","rgb(9, 137, 146)")
    
                        openModalz();
                    }  
                }
            }
        });
        

        prev.click(function() {
            console.log("i ",i);
            if (i>0) { 
                i--;
                steppers.removeClass("active");
                steppers.eq(i).addClass("active");
                next.removeClass("Inactive"); 
                if (i===0) {
                    next.addClass("extraPadding");
                    prev.addClass("Inactive");
                    $("#first").css("background-color","white");
                    $("#second").css("background-color","rgb(9, 137, 146)")
                    $("#third").css("background-color","rgb(9, 137, 146)")
                }else{
                    $("#second").css("background-color","white");
                    $("#first").css("background-color","rgb(9, 137, 146)")
                    $("#third").css("background-color","rgb(9, 137, 146)")
                }
            }
        });



        const first=$("#first");
        const second=$("#second");
        const third=$("#third");

        first.click(()=>{     
            i=0;
            prev.addClass("Inactive");
            next.removeClass("Inactive");

            steppers.removeClass("active");
            steppers.eq(i).addClass("active");

            $("#first").css("background-color","white");
            $("#second").css("background-color","rgb(9, 137, 146)")
            $("#third").css("background-color","rgb(9, 137, 146)")
        })

        second.click(()=>{
            if(validateStepOne()==false){
                openToast("Fill All The Fields","danger");
            }else{
                i=1;
                prev.removeClass("Inactive");
                next.removeClass("Inactive");

                steppers.removeClass("active");
                steppers.eq(i).addClass("active");

                $("#second").css("background-color","white");
                $("#first").css("background-color","rgb(9, 137, 146)")
                $("#third").css("background-color","rgb(9, 137, 146)")
            }

        })

        third.click(()=>{
            if(validateStepTwo()==false){
                openToast("Fill All The Fields","danger");
            }else{
                i=2;
                next.addClass("Inactive");
                prev.removeClass("Inactive");

                steppers.removeClass("active");
                steppers.eq(i).addClass("active");

                $("#third").css("background-color","white");
                $("#second").css("background-color","rgb(9, 137, 146)")
                $("#first").css("background-color","rgb(9, 137, 146)")

                openModalz();
            }



        })
    }   

    window.stepper=stepper;

    return {stepper};

})();