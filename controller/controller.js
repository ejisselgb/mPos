let idEmployee = null;
let statusUpdate = null;

function services(url, type, data, category){
    $.ajax({
        url: url,
        type: type,
        data: data,
        cache: false,
        success: function(result) {
            let res = JSON.parse(result);
            if(category === "GET"){
                callback(res.data);
            }else{
                showAlerts(res);
            }
        }
    });
}

function createTable(id, name, salary, age){

    var btnEdit = document.createElement("BUTTON");
    btnEdit.className = "btn btn-secondary";
    btnEdit.id = "btnEdit"
    btnEdit.innerHTML = "<i class='fa fa-edit'></i>"; 
    id === "1" ? btnEdit.disabled = true : btnEdit.addEventListener('click', function(event){
        event.preventDefault();
        editEmployee(id, name, salary, age);
    });
    
    var btnEraser = document.createElement("BUTTON");
    btnEraser.className = "btn btn-secondary";
    btnEraser.innerHTML = "<i class='fa fa-eraser'></i>";
    id === "1" ? btnEraser.disabled = true : btnEraser.addEventListener('click', function(event){
        event.preventDefault();
        deleteEmployee(id);
    }); 

    let table = document.getElementById("body-table");
    var newRow   = table.insertRow(); 

    var newCell  = newRow.insertCell(0);
    var newCell2  = newRow.insertCell(1);
    var newCell3  = newRow.insertCell(2);
    var newCell4  = newRow.insertCell(3);
    var newCell5  = newRow.insertCell(4);

    var newText  = document.createTextNode(id);
    var newText2  = document.createTextNode(name);
    var newText3  = document.createTextNode(salary);
    var newText4  = document.createTextNode(age);

    newCell.appendChild(newText);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);
    newCell4.appendChild(newText4);
    newCell5.appendChild(btnEdit);
    newCell5.appendChild(btnEraser);
}


/*Fill table*/
services("services/get.php", "POST", {}, "GET");

function callback(response){
    if(response.length > 0){
        for(var i in response){
            createTable(response[i].id, response[i].employee_name, response[i].employee_salary, response[i].employee_age);
        }
    }
}
/****/

function createEmployee(){

    let employeename = document.getElementById("employeename").value;
    let employeesalary = document.getElementById("employeesalary").value;
    let employeeage = document.getElementById("employeeage").value;

    if(statusUpdate === "edit"){
        services("services/update.php", "POST", {id: idEmployee, name: employeename, salary: employeesalary, age: employeeage}, "UPDATE");
    }else{
        services("services/create.php", "POST", {name: employeename, salary: employeesalary, age: employeeage}, "CREATE");
    }
}

function editEmployee(id, name, salary, age){
    idEmployee = id;
    statusUpdate = "edit";
    document.getElementById("modalCreate").innerHTML = "Editar empleado";
    document.getElementById("employeename").value = name;
    document.getElementById("employeesalary").value = salary;
    document.getElementById("employeeage").value = age;
    $("#modalCreateEmployee").modal('toggle'); 
}

function deleteEmployee(id){
    services("services/delete.php", "POST", {id:id}, "DELETE");
}

function showAlerts(result){
    if(result.status === "success"){
        alert("La acción se ha ejecutado correctamente. SUCCESS: " + JSON.stringify(result.data));
        window.location.reload();
    }else{
        alert("No fue posible ejecutar la acción. ERROR: " + result.message)
    }
}




