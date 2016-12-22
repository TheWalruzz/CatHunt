namespace App.State {
    export class Game extends Phaser.State {
        private intervalDuration: number = 1500;
        private interval: Phaser.TimerEvent;
        private points: number = 0;
        private enemies: any = [
            App.Models.Beetle,
            App.Models.Beetle,
            App.Models.Fly
        ];
        private text: Phaser.Text;
        private menuButton: Phaser.Sprite;

        public create(): void {
            this.game.world.setBounds(0, 0, this.game.width, this.game.height);
            this.game.time.events.loop(this.intervalDuration, this.createNewEnemy, this);
            this.text = this.game.add.text(this.game.width - 15, 40, 'Punkty: 0', {
                font: 'Arial Black',
                fontSize: 20,
                fill: '#003B8A'
            });
            this.text.anchor.set(1, 0.5);
            this.text.align = 'center';

            this.menuButton = this.game.add.sprite(15, 8, 'pause');
            this.menuButton.inputEnabled = true;
            this.menuButton.events.onInputDown.add(() => {
                this.game.time.events.remove(this.interval);
                this.game.state.start('Menu');
            }, this);
            this.menuButton.scale.set(0.5);
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
