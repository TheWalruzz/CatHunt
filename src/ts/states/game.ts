namespace App.State {
    export class Game extends Phaser.State {
        private interval: number = 2000;

        public create(): void {
            this.game.world.setBounds(0, 0, this.game.width, this.game.height);
            console.log(this.game.world.getBounds());
            setInterval(this.createNewEnemy.bind(this), this.interval);
        }

        createNewEnemy(): void {
            let nextPosition = this.getNextSpawnPoint();

            new App.Models.Fly(this.game, nextPosition.x, nextPosition.y, (enemy, points) => {
                console.log('haha', points);
            });
        }

        public update(): void {

        }

        private getNextSpawnPoint(): Phaser.Point {
            let point = new Phaser.Point();
            
            point.x = Math.round(Math.random()) ? 0 : this.game.width;
            point.y = this.game.height - Math.round(Math.random() * this.game.width);

            return point;
        }
    }
}
