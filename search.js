
    
    var text=process.argv.slice(3,4);
    var ext=process.argv.slice(2,3);

if(text==""||ext=="")
{
    console.log("USAGE: node search [EXT] [TEXT]");

}
else
{
    var find = require('find');
    var str,i;
    find.file(text+'.'+ext,__dirname, function(files) {
        if(files=="")
        {
            console.log("No file was found");
        }
        else
        {
            str=files;
            for(i=0;i<str.length;i++)
            {
                console.log("C:"+str[i]);

            }
            

        }
    })
}





