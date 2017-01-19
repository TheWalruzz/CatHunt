namespace App.Models {
    export abstract class AbstractEnemy extends Phaser.Sprite {
        public isSmashed: boolean = false;

        protected startX: number;
        protected startY: number;
        protected endX: number;
        protected endY: number;

        constructor(
            game: Phaser.Game,
            x: number,
            y: number,
            sprite: string,
            protected smashCallback: (enemy: App.Models.AbstractEnemy) => void
        ) {
            super(game, x, y, sprite);

            this.inputEnabled = true;
            this.events.onInputDown.add(this.handleClick, this);
            this.game.physics.arcade.enable(this);
            this.checkWorldBounds = true;
            this.sendToBack();

            this.events.onOutOfBounds.add((object) => {
                object.destroy();
            }, this);

            this.startX = x;
            this.startY = y;
            this.endX = Math.abs(this.x - this.game.width);
            this.endY = 1.5 * this.game.height - y;

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

        /**
         * Stops all the calculations etc. when enemy is smashed.
         */
        public abstract smash(): void;

        public update(): void {
            this.move();
        }

        public stop(): void {
            this.body.velocity.set(0);
        }

        private handleClick(): void {
            this.smashCallback(this);
            this.isSmashed = true;
            this.bringToTop();
        }
    }
}
