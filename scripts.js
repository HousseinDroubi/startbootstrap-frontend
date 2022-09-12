// All inputs
const input_full_name = document.getElementById("input_full_name");
const input_email = document.getElementById("input_email");
const input_phone_number = document.getElementById("input_phone_number");
const input_message = document.getElementById("input_message");
const btn_send = document.getElementById("btn_send");
// All paragraphs used for exceptions and by default no exceptions caught
const input_full_name_exception = document.getElementById("input_full_name_exception");
const input_email_exception = document.getElementById("input_email_exception");
const input_phone_number_exception = document.getElementById("input_phone_number_exception");
const input_message_exception = document.getElementById("input_message_exception");

let checkEntries = (e) =>{
    // Return all exceptions' paragrapghs to default value which is ''
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
    let valid_email = false;
    if(input_email.value.includes('@')){
        let array_email=input_email.value.split('@');
        if(array_email[0].length>=3 && array_email[1].length>=5){
            valid_email=true;
        }
    }
    if(input_email.value==''){
        input_email_exception.innerText='Required*';
    }
    else if(!valid_email){
        input_email_exception.innerText='Invalid email';
    }

    // Check phone number if valid
    let valid_number = false;
    if(input_phone_number.value.startsWith('+961')){
        let array_number = input_phone_number.value.split('+961');
        if((array_number[1].startsWith('3') && array_number[1].length==7) ||
         (!array_number[1].startsWith('3') && array_number[1].length==8)){
            valid_number=true;
        }
    }
    if(input_phone_number.value==''){
        input_phone_number_exception.innerText='Required*';
    }else if(!valid_number){
        input_phone_number_exception.innerText='Invalid phone number';
    }

    // Check message text if valid
    if(input_message.value==''){
        input_message_exception.innerText='Required*';
    }else if(input_message.value.length<100){
        input_message_exception.innerText='Message text must be more than 100 characters';
    }
}

btn_send.addEventListener("click",checkEntries);