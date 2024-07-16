document.addEventListener('DOMContentLoaded', function() {
    var student_details = [
      { 
        name: "sandhya medapati", rollNo: 223, branch: "AIML" 
      },
      { 
        name: "sai supriya anala", rollNo: 402, branch: "ECE" 
      },
      { 
        name: "preethi ashritha gunnam", rollNo: 215, branch: "AIML" 
      },
      { 
        name: "chaha babu chava", rollNo: 461 , branch: "ECE" 
      },
    ];
    var addTable = document.getElementById("addTable");
    var studentTable = document.getElementById("studentTable");
    var tableBody = studentTable.querySelector("tbody");
    var addButton = document.getElementById("addButton");
    addTable.onclick = function() {
      tableBody.innerHTML = '';
      student_details.forEach(function(student) {
        createStudentRow(student);
      });
      studentTable.style.display = "block";
    };
    addButton.onclick = function() {
      var name = prompt("Enter the new student's name:");
      var rollNo = parseInt(prompt("Enter the new student's roll number:"));
      var branch = prompt("Enter the new student's branch:");
      if (!name || isNaN(rollNo) || !branch) {
        alert("Invalid input. Please enter valid details.");
        return;
      }
      var newStudent = {
        name: name,
        rollNo: rollNo,
        branch: branch
      };
      student_details.push(newStudent);
      createStudentRow(newStudent);
    };
    function createStudentRow(student) {
      var tr = document.createElement("tr");    
      var nameCell = document.createElement("td");
      nameCell.textContent = student.name;    
      var rollNoCell = document.createElement("td");
      rollNoCell.textContent = student.rollNo; 
      var branchCell = document.createElement("td");
      branchCell.textContent = student.branch;     
      var updateCell = document.createElement("td");
      var updateButton = document.createElement("button");
      updateButton.textContent = "Update";
      updateButton.onclick = function() {
        updateStudent(student, tr);
      };
      updateCell.appendChild(updateButton);     
      var deleteCell = document.createElement("td");
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
        deleteStudent(student, tr);
      };
      deleteCell.appendChild(deleteButton);     
      tr.appendChild(nameCell);
      tr.appendChild(rollNoCell);
      tr.appendChild(branchCell);
      tr.appendChild(updateCell);
      tr.appendChild(deleteCell);
      tableBody.appendChild(tr);
    }
    function updateStudent(student, tr) {
      var newName = prompt("Enter new name:", student.name);
      var newRollNo = parseInt(prompt("Enter new roll number:", student.rollNo));
      var newBranch = prompt("Enter new branch:", student.branch);
      if (!newName || isNaN(newRollNo) || !newBranch) {
        alert("Invalid input. Update canceled.");
        return;
      }
      student.name = newName;
      student.rollNo = newRollNo;
      student.branch = newBranch;
      tr.cells[0].textContent = newName;
      tr.cells[1].textContent = newRollNo;
      tr.cells[2].textContent = newBranch;
    }
    function deleteStudent(student, tr) {
      var index = student_details.indexOf(student);
      if (index !== -1) {
        student_details.splice(index, 1);
        tr.remove();
      }
    }
  });