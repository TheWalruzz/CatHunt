namespace App.State {
    export class Menu extends Phaser.State {
        private static music: Phaser.Sound;

        public create(): void {
            if (!Menu.music.isPlaying) {
                Menu.music = this.game.add.audio('music', 1, true);
                Menu.music.play();
            }

            let mainText: Phaser.Text = this.game.add.text(this.world.centerX, this.world.centerY / 3, 'Kocie Polowanie', {
                font: 'Arial Black',
                fontSize: 32,
                fontWeight: 'bold',
                fill: '#003B8A'
            });
            mainText.anchor.set(0.5);
            mainText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 5);
            mainText.stroke = '#000000';
            mainText.strokeThickness = 2;
            
            let dedicationText: Phaser.Text = this.game.add.text(this.world.centerX, this.world.centerY * (3 / 2), 'Dla Marysi', {
                font: 'Arial Black',
                fontSize: 28,
                fill: '#cc1000'
            });
            dedicationText.anchor.set(0.5);
            dedicationText.stroke = '#000000';
            dedicationText.strokeThickness = 2;
            dedicationText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 5);

            let fromText: Phaser.Text = this.game.add.text(this.world.centerX, this.world.centerY * (13 / 8), 'od wujka Pawła', {
                font: 'Arial Black',
                fontSize: 24,
                fill: '#cc1000'
            });
            fromText.anchor.set(0.5);
            fromText.stroke = '#000000';
            fromText.strokeThickness = 2;
            fromText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 5);

            let christmasText: Phaser.Text = this.game.add.text(this.world.centerX, this.world.centerY * (15 / 8), 'Boże Narodzenie 2016', {
                font: 'Arial Black',
                fontSize: 24,
                fill: '#cc1000'
            });
            christmasText.anchor.set(0.5);
            christmasText.stroke = '#000000';
            christmasText.strokeThickness = 2;
            christmasText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 5);

            let playButton: Phaser.Sprite = this.game.add.sprite(this.world.centerX, this.world.centerY, 'play');
            playButton.anchor.set(0.5, 0.75);
            playButton.inputEnabled = true;
            playButton.events.onInputDown.add(() => {
                this.game.state.start('Game');
            }, this);
        }

        public update(): void {
        }
    }
}
