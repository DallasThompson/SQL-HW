const {
  getDepartmentData,
  getRoleData,
  getEmployeeData,
  addDepartment,
  getDepartmentNames,
  createDepartmentDataHash,
  addRole,
  createRoleDataHash,
  getRoleTitles,
  createEmployeeDataHash,
  getEmployeeNames,
  addEmployee,
  updateEmployee,
  
} = require("./db/dbQueries");
const {
  displayStartUpQ,
  getDepartmentName,
  getRoleInfo,
  getEmployeeInfo,
  getUpdateEmployeeInfo,
  
} = require("./prompts");

const startApp = async () => {
  var answer = await displayStartUpQ();

  while (answer.table !== "Exit.") {
    switch (answer.table) {
      case "View all departments.":
        var data = await getDepartmentData();
        console.table(data);
        break;
      case "View all roles.":
        var data = await getRoleData();
        console.table(data)
        break;
      case "View all employees.":
        var data = await getEmployeeData();
        console.table(data);
        break;
      case "Add a department.":
        var deptName = await getDepartmentName();
        await addDepartment(deptName.dept);
        break;

      case "Add a role.":
        var data = await getDepartmentData();
        var hash = createDepartmentDataHash(data);
        var nameList = getDepartmentNames(data);
        var userInput = await getRoleInfo(nameList);
        await addRole(userInput, hash[userInput.dept]);
        break;

      case "Add an employee.":
        var roleData = await getRoleData();
        var employeeData = await getEmployeeData();
        var roleHash = createRoleDataHash(roleData);
        var roleTitles = getRoleTitles(roleData);
        var employeeHash = createEmployeeDataHash(employeeData);
  
        var employeeNames = getEmployeeNames(employeeData);
        console.log("trash");
        var userInput = await getEmployeeInfo(roleTitles, employeeNames);
        await addEmployee(userInput, roleHash[userInput.role], employeeHash[userInput.manager]);
        break;
  
      case "Update an employee.":
        var employeeData = await getEmployeeData();
        var employeeHash = createEmployeeDataHash(employeeData);
        
        var employeeNames = getEmployeeNames(employeeData);
        
        var roleData = await getRoleData();
        var roleHash = createRoleDataHash(roleData)
        var roleTitleList = getRoleTitles(roleData);
        
        var userChoices = await getUpdateEmployeeInfo(employeeNames, roleTitleList)
        await updateEmployee(roleHash[userChoices.selectRole], employeeHash[userChoices.employeeList]);
        break;
    }  
    answer = await displayStartUpQ();
  }
};

startApp();
/*
present user with list of employees
- get employees from the DB
- give user employee question
- user select an employee
present user with a list of roles
-get the role data from the DB
-present list of roles to the user to choose from
-user chooses a role to update to employee
update the role for the employee selected
-use the user choice to update our DB
-






UPDATE employees
SET role_id = 00000
WHERE id = '';
*/


