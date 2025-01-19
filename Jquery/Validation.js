export const ValidationModule=(()=>{

    const validateForm=(event)=> {
    
        event.preventDefault();

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
            mname :{
                value:$("#middle_name").val(),
                message:"",
            },
            lname :{
                value:$("#last_name").val(), 
                message:"",

            },
            email:{
                value:$("#mail").val(),
                message:"Enter the correct email id",
            },
            pass :{
                value:$("#password").val(),
                message:"Password format is not correct",
            },
            // confirmPass : $("#ConfirmpasswordClass").val(),
            select:{
                value:$(".selectClass").val(),
                message:"Select You Branch",
            },
            confirmBday : {
                value:$("#birthday").val(),
                message:"Birthday field can not be empty",
            },
            aboutU : {
                value:$("#textArea").val(),
                message:"About you is not filled",
            }
            // agree : $("#agree").is(':checked'),
        }

        var validation = {
            fileName: /\.(jpg|jpeg|png)$/i,
            fname: /^.+$/,
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            pass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            country: /^.+$/,
            city: /^.+$/,
            area: /^.+$/,
            university: /^.+$/,
            qualification: /^.+$/,
            aboutU: /^.+$/,
            confirmBday: /^\d+$/,
            select: /^.+$/,
            date: /^.+$/,
        }


        $.each(formValues,function(key,val){
            // console.log("valezz ",val);
            // console.log("file value ",$("#file").val());
            if (key === "fileName") {
                const fileName = val.value;
                const fileExtension = fileName.split('.').pop().toLowerCase(); 
                var isValid = validation[key].test(fileExtension);
            } else {
                var isValid = validateForm(key, val.value);
            }
            // console.log("validity",isValid);
            if(isValid==false){
                var targetIds="#"+String(key)+"-error";
                $(targetIds).text(`${val.message}`)
                setTimeout(()=>{
                    return $(targetIds).text("");
                },3000);
                // console.log("Tids ",targetIds);
            }
        })



        const country=$("#CountryList").val();
        const state=$("#StateList").val();
        const city=$("#cityList").val();

        console.log(country+" "+state+" "+city)

        if(country=="--Select a Country--" || state=="--Select a State--" || city=="--Select a city--"){
            $("#address-error").text("Fill All Three Country State and City");
            setTimeout(()=>{
                $("#address-error").text("");
            },3000)
        }
    }




    const  myEmail=()=> {
        const email = $("#mail").val();
        const emailErr = $("#email-error");

        emailErr.text("");

        if (email === "" || !email.includes("@") || !email.includes(".")) {
            emailErr.text("Please include @");
            setTimeout(()=>{
                emailErr.text("");
            },3000)
        }

    }

    window.validateForm=validateForm;
    window.myEmail=myEmail;

    return {validateForm,myEmail};

})();