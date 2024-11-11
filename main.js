const form = document.getElementById('meu-formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    

    var campoA = (document.getElementById('campoA').value);
    var campoB = (document.getElementById('campoB').value);
    var  successMessage = document.getElementById('message');

    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

    if (campoB > campoA) {
        successMessage.textContent = 'Formulário válido! Campo B é maior que o Campo A.';
        mensagem.classList.add("success-message");
    } else {
        successMessage.textContent = 'Erro: Número B deve ser maior que o Número A.';
        mensagem.classList.add(".error-message");
    }
});