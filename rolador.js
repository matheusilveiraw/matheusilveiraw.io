

function rolardados() { 

    var valorDadosS = window.document.getElementById('vdados')
    var numeroDadosS = window.document.getElementById('ndados')
    var container = window.document.getElementById('areadados') 

    /*alert(valorDadosString.value)
    alert(numeroDadosString.value)*/

    var valorDados = Number(valorDadosS.value) //aqui pega o valor de fato
    var numeroDados = Number(numeroDadosS.value)

    

    //criar uma div para fazer a forma do dado
    if (numeroDados > 0 && valorDados > 0) { 
        container.innerHTML = ' '
        for(var i = 0; i < numeroDados; i++ ) {
                var dadoAtual = Math.floor(Math.random() * valorDados) + 1 //para conseguir um valor aleatorio inteiro
                //alert(dadoAtual)
                //container.innerHTML += dadoAtual + " " //essa é a linha estavas dando certo, não perder ela
                var formaDado = document.createElement('div')
                formaDado.setAttribute('class', 'dado')
                formaDado.setAttribute("style", "line-height: 50px; width: 50px; height: 50px; border: black solid 5px; text-align: center; background-color: lightgoldenrodyellow; font-weight: 900; margin: 5px;")

                formaDado.textContent = dadoAtual;
            //<div class="quadrados"> </div>
                container.appendChild(formaDado)

        }

    } else { 
        alert('Erro! Os valores precisam ser maiores que zero!')
    }


}