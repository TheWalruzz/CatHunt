namespace App.Models {
    export class Fly extends App.Models.Enemy {
        private startX: number;
        private startY: number;
        private endX: number;
        private endY: number;

        constructor(
            game: Phaser.Game,
            x: number,
            y: number,
            smashCallback: (points: number) => void
        ) {
            super(game, x, y, 'beetle', smashCallback); // TODO: add a proper fly sprite
            this.startX = x;
            this.startY = y;
            this.endX = Math.abs(this.x - this.game.width);
            this.endY = 2 * this.game.height - this.game.width - y;

            this.animations.add('walk-h', [0, 1, 2, 3, 4, 5, 4, 3, 2, 1], 12, true);
            this.animations.play('walk-h');
        }

        public get points(): number {
            return 10;
        }

        public move(): void {
            this.game.physics.arcade.moveToXY(this, this.endX, this.endY, 25);
        }
    }
}
