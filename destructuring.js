//object destructuring
const university = {
  name: "Ahsanullah University of Science and Tech",
  student: 7000,
  ugcApproved: true,
  department: ["Architechture", "BBA", "CSE", "Civil", "EEE", "Mechanical"],
  location: {
    street: "142-143 Love Road",
    area: "Tejgaon",
    district: "Dhaka",
    country: "Bangladesh",
  },
};

const { name, student, ugcApproved } = university;
const { area, country } = university.location;
console.log(name, student, ugcApproved, country, area);
// array destructuring
