// import {countries} from './countryArray'



// // -------------------image upload-----------------

//     const renderFile = () => {
//         const render = document.querySelector('.uploadz')
//         const file = document.querySelector('input[type=file]').files[0]
//         const reader = new FileReader();
        
        
//         reader.addEventListener('load' , ()=> {
//             render.src = reader.result;
//         }, false)

//         if(file){
//             reader.readAsDataURL(file);
//         }
//     }

//     // -----------------Address-------------------
//     const countries=[
//         {
//             id:0,
//             country:"India",
//             states:[
//                 {
//                     idz:0,
//                     state:"Odisha",
//                     cities:[
//                         {
//                             idt:0,
//                             city:"Bhubaneswar",
//                         },{
//                             idt:1,
//                             city:"Cuttack",
//                         },{
//                             idt:2,
//                             city:"Chandikhole"
//                         }
//                     ]
//                 },{
//                     idz:1,
//                     state:"Maharastra",
//                     cities:[
//                         {
//                             idt:0,
//                             city:"Mumbai",
//                         },{
//                             idt:1,
//                             city:"Pune",
//                         },{
//                             idt:2,
//                             city:"Nagpur"
//                         }
//                     ]
//                 },{
//                     idz:2,
//                     state:"Jharkhand",
//                     cities:[
//                         {
//                             idt:0,
//                             city:"Dhanbad",
//                         },{
//                             idt:1,
//                             city:"Jamshedpur",
//                         },{
//                             idt:2,
//                             city:"Ranchi"
//                         }
//                     ]
//                 }
//             ]
//         },{
//             id:1,
//             country:"America",
//             states:[
//                 {
//                     idz:0,
//                     state:"Texas",
//                     cities:[
//                         {
//                             idt:0,
//                             city:"Houston",
//                         },{
//                             idt:1,
//                             city:"Dallas",
//                         },{
//                             idt:2,
//                             city:"Austin"
//                         }
//                     ]
//                 },{
//                     idz:1,
//                     state:"New Mexico",
//                     cities:[
//                         {
//                             idt:0,
//                             city:"Albuquerque",
//                         },{
//                             idt:1,
//                             city:"Santa fe",
//                         },{
//                             idt:2,
//                             city:"Silver City"
//                         }
//                     ]
//                 },{
//                     idz:2,
//                     state:"California",
//                     cities:[
//                         {
//                             idt:0,
//                             city:"Los Angeles",
//                         },{
//                             idt:1,
//                             city:"San Fransisco",
//                         },{
//                             idt:2,
//                             city:"San diego"
//                         }
//                     ]
//                 }
//             ]
//         },{
//             id:2,
//             country:"Pakistan",
//             states:[
//                 {
//                     idz:0,
//                     state:"Punjab",
//                     cities:[
//                         {
//                             idt:0,
//                             city:"Lahore",
//                         },{
//                             idt:1,
//                             city:"Multan",
//                         },{
//                             idt:2,
//                             city:"Faisalabad"
//                         }
//                     ]
//                 },{
//                     idz:1,
//                     state:"Balochistan",
//                     cities:[
//                         {
//                             idt:0,
//                             city:"Quetta",
//                         },{
//                             idt:1,
//                             city:"Turbat",
//                         },{
//                             idt:2,
//                             city:"Chaman"
//                         }
//                     ]
//                 },{
//                     idz:2,
//                     state:"Sindh",
//                     cities:[
//                         {
//                             idt:0,
//                             city:"Karachi",
//                         },{
//                             idt:1,
//                             city:"Hyderabad",
//                         },{
//                             idt:2,
//                             city:"Larkana"
//                         }
//                     ]
//                 }
//             ]
//         } 
//     ]



//     const countryList=document.getElementById('CountryList');

//     for(let i=0;i<countries.length;i++){
//         var option = document.createElement("option");
//         option.text = countries[i].country;
//         countryList.add(option);
//     }

//     var globalCountryVariable;


//     function checkCountry(){

//         //clearing all the options
//         const statesToDisplay=document.getElementById('StateList').innerHTML=null;

//         const citiesToDisplay=document.getElementById('cityList').innerHTML=null;


