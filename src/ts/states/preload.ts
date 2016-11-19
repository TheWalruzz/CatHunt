namespace App.State {
  export class Preload extends Phaser.State {
    public preload(): void {
      this.game.load.image('beetle', 'assets/beetle_base.png');
    }

    public create(): void {
      this.game.state.start('Game');
    }
  }
}
