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
        private cat: App.Models.Cat;

        public create(): void {
            this.game.world.setBounds(0, 0, this.game.width, this.game.height);
            this.game.time.events.loop(this.intervalDuration, this.createNewEnemy, this);
            this.text = this.game.add.text(this.game.width - 15 * window.devicePixelRatio, 40 * window.devicePixelRatio, 'Punkty: 0  ', {
                font: 'Arial Black',
                fontSize: 20,
                fontWeight: 'bold',
                fill: '#87ceeb'
            });
            this.text.anchor.set(1, 0.5);
            this.text.align = 'center';
            this.text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            this.text.stroke = '#000000';
            this.text.strokeThickness = 2;
            this.text.scale.set(window.devicePixelRatio);
            
            this.menuButton = this.game.add.sprite(15 * window.devicePixelRatio, 8 * window.devicePixelRatio, 'pause');
            this.menuButton.inputEnabled = true;
            this.menuButton.events.onInputDown.add(() => {
                this.game.time.events.remove(this.interval);
                this.game.state.start('Menu');
            }, this);
            this.menuButton.scale.set(0.5 * window.devicePixelRatio);
            

            this.cat = new App.Models.Cat(this.game, this.world.centerX, 10 * window.devicePixelRatio);

            this.text.bringToTop();
            this.menuButton.bringToTop();
        }

        public update(): void {}

        private getNextSpawnPoint(): Phaser.Point {
            let point = new Phaser.Point();

            point.x = Math.round(Math.random()) ? 0 : this.game.width;
            point.y = this.game.height - Math.round(Math.random() * this.game.height / 2);

            return point;
        }

        private smashEnemy(enemy: App.Models.AbstractEnemy): void {
            if (!enemy.isSmashed) {
                this.cat.attack(new Phaser.Point(enemy.x, enemy.y), () => {
                    this.game.add.audio('smash', 1, false).play();
                    enemy.sendToBack();
                    enemy.smash();
                });
                this.points += enemy.points;
                this.text.text = `Punkty: ${this.points}  `;
            }
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
