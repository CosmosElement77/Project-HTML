// p=prompt("Enter your Subject (to prove that you are not a bot");
// p=["Python","python","C","C++","JavaScript","Javascript","HTML","html"];
// if (p)
// {alert("Enter a valid subject name") ;}


function hey()
{
const nam=document.getElementById("name").value; 
const group=document.getElementById("Group").value;
const rol=document.getElementById("roll").value;
const bro=document.getElementById("branch").value;
let p=prompt("Enter your Test subject name(to prove that you are not a bot !) :");


//Store Data
localStorage.setItem("NAME",nam);
localStorage.setItem("GROUP",group);
localStorage.setItem("ROLL",rol);
localStorage.setItem("BRANCH",bro);
localStorage.setItem("SUBJECT",p);

// //Get the data
// var n=localStorage.getItem("nam",nam);
// var g=localStorage.getItem("group",group);
// var r=localStorage.getItem("rol",rol);
// var br=localStorage.getItem("bro",bro);


}
