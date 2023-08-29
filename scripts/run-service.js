const childProcess = require("child_process");
require("dotenv").config();

exports.runService = (serviceName) => {
    const SERVICE_DIRECTORY = process.cwd() + "\\service\\";
    const bash_run = childProcess.spawn(
        "cmd.exe",
        ["/c", SERVICE_DIRECTORY + serviceName],
        { env: process.env }
    );
    bash_run.stdout.on("data", function (data) {
        console.log("stdout: " + data);
        console.log(SERVICE_DIRECTORY + serviceName)
    });
    bash_run.stderr.on("data", function (data) {
        console.log("stderr: " + data);
        console.log(SERVICE_DIRECTORY + serviceName)
    });
    bash_run.on("exit", function (code) {
        console.log("child process exited with code " + code);
    });
};
