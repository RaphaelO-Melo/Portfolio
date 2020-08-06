/*
 *
 *   +------------------------------------------------------------------------+
 *   |   Script responsável por mandar um email através do serviço EmailJS    |
 *   |                                                                        |
 *   |   @author: Raphael Melo                                                |
 *   +------------------------------------------------------------------------+
 * 
 * 
*/

const USER_ID = 'user_9GLWJP8Qmj8ZNcgeBHgwz',    //ID da conta no EmaijJS
      SERVICE_ID = 'outlook',                    //Serviço escolhido
      TEMPLATE_ID = 'template_U3rkW7Ot';         //Modelo do email


function sendEmail(){
    //Email válido ? 
    if(verifyForm()){
        //Coleta infos do formulário
        let email = {
         
            email : document.getElementById('email').value,
            subject : document.getElementById('subject').value,
            message : document.getElementById('message').value
        }
        //Inicia usuário
        emailjs.init(USER_ID);
        //Tenta enviar email
        emailjs.send(SERVICE_ID, TEMPLATE_ID, email)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });

        clearInputs();
    }
}

function verifyForm(){
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if(email != null && email != ''){
        if(subject != null && subject != ''){
            if(message != null && message != ''){
                return true;
            }
        }
    }
    return false
}

function clearInputs(){
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}