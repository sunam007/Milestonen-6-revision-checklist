//Declare an object which has atleast 5 properties (number,string,boolean,array, object,method that will return a property);

const university = {
  name: "Ahsanullah University of Science and Tech",
  student: 7000,
  department: ["Architechture", "BBA", "CSE", "Civil", "EEE", "Mechanical"],
  ugcApproved: true,
  location: {
    street: "142-143 Love Road",
    area: "Tejgaon",
    district: "Dhaka",
    country: "Bangladesh",
  },

  method: function () {
    const info = `${this.name} has ${this.student} students.`;
    return info;
  },
};

const statement = university.method();
console.log(statement);
