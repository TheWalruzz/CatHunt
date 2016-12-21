namespace App.Models {
    export class Fly extends App.Models.AbstractEnemy {
        private steps: number = 0;
        private isMoving: boolean = true;

        constructor(
            game: Phaser.Game,
            x: number,
            y: number,
            smashCallback: (enemy: App.Models.AbstractEnemy) => void
        ) {
            super(game, x, y, 'fly', smashCallback);

            this.animations.add('walk', [0, 1, 2, 3, 2, 1], 20, true);
            this.animations.play('walk');

            this.body.velocity.setTo(Phaser.Math.sign(this.endX - this.startX) * 2.5, 0);
        }

        public get points(): number {
            return 15;
        }

        public move(): void {
            if (this.isMoving) {
                this.x += this.body.velocity.x;
                this.y = -Math.cos((this.steps++) / 20) * 55 + this.startY;
            }
        }

        public smash(): void {
            this.isMoving = false;
            this.body.velocity.setTo(0, 0);
            this.animations.stop('walk');
            this.loadTexture('stain');
        }
    }
}
