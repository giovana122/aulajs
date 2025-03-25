function exercicio03() {

    let valor, taxa, tempo, resultado;

    valor = Number(document.getElementById("valor").value);
    taxa =  Number(document.getElementById("taxa").value);
    tempo = Number(document.getElementById("tempo").value);

    resultado= valor + (valor * (taxa*taxa/100) * tempo );

    document.getElementById("mensagem").innerHTML="<p style='color: blue'>" +
                                        "Valor final é " + resultado + 
                                        
"<br> valor= " + taxa +

"<br> taxa= " + taxa +

"<br> taxa= " + tempo ;

}
