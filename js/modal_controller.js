function showModal(success){    
    //TODO: Personalizar modal de acordo com o estado recebido
    
    //Título
    let header = document.getElementById('modalHeader');
    let title = document.getElementById('modalLabel');

    success ? header.className = 'modal-header text-success' : header.className = 'modal-header text-danger';
    success ? title.innerHTML = 'Email enviado com sucesso!' : title.innerHTML = 'Erro ao tentar enviar o email!';

    //Descrição
    let text = document.getElementById('modalBody');
    success ? text.innerHTML = 'Obrigado por entrar em contato, em breve enviarei uma resposta :)' : text.innerHTML = 'Por favor, preencha todos os campos para poder enviar um email válido.';

    //Botão
    let button = document.getElementById('modalBtn');
    success ? button.innerHTML = 'Voltar' : button.innerHTML = 'Voltar e corrigir';
    success ? button.className = 'btn btn-success' : button.className = 'btn btn-danger';

    //Exibir modal
    $('#modalGravacao').modal('show');
}