namespace App.Models {
    export abstract class Enemy extends Phaser.Sprite {
        constructor(
            game: Phaser.Game,
            x: number,
            y: number,
            sprite: string,
            protected smashCallback: (points: number) => void
        ) {
            super(game, x, y, sprite);

            this.inputEnabled = true;
            this.events.onInputDown.add(this.handleClick, this);
            this.game.physics.arcade.enable(this);

            this.game.add.existing(this);
        }

        /**
         * Stores the number of points granted to player after smashing an enemy.
         */
        public abstract get points(): number;

        /**
         * Calculates next position of the enemy and moves the sprite to that position.
         */
        public abstract move(): void;

        public update(): void {
            this.move();
        }

        private handleClick(): void {
            this.smashCallback(this.points);
            this.destroy();
        }
    }
}