//         let stateText=document.getElementById('StateList');
//         var optionn = document.createElement("option");
//         optionn.text = "Select A State";
//         stateText.add(optionn);

//         let cityText=document.getElementById('cityList');
//         var option = document.createElement("option");
//         option.text = "Select a city";
//         cityText.add(option);

        
//         const countrySelected=document.getElementById('CountryList').value;

//         const filteredCountry=countries.find((c)=>{
//             return c.country==countrySelected;
//         })

//         let states=filteredCountry.states;
//         globalCountryVariable=filteredCountry.id;

//         // console.log("id",globalCountryVariable);

//         for(let i=0;i<states.length;i++){
//             const statesToDisplay=document.getElementById('StateList');
            
//             var option = document.createElement("option");
//             option.text = states[i].state;
//             statesToDisplay.add(option);
//         }
//     }




//     function checkState(){
//         //clearing all the options
//         const citiesToDisplay=document.getElementById('cityList').innerHTML=null;

//         let cityText=document.getElementById('cityList');
//         var option = document.createElement("option");
//         option.text = "Select a city";
//         cityText.add(option);


//         const stateSelected=document.getElementById('StateList').value;

//         const filteredState=countries[globalCountryVariable].states.find((e)=>{
//             return e.state==stateSelected;
//         })

//         // console.log("filteredState->",filteredState);

//         let citiezz=filteredState.cities;

//         for(let i=0;i<citiezz.length;i++){
//             const cityToDisplay=document.getElementById('cityList');
            
//             var option = document.createElement("option");
//             option.text = citiezz[i].city;
//             cityToDisplay.add(option);
//         }
//     }
    

    











//     // ------------------FORM VALIDATION---------------------------


//     function validateForm(event) {

//     event.preventDefault();


//     const fileName=document.getElementById("myFile");



//     const fname = document.getElementById("first_name").value;
//     const mname = document.getElementById("middle_name").value;
//     const lname = document.getElementById("last_name").value;


//     const email = document.getElementById("mail").value;

//     const pass = document.getElementById("password").value;

//     const confirmPass = document.getElementById("ConfirmpasswordClass").value;

//     const select=document.querySelector(".selectClass").value;

//     const confirmBday = document.getElementById("birthday").value;

//     const aboutU = document.getElementById("textArea").value;

//     const agree = document.getElementById("agree").checked;


//     const fileErr=document.getElementById("file-error")
//     const nameErr = document.getElementById("name-error");
//     const emailErr = document.getElementById("email-error");
//     const passErr = document.getElementById("password-error");
//     const ConfirmPassErr = document.getElementById("confirm-password-error");
//     const genError = document.getElementById("gender-error");
//     const agreeErr = document.getElementById("agree-error");
//     const bdayErr=document.getElementById("bday_error");
//     const textErr=document.getElementById("text_error");



//     fileErr.textContent="";
//     nameErr.textContent = "";
//     emailErr.textContent = "";
//     passErr.textContent = "";
//     ConfirmPassErr.textContent="";
//     genError.textContent="";
//     agreeErr.textContent = "";
//     bdayErr.textContent="";
//     textErr.textContent="";


//     if(fileName.files.length===0){
//         fileErr.textContent = "You Should Upload a file";
//     }
//     if ((fname=="" && mname=="" && lname=="") || /\d/.test(name)) {
//         nameErr.textContent = "Name Can not be Empty";
//     }

//     if (email === "" || !email.includes("@") || !email.includes(".")) {
//         emailErr.textContent = "Please enter a valid email address.";
//     }

//     if (pass === "" || pass.length < 6) {
//         passErr.textContent = "Please enter a password with at least 6 characters.";
//     }

//     if (confirmPass === "" || confirmPass.length < 6 || confirmPass!=pass) {
//         ConfirmPassErr.textContent = "Confirmed Password is wrong";
//     }

//     if (male.checked==false && female.checked==false && trans.checked==false) {
//         genError.textContent = "Choose one gender";
//     }

//     if(confirmBday==""){
//         bdayErr.textContent="Enter Your Birthday";
//     }

//     if(aboutU==""){
//         textErr.textContent="About Section Can not be empty";
//     }

//     if (!agree) {
//         agreeErr.textContent = "Please agree to the above information.";
//     }
// }



