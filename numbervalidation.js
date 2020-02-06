function validation(){
    let res=document.getElementById("ph").value
     if(res==""){
        document.getElementById("sp").innerHTML="please enter your phone number"
        return false
    }
    else if(res.length<10){
        document.getElementById("sp").innerHTML="not a valid phone number"
        return false
    }
    else if(res.length>10){
        document.getElementById("sp").innerHTML="phone number should be 10 digit"
        return false
    }
        else if(res.charAt(0)!=7&&res.charAt(0!=8)&&res.charAt(0)!=9){
            document.getElementById("sp").innerHTML="indian standard number should start with 7,8,or 9"
            return false
    }
}