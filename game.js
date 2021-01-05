class Game
{
    constructor()
    {

    }
    readGameState()
    {
        var gamestate=database.ref('gameState')
        gamestate.on("value",function(data)
        {
          State =data.val() 
        })
    }
    writeGameState(a)
    {
        database.ref('/').update({
            'gameState':a
    
        })
    }
    startTheGame()
    {
        console.log(State)
        if(State==0)
        {
            console.log("hi")
            form=new Form()
            player=new Player()
            player.readCount()
            form.display()
        }
        car1=createSprite(500,200,20,20)
        car2=createSprite(600,200,20,20)
        car3=createSprite(700,200,20,20)
        car4=createSprite(800,200,20,20)
        car1.addImage(car1Image)
        car2.addImage(car2Image)
        car3.addImage(car3Image)
        car4.addImage(car4Image)
        cars.push(car1)
        cars.push(car2)
        cars.push(car3)
        cars.push(car4)
        console.log(cars)
    }
    playTheGame()
    {
        form.hide()
        Player.readAllPlayers()
        Player.readCarsAtTheEnd() 
        image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
        
        var x=480
        var y=0
        var i=0
        for(var p in allplayers)
        {
           
            cars[i].x=x
         cars[i].y=displayHeight-allplayers[p].distance;
         x=x+200
         if(i+1==player.position)
         {
             camera.position.x=displayWidth/2
             camera.position.y=cars[i].y
         }
         i=i+1  
        }
        drawSprites()
        if(keyIsDown(UP_ARROW))
        {
            player.distance=player.distance+50
            player.namePlayer()
        }
        if(player.distance>5000)
        {
        State=2
          player.rank=CarAtEnd+1 
          player.namePlayer()
          Player.updateCarsAtTheEnd(player.rank)
        }

    }
}