// // email vlidation

// function myEmail() {

//     const email = document.getElementById("mail").value;
//     const emailErr = document.getElementById("email-error");

//     emailErr.textContent = "";

//     if (email === "" || !email.includes("@") || !email.includes(".")) {
//         emailErr.textContent = "Please include @";
//     }
// }








// // ---------------------------tABLE---------------------

// const form=document.getElementById('userForm');
// const table=document.getElementById('peopleTable').querySelector('tbody');

// const peopleArray=[];

// let idz=-1;

// let toEdit=null;

// var tr=[];

// var submit=true;

// form.addEventListener('submit',(event)=>{

//     const fname = document.getElementById("first_name").value;
//     const branch = document.getElementById("brranch").value;
//     const email = document.getElementById("mail").value;
//     const confirmBday = document.getElementById("birthday").value;

//     if(fname && branch && email && confirmBday){
//         if(submit){
//             idz+=1;

//             event.preventDefault();

//             const tempObj={
//                 id:idz,
//                 name:fname,
//                 branch:branch,
//                 email:email,
//                 birthday:confirmBday
//             }

//             peopleArray.push(tempObj);

//             // console.log(peopleArray);

//             tr[idz] = document.createElement('tr');  
            
//             var curRow=tr[idz];

//             var td1 = document.createElement('td');
//             var td2 = document.createElement('td');
//             var td3 = document.createElement('td');
//             var td4 = document.createElement('td');
//             var td5 = document.createElement('td');


//             var text1 = document.createTextNode(fname);
//             var text2 = document.createTextNode(email);
//             var text3 = document.createTextNode(confirmBday);
//             var text4 = document.createTextNode(branch);
            

//             var editButton=document.createElement('button');
//             editButton.classList.add('button');
//             editButton.innerText='Edit';
//             editButton.addEventListener('click',()=>editRow(curRow,idz));

//             var deleteButton=document.createElement('button');
//             deleteButton.classList.add('button','delete');
//             deleteButton.innerText='Delete';
//             deleteButton.addEventListener('click',()=>deleteRow(curRow));


//             for (var i = 0; i < 4; i++){
//                 td1.appendChild(text1);
//                 td2.appendChild(text2);
//                 td3.appendChild(text3);
//                 td4.appendChild(text4);
//                 td5.appendChild(editButton);
//                 td5.appendChild(deleteButton);

//                 tr[idz].appendChild(td1);
//                 tr[idz].appendChild(td2);   
//                 tr[idz].appendChild(td3);
//                 tr[idz].appendChild(td4); 
//                 tr[idz].appendChild(td5);
//             } 

//             table.appendChild(tr[idz]);
//         }else{
//             // console.log(tr[toEdit].cells[0].innerText+" "+tr[toEdit].cells[1].innerText);
//             let currObj=peopleArray[toEdit];

//             // console.log("Haha",peopleArray[toEdit]);

//             const fname = document.getElementById("first_name").value;
//             const branch = document.getElementById("brranch").value;
//             const email = document.getElementById("mail").value;
//             const confirmBday = document.getElementById("birthday").value;


//             tr[toEdit].cells[0].innerText=fname;
//             tr[toEdit].cells[1].innerText=email;
//             tr[toEdit].cells[2].innerText=confirmBday;
//             tr[toEdit].cells[3].innerText=branch;
        

//             document.getElementById('submitButton').innerText = 'Submit';


//             submit=true;
//         }
//     }

//     form.reset();

// })



// function editRow(row,id) {

//     let toFindEmail=row.cells[1].innerText;

//     const findobj=peopleArray.find((e)=>{
//         return e.email==toFindEmail;
//     })

//     console.log("obj",findobj);
//     console.log("row",row.cells[1].innerText);
//     // console.log("id",id);

//     toEdit=findobj.id;
//     submit=false;
//     document.getElementById('submitButton').innerText = 'Edit';
//     document.getElementById('first_name').value = row.cells[0].innerText;
//     document.getElementById('mail').value = row.cells[1].innerText;
//     document.getElementById('birthday').value = row.cells[2].innerText;
//     document.getElementById('brranch').value = row.cells[3].innerText;
    
// }

// function deleteRow(row) {

//     row.remove();
// }