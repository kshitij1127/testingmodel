class Food{
    constructor(){
     this.foodStock =20
    this.lastFed
    this.milkbottle = loadImage("images/milk.png")
    }

   
    getFoodStock(){
    return this.foodStock

    }

   

    deductFoodStock(){
     if(this.foodStock > 0){
       this.foodStock = this.foodStock - 1
     }
    }



    updateFoodStock(foodStock){
        this.foodStock = foodStock
     }




    display(){
        var x = 80
        var y = 100
        image(this.milkbottle,20,200,50,50)
        if(this.foodStock != 0){
         for(var i = 0 ; i <this.foodStock ; i++){
             if(i%10 === 0){
              x = 80
              y = y+50
             }
             image(this.milkbottle,x,y,50,50)
            x = x+30
         }
        }
        
    } 
}