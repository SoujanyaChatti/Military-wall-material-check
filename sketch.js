var bullet,wall,speed,weight,thickness,t2,t3;

function setup() {
  createCanvas(1850,400);
  thickness=random(22,60)
  t2=random(10,100);
  t3=random(15,110);
  wall=createSprite(1200,85,thickness,height/4);
  wall.shapeColor=color(80,80,80);
  wall2=createSprite(1200,200,t2,height/4);
  wall2.shapeColor=color(80,80,80);
  wall3=createSprite(1200,330,t3,height/4);
  wall3.shapeColor=color(80,80,80);
  bullet=createSprite(50,85,35,20);
  speed=random(223,321);
  bullet.shapeColor="white";
  b2=createSprite(50,200,35,20);
  b2.shapeColor="white";
  b3=createSprite(50,330,35,20);
  b3.shapeColor="white";
  weight=random(30,52);
  
}

function draw() {
  background(30);  
  bullet.velocityX=speed;
  b2.velocityX=speed;
  b3.velocityX=speed;
  textSize(20);
  fill("orange");
  text("JAI HIND",600,20);
  fill("blue");
  text("LONG LIVE THE",700,20);
  fill("green");
  text("INDIAN MILITARY",860,20);

  fill("white");
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var Damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  text("Damage="+Math.round(Damage),1390,65);
  if(Damage>10){
    wall.shapeColor="red";
    fill("red");
    text("REJECTED",50,wall.y);
  }
  if(Damage<10){
    wall.shapeColor="green";
    fill("green");
    text("ACCEPTED",50,wall.y);
  }
  
  }
  if(hasCollided(b2,wall2)){
    b2.velocityX=0;
    var Damage2=0.5*weight*speed*speed/(t2*t2*t2);
    fill("white");
    text("Damage="+Math.round(Damage2),1390,180);
    
    if(Damage2>10){
      wall2.shapeColor="red";
      fill("red");
      text("REJECTED",50,wall2.y);
    }
    if(Damage2<10){
      wall2.shapeColor="green";
      fill("green");
      text("ACCEPTED",50,wall2.y);
    }
    }
    if(hasCollided(b3,wall3)){
      b3.velocityX=0;
      var Damage3=0.5*weight*speed*speed/(t3*t3*t3);
      fill("white");
      text("Damage="+Math.round(Damage3),1390,310);
      if(Damage3>10){
        wall3.shapeColor="red";
        fill("red");
        text("REJECTED",50,wall3.y);
      }
      if(Damage3<10){
        wall3.shapeColor="green";
        fill("green");
        text("ACCEPTED",50,wall3.y);
      }
      }
  drawSprites();
}
