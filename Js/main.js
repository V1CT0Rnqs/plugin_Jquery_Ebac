$(document).ready(function () {
    // Configuração do slider com autoplay
    $('#carousel-images').slick({
        autoplay: true,
    });

    // Aplicar máscara ao telefone no formato (00) 00000-0000
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    // Aplicar máscara ao CPF no formato 000.000.000-00 com placeholder
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    // Aplicar máscara ao CEP no formato 00000-000 com placeholder
    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });
});

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        }
    },
    messages: {
        nome: 'Por favor, insira o seu nome',
        email: 'Por favor, insira um e-mail válido',
        telefone: 'Por favor, insira o seu telefone',
        endereco: 'Por favor, insira o seu endereço',
        cep: 'Por favor, insira o seu CEP',
        cpf: 'Por favor, insira o seu CPF'
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();  // Reinicia o formulário após envio
    },
    invalidHandler: function (event, validador) {
        let invalidFields = validador.numberOfInvalids();  // Número de campos inválidos
        if (invalidFields) {
            alert(`Por favor, preencha ${invalidFields} campos para prosseguir com a compra!`);
        }
    }
});