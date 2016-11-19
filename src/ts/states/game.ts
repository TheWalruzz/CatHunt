namespace App.State {
    export class Game extends Phaser.State {
        private enemies: Phaser.Group;

        public create(): void {
            this.enemies = this.game.add.group();

            let beetle = new App.Models.Beetle(this.game, 200, 200, (points) => {
                console.log('haha', points);
            });

            this.enemies.add(beetle);
        }

        public update(): void {

        }
    }
}
