namespace App.Models {
    export class Cat extends Phaser.Group {
        public cat: Phaser.Sprite;
        public paw: Phaser.Sprite;
        public staticPaw: Phaser.Sprite;

        private startingAngle: number;
        private pawPivot: Phaser.Point;
        private pawHeight: number;
        private meowAudio: Phaser.Sound;

        constructor(
            game: Phaser.Game,
            x: number,
            y: number
        ) {
            super(game);

            this.cat = this.game.make.sprite(x, y, 'cat');
            this.cat.scale.set(0.56 * window.devicePixelRatio);
            this.cat.anchor.set(0.5, 0);
            this.meowAudio = this.game.add.audio('meow', 1, false);
            this.cat.inputEnabled = true;
            this.cat.events.onInputDown.add(() => {
                if (!this.meowAudio.isPlaying) {
                    this.meowAudio.play();
                }
            });

            this.staticPaw = this.game.make.sprite(this.game.world.centerX - 30 * window.devicePixelRatio, 145 * window.devicePixelRatio, 'catPaw');
            this.staticPaw.anchor.set(0.5, 0);
            this.staticPaw.scale.set(0.56 * window.devicePixelRatio);

            this.paw = this.game.make.sprite(this.staticPaw.x - 70 * window.devicePixelRatio, 175 * window.devicePixelRatio, 'catPaw');
            this.paw.anchor.set(0.5, 0);
            this.paw.scale.set(0.56 * window.devicePixelRatio);

            this.add(this.staticPaw);
            this.add(this.paw);
            this.add(this.cat);

            this.startingAngle = this.rotation;
            this.pawPivot = new Phaser.Point(this.paw.x, this.paw.y);
            this.pawHeight = this.paw.height;

            this.game.add.existing(this);
        }

        public update(): void {

        }

        public attack(point: Phaser.Point, callback: Function): void {
            let retract = this.game.add.tween(this.paw).to({ height: this.pawHeight }, 50, Phaser.Easing.Linear.None),
                extend = this.game.add.tween(this.paw).to({ height: this.pawPivot.distance(point) + 48 }, 35, Phaser.Easing.Exponential.In),
                revertRotation = this.game.add.tween(this.paw).to({ rotation: this.startingAngle }, 100, Phaser.Easing.Linear.None);

            extend.onComplete.add(callback);

            this.game.add.tween(this.paw).to({ rotation: Phaser.Math.angleBetweenPoints(this.pawPivot, point) - Math.PI / 2 },
                20,
                Phaser.Easing.Linear.None,
                true
            ).chain(extend, retract, revertRotation);
        }
    }
}
