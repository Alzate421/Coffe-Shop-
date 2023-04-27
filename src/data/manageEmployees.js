export const manageEmployees = {
    key: "employees",
  
    writeData(data) {
      localStorage.setItem(this.key, JSON.stringify(data));
    },

    save(employee) {
      const employees = this.getAll();
      if (employees) {
        localStorage.setItem(this.key, JSON.stringify([...employees, employee]));
      } else {
        localStorage.setItem(this.key, JSON.stringify([employee]));
      }
    },
  
    getAll() {
      return JSON.parse(localStorage.getItem(this.key));
    },
  
    findById(id) {
      const employee = this.getAll().find((employee) => employee.id == id);
      return !employee ? null : employee;
    },
  
    deleteById(id) {
      if (this.findById(id)) {
        const newEmployees = this.getAll().filter((employee) => employee.id !== id);
        this.writeData(newEmployees);
      }
      // throw new Error(`The empleoyee with id "${id}" does not exist`);
      // throw window.location.reload();
    },
  };
  