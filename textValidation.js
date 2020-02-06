function validation(){
    let res=document.getElementById("ph").value
    if(res==""){
        document.getElementById("sp").innerHTML="please enter your name"
        return false
    }
    else if(res.length<3){
        document.getElementById("sp").innerHTML="name should be more than 3 character"
        return false
    }
    else if(res.length>=17){
        document.getElementById("sp").innerHTML="name should be less than 17 character"
        return false
    }
        else if(res.charAt(0)!=7&&res.charAt(0!=8)&&res.charAt(0)!=9){
            document.getElementById("sp").innerHTML="indian standard number should start with 7,8,or 9"
            return false
    }
}