const generatePage = (Christian, Chis517) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${Christian}</h1>
    <h2><a href="https://github.com/${Chis517}">Github</a></h2>
  </body>
  </html>
  `;
};

module.exports = generatePage;