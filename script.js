function vetor() {
    //declarando vetor
    // var comentarios = [
    //     document.getElementById('nome').value,
    //     document.getElementById('comentario').value,
    //     document.getElementById('comentarios'),
    //     document.getElementById('cor-texto').value,
    //     document.getElementById('cor-fundo').value

    //]
        var nome        =  document.getElementById('nome').value;
        var comentario  =  document.getElementById('comentario').value;
        var postagem    =  document.getElementById('comentarios');
        var corTexto    =  document.getElementById('cor-texto').value;
        var corFundo    =  document.getElementById('cor-fundo').value
      
        //exibir todos os valores em uma página de uma vez 
      
       postagem.innerHTML += '<div class="postagem" style="color: ' + corTexto + '; background-color: ' + corFundo + ';"><strong>' + nome + '</strong><hr /><br />' + comentario + '</div>';

       document.getElementById('nome').value = '';
       document.getElementById('comentarios').value = '';

    //    for (var i=0; i< nomes.length; i++) {
    //     document.getElementById('comentarios').innerHTML += nomes[i] + '<br />';
    //     }


       
    }
    // function vetor() {
    //     //declarando vetor
    //         var nomes = [
    //             document.getElementById('nome1').value,
    //             document.getElementById('nome2').value,
    //             document.getElementById('nome3').value,
    //             document.getElementById('nome4').value,
    //             document.getElementById('nome5').value
    //         ];
        
          
    //         // exibir todos os valores em uma página de uma vez 
          
    //        for (var i=0; i< nomes.length; i++) {
    //         document.getElementById('result').innerHTML += nomes[i] + '<br />';
    //        }
    //     }