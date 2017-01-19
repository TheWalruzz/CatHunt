namespace App.State {
    export class Menu extends Phaser.State {
        private isPlaying: boolean = false;

        public create(): void {
            let music: Phaser.Sound = App.Config.getInstance().get('music');
            if (!music) {
                music = this.game.add.audio('music', 1, true);
                music.play();
                this.isPlaying = true;
                App.Config.getInstance().set('music', music);
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
            mainText.scale.set(window.devicePixelRatio);
            
            let dedicationText: Phaser.Text = this.game.add.text(this.world.centerX, this.world.centerY * (13 / 8), 'Dla Marysi', {
                font: 'Arial Black',
                fontSize: 28,
                fill: '#cc1000'
            });
            dedicationText.anchor.set(0.5);
            dedicationText.stroke = '#000000';
            dedicationText.strokeThickness = 2;
            dedicationText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 5);
            dedicationText.scale.set(window.devicePixelRatio);

            let fromText: Phaser.Text = this.game.add.text(this.world.centerX, this.world.centerY * (14 / 8), 'od wujka Pawła', {
                font: 'Arial Black',
                fontSize: 24,
                fill: '#cc1000'
            });
            fromText.anchor.set(0.5);
            fromText.stroke = '#000000';
            fromText.strokeThickness = 2;
            fromText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 5);
            fromText.scale.set(window.devicePixelRatio);

            let playButton: Phaser.Sprite = this.game.add.sprite(this.world.centerX, this.world.centerY, 'play');
            playButton.anchor.set(0.5, 0.75);
            playButton.inputEnabled = true;
            playButton.scale.set(window.devicePixelRatio);
            playButton.events.onInputDown.add(() => {
                this.game.state.start('Game');
            }, this);

            let musicButton: Phaser.Sprite = this.game.add.sprite(this.world.centerX, this.world.centerY * (5 / 4), this.isPlaying ? 'music_on' : 'music_off');
            musicButton.anchor.set(0.5, 0.35);
            musicButton.scale.set(0.5 * window.devicePixelRatio);
            musicButton.inputEnabled = true;
            musicButton.events.onInputDown.add(() => {
                if (musicButton.key === 'music_on') {
                    music.stop();
                    this.isPlaying = false;
                    musicButton.loadTexture('music_off');
                } else {
                    music.play();
                    this.isPlaying = true;
                    musicButton.loadTexture('music_on');
                }
            });
        }

        public update(): void {
        }
    }
}
