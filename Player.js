class Player
{
    constructor()
    {
this.name=null
this.position=null
this.distance=0
this.rank=null
    }
    readCount()
    {
        var playerCount=database.ref('playerCount')
        playerCount.on("value",function(data)
        {
           count=data.val() 
        })
    }
writeCount(pc)
{
    database.ref('/').update({
        'playerCount':pc

    })
}
namePlayer()
{
    var f="allplayers/player"+this.position
    database.ref(f).set({
        'name':this.name,
        'distance':this.distance,
        'rank':this.rank

    })
}
static readAllPlayers()
{
    var allPlayers=database.ref('allplayers')
    allPlayers.on("value",function(data)
    {
       allplayers=data.val() 
    })   
}
static updateCarsAtTheEnd(cars)
{console.log("bye")
    database.ref('/').update({
        'carsAtTheEnd':cars

    })
}
static readCarsAtTheEnd()
    {
        var carsAtTheEnd=database.ref('carsAtTheEnd')
        carsAtTheEnd.on("value",function(data)
        {
           CarAtEnd=data.val() 
        })
    }

}