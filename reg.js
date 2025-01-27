

function sub(){
    
    
    let lov=" ";
    let emai="";
    let nu="";
    
    
    let ad="";
    if(sci.value==""){
        document.getElementById("sci").style.borderColor="red";
    }
    else{
        document.getElementById("sci").style.borderColor="black";

    }
    if(ttt.value==""){
        document.getElementById("ttt").style.borderColor="red";
    }
    else{
        document.getElementById("ttt").style.borderColor="black";

    }
    if(jt.value==""){
        document.getElementById("jt").style.borderColor="red";
    }
    else{
        document.getElementById("jt").style.borderColor="black";

    }
    if(si.value==""){
        document.getElementById("si").style.borderColor="red";
    }
    else{
        document.getElementById("si").style.borderColor="black";

    }
    if(sec.value==""){
        document.getElementById("sec").style.borderColor="red";
    }
    else{
        document.getElementById("sec").style.borderColor="black";

    }
    if(degree.value==""){
        document.getElementById("degree").style.borderColor="red";
    }
    else{
        document.getElementById("degree").style.borderColor="black";

    }
    if(inter.value==""){
        document.getElementById("inter").style.borderColor="red";
    }
    else{
        document.getElementById("inter").style.borderColor="black";

    }
    if(se.value==""){
        document.getElementById("se").style.borderColor="red";
    }
    else{
        document.getElementById("se").style.borderColor="black";

    }
    if(sc.value==""){
        document.getElementById("sc").style.borderColor="red";
    }
    else{
        document.getElementById("sc").style.borderColor="black";

    }

    if(skc.value==""){
        document.getElementById("skc").style.borderColor="red";
    }
    else{
        document.getElementById("skc").style.borderColor="black";

    }
    if(gt.value==""){
      
    document.getElementById("gt").style.borderColor="red";
    }
    else{
        document.getElementById("gt").style.borderColor="black";

    }
    if(add.value==""){
        ad="enter address";
        document.getElementById("ad").innerHTML=ad;
    document.getElementById("ad").style.color="red";
    document.getElementById("add").style.borderColor="red";
    document.getElementById("add").style.display="block";
    }

   
    
    

    
    if(n.value==""){
        nu="enter valid details ";
        document.getElementById("num").innerHTML=nu;
    document.getElementById("num").style.color="red";
    document.getElementById("n").style.borderColor="red";
    }
    if(e.value==""|| !e.includes("@")){
        emai="enter valid details ";
        document.getElementById("kj").innerHTML=emai;
    document.getElementById("kj").style.color="red";
    document.getElementById("e").style.borderColor="red";
    }
    
if(M.value==""){
    lov="enter valid details ";
    document.getElementById("kk").innerHTML=lov;
document.getElementById("kk").style.color="red";
document.getElementById("M").style.borderColor="red";

}


if (EJ.value == ""){
    
    document.getElementById("jj").innerHTML="enter valid details";
document.getElementById("jj").style.color="red";
document.getElementById("EJ").style.borderColor="red";


}




}
sub();
























