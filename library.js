function hasCollided(bulletu,wallu){

    bulletRE=bulletu.x+bulletu.width/2;
    wallLE=wallu.x-wallu.width/2;
    if(bulletRE>=wallLE){
      return true;
    }
    else{
      return false;
    }
  }