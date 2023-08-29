const { sendMail } = require("./scripts/mailer");
const osInfo = require("./scripts/node-os-info");
const { runService } = require("./scripts/run-service");


require('dotenv').config();


let time = 0;
let startRendering = false ;
setInterval(() => {
    osInfo.cpu(cpu => {
        const usage = Math.round(cpu * 100);
        if(usage === 100 && startRendering === false) startRendering = true ; 


        // ma yod5olou ila kif yibda ya3mil fil rendu
        // usage iwsil mara lil 100 
        if(startRendering === true) {
            if( 50 > usage ) {
                time += 1 ;
            } else {
                time = 0 ;
            }
            // time = second | 900 = 15 min
            if (time === 900) {
                sendMail();
                runService("restart_spawner.bat");
            } 
        }
        console.log("startRendering",startRendering);
        console.log("time",time);
        console.log("CPU: " + usage + "%");

    });
}, 1000); 