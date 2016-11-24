namespace App.State {
  export class Boot extends Phaser.State {
    public preload(): void {

    }

    public create(): void {
      this.game.stage.backgroundColor = '#EFDD6F';
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.state.start('Preload');
    }
  }
}
