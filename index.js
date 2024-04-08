// Write your solution in this file!

let employee = {
    name: " Kinyajui",
    streetAddress: " 48 Riverside lane"
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    let updateEmployee = { ...employee};
    updateEmployee [ key] = value;
    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue( employee, key, value) {
   employee[key] = value;
   return employee;
}

function deleteFromEmployeeByKey(employee, key, value)  {
     let deleteFromEmployee = {...employee}
    delete deleteFromEmployee[key];
  
  return deleteFromEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
  }