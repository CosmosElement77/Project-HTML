function hello()
{let p=window.prompt("Are you sure that you have read the term and conditions ?",["YES"+"/"+"NO"]);

if(p=="YES" || p=="yes" ||p=="Yes")
{let re=confirm("Are you sure ?");
    if (re==true)
    {window.location("Load.html");}
    if (re==false)
    {hello();}
}
else if(p=="NO" || p=="no" ||p=="No" || p=="")
{document.write("You have to Agree to the Instructions !")+hello()};

}
