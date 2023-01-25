function getFruit() {
    var fruit = document.querySelector('input[name="fruit"]:checked').value;
    if(fruit == "pomme"){
      var subquestion = confirm("Aimez vous les pommes cuites ?");
      if(subquestion == true){
        alert("Bonne nouvelle, les pommes cuites sont délicieuses !");
      }else{
        alert("Les pommes crues sont aussi délicieuses !");
      }
    }if(fruit == "banane"){
      alert("En tant que " + fruit + ", vous devez créer une potion pour le roi, lui permettant de devenir immortel !");
    }if(fruit == "orange"){
      alert("En tant que " + fruit + ", le roi vous a confié une mission, vous devez tuer le dragon qui terrorise les habitants !");
    }else{
      alert("En tant que " + fruit + ", vous devez aider votre ami le Dragon en essayant de raisonner quiconque tenterait de s'en prendre à lui!");      
    }

  }

  // function animal() {
  //   var anim = document.querySelector('input[name="anim"]:checked').value;
  //   if(anim == "pomme"){
  //     var subquestion2 = confirm("Aimez vous les chiens ?");
  //     if(subquestion2 == true){
  //       alert("tu es un chien!");
  //     }else{
  //       alert("Les poissons sont mieux !");
  //     }
  //   }else{
  //     alert("Votre fruit préféré est " + anim);
  //   }
  // }
