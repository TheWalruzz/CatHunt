namespace App.State {
    export class Game extends Phaser.State {
        private interval: number = 2000;
        private enemies: any = [
            App.Models.Beetle,
            App.Models.Fly
        ];

        public create(): void {
            this.game.world.setBounds(0, 0, this.game.width, this.game.height);
            setInterval(this.createNewEnemy.bind(this), this.interval);
        }

        public update(): void {}

        private getNextSpawnPoint(): Phaser.Point {
            let point = new Phaser.Point();

            point.x = Math.round(Math.random()) ? 0 : this.game.width;
            point.y = this.game.height - Math.round(Math.random() * this.game.width);

            return point;
        }

        private smashEnemy(enemy: App.Models.AbstractEnemy): void {
            console.log('haha', enemy.points);
        }

        private createNewEnemy(): void {
            let nextPosition = this.getNextSpawnPoint();

            new this.enemies[Math.floor(Math.random() * this.enemies.length)](
                this.game,
                nextPosition.x,
                nextPosition.y,
                this.smashEnemy.bind(this)
            );
        }
    }
}
