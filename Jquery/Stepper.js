
export const StepperModule=(()=>{

    const stepper=()=>{

        let i = 0;  
        const steppers = $(".step");
        const next = $("#nextBTN");
        const prev = $("#prevBTN");


        console.log("prev ",prev+" next ",next);
    
        
        if (i===0){
            prev.addClass("Inactive");
            next.addClass("extraPadding");
        }

        next.click(function() {
            console.log("i ",i);
            var isValid=false;
            var mainValid=true;

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

                console.log("file ",$("#file").val());
                console.log("about u",$("#textArea").val());
                console.log("gebder ",$("#gender").val());
                console.log("Birthdayyyy ",$("#birthday").val())

                var validation = {
                    fileName: /\.(jpg|jpeg|png)$/i,
                    fname: /^.+$/,
                    aboutU: /^.+$/,
                    confirmBday:/^.+$/,
                    gender:/^.+$/,
                }

                $.each(formValues,function(key,val){
                    isValid=false;
                    if (key === "fileName") {
                        const fileName = val.value;
                        const fileExtension = fileName.split('.').pop().toLowerCase(); 
                        // console.log("file uploaded ",fileExtension);
                        // isValid = validation[key].test(fileExtension);
                        if(fileExtension=="jpg" || fileExtension=="jpeg" || fileExtension=="png"){
                            isValid=true;
                        }
                    } else if(key==="gender"){
                        if(val.value!="-Choose Gender-"){
                            isValid=true;
                        }
                    }else {
                        isValid = validateForm(key, val.value);
                    }
                    console.log("validity ",isValid);
                    if(isValid==false){
                        mainValid=false;
                        var targetIds="#"+String(key)+"-error";
                        $(targetIds).text(`${val.message}`)
                        setTimeout(()=>{
                            return $(targetIds).text("");
                        },3000);
                    }
                })

                if(mainValid==false){
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
                    function validateForm(key,val){
                        if(val && validation[key].test(val))return true;
                        return false;
                    }
    
                    var isvalid2=false;
                    var mainValid2=true;

                    const formValues2={
                        email:{
                            value:$("#mail").val(),
                            message:"Enter the correct email id",
                        },
                        pass :{
                            value:$("#password").val(),
                            message:"1 lowercase,uppercase and a digit of length 8 required",
                        },
                        select:{
                            value:$("#brranch").val(),
                            message:"Select You Branch",
                        },
                        address:{
                            value:{
                                country:$("#CountryList").val(),
                                state:$("#StateList").val(),
                                city:$("#cityList").val()
                            },
                            message:"Fill All Three Country State and City",
                        }
                    }
    
                    var validation = {
                        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        pass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                        select: /^.+$/,
                    }


                    console.log("branh ",$("#brranch").val());
    
    
                    $.each(formValues2,function(key,val){
                        isvalid2=false;
                        if (key == "address") {
                            const country=val.value.country;
                            const state=val.value.state;
                            const city=val.value.city;
    
                            if(country!="--Select a Country--" && state!="--Select a State--" && city!="--Select a city--"){
                                console.log(country+" "+state+" "+city)
                                isvalid2=true;
                            }
                        }else if(key == "select"){
                            if(val.value!="---Branch---"){
                                isvalid2=true;
                            }
                        }else {
                            isvalid2 = validateForm(key, val.value);
                        }
                        console.log("validity ",isvalid2);
                        if(isvalid2==false){
                            mainValid2=false;
                            var targetIds="#"+String(key)+"-error";
                            $(targetIds).text(`${val.message}`)
                            setTimeout(()=>{
                                return $(targetIds).text("");
                            },3000);
                        }
                    })
    
                    if(mainValid2==false){
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

            var isValid=false;
            var mainValid=true;

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

            var validation = {
                fileName: /\.(jpg|jpeg|png)$/i,
                fname: /^.+$/,
                aboutU: /^.+$/,
                confirmBday:/^.+$/,
                gender:/^.+$/,
            }

            $.each(formValues,function(key,val){
                isValid=false;
                if (key === "fileName") {
                    const fileName = val.value;
                    const fileExtension = fileName.split('.').pop().toLowerCase(); 
                    // console.log("file uploaded ",fileExtension);
                    // isValid = validation[key].test(fileExtension);
                    if(fileExtension=="jpg" || fileExtension=="jpeg" || fileExtension=="png"){
                        isValid=true;
                    }
                } else if(key==="gender"){
                    if(val.value!="-Choose Gender-"){
                        isValid=true;
                    }
                }else {
                    isValid = validateForm(key, val.value);
                }
                console.log("validity ",isValid);
                if(isValid==false){
                    mainValid=false;
                    var targetIds="#"+String(key)+"-error";
                    $(targetIds).text(`${val.message}`)
                    setTimeout(()=>{
                        return $(targetIds).text("");
                    },3000);
                }
            })

            if(mainValid==false){
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

            function validateForm(key,val){
                if(val && validation[key].test(val))return true;
                return false;
            }

            var isvalid2=false;
            var mainValid2=true;

            const formValues2={
                email:{
                    value:$("#mail").val(),
                    message:"Enter the correct email id",
                },
                pass :{
                    value:$("#password").val(),
                    message:"1 lowercase,uppercase and a digit of length 8 required",
                },
                select:{
                    value:$("#brranch").val(),
                    message:"Select You Branch",
                },
                address:{
                    value:{
                        country:$("#CountryList").val(),
                        state:$("#StateList").val(),
                        city:$("#cityList").val()
                    },
                    message:"Fill All Three Country State and City",
                }
            }

            var validation = {
                email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                pass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                select: /^.+$/,
            }


            console.log("branh ",$("#brranch").val());


            $.each(formValues2,function(key,val){
                isvalid2=false;
                if (key == "address") {
                    const country=val.value.country;
                    const state=val.value.state;
                    const city=val.value.city;

                    if(country!="--Select a Country--" && state!="--Select a State--" && city!="--Select a city--"){
                        console.log(country+" "+state+" "+city)
                        isvalid2=true;
                    }
                }else if(key == "select"){
                    if(val.value!="---Branch---"){
                        isvalid2=true;
                    }
                }else {
                    isvalid2 = validateForm(key, val.value);
                }
                console.log("validity ",isvalid2);
                if(isvalid2==false){
                    mainValid2=false;
                    var targetIds="#"+String(key)+"-error";
                    $(targetIds).text(`${val.message}`)
                    setTimeout(()=>{
                        return $(targetIds).text("");
                    },3000);
                }
            })

            if(mainValid2==false){
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




