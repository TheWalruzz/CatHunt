namespace App.Models {
    export class Beetle extends App.Models.AbstractEnemy {
        constructor(
            game: Phaser.Game,
            x: number,
            y: number,
            smashCallback: (enemy: App.Models.AbstractEnemy) => void
        ) {
            super(game, x, y, 'beetle', smashCallback); // TODO: add a proper fly sprite

            this.animations.add('walk', [0, 1, 2, 3, 4, 5, 4, 3, 2, 1], 15, true);
            this.animations.play('walk');

            this.rotation = this.game.physics.arcade.moveToXY(this, this.endX, this.endY, 120 * window.devicePixelRatio);
            this.tint = Phaser.Color.getRandomColor(20, 255, 0.7);
            // this.hitArea = new Phaser.Rectangle(-16, -16, 80, 80);
            this.scale.set(1.5 * window.devicePixelRatio);
        }

        public get points(): number {
            return 10;
        }

        public move(): void {
            // it walks in a straight line - no need for path update
        }

        public smash(): void {
            this.body.velocity.setTo(0, 0);
            this.animations.stop('walk');
            this.tint = 0xffffff;
            this.loadTexture('stain');
        }
    }
}
