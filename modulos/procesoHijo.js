const { exec, spawn } = require('child_process');

exec('ls', (err, stdout, stderr) =>{
    if(err){
        console.error(err)
        return false;
    }

    console.log(stdout);
})