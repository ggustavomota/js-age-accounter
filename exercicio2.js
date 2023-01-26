function verify(){
    //Dados idade:
    var year = document.querySelector("#inputyear");
    var convert1 = Number.parseInt(year.value);
    
    var systemdate = new Date()
    var date = systemdate.getFullYear()
    var convert2 = Number.parseInt(date)
    var ageaccount = convert2 - convert1
    //Dados sexo:
    var genderM = document.querySelector("#man");
    var genderF = document.querySelector("#woman")
    //Dados adicionais:
    var res = document.querySelector("#aswer")
    var kid = 'child'
    var img = document.querySelector("#imggndr")

    if(genderM.checked == true){

        img.style.height = '250px' //Ou poderiamos usar "document.createElement('')" no js
        img.style.width = '250px' //Definindo o id como var.setAttribute('id', 'nomedaid'). Vale para class, src e etc.
        //E teriamos que usar elemento.appendChild(var) para aplicar um elemento abaixo de outro(no caso o filho(child, abaixo de pai(parent)))
        var change = res.innerHTML = `You are ${ageaccount} years old man!`;

        if(ageaccount >= 150 || ageaccount <= 0){
            change = res.innerHTML = 'ERROR: The year inserted is invalid.'
        }

        if(ageaccount < 13 && ageaccount > 0){
            img.src = 'img/malechild.jpg';
            change = res.innerHTML = `You are ${ageaccount} years old ${kid}!`;
        }

        if(ageaccount >= 13 && ageaccount < 20){
            img.src = 'img/teenagermale.jpg';
        }

        if(ageaccount >= 20 && ageaccount < 60){
            img.src = 'img/adultmale.jpg';
        }

        if(ageaccount >= 60 && ageaccount < 150){
            img.src = 'img/oldmale.jpg';
        }
    }
    else if(ageaccount < 13 && ageaccount > 0){
        img.src = 'img/femalechild.jpg';
        change = res.innerHTML = `You are ${ageaccount} years old ${kid}!`;
    }
    
    else if(ageaccount >= 13 && ageaccount < 20){
        img.src = 'img/teenagerfemale.jpg';
        change = res.innerHTML = `You are ${ageaccount} years old woman!`
    }

    else if(ageaccount >= 20 && ageaccount < 60){
        img.src = 'img/adultwoman.jpg';
        change = res.innerHTML = `You are ${ageaccount} years old woman!`
    }
    
    else{
        img.src = 'img/oldfemale.jpg';
        change = res.innerHTML = `You are ${ageaccount} years old woman!`
    }   
    }
  