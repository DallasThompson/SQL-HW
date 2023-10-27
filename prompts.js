const inquirer = require("inquirer");

const displayStartUpQ = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "table",
      message: "Choose from the following.",
      choices: [
        "View all departments.",
        "View all roles.",
        "View all employees.",
        "Add a department.",
        "Add a role.",
        "Add an employee.",
        "Update an employee.",
        "Exit.",
      ],
    },
  ]);
  return answer;
};

const displayAddDepartmentQ = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "department",
      message: "Provide department name.",
    },
  ]);
  return answer;
};

const displayAddRoleQ = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "Provide the name of the role.",
    },
    {
      type: "input",
      name: "salary",
      message: "Provide the salary.",
    },
    {
      type: "input",
      name: "newDepartment",
      message: "Provide the department name.",
    },
  ]);
  return answer;
};

const displayAddEmployeeQ = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Provide employee first name.",
    },
    {
      type: "input",
      name: "lastName",
      message: "Provide employee last name.",
    },
    {
      type: "input",
      name: "role",
      message: "Provide employee role.",
    },
    {
      type: "input",
      name: "manager",
      message: "Provide employee manager.",
    },
  ]);
  return answer;
};
const getDepartmentName = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "dept",
      message: "Provide a name for the department.",
    },
  ]);
  return answer;
};
const getRoleInfo = async (deptNames) => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "dept",
      message: "Please select a department in which to add the role.",
      choices: deptNames,
    },
    {
      type: "input",
      name: "title",
      message: "Add a title for this role.",
    },
    {
      type: "number",
      name: "salary",
      message: "Enter the salary for this role.",
    },
  ]);
  return answer;
};
const getEmployeeInfo = async (roleTitles, employeeNames) => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Please select a role for the employee.",
      choices: roleTitles,
    },
    {
      type: "input",
      name: "firstName",
      message: "Enter the first name for this employee.",
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter the last name for this employee.",
    },
    {
      type: "list",
      name: "manager",
      message: "Please select a manager for this employee.",
      choices: employeeNames,
    },
  ]);
  return answer;
};

const getUpdateEmployeeInfo = async (employeeNames, employeeRoles) => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "employeeList",
      message: "Please select an employee",
      choices: employeeNames,
    },
    {
      type: "list",
      name: "selectRole",
      message: "Please select a role.",
      choices: employeeRoles,
    },
    
  ]);
  console.log("WE ARE HERE");
  return answer;
};


module.exports = {
  displayStartUpQ,
  displayAddDepartmentQ,
  displayAddRoleQ,
  displayAddEmployeeQ,
  getDepartmentName,
  getRoleInfo,
  getEmployeeInfo,
  getUpdateEmployeeInfo
};
