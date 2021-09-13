class Form {
  constructor() {
    this.input = createInput("Email");
    this.play = createButton('PLAY');
   
    this.play.attribute('disabled','');  

    this.rule = createImg('img/ruleImg.png')
    this.me = createImg('img/Asmi.jpg')
  }
  reappear(){
    this.play.show();
    this.input.show();     
    hero.visible = true;
    heroin.visible = true;
    song.visible = true;
    movie.visible = true;
    this.rule.show()
    this.me.show()
  }
  display(){
    this.rule.position(windowWidth/2 - 200 , windowHeight/2 + 50)
    this.rule.size(100,50)
    this.rule.mousePressed(()=>{
      swal(
        {          
          title : 'rules',
          imageUrl: 'img/pdf.png',
          imageSize: "350x450",
          confirmButtonText: "OK"
        },
        function(isConfirm) {
          if (isConfirm) {
            location.reload();
          }
        }
      );
    }) 
    this.me.position(windowWidth/2 + 120 , windowHeight/2 + 40)
    this.me.size(70,70)
    this.me.mousePressed(()=>{
      swal(
        {          
          title : 'Know me',
          imageUrl: 'img/me.png',
          imageSize: "390x500",
          confirmButtonText: "OK"
        },
        function(isConfirm) {
          if (isConfirm) {
            location.reload();
          }
        }
      );
    }) 

    this.input.position(windowWidth/2 - 80 , windowHeight/2 + 30);
    this.input.size(160,20)
    this.play.position(windowWidth/2 - 80, windowHeight/2 + 70);
    this.play.size(165,50)
    this.play.style("fontSize","large")
    this.play.style("backgroundColor","#c5397d")
    this.play.style("color","white")
    //userId = this.input.value()    
    
    this.play.mousePressed(()=>{
      gameState = 1;
      form2 = new Form2()
      form2.getData()
      
    }) 
  }
  hide(){
    this.input.hide();
    this.play.hide();
    hero.visible = false;
    heroin.visible = false;
    song.visible = false;
    movie.visible = false;
    this.rule.hide()
    this.me.hide()
  }
  //Function to validate if its an email address
  validation(inputText){
    var mailformat = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if(inputText.match(mailformat)) {
      this.play.removeAttribute('disabled');  
      return true;
    }
    else{
      alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address    
      return false;
    }
  }
  
  async update(id){
    var doc_id 
    await db.collection("Players").where("email", "==", id)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            doc_id = doc.id
            db.collection("Players").doc(doc_id).update({q_id: qid,score:points});
        });
   })
   if(form2){
     form.reappear()
     form2.hide()
     gameState = 0
   }
  }
}
