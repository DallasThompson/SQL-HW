const { connect } = require("./dbConnection");

const getDepartmentData = async () => {
  const connection = await connect();
  const [rows] = await connection.execute("SELECT * FROM departments");
  return rows;
};
const getDepartmentNames = (rows) => {
  let nameList = [];
  rows.forEach((row) => {
    nameList.push(row.name);
  });
  return nameList;
};
const getRoleData = async () => {
  const connection = await connect();
  const [rows] = await connection.execute("SELECT * FROM roles");
  return rows;
};
const getEmployeeData = async () => {
  const connection = await connect();
  const [rows] = await connection.execute("SELECT * FROM employees");
  return rows;
};


const addDepartment = async (data) => {
  const connection = await connect();
  const [rows] = await connection.execute(
    `INSERT into departments (name) values(?)`,
    [data]
  );
  console.table(rows);
};
const addRole = async (data, deptId) => {
  const connection = await connect();
  const [rows] = await connection.execute(
    `INSERT into roles (title, salary, department_id) values(?, ?, ?)`, 
    [data.title, data.salary, deptId]
  );
  console.table(rows);
};


const addEmployee = async (data, roleId, employeeId) => {
  const connection = await connect();
  const [rows] = await connection.execute(
    `INSERT into employees (first_name, last_name, role_id, manager_id) values(?, ?, ?, ?)`, 
    [data.firstName, data.lastName, roleId, employeeId]
  );
  console.table(rows);
}



const createDepartmentDataHash = (rows) => {
  let hash = {};
  rows.forEach((row) => {
    hash[row.name] = row.id;
  });
  return hash;
};
const createRoleDataHash = (rows) => {
  let hash = {};
  rows.forEach((row) => {
    hash[row.title] = row.id;
  });
  return hash;
};
const getRoleTitles = (rows) => {
  let nameList = [];
  rows.forEach((row) => {
    nameList.push(row.title);
  });
  return nameList;
};
const createEmployeeDataHash = (rows) => {
  let hash = {};
  rows.forEach((row) => {
    hash[row.first_name + " " + row.last_name] = row.id;
  });
  hash["none"] = null;
  return hash;
};
const getEmployeeNames = (rows) => {
  let nameList = [];
  rows.forEach((row) => {
    nameList.push(row.first_name + " " + row.last_name);
  });
  nameList.push("none");
  return nameList;
};

module.exports = {
  getDepartmentData,
  getRoleData,
  getEmployeeData,
  addDepartment,
  createDepartmentDataHash,
  getDepartmentNames,
  addRole,
  createRoleDataHash,
  getRoleTitles,
  createEmployeeDataHash,
  getEmployeeNames,
  addEmployee,
};
