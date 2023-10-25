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
} = require("./db/dbQueries");
const {
  displayStartUpQ,
  getDepartmentName,
  getRoleInfo,
  getEmployeeInfo,
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

    }

    answer = await displayStartUpQ();
  }
};

startApp();
