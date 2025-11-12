const URL=" http://universities.hipolabs.com/search?country=India"


const inp= document.getElementById('inp');
const btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    const API=URL+inp.value;
    console.log(API);
    fetch(API);
})

const container = document.getElementById("container");
fetch(URL)
.then(data =>){
    console.log("Fetched Data:",data);
    

}
