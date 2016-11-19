namespace App.Models {
    export class Beetle extends App.Models.Enemy {
        constructor(
            game: Phaser.Game,
            x: number,
            y: number,
            smashCallback: (points: number) => void
        ) {
            super(game, x, y, 'beetle', smashCallback);

            this.animations.add('walk-h', [0, 1, 2, 3, 4, 5], 12, true);
            this.animations.add('walk-v', [6, 7, 8, 9, 10, 11], 12, true);
            this.animations.play('walk-h');
        }

        public get points(): number {
            return 10;
        }

        public create(): void {
        }

        public move(): void {
            this.x -= 1;
        }
    }
}
