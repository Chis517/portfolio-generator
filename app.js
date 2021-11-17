const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [Christian, Chis517] = profileDataArgs;

fs.writeFile('index.html', generatePage(Christian, Chis517), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});


// Module 9.1 Reference
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//   }
//   console.log('===========');

//   // is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);