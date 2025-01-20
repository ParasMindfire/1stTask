import { StepperModule } from "./Stepper.js";
import { RenderFileModule } from "./RenderFile.js";

export const TableModule = (() => {
    class Person {
        constructor(id, name, branch, email, birthday, password) {
            this.id = id;
            this.name = name;
            this.branch = branch;
            this.email = email;
            this.birthday = birthday;
            this.password = password;
        }
    }
    
    const form = $('#userForm');
    const tablez = $('#peopleTable');
    const table = tablez.find('tbody');
    const peopleArray = JSON.parse(localStorage.getItem('peopleArray')) || [];
    let idz = peopleArray.length ? peopleArray[peopleArray.length - 1].id : -1;
    let toEdit = null;
    const tr = [];
    let submit = true;

    const loadTableData = () => {
        peopleArray.forEach(person => {
            const row = createRow(person);
            table.append(row);
        });
    };


    const createRow = (person) => {
        const trElement = $("<tr></tr>");
        const td1 = $("<td></td>").text(person.name);
        const td2 = $("<td></td>").text(person.email);
        const td3 = $("<td></td>").text(person.birthday);
        const td4 = $("<td></td>").text(person.branch);
        const td5 = $("<td></td>");

        const editButton = $('<button></button>').addClass('button').text("Edit").click(() => editRow(trElement[0], person.id));
        const deleteButton = $('<button></button>').addClass('button').addClass('delete').text("Delete").click(() => deleteRow(trElement[0]));

        td5.append(editButton).append(deleteButton);

        trElement.append(td1, td2, td3, td4, td5);

        return trElement;
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('peopleArray', JSON.stringify(peopleArray));
    };

    form.submit((event) => {
        event.preventDefault();
    
        const fname = $("#first_name").val();
        const branch = $("#brranch").val();
        const email = $("#mail").val();
        const confirmBday = $("#birthday").val();
        const passw = $("#password").val();
    
        if (fname && branch && email && confirmBday) {
            if (submit) {
                idz += 1;
                const tempObj = new Person(idz, fname, branch, email, confirmBday, passw);
                peopleArray.push(tempObj);
                saveToLocalStorage();
                const row = createRow(tempObj);
                table.append(row);
            } else {
                let currObj = peopleArray[toEdit];
                currObj.name = fname;
                currObj.email = email;
                currObj.birthday = confirmBday;
                currObj.branch = branch;
    
                $(tr[toEdit].cells[0]).text(fname);
                $(tr[toEdit].cells[1]).text(email);
                $(tr[toEdit].cells[2]).text(confirmBday);
                $(tr[toEdit].cells[3]).text(branch);
    
                $('#submitButton').text('Submit');
                submit = true;
    
                saveToLocalStorage();
            }
    
            form.trigger("reset");
        } else {
            openToast("Add Required Fields before submitting", "danger");
        }
    });

    const editRow = (row, id) => {
        let toFindEmail = row.cells[1].innerText;
    
        const findobj = peopleArray.find((e) => e.email == toFindEmail);
    
        toEdit = findobj.id;
        submit = false;
        $('#submitButton').text('Edit');
        tr[toEdit] = row;
    
        $('#first_name').val($(row.cells[0]).text());
        $('#mail').val($(row.cells[1]).text());
        $('#birthday').val($(row.cells[2]).text());
        $('#brranch').val($(row.cells[3]).text());
    };

    const deleteRow = (row) => {
        openModal(row);
    };

    const openModal = (row) => {
        const modal = $(".modal");
        modal.removeClass("hide");
    
        const yesBtn = $('#yes');
        const noBtn = $('#no');
        $('#modalInput').val(''); 
    
        yesBtn.off('click').click(() => {  
            const pass = $('#modalInput').val();
            let toFindEmail = $(row.cells[1]).text();
    
            const findobj = peopleArray.find((e) => e.email === toFindEmail);
    
            if (!findobj) {
                openToast("User not found", "danger");
                return;
            }
    
            console.log("Entered Pass:", pass);
            console.log("Stored Pass:", findobj.password);
    
            if (pass === findobj.password) {
                row.remove();
                modal.addClass("hide");
    
                const toDelIndex = peopleArray.findIndex((people) => people.email === toFindEmail);
    
                if (toDelIndex !== -1) {
                    peopleArray.splice(toDelIndex, 1);
                }
    
                console.log("Updated peopleArray:", peopleArray);
                saveToLocalStorage(); 
    
                openToast("Record Deleted Successfully", "safe");
            } else {
                openToast("Enter The Password Correctly", "danger");
            }
        });
    
        noBtn.off('click').click(() => {  
            modal.addClass("hide");
        });
    };

    const openModalz = () => {
        const modalz = $(".modal1");

        var FullName = $("#first_name").val();
        var Genderr = $("#gender").val();
        var country = $("#CountryList").val();
        var state = $("#StateList").val();
        var city = $("#cityList").val();

        $('#namePrev').text(FullName+" , ");
        $('#emailPrev').text($("#mail").val());
        $('#genderPrev').text(Genderr);
        $('#birthdayPrev').text($("#birthday").val());
        $('#branchPrev').text($("#brranch").val());
        $('#aboutUPrev').text($("#textArea").val());
        $('#addressPrev').text(country + " , " + state + " , " + city);

        modalz.removeClass("hide");
    };

    window.editRow = editRow;
    window.openModal = openModal;
    window.deleteRow = deleteRow;
    window.openModalz = openModalz;

    $(document).ready(loadTableData);

    return { editRow, openModal, deleteRow, openModalz };

})();
