namespace App.State {
  export class Preload extends Phaser.State {
    public preload(): void {
      this.game.load.image('stain', 'assets/stain.png');
      this.game.load.spritesheet('beetle', 'assets/beetle_base_26x33.png', 26, 33);
    }

    public create(): void {
      this.game.state.start('Game');
    }
  }
}
