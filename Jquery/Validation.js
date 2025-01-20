export const ValidationModule=(()=>{
        
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

        const confirmPass=()=>{
            const password=$("#password").val();
            const confirmPassword=$("#ConfirmpasswordClass").val();

            const cpass=$("#confirm-password-error");

            if(password!=confirmPassword){
                cpass.text("Password not Matched");
                setTimeout(()=>{
                    cpass.text("");
                },3000)
            }
        }

        window.myEmail=myEmail;
        window.confirmPass=confirmPass;

        return {confirmPass,myEmail};
})();