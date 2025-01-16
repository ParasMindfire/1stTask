
// $(document).ready(function(){
//     //   console.log("hiiii Jquery")
//     });


    //--------------------Notification-------------------

// (function($){
    // $(document).ready(function () {
        function openToast(message,character){
            // console.log("c",character);
            const toast=$('#snackbar');
    
            if(character=="safe"){
                toast.css("background-color","green")
            }else if(character=="danger"){
                toast.css("background-color","red")
            }
            toast.text("");
            toast.removeClass("hide");
            setTimeout(()=>{
                return toast.addClass("hide");
            },3000)
            toast.text(message);
        }
    
    
        // -------------------image upload-----------------
        const renderFile = () => {
            const $render = $(".uploadz");
            const file = $("input[type=file]")[0].files[0];
        
            if (file) {
                const reader = new FileReader();
                reader.onload = function () {
                    $render.attr("src", reader.result);
                    openToast("Image Uploaded Successfully", "safe");
                };
                reader.readAsDataURL(file);
            }
        };
    
        
    
        // -----------------Address-------------------
    
    
        const countries=[
            {
                id:0,
                country:"India",
                states:[
                    {
                        idz:0,
                        state:"Odisha",
                        cities:[
                            {
                                idt:0,
                                city:"Bhubaneswar",
                            },{
                                idt:1,
                                city:"Cuttack",
                            },{
                                idt:2,
                                city:"Chandikhole"
                            }
                        ]
                    },{
                        idz:1,
                        state:"Maharastra",
                        cities:[
                            {
                                idt:0,
                                city:"Mumbai",
                            },{
                                idt:1,
                                city:"Pune",
                            },{
                                idt:2,
                                city:"Nagpur"
                            }
                        ]
                    },{
                        idz:2,
                        state:"Jharkhand",
                        cities:[
                            {
                                idt:0,
                                city:"Dhanbad",
                            },{
                                idt:1,
                                city:"Jamshedpur",
                            },{
                                idt:2,
                                city:"Ranchi"
                            }
                        ]
                    }
                ]
            },{
                id:1,
                country:"America",
                states:[
                    {
                        idz:0,
                        state:"Texas",
                        cities:[
                            {
                                idt:0,
                                city:"Houston",
                            },{
                                idt:1,
                                city:"Dallas",
                            },{
                                idt:2,
                                city:"Austin"
                            }
                        ]
                    },{
                        idz:1,
                        state:"New Mexico",
                        cities:[
                            {
                                idt:0,
                                city:"Albuquerque",
                            },{
                                idt:1,
                                city:"Santa fe",
                            },{
                                idt:2,
                                city:"Silver City"
                            }
                        ]
                    },{
                        idz:2,
                        state:"California",
                        cities:[
                            {
                                idt:0,
                                city:"Los Angeles",
                            },{
                                idt:1,
                                city:"San Fransisco",
                            },{
                                idt:2,
                                city:"San diego"
                            }
                        ]
                    }
                ]
            },{
                id:2,
                country:"Pakistan",
                states:[
                    {
                        idz:0,
                        state:"Punjab",
                        cities:[
                            {
                                idt:0,
                                city:"Lahore",
                            },{
                                idt:1,
                                city:"Multan",
                            },{
                                idt:2,
                                city:"Faisalabad"
                            }
                        ]
                    },{
                        idz:1,
                        state:"Balochistan",
                        cities:[
                            {
                                idt:0,
                                city:"Quetta",
                            },{
                                idt:1,
                                city:"Turbat",
                            },{
                                idt:2,
                                city:"Chaman"
                            }
                        ]
                    },{
                        idz:2,
                        state:"Sindh",
                        cities:[
                            {
                                idt:0,
                                city:"Karachi",
                            },{
                                idt:1,
                                city:"Hyderabad",
                            },{
                                idt:2,
                                city:"Larkana"
                            }
                        ]
                    }
                ]
            } 
        ]
    
        
        const countryList=$("#CountryList")
    
        for(let i=0;i<countries.length;i++){
            var option = $("<option></option>").text(countries[i].country);
            countryList.append(option);
        }
    
        var globalCountryVariable;
    
        function checkCountry(){
    
            const statesToDisplay=$("#StateList").html(null);
    
            const citiesToDisplay=$("#cityList").html(null)
    
    
            let stateText=$("#StateList");
            var optionn=$("<option></option>").text("Select A State")
            stateText.append(optionn);
    
            let cityText=$("#cityList");
            var option=$("<option></option>").text("Select A City")
            cityText.append(option);
    
            const countrySelected=$("#CountryList").val();
    
            const filteredCountry=countries.find((c)=>{
                return c.country==countrySelected;
            })
    
            let states=filteredCountry.states;
            globalCountryVariable=filteredCountry.id;
    
            for(let i=0;i<states.length;i++){
                const statesToDisplay=$("#StateList")
                var option=$("<option></option>").text(states[i].state)
                statesToDisplay.append(option);
            }
        }
    
    
    
    
        function checkState(){
            //clearing all the options
            const citiesToDisplay=$("#cityList").html(null);
    
            let cityText=$("#cityList");
            var option=$("<option></option>").text("Select a city");
            cityText.append(option);
    
    
            const stateSelected=$('#StateList').val();
    
            const filteredState=countries[globalCountryVariable].states.find((e)=>{
                return e.state==stateSelected;
            })
    
            let citiezz=filteredState.cities;
    
            for(let i=0;i<citiezz.length;i++){
                const cityToDisplay=$('#cityList');
                var option=$('<option></option>').text(citiezz[i].city)
                cityToDisplay.append(option);
            }
        }
        
    
    
        // ------------------FORM VALIDATION---------------------------
    
    
        function validateForm(event) {
    
            event.preventDefault();
    
            function validateForm(key,val){
                if(val && validation[key].test(val))return true;
                return false;
            }
    
            const formValues={
                // fileName: $("#myFile"),
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
                fname: /^.+$/,
                mname: /^.+$/,
                lname: /^.+$/,
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
                var isValid=validateForm(key,val.value);
                console.log("validity",isValid);
                if(isValid==false){
                    var targetIds="#"+String(key)+"-error";
                    $(targetIds).text(`${val.message}`)
                    setTimeout(()=>{
                        return $(targetIds).text("");
                    },3000);
                    // console.log("Tids ",targetIds);
                }
            })
    
        }
    
    
    
    // email vlidation
    
        function myEmail() {
    
            const email = $("#mail").val();
            const emailErr = $("#email-error");
    
            emailErr.text("");
    
            if (email === "" || !email.includes("@") || !email.includes(".")) {
                emailErr.text("Please include @");
            }
    
        }
    
    
    
    
    
    
    // ---------------------------tABLE---------------------
    
        class person{
            constructor(id,name,branch,email,birthday,password){
                this.id=id;
                this.name=name;
                this.branch=branch;
                this.email=email;
                this.birthday=birthday;
                this.password=password;
            }
        }
    
    
    
    
    
        const form=$('#userForm');
        const tablez=$('#peopleTable');
        const table=tablez.find('tbody')
    
        const peopleArray=[];
    
        let idz=-1;
    
        let toEdit=null;
    
        var tr=[];
    
        var submit=true;
    
        form.submit((event)=>{
            event.preventDefault();
    
            const fname = $("#first_name").val();
            const branch = $("#brranch").val();
            const email = $("#mail").val();
            const confirmBday = $("#birthday").val();
            const passw=$("#password").val();
    
            console.log("fname ",fname," branch ",branch," email ",email," confirmBday ",confirmBday);
    
            let tempEmail=peopleArray.find((people)=>{
                return people.email==email;
            })
    
            if(tempEmail){
                openToast("Email Already Exist","danger")
            }else if(fname && branch && email && confirmBday){
                var message="Form Created Successfully";
                if(submit){
                    openToast(message,"safe")
                    idz+=1;
    
                    event.preventDefault();
    
                    const tempObj=new person(idz,fname,branch,email,confirmBday,passw);
    
                    peopleArray.push(tempObj);
    
                    // console.log(peopleArray);
    
                    tr[idz]=$("<tr></tr>")
                    
                    var curRow=tr[idz][0];
    
    
                    var td1 = $("<td></td>")
                    var td2 = $("<td></td>");
                    var td3 = $("<td></td>");
                    var td4 = $("<td></td>");
                    var td5 = $("<td></td>");
    
    
                    //There is no jQuery for createTextNode we have to use document ~ stackoverflow
                    var text1 = document.createTextNode(fname);
                    var text2 = document.createTextNode(email);
                    var text3 = document.createTextNode(confirmBday);
                    var text4 = document.createTextNode(branch);
                
                    var editButton=$('<button></button>').addClass('button').text("Edit").click(()=>editRow(curRow,idz));
    
    
                    var deleteButton=$('<button></button>').addClass('button').addClass('delete').text("Delete").click(()=>deleteRow(curRow));
    
    
                    for (var i = 0; i < 4; i++){
                        td1.append(text1);
                        td2.append(text2);
                        td3.append(text3);
                        td4.append(text4);
                        td5.append(editButton);
                        td5.append(deleteButton);
    
                        tr[idz].append(td1);
                        tr[idz].append(td2);   
                        tr[idz].append(td3);
                        tr[idz].append(td4); 
                        tr[idz].append(td5);
                    } 
    
                    table.append(tr[idz]);
                }else{
    
                    // console.log(tr[toEdit].cells[0].innerText+" "+tr[toEdit].cells[1].innerText);
                    let currObj=peopleArray[toEdit];
    
                    // console.log("Haha",peopleArray[toEdit]);
    
                    const fname = $("#first_name").val();
                    const branch = $("#brranch").val();
                    const email = $("#mail").val();
                    const confirmBday =$("#birthday").val();
    
                    // console.log("howw",tr[toEdit][0].cells[0]);
    
                    $(tr[toEdit][0].cells[0]).text(fname);
                    $(tr[toEdit][0].cells[1]).text(email);
                    $(tr[toEdit][0].cells[2]).text(confirmBday);
                    $(tr[toEdit][0].cells[3]).text(branch);
    
                    $('#submitButton').text('Submit');
    
                    submit=true;
    
                    openToast("Form Edited Successfully","safe")
                }
            }else{  
                message="Add Required Fileds before submitting"
                openToast(message,"danger")
            }
    
            form.trigger("reset");
    
        })
    
    
    
        function editRow(row,id) {
            console.log("row",row)
            let toFindEmail=row.cells[1].innerText;
    
            const findobj=peopleArray.find((e)=>{
                return e.email==toFindEmail;
            })
            
            toEdit=findobj.id;
            submit=false;
            $('#submitButton').text('Edit');
            $('#first_name').val($(row.cells[0]).text());
            $('#mail').val($(row.cells[1]).text());
            $('#birthday').val($(row.cells[2]).text());
            $('#brranch').val($(row.cells[3]).text()); 
        }
    
        function deleteRow(row) {
            openModal(row);
        }
    
        function openModal(row){
            const modal =$(".modal");
    
            modal.removeClass("hide");
    
            const yesBtn=$('#yes');
            const noBtn=$('#no');
    
            $('#modalInput').text(null);
    
            yesBtn.click(()=>{
                const pass=$('#modalInput').val();
    
                let toFindEmail=$(row.cells[1]).text();
    
                // console.log("Email Finder",toFindEmail)
    
                const findobj=peopleArray.find((e)=>{
                    return e.email==toFindEmail;
                })
    
                // console.log("object Finder",findobj)
    
                // console.log("password typed ",pass);
                // console.log("password actual ",findobj.password);
    
                if(pass==findobj.password){
                    row.remove();
                    modal.addClass("hide");
                    message="Record Deleted Successfully";
                    const toDel=peopleArray.find((people)=>people.          email==toFindEmail);
                    peopleArray[toDel.id]={};
                    openToast(message,"safe")
                }else{
                    openToast("Enter The Password Correctly","danger")
                }
    
            })
    
            noBtn.click(()=>{
                modal.addClass("hide");
            })
        }
    
    
        function openModalz(){
            const modalz =$(".modal1");
    
            var FullName=$("#first_name").val()+" "+$("#middle_name").val()+" "+$("#last_name").val();
    
            var GenderrMale=$("#male").is(':checked');
            var GenderrFemale=$("#female").is(':checked');
            var GenderrTrans=$("#trans").is(':checked');
    
            // console.log("Genderr ",GenderrMale);
            // console.log("Genderr ",GenderrFemale);
            // console.log("Genderr ",GenderrTrans);
    
            var textGender="";
    
            if(GenderrMale){
                textGender="Male";
            }else if(GenderrFemale){
                textGender="Female";
            }else if(GenderrTrans){
                textGender="Trans";
            }
    
    
            var country=$("#CountryList").val();
            var state=$("#StateList").val();
            var city=$("#cityList").val();
    
    
            // console.log("FullNAme ",FullName);
    
            $('#namePrev').text(FullName);
            $('#emailPrev').text($("#mail").val());
            $('#genderPrev').text(textGender);
            $('#birthdayPrev').text($("#birthday").val()); 
            $('#branchPrev').text($("#brranch").val()); 
            $('#aboutUPrev').text($("#textArea").val()); 
            $('#addressPrev').text(country+" , "+state+" , "+city);
    
            modalz.removeClass("hide");
        }
    
        function closeModal1(){
            const modalz =$(".modal1");
    
            modalz.addClass("hide");
        }
    
    
    
    
    
        //---------------------------Stepper-----------------
    
        $(document).ready(function () {
            const $steps = $(".step");
            const $nextButtons = $(".next");
            const $previousButtons = $(".previous");
            let currentStep = 0;
        
            function showStep(stepIndex) {
                $steps.removeClass("active").eq(stepIndex).addClass("active");
            }
        
            $nextButtons.on("click", function () {
                if (currentStep < $steps.length - 1) {
                    currentStep++;
                    showStep(currentStep);
                }
            });
        
            $previousButtons.on("click", function () {
                if (currentStep > 0) {
                    currentStep--;
                    showStep(currentStep);
                }
            });
        
            // Initialize by showing the first step
            showStep(currentStep);
        });


        function showist(){
            $("#stepz1").addClass("active");
            $("#stepz2").removeClass("active");
            $("#stepz3").removeClass("active");

            $("#first").css("background-color","rgb(59 3 37)");
            $("#second").css("background-color","#ee36a8")
            $("#third").css("background-color","#ee36a8")
        }

        function show2nd(){
            $("#stepz2").addClass("active");
            $("#stepz1").removeClass("active");
            $("#stepz3").removeClass("active");

            $("#second").css("background-color","rgb(59 3 37)");
            $("#first").css("background-color","#ee36a8")
            $("#third").css("background-color","#ee36a8")
        }

        function show3rd(){
            $("#stepz3").addClass("active");
            $("#stepz1").removeClass("active");
            $("#stepz2").removeClass("active");

            $("#third").css("background-color","rgb(59 3 37)");
            $("#second").css("background-color","#ee36a8")
            $("#first").css("background-color","#ee36a8")
        }


        
    // });
// })(jQuery);


