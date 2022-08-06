const university = {
  name: "Ahsanullah University of Science and Technology",
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
    //accessing nested object property
    // console.log("Address: " + this.location.street);
    const info = `${this.name} has ${this.student} students.`;
    return info;
  },
};

const templateString = `${university.method()} 
${university.name} has ${200 * 8} students
in the department of ${university.department[4]}.
`;
console.log(templateString);
