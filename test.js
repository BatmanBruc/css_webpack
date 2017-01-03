var fs=require('fs');
fs.stat(__dirname+'/src/full.less', function(err,stat){
    console.log(err,stat.ctime);
});

console.log(fs.statSync(__dirname+'/src/full.less'));