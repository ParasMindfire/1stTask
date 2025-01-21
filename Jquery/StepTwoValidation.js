export const StepTwoValidation = (() => {

    const validateEmail = () => {
        const email = $("#mail").val();
        const emailError = $("#mail-error");

        emailError.text("");

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            emailError.text("Enter the correct email id");
            return false;
        }

        return true;
    };

    const validatePassword = () => {
        const password = $("#password").val();
        const passError = $("#password-error");

        passError.text("");

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordPattern.test(password)) {
            passError.text("1 lowercase, uppercase and a digit of length 8 required");
            return false;
        }

        return true;
    };

    const confirmPass=()=>{
        const password=$("#password").val();
        const confirmPassword=$("#ConfirmpasswordClass").val();

        const passWordError=$("#confirmpassword-error");
        passWordError.text("");

        if(password!=confirmPassword){
            passWordError.text("Password not Matched");
            return false;
        }

        return true;
    }

    const validateBranch = () => {
        const branch = $("#brranch").val();
        const branchError = $("#brranch-error");

        branchError.text("");

        if (branch === "---Branch---") {
            branchError.text("Select Your Branch");
            return false;
        }

        return true;
    };

    const validateCountry = () => {
        const country = $("#CountryList").val();
        const countryError = $("#address-error");
    
        countryError.text("");
    
        if (country === "--Select a Country--") {
            countryError.text("Please select a country");
            return false;
        }
    
        return true;
    };
    
    const validateState = () => {
        const state = $("#StateList").val();
        const stateError = $("#address-error");
    
        stateError.text("");
    
        if (state === "--Select a State--") {
            stateError.text("Please select a state");
            return false;
        }
    
        return true;
    };
    
    const validateCity = () => {
        const city = $("#cityList").val();
        const cityError = $("#address-error");
    
        cityError.text("");
    
        if (city === "--Select a city--") {
            cityError.text("Please select a city");
            return false;
        }
    
        return true;
    };

    const validateStepTwo = () => {
        let isValid = true;

        if (!validateEmail()){
            console.log("email",isValid);
            isValid = false;
        }
        if (!validatePassword()){
            console.log("password",isValid);
            isValid = false;
        }
        if (!validateBranch()) {
            console.log("Branch",isValid);
            isValid = false;
        }
        if (!confirmPass()){
            console.log("Confirm",isValid);
            isValid = false;
        }
        if (!validateCountry()) {
            console.log("Country",isValid);
            isValid = false;
        }
        if (!validateState()){
            console.log("State",isValid);
            isValid = false;
        }
        if (!validateCity()) {
            console.log("City",isValid);
            isValid = false;
        }

        return isValid;
    };

    window.validateEmail = validateEmail;
    window.validatePassword = validatePassword;
    window.validateBranch = validateBranch;
    window.validateStepTwo = validateStepTwo;
    window.validateCountry=validateCountry;
    window.validateState=validateState;
    window.validateCity= validateCity;

    return {
        validateEmail,
        validatePassword,
        confirmPass,
        validateBranch,
        validateStepTwo,
        validateCountry,
        validateState,
        validateCity
    };
})();
