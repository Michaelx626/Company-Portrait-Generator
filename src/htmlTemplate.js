const generateHTML = ({name}) =>
  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
    <title>Company Portrait Generator</title>
</head>
<body>
    <header class="d-flex justify-content-center text-white p-4 bg-success">
        <h1>${name}'s Team</h1>
    </header>
    
    <section class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center m-auto">
`;

const generateManager = ({managerName, managerID, managerEmail, officeNumber}) =>
`
        <div class="col">
            <div class="card h-100">
                <div class="card-body p-0">
                    <div class="card_title bg-primary w-100 p-3 text-white">
                        <h2>${managerName}</h2>
                        <h4>👑 Manager</h4>
                    </div>
                    <div class="card m-4">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${managerID}</li>
                            <li class="list-group-item">Email: <a href='mailto: ${managerEmail}' target='_blank'>${managerEmail}</a></li>
                            <li class="list-group-item">Office Number: ${officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
`;

const generateEngineer = ({engineerName, engineerID, engineerEmail, github}) =>
`
        <div class="col">
            <div class="card h-100">
                <div class="card-body p-0">
                    <div class="card_title bg-primary w-100 p-3 text-white">
                        <h2>${engineerName}</h2>
                        <h4>🖥 Engineer</h4>
                    </div>
                    <div class="card m-4">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${engineerID}</li>
                            <li class="list-group-item">Email: <a href='mailto: ${engineerEmail}' target='_blank'>${engineerEmail}</a></li>
                            <li class="list-group-item">GitHub: <a href='https://${github}' target='_blank'>${github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
`;

const generateIntern = ({internName, internID, internEmail, school}) =>
`
        <div class="col">
            <div class="card h-100">
                <div class="card-body p-0">
                    <div class="card_title bg-primary w-100 p-3 text-white">
                        <h2>${internName}</h2>
                        <h4>🎓 Intern</h4>
                    </div>
                    <div class="card m-4">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${internID}</li>
                            <li class="list-group-item">Email: <a href='mailto: ${internEmail}' target='_blank'>${internEmail}</a></li>
                            <li class="list-group-item">University: ${school}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
`;

const generateEnding = () =>
`
    </section> 
    <script src="../index.js"></script> 
</body>
</html>
`;

module.exports = {
  generateHTML,
  generateManager,
  generateEngineer,
  generateIntern,
  generateEnding
};