console.log("Hello world");


function set(){
    let i=0;
    setInterval(() => {
        console.log(i++);
    }, 1000);
}
set();