namespace App.Models {
    export class Fly extends App.Models.AbstractEnemy {
        private steps: number = 0;

        constructor(
            game: Phaser.Game,
            x: number,
            y: number,
            smashCallback: (enemy: App.Models.AbstractEnemy) => void
        ) {
            super(game, x, y, 'fly', smashCallback); // TODO: add a proper fly sprite

            this.animations.add('walk', [0, 1, 2, 3, 2, 1], 20, true);
            this.animations.play('walk');

            this.body.velocity.setTo(Phaser.Math.sign(this.endX - this.startX) * 2, 0);
        }

        public get points(): number {
            return 10;
        }

        public move(): void {
            this.x += this.body.velocity.x;
            this.y = -Math.cos((this.steps++) / 10) * 55 + this.startY;
        }

        public smash(): void {
            this.body.velocity.setTo(0, 0);
            this.animations.stop('walk');
            this.loadTexture('stain');
        }
    }
}
