// import { errors } from "../JSON/Validation.js";


export const StepperModule=(()=>{
    const stepper=()=>{
        let i = 0; 
        const steppers = $(".step");
        const next = $("#nextBTN");
        const prev = $("#prevBTN");


        console.log("prev ",prev+" next ",next);
    
        
        if (i===0){
            prev.addClass("Inactive");
        }

        next.click(function() {
            var isValid=false;
            if(i==0){
                function validateForm(key,val){
                    if(val && validation[key].test(val))return true;
                    return false;
                }


                const formValues={
                    fileName: {
                        value:$("#file").val(),
                        message:"File not Uploaded",
                    },
                    fname : {
                        value:$("#first_name").val(),
                        message:"first name should not be empty",
                    },
                    confirmBday : {
                        value:$("#birthday").val(),
                        message:"Birthday field can not be empty",
                    },
                    aboutU : {
                        value:$("#textArea").val(),
                        message:"About you is not filled",
                    },
                    gender:{
                        value:$("#gender").val(),
                        message:"Gender Can Not Be Empty"
                    }
                }

                console.log("genderrrrr",$("#gender").val());

                var validation = {
                    fileName: /\.(jpg|jpeg|png)$/i,
                    fname: /^.+$/,
                    aboutU: /^.+$/,
                    confirmBday: /^\d+$/,
                    gender:/^.+$/,
                }

                $.each(formValues,function(key,val){
                    if (key === "fileName") {
                        const fileName = val.value;
                        const fileExtension = fileName.split('.').pop().toLowerCase(); 
                        isValid = validation[key].test(fileExtension);
                    } else if(key==="gender"){
                        if(val.value!="---Gender*---"){
                            isValid=true;
                        }
                    }else {
                        isValid = validateForm(key, val.value);
                    }
                    console.log("validity ",isValid);
                    if(isValid==false){
                        var targetIds="#"+String(key)+"-error";
                        $(targetIds).text(`${val.message}`)
                        setTimeout(()=>{
                            return $(targetIds).text("");
                        },3000);
                    }
                })
            }

            // console.log("IsValid ",isValid);

            if(isValid==false){
                openToast("Fill All The Fields","danger");
            }

            if (isValid && i<steppers.length-1){
                i++;
                steppers.removeClass("active");
                steppers.eq(i).addClass("active");
                prev.removeClass("Inactive");

                if (i === steppers.length - 1) {
                    next.addClass("Inactive");
                    $("#third").css("background-color","white");
                    $("#second").css("background-color","rgb(9, 137, 146)")
                    $("#first").css("background-color","rgb(9, 137, 146)")

                    openModalz();
                }else{
                    $("#second").css("background-color","white");
                    $("#first").css("background-color","rgb(9, 137, 146)")
                    $("#third").css("background-color","rgb(9, 137, 146)")
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
            i=1;
            prev.removeClass("Inactive");
            next.removeClass("Inactive");

            steppers.removeClass("active");
            steppers.eq(i).addClass("active");

            $("#second").css("background-color","white");
            $("#first").css("background-color","rgb(9, 137, 146)")
            $("#third").css("background-color","rgb(9, 137, 146)")
        })

        third.click(()=>{
            i=2;
            next.addClass("Inactive");
            prev.removeClass("Inactive");

            steppers.removeClass("active");
            steppers.eq(i).addClass("active");

            $("#third").css("background-color","white");
            $("#second").css("background-color","rgb(9, 137, 146)")
            $("#first").css("background-color","rgb(9, 137, 146)")

            openModalz();
        })
    }

    return {stepper};

})();




