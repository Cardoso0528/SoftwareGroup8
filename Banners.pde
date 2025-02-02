/* This source code is copyrighted materials owned by the UT system and cannot be placed 
into any public site or public GitHub repository. Placing this material, or any material 
derived from it, in a publically accessible site or repository is facilitating cheating 
and subjects the student to penalities as defined by the UT code of ethics. */

class GameOver extends GameObject
{
  String msg;
  float scale = .001;
  float scaleInc = .01;

  GameOver(PApplet game, int xpos, int ypos) 
  {
    super(game, "GAME OVER.png", 60);
    
    setXY(xpos, 350);
    setVelXY(0, 0);
    setScale(2);

  }

  /*void update() 
  {
    if (scale < 2) {
      scale += scaleInc;
    }
    setScale(scale);
  }*/
  
  void drawOnScreen() {}
}


/*****************************************/


class OhYea extends GameObject
{
  float scale = 0;
  float scaleInc = .05;

  OhYea(PApplet applet, int xpos, int ypos) 
  {
    super(applet, "ohYEAH.png", 60);

    setXY(xpos, 150);
    setVelXY(0, 0);
    setScale(2);
  }

  /*void update() 
  {
    scale += scaleInc;
    setScale(abs(sin(scale)*2));
    setX((sin(scale) * 100) + game.width/2);
    setY((cos(scale) * 200) + game.height/2);
    setRot((cos(scale) * PI));
  }*/
  
  void drawOnScreen() {}
}
