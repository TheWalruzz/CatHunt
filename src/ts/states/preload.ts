namespace App.State {
  export class Preload extends Phaser.State {
    public preload(): void {
      this.game.load.image('stain', 'assets/stain.png');
      this.game.load.image('play', 'assets/play.png');
      this.game.load.image('pause', 'assets/pause.png');
      this.game.load.spritesheet('beetle', 'assets/beetle_base_26x33.png', 26, 33);
      this.game.load.spritesheet('fly', 'assets/fly_32x32.png', 32, 32);
    }

    public create(): void {
      // this.game.state.start('Menu');
      this.game.state.start('Game');
    }
  }
}
