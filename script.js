universe = window.prompt("Digite um universo DC ou Marvel ").toLowerCase().trim();
     hero =  window.prompt("Digite o nome de um heroi ").toLowerCase().trim();
     x = window.prompt("Digite o número de apariçoes ").trim();
        if(universe == "dc"){

    if(hero == "flash")
    {
        document.write("O seu heroi é <div class = flash>" + hero + "</div>"); 
    }
    else if(hero == "batman")
    {
        document.write("O seu heroi é <div class = batman>" + hero + "</div>"); 
    }
    else if(hero == "homem de ferro")
    {
        document.write("O seu heroi não pertense a esse universo"); 
    }
    else if(hero == "homem aranha")
    {
        document.write("O seu heroi não pertense a esse universo"); 
    }
    else{
        document.write("Heroi não pertence a esse universo");
    }
        }
        else if(universe == "marvel") {
    if(hero == "homem de ferro")
    {
        document.write("O seu heroi é <div class = homemdeferro>" + hero + "</div>"); 
    }
    else if(hero == "homem aranha")
    {
        document.write("O seu heroi é <div class = homemaranha>" + hero + "</div>"); 
    }
    else
    {
        document.write("Heroi não pertence a esse universo"); 
    }
        }
        for(n=1;n<x;n++){ 
            if(hero== "flash"){
            document.write("seu heroi é <div class = flash>" + hero + "</div>");
        }
        else if(hero=="batman"){
            document.write("seu heroi é <div class = batman>" + hero + "</div>");
        }
        else if(hero=="homem aranha"){
            document.write("seu heroi é <div class = homemaranha>" + hero + "</div>");
        }
        else if(hero=="homem de ferro"){
            document.write("seu heroi é <div class = homemdeferro>" + hero + "</div>");
        }
        
        }