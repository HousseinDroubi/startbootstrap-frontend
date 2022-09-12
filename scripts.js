// All inputs
const input_full_name = document.getElementById("input_full_name");
const input_email = document.getElementById("input_email");
const input_phone_number = document.getElementById("input_phone_number");
const input_message = document.getElementById("input_message");
const btn_send = document.getElementById("btn_send");
// All paragraphs used for exceptions and by default no exception caught
const input_full_name_exception = document.getElementById("input_full_name_exception");
const input_email_exception = document.getElementById("input_email_exception");
const input_phone_number_exception = document.getElementById("input_phone_number_exception");
const input_message_exception = document.getElementById("input_message_exception");

let checkEntries = (e) =>{
    // Return all exceptions to default value which is ''
    input_full_name_exception.innerText='';
    input_email_exception.innerText='';
    input_phone_number_exception.innerText='';
    input_message_exception.innerText='';

    // Check full name if valid
    if(input_full_name.value==''){
        input_full_name_exception.innerText='Required*';
    }
    else if(input_full_name.value.length<5){
        input_full_name_exception.innerText='Full name must be more than 5 charachters';
    }
    // Check email if valid
    let valid = false;
    if(input_email.value.includes('@')){
        let array=input_email.value.split('@');
        if(array[0].length>=3 && array[1].length>=5){
            valid=true;
        }
    }
    if(input_email.value==''){
        input_email_exception.innerText='Required*';
    }
    else if(!valid){
        input_email_exception.innerText='Invalid email';
    }
}

btn_send.addEventListener("click",checkEntries);