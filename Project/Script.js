// p=prompt("Enter your Subject (to prove that you are not a bot");
// p=["Python","python","C","C++","JavaScript","Javascript","HTML","html"];
// if (p)
// {alert("Enter a valid subject name") ;}
"use strict"
function collect()
{
    let nam=document.getElementById("name").value; 
    let group=document.getElementById("Group").value;
    let rol=document.getElementById("roll").value;
    let bro=document.getElementById("branch").value;
    let email=document.getElementById("mail").value;
    
    //Store Data
    localStorage.setItem("NAME",nam);
    localStorage.setItem("GROUP",group);
    localStorage.setItem("ROLL",rol);
    localStorage.setItem("BRANCH",bro);
    localStorage.setItem("MAIL",email);

console.log("The data is as "+ nam +" "+ group +" "+ rol+" "+ bro+" "+ email);
};


function hey(){

    collect();
    let p=prompt("Enter your Test subject name 👇 ");
    console.log(p);
    let arr=["Python","python","C","C++","JavaScript","Javascript","HTML","html","CSS"];
    let count=0;
    for(let i=0;i<9;i++)
    {
        if(p===arr[i])
        {count=0;break;}
        else
        count=1;
    }
    if(count===1){window.alert("Enter the correct subject"); hey();}
    localStorage.setItem("SUBJECT",p);
    console.log(p);
};


//Store Data

// //Get the data
// var n=localStorage.getItem("nam",nam);
// var g=localStorage.getItem("group",group);
// var r=localStorage.getItem("rol",rol);
// var br=localStorage.getItem("bro",bro);


