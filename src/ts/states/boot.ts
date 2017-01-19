namespace App.State {
  export class Boot extends Phaser.State {
    public preload(): void {

    }

    public create(): void {
      this.game.stage.backgroundColor = '#EFDD6F';
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
      this.game.state.start('Preload');
    }
  }
}
