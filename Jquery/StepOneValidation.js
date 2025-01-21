export const StepOneValidation = (() => {
    
    // const validateFileName = () => {
    //     const fileName = $("#file").val();
    //     const fileError = $("#fileName-error");

    //     fileError.text("");

    //     if (!fileName) {
    //         fileError.text("File not uploaded");
    //         setTimeout(() => {
    //             fileError.text("");
    //         }, 3000);
    //         return false;
    //     }

    //     const fileExtension = fileName.split('.').pop().toLowerCase();
    //     if (!["jpg", "jpeg", "png"].includes(fileExtension)) {
    //         fileError.text("Only JPG, JPEG, or PNG files are allowed");
    //         setTimeout(() => {
    //             fileError.text("");
    //         }, 3000);
    //         return false;
    //     }

    //     return true;
    // };

    const validateFirstName = () => {
        const firstName = $("#first_name").val();
        const fnameError = $("#first_name-error")

        fnameError.text("");

        if (!firstName.trim()) {
            fnameError.text("First name should not be empty");
            return false;
        }

        fnameError.text("");
        return true;
    };

    const validateBirthday = () => {
        const birthday = $("#birthday").val();
        const birthdayError = $("#birthday-error");

        birthdayError.text("");

        if (!birthday.trim()) {
            birthdayError.text("Birthday field cannot be empty");
            return false;
        }

        return true;
    };

    const validateAboutYou = () => {
        const aboutYou = $("#textArea").val();
        const aboutError = $("#aboutU-error");

        aboutError.text("");

        if (!aboutYou.trim()) {
            aboutError.text("About you is not filled");
            return false;
        }

        return true;
    };

    const validateGender = () => {
        const gender = $("#gender").val();
        const genderError = $("#gender-error");

        genderError.text("");

        if (gender === "-Choose Gender-") {
            genderError.text("Gender cannot be empty");
            return false;
        }

        return true;
    };


    const validateStepOne = () => {
        let isValid = true;

        // if (!validateFileName()) isValid = false;
        if (!validateFirstName()) isValid = false;
        if (!validateBirthday()) isValid = false;
        if (!validateAboutYou()) isValid = false;
        if (!validateGender()) isValid = false;

        return isValid;
    };

    // window.validateFileName = validateFileName;
    window.validateFirstName = validateFirstName;
    window.validateBirthday = validateBirthday;
    window.validateAboutYou = validateAboutYou;
    window.validateGender = validateGender;
    window.validateStepOne=validateStepOne;

    return {
        // validateFileName,
        validateFirstName,
        validateBirthday,
        validateAboutYou,
        validateGender,
        validateStepOne
    };
})();
