import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {message:"Enter the web URL here!!",
    name:"URL"}
   
  ])
  .then((answers) => {
   const url = answers.URL;
   console.log(url)
    
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`${url}.png`));

  });
  