/** @format */

const records = [
  {
    name: "John Doe",
  },
  {
    name: "Narmadha",
  },
];

// Variable = Noun
// Method/Function = Verb

// function handleCreateRandomIdForUsers(records) {
//   return records.map((record) => {
//     return {
//       name: record.name,
//       id: Math.floor(Math.random() * 1000),
//     };
//   });
// }

const handleCreateRandomIdForUsers = (a, b) => {
  return a + b;
};

console.log(handleCreateRandomIdForUsers(10, 20));
