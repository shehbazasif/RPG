function generate(){
    let dictionary=""
   if (document.getElementById ("lowercase").checked){
    dictionary+="qwertyuiopasdfghjklzxcvbnm"
   }
   if(document.getElementById("uppercase").checked){
    dictionary+="QWERTYUIOPASDFGHJKLZXCVBNM"
   }
   if (document.getElementById("digits").checked) { 
    dictionary += "1234567890"; 
} 
if (document.getElementById("specialsCb").checked) { 
    dictionary += "!@#$%^&*()_+-={}[];<>:"; 
}
const length=document.querySelector(
    'input[type="range"]'.value=password
)
[ 
    document.querySelectorAll( 
        'input[type="checkbox"], button.generate')
].forEach((elem) => { 
    elem.addEventListener("click", generate); 
}); 

}