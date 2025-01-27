/* This source code is copyrighted materials owned by the UT system and cannot be placed 
into any public site or public GitHub repository. Placing this material, or any material 
derived from it, in a publically accessible site or repository is facilitating cheating 
and subjects the student to penalities as defined by the UT code of ethics. */

import processing.sound.*;

class SoundPlayer 
{
  SoundFile boomSound, powerUpAppear, loseGame;
  SoundFile largeAsteroidExplosion, shipExplosion, smallAsteroidExplosion;
  SoundFile winGame, missileLaunch, backgroundPlayer;
  
  SoundPlayer(PApplet app, float globalVolume) 
  {
    boomSound = new SoundFile(app, "boomSound.wav"); 
    boomSound.amp(globalVolume);
    
    loseGame = new SoundFile(app, "loseGame.wav"); //lost the game sound // DONE
    loseGame.amp(globalVolume);
    
    powerUpAppear = new SoundFile(app, "powerUpAppear.wav"); //power up appearing //DONE
    powerUpAppear.amp(globalVolume);
    
    largeAsteroidExplosion = new SoundFile(app, "largeAsteroidExplosion.wav");// DONE
    largeAsteroidExplosion.amp(globalVolume);
    
    smallAsteroidExplosion = new SoundFile(app, "SmallAsteroidExplosion.wav"); // DONE
    smallAsteroidExplosion.amp(globalVolume);
    
    shipExplosion = new SoundFile(app, "shipExplosion.wav"); //ship explosionv // DONE
    shipExplosion.amp(globalVolume);
    
    winGame = new SoundFile(app, "winningGame.wav"); //winning the game sound // DONE
    winGame.amp(globalVolume);
    
    missileLaunch = new SoundFile(app, "MissileLaunch.wav"); // DONE
    missileLaunch.amp(globalVolume);
    
    backgroundPlayer = new SoundFile(app, "BackgroundPlayer.wav");
    backgroundPlayer.amp(globalVolume);
    backgroundPlayer.loop();
  }

  void playExplosion() 
  {
    boomSound.play();
  }

  void playPop() 
  {
    powerUpAppear.play();
  }

  void playGameOver() 
  {
    loseGame.play();
  }
  
  void playExplosionLargeAsteroid() 
  {
    largeAsteroidExplosion.play();
  }

  void playExplosionSmallAsteroid() 
  {
    smallAsteroidExplosion.play();
  }
  
  void playExplosionShip() 
  {
    shipExplosion.play();
  }

  void playOhYea() 
  {
    winGame.play();
  }

  void playMissileLaunch() 
  {
    missileLaunch.play();
  }
  void playBackgroundPlayer()
  {
    backgroundPlayer.play();

  }
    void stopBackgroundPlayer()
  {
   backgroundPlayer.stop();
  }
  
}
