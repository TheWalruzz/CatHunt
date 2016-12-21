namespace App.State {
    export class Game extends Phaser.State {
        private interval: number = 1500;
        private points: number = 0;
        private enemies: any = [
            App.Models.Beetle,
            App.Models.Beetle,
            App.Models.Fly
        ];
        private text: Phaser.Text;

        public create(): void {
            this.game.world.setBounds(0, 0, this.game.width, this.game.height);
            setInterval(this.createNewEnemy.bind(this), this.interval);
            this.text = this.game.add.text(this.game.world.centerX, 15, 'Punkty: 0', {
                font: 'Arial Black',
                fontSize: 20,
                fill: '#003B8A'
            });
            this.text.anchor.set(0.5);
            this.text.align = 'center';
        }

        public update(): void {}

        private getNextSpawnPoint(): Phaser.Point {
            let point = new Phaser.Point();

            point.x = Math.round(Math.random()) ? 0 : this.game.width;
            point.y = this.game.height - Math.round(Math.random() * this.game.width);

            return point;
        }

        private smashEnemy(enemy: App.Models.AbstractEnemy): void {
            this.points += enemy.points;
            this.text.text = `Punkty: ${this.points}`;
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
