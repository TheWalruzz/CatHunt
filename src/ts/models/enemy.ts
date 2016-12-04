namespace App.Models {
    export abstract class Enemy extends Phaser.Sprite {
        protected startX: number;
        protected startY: number;
        protected endX: number;
        protected endY: number;

        constructor(
            game: Phaser.Game,
            x: number,
            y: number,
            sprite: string,
            protected smashCallback: (enemy: App.Models.Enemy, points: number) => void
        ) {
            super(game, x, y, sprite);

            this.inputEnabled = true;
            this.events.onInputDown.add(this.handleClick, this);
            this.game.physics.arcade.enable(this);
            this.checkWorldBounds = true;

            this.startX = x;
            this.startY = y;
            this.endX = Math.abs(this.x - this.game.width);
            this.endY = 2 * this.game.height - this.game.width - y;

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
