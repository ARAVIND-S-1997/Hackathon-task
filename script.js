
document.body.innerHTML=`<section class="list"> pokemon </section> 
<img src="https://play-lh.googleusercontent.com/jRKLgsCxR-jPnDBogDgx2Vj2MXy0_jBhhEcGJmmCjSnScUYabjSLEyAvnCmwmiNBXw">`;
async function pokemon(){
    const data=await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const users=await data.json();
    const usercontainer=document.querySelector(".list"); 
   users.forEach(user => {
    usercontainer.innerHTML += `
    <h1>${user.name}</h1>`;  
   });
console.log(users);
}
pokemon();



