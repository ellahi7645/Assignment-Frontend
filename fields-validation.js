

function validateform(){
var name=document.myform.name.value;
var firstpassword=document.myform.password.value;
var secondpassword=document.myform.password2.value;
var x=document.myform.email.value;
var atposition=x.indexOf("@");
var dotposition=x.lastIndexOf(".");
var num=document.myform.num.value;

if (name==null || name==""){
  alert("Name can't be blank");
  return false;
}
if(firstpassword.length<6){
  alert("Password must be at least 6 characters long.");
  return false;
  }
  if(firstpassword!=secondpassword){
   alert("password must be same!");
  return false;
}

// if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
//   alert("Please enter a valid e-mail address");
//   return false;
//   }

if (isNaN(num)){
  alert("please enter valid phone number!");
  return false;
}
if(num.length<10){
  alert("Enter 10 digit phone number!");
  return false;
}
alert("Form Submitted successfully!");
  return true;

}
