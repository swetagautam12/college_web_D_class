let pr1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved")
    },1000)

})

function fetchData(){
    let x =pr1;
    console.log(x);
}

fetchData();


i