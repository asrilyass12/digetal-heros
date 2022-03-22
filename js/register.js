var next_click=document.querySelectorAll(".next_btn");
var prev_click=document.querySelectorAll(".prev_btn");
var sbmt_click=document.querySelectorAll(".sbmt_btn");
var main_page=document.querySelectorAll(".main");
var p_bar =document.querySelectorAll(".progres_bar li");
var written_name=document.querySelector(".written_name");
var shown_name=document.querySelector(".shown_name");

let formnumber=0;

var passeye=document.querySelector(".password_eye");
var pass_type=document.querySelector(".pass_type");
var set_pass=document.querySelector(".password_eye");

var confirm_passeye=document.querySelector(".con_eye");
var confirm_pass_type=document.querySelector(".confirm_pass_type");
var confirm_set_pass=document.querySelector(".con_eye");

var tick=document.querySelector(".agree span");
tick.addEventListener('click',function(){
tick.classList.toggle('agree_green');
});

var tick_green=document.querySelector(".agree_submit span");
tick_green.addEventListener('click',function(){
tick_green.classList.toggle('agree_submit_green');
});


passeye.addEventListener('click',function(){

if(pass_type.type=="password"){
pass_type.type="text";
set_pass.classList.remove('fa-eye-slash');
set_pass.classList.add('fa-eye');
}
else{
pass_type.type="password";
set_pass.classList.add('fa-eye-slash');
set_pass.classList.remove('fa-eye');
}
});


confirm_passeye.addEventListener('click',function(){

if(confirm_pass_type.type=="password"){
confirm_pass_type.type="text";
confirm_set_pass.classList.remove('fa-eye-slash');
confirm_set_pass.classList.add('fa-eye');
}
else{
confirm_pass_type.type="password";
confirm_set_pass.classList.add('fa-eye-slash');
confirm_set_pass.classList.remove('fa-eye');
}
});



next_click.forEach(function(btn){
btn.addEventListener('click',function(){
if(!validate_form()){
return false;
}
formnumber++;
update_form();
progress_forward();
});
});

prev_click.forEach(function(btn){
btn.addEventListener('click',function(){
formnumber--;
update_form();
progress_backward();
});
});

sbmt_click.forEach(function(btn){
btn.addEventListener('click',function(){
if(!validate_form()){
return false;
}
formnumber++;
update_form();
shown_name.innerHTML=written_name.value;
});
});

function progress_forward(){
p_bar[formnumber].classList.add('active');
}

function progress_backward(){
var f_num = formnumber+1;
p_bar[f_num].classList.remove('active');
}



function update_form(){
main_page.forEach(function(main_pages){
main_pages.classList.remove('active');
});
main_page[formnumber].classList.add('active');
}

function validate_form(){
var validate=true;
var all_inputs=document.querySelectorAll(".main.active input");
all_inputs.forEach(function(inpt){
inpt.classList.remove('warning');
if(inpt.hasAttribute("require")){
if(inpt.value.length=="0"){
validate=false;
inpt.classList.add('warning');
}
}
});
return validate;
}