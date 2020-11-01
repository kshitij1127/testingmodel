//Create variables here
      var dog,happydog,database,foodS,foodStock,dogimg,happydogimg,milkbottle,feed,addStock,food,lastFed,fedTime

      function preload()
      {
        //load images here
        dogimg = loadImage("images/dogImg1.png")
        happydogimg = loadImage("images/dogImg.png")
      
      }


      

      function setup() {
        createCanvas(1000, 400)
        database = firebase.database();
        food = new Food()
        foodStock = database.ref('Food')
        foodStock.on("value",readStock)

        dog = createSprite(200,200)
        dog.addImage(dogimg)
        dog.scale = 0.3
      
      

        feed = createButton("Feed The Dog")
      feed.position(700,95)
      feed.mousePressed(feedDog)

      addStock  = createButton("Add Food")
      addStock.position(800,95)
      addStock.mousePressed(addFood)



        
      }


      function draw() {  
      background(46,139,87)


      food.display()

    //  fedTime = database.ref('FeedTime')
     // fedTime.on("value",function(data){
      //  lastFed = data.val();
   //   })
//



      if(lastFed >= 12){
        text("last feed : " + lastFed%12 + "PM",350,30)
      }else if(lastFed === 0){
        text("last feed : 12AM",350,30)
      }else{
        text("last feed : " + lastFed + "AM",350,30)
      }



      stroke(0,100,255)
      strokeWeight(5)
      text("food stock : " + foodS,50,50)
      textSize(20)
      stroke(255,0,0)
      strokeWeight(7)
      text("press the up arrow to feed the hungry dog !",10,300)
        drawSprites();
        //add styles here

      }







      function readStock(data){
      foodS = data.val();
      food.updateFoodStock(foodS)
      }





      function writeStock(x){
        if(x <= 0){
        x = 0
        
        }else{
          x = x-1
        }
      database.ref('/').update({
        Food : x
      })

      stroke(255,255,254)
      strokeWeight(5)
      textSize(15)


      }







      function feedDog(){


      dog.addImage(happydog)
      food.updateFoodStock()-1
      database.ref('/').update({
        foodStock : food.updateFoodStock()-1,
        FeedTime : hour()
      })


      }


      //food.getFoodStock()-1

      function addFood(){
        foodS++
        database.ref('/').update({
          Food : foodS
        })

        
      }



