var form=document.getElementById("form");
var names=document.getElementById("name");
var pass=document.getElementById("password");
var error=document.getElementById("error");
var nameerror=document.getElementById("nameerror");
var namesuccess=document.getElementById("namesuccess");
var passicon=document.getElementById("passicon");
var passerror=document.getElementById("passerror");
var passsuccess=document.getElementById("passsuccess");


// name check
names.addEventListener("input",function(){
    if(names.value.trim()===""){
        nameerror.innerHTML="<li>Name Can't be Empty</li>";
        namesuccess.innerHTML="";
    }else{
        namesuccess.innerHTML="<li>Name Looks Good</li>";
        nameerror.innerHTML="";
    }
})



// password check
pass.addEventListener("input",function(){
    var passerrorstring="";
    if(pass.value.trim()===""){
        passerrorstring+="<li>Password Can't be Empty</li>";
        passsuccess.innerHTML="";
    }else{
        if(pass.value.trim().length<=8 || pass.value.trim().length>=16){
            passerrorstring+="<li>Password must more than 8 chars and Less than 16 chars </li>";
            passsuccess.innerHTML="";
        }
        if(!containsUpperCase(pass.value.trim())){
            passerrorstring+="<li>Password Must have atleast Single Uppercase</li>";
            passsuccess.innerHTML="";
        }
        if(!containsLowerCase(pass.value.trim())){
            passerrorstring+="<li>Password Must have atleast Single LowerCase</li>";
            passsuccess.innerHTML="";
        }
        if(!containsNumber(pass.value.trim())){
            passerrorstring+="<li>Password Must have atleast Single Number</li>";
            passsuccess.innerHTML="";
        }
        if (!isSpecialCharacters(pass.value.trim())) {
            passerrorstring += "<li>Password must contain only special characters</li>";
            passsuccess.innerHTML="";
        }
    }
    

    if(passerrorstring===""){
        passsuccess.innerHTML="<li>Password Looks Good</li>";
        passerror.innerHTML="";
    }else{
        passerror.innerHTML=passerrorstring;
        passsuccess.innerHTML="";
    }
});


form.addEventListener("submit",(e)=>{
    
    // console.log("helloaaaa");
    
if( namesuccess.innerHTML="Name Looks Good" && passsuccess.innerHTML=="<li>Password Looks Good</li>"){
    
}else{
    
    e.preventDefault();
    alert("Fill form properly");
    nameerror.innerHTML="Name Can't be Empty";
    namesuccess.innerHTML="";
    passerror.innerHTML="Password Can't be Empty";
    passsuccess.innerHTML="";
}
    
});



// password validation

function containsUpperCase(str) {
    return /[A-Z]/.test(str);
}

function containsLowerCase(str) {
    return /[a-z]/.test(str);
}

function containsNumber(str) {
    return /\d/.test(str);
}

function isSpecialCharacters(str) {
    // Check if the string contains only special characters
    return /[!@#$%^&*(),.?":{}|<>]/.test(str);

}

function showpass(){
    
    console.log('hello');
    if(pass.type==="password"){
        pass.type="text";
        passicon.classList.remove("fa-eye-slash");
        passicon.classList.add("fa-eye");

    }else{
        pass.type="password";
        passicon.classList.remove("fa-eye");
        passicon.classList.add("fa-eye-slash");
    }
}