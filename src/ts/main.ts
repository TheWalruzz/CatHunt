namespace App {
  export class Config {
    private static instance: Config = null;

    public static getInstance(): Config {
      if (Config.instance == null) {
        Config.instance = new Config();
      }

      return Config.instance;
    }

    protected config: Object = {};

    public process(config: Object): void {
      if (this.config === {}) {
        this.config = config;
      } else {
        for (let k in config) {
          if (config.hasOwnProperty(k)) {
            this.set(k, config[k]);
          }
        }
      }
    }

    public set(key: string, value: any): void {
      this.config[key] = value;
    }

    public get(key: string = null, fallback: any = null): any {
      if (key == null) {
        return this.config;
      }

      if (!this.config.hasOwnProperty(key)) {
        if (fallback != null) {
          return fallback;
        }

        return null;
      }

      return this.config[key];
    }

    unset(key: string) {
      this.config[key] = null;
    }
  }

  export class Main {
    protected game: Phaser.Game;
    protected config: Config = Config.getInstance();

    private defaults: Object = {
      width: 360,
      height: 640,
    };

    constructor(config: Object) {
      this.config.process(this.defaults);
      this.config.process(config);
      this.game = new Phaser.Game(this.config.get('width'), this.config.get('height'), Phaser.AUTO, 'container', this);
    }

    public preload(): void {

    }

    public create(): void {
      this.game.state.add('Boot', App.State.Boot);
      this.game.state.add('Preload', App.State.Preload);
      this.game.state.add('Game', App.State.Game);

      this.game.state.start('Boot');
    }
  }
}

window.onload = () => {
  // tslint:disable-next-line:no-unused-new no-unused-variable
  let app = new App.Main({width: 360, height: 640});
};
