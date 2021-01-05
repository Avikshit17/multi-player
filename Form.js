class Form 
{
    constructor()
    {
        this.heading=createElement('h2') 
        this. input=createInput("enter the name")
        this.button=createButton("play")
        this.greating=createElement('h2')
        this.resetButton=createButton("reset")
    }
    hide()
        {
this.input.hide()
this.button.hide()
this.greating.hide()
        }
    
    display()
    {
        console.log("display")
     
     this. heading.html("car racing game")
      this.heading.position(displayWidth-1000,displayHeight-850)
      
     
     this. input.position(displayWidth-1000,displayHeight-500)
     this.resetButton.position((displayWidth-1000,displayHeight-100))
     this. button.position(displayWidth-1000,displayHeight-400)
      this.button.mousePressed(()=>{
          player.name=this.input.value()
          count=count+1
          player.position=count
          player.writeCount(count)
          player.namePlayer()
          this.input.hide()
         this. button.hide()
         
          this.greating.html("hello "+player.name)
         this. greating.position(displayWidth-1000,displayHeight-200)
      })
      this.resetButton.mousePressed(()=>{
       game.writeGameState(0)   
       player.writeCount(0)
       var c=database.ref("allplayers")
       c.remove() 
      })
    }
}