// Generate the HTML texts output file.
module.exports = {
  generateHTML(team) {
    // Array to hold HTML text strings.
    const htmlArr = [];
    const htmlHeader = `
<!DOCTYPE html>
<html lang = "en">
<head>
  <meta charset = "UTF-8">
  <meta name = "viewport" content = "width = device-width, initial scale = 1.0">
  <meta http-equiv = "X-UA-Compatible" content = "ie = edge">
  <title>My Team</title>
  <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
  <link rel = "stylesheet" href = "../src/style.css">
</head>
<body>
  <div class = "titlebanner">
     <h1>My Team</h1>
  </div>
  <div class = "card-container">
  `;
   htmlArr.push(htmlHeader);

    // Loop through the teamProfileArr array to display the profile for each team member
    for (let i = 0; i < team.length; i++) {
      let teamMemberHtml = `
        <div class = "team-member-card">
           <div class = "team-member-card-top">
              <h2>${team[i].name}</h2>
              `;

      // Checks role to assign correct icon 
      if (team[i].getRole() === "Manager") {
        teamMemberHtml += `<h2 class="bi bi-cup">${team[i].getRole()}</h2>`;
      } else if (team[i].getRole() === "Engineer") {
        teamMemberHtml += `<h2 class="bi bi-lightbulb">${team[i].getRole()}</h2>`;
      } else if (team[i].getRole() === "Intern") {
        teamMemberHtml += `<h2 class="bi bi-eyeglasses">${team[i].getRole()}</h2>`;
      }

      teamMemberHtml += `
           </div>
           <div class = "team-member-card-bottom">
              <p><b>Employee ID:</b> ${team[i].id}</p>
              <P><b>Email:</b><br><a href = "mailto:${team[i].email}">${team[i].email}</a></p>
        `;

      // If Manager then display the office number
      if (team[i].officeNumber) {
        teamMemberHtml += `<p><b>Office Number:</b><br>${team[i].officeNumber}</p>`;
      }
      // If Engineer then display their GitHub
      else if (team[i].github) {
        teamMemberHtml += `<p><b>GitHub:</b><br><a href = "https://github.com/${team[i].github}">${team[i].github}</a></p>`;
      }
      // If Intern then display their school
      else if (team[i].getSchool()) {
        teamMemberHtml += `<p><b>School:</b><br>${team[i].getSchool()}</p>`;
      }

      teamMemberHtml += `
           </div>
        </div>
        `;
     htmlArr.push(teamMemberHtml);
    }

    const htmlFooter = `
  </div>   
</body>
</html>
`;
   htmlArr.push(htmlFooter);

    // Return the HTML text
    return htmlArr;
  },
};
