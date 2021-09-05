class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    this.option1.hide()
    this.option2.hide()
    this.option3.hide()
    this.option4.hide()

    background("yellow")

    textSize(32)
    text("Result of the quiz")

    getContestantInfo()

    if(allContestants !== undefined)
    fill("Blue")
    textSize(20)
    text("NOTE: Player who answered correctly are highlighted in green",130,230)

   for(var plr in allContestants){
    var correctAns = "2"
    if(correctAns === allContestants[plr].answer)
    fill("green")
    else
    fill("red")

   }

    
    
  }

}
