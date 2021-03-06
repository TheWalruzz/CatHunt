namespace App.State {
  export class Preload extends Phaser.State {
    public preload(): void {
      this.game.load.image('stain', 'assets/stain.png');
      this.game.load.image('play', 'assets/play.png');
      this.game.load.image('pause', 'assets/pause.png');
      this.game.load.image('cat', 'assets/cat.png');
      this.game.load.image('catPaw', 'assets/cat_paw.png');
      this.game.load.image('music_on', 'assets/music_on.png');
      this.game.load.image('music_off', 'assets/music_off.png');
      this.game.load.spritesheet('beetle', 'assets/beetle_base_26x33.png', 26, 33);
      this.game.load.spritesheet('fly', 'assets/fly_32x32.png', 32, 32);
      this.game.load.audio('music', 'assets/music.ogg');
      this.game.load.audio('smash', 'assets/squish.ogg');
      this.game.load.audio('meow', 'assets/meow.ogg');
    }

    public create(): void {
      this.game.state.start('Menu');
    }
  }
}
