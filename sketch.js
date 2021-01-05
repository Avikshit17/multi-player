var count=0,State=0,CarAtEnd=0
var database
var player,game,form,allplayers
var car1,car2,car3,car4,cars=[]
var car1Image,car2Image,car3Image,car4Image,trackImage
function preload(){
car1Image=loadImage("car1.png")
car2Image=loadImage("car2.png")
car3Image=loadImage("car3.png")
car4Image=loadImage("car4.png")
trackImage=loadImage("track.jpg")
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    console.log(displayWidth)
    console.log(displayHeight) 
    database=firebase.database()
  game=new Game ()
  game.readGameState() 
  game.startTheGame()
}

function draw(){
    background("white");
    game.readGameState() 
    if(count==4)
    {
      game.writeGameState(1)
    }
    if(State==1)
    {
      game.playTheGame()
    }
}


