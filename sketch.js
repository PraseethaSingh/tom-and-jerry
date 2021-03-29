var garden,gardenimg,cat,catimg,mouse,mouseimg,cat_walking,mouse_tease,mousestuck,catstuck;
function preload() {
    //load the images here
    gardenimg = loadImage("images//garden.png") 
    catimg = loadAnimation("images//cat1.png")
    mouseimg = loadImage("images//mouse1.png")
    cat_walking=loadAnimation("images//cat2.png","images//cat3.png")
    mouse_tease=loadAnimation("images//mouse2.png","images//mouse3.png")
    mousestuck=loadAnimation("images//mouse4.png")
    catstuck=loadAnimation("images//cat4.png")
}

function setup(){
    createCanvas(600,500);
    //create tom and jerry sprites here
    garden = createSprite(300,250)
    garden.addImage(gardenimg)
   garden.scale = 1;

   cat = createSprite(520,380)
   cat.addAnimation("sleep",catimg)
   cat.scale = 0.13;
   cat.addAnimation("walking",cat_walking)
   cat.addAnimation("collided",catstuck);

   mouse = createSprite(100,380);
   mouse.addAnimation("stand",mouseimg);
   mouse.scale = 0.1;
  mouse.addAnimation("tease",mouse_tease);
  mouse.addAnimation("stuck",mousestuck);
 
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   if (cat.x-mouse.x < mouse.width/2+cat.width/2 && mouse.x-cat.x < mouse.width/2+cat.width/2){
       mouse.changeAnimation("stuck",mousestuck);
       cat.velocityX = 0
       cat.changeAnimation("collided",catstuck);


     }

    if(keyDown("left")){
        keyPressed()
    }

    drawSprites();
}


function keyPressed(){
    cat.changeAnimation("walking",cat_walking)
    mouse.changeAnimation("tease",mouse_tease);
    cat.velocityX=-3;

  //For moving and changing animation write code here


}
