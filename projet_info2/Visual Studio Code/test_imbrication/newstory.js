function newstory() {
    var perso = document.querySelector('input[name="perso"]:checked').value;
    if(perso == "sorciere"){
      document.getElementById("question_1").style.display = "block";
    //   var subquestion = confirm("Etes vous une sorcière maléfique ?");
    //   if(subquestion == true){
    //     alert("Bonne nouvelle, vous pouvez mangez tous les habitants !");
    //   }else{
    //     alert("Vous etes une gentille sorcière!");
    //   }
    }if(fruit == "guerrier"){
        document.getElementById("question_2").style.display = "block";
    //   alert("En tant que " + perso + ", vous devez créer une potion pour le roi, lui permettant de devenir immortel !");
    }if(fruit == "dragon"){
        document.getElementById("question_3").style.display = "block";
    //   alert("En tant que " + perso + ", le roi vous a confié une mission, vous devez tuer le dragon qui terrorise les habitants !");
    }else{
        document.getElementById("question_4").style.display = "block";
    //   alert("En tant que " + perso + ", vous devez aider votre ami le Dragon en essayant de raisonner quiconque tenterait de s'en prendre à lui!");      
    }

  }