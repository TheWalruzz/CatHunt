var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Config = (function () {
        function Config() {
            this.config = {};
        }
        Config.getInstance = function () {
            if (Config.instance == null) {
                Config.instance = new Config();
            }
            return Config.instance;
        };
        Config.prototype.process = function (config) {
            if (this.config === {}) {
                this.config = config;
            }
            else {
                for (var k in config) {
                    if (config.hasOwnProperty(k)) {
                        this.set(k, config[k]);
                    }
                }
            }
        };
        Config.prototype.set = function (key, value) {
            this.config[key] = value;
        };
        Config.prototype.get = function (key, fallback) {
            if (key === void 0) { key = null; }
            if (fallback === void 0) { fallback = null; }
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
        };
        Config.prototype.unset = function (key) {
            this.config[key] = null;
        };
        Config.instance = null;
        return Config;
    }());
    App.Config = Config;
    var Main = (function () {
        function Main(config) {
            this.config = Config.getInstance();
            this.defaults = {
                width: 360,
                height: 640,
            };
            this.config.process(this.defaults);
            this.config.process(config);
            this.game = new Phaser.Game(this.config.get("width"), this.config.get("height"), Phaser.AUTO, "container", this);
        }
        Main.prototype.preload = function () {
        };
        Main.prototype.create = function () {
            this.game.state.add("Boot", App.State.Boot);
            this.game.state.add("Preload", App.State.Preload);
            this.game.state.add("Game", App.State.Game);
            this.game.state.start("Boot");
        };
        return Main;
    }());
    App.Main = Main;
})(App || (App = {}));
window.onload = function () {
    var app = new App.Main({ width: 360, height: 640 });
};
var App;
(function (App) {
    var Models;
    (function (Models) {
        var Cat = (function (_super) {
            __extends(Cat, _super);
            function Cat() {
                _super.apply(this, arguments);
            }
            Cat.prototype.create = function () {
            };
            Cat.prototype.update = function () {
            };
            return Cat;
        }(Phaser.Sprite));
        Models.Cat = Cat;
    })(Models = App.Models || (App.Models = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Models;
    (function (Models) {
        var Enemy = (function (_super) {
            __extends(Enemy, _super);
            function Enemy() {
                _super.apply(this, arguments);
            }
            Enemy.prototype.create = function () {
            };
            Enemy.prototype.update = function () {
            };
            return Enemy;
        }(Phaser.Sprite));
        Models.Enemy = Enemy;
    })(Models = App.Models || (App.Models = {}));
})(App || (App = {}));
var App;
(function (App) {
    var State;
    (function (State) {
        var Boot = (function (_super) {
            __extends(Boot, _super);
            function Boot() {
                _super.apply(this, arguments);
            }
            Boot.prototype.preload = function () {
            };
            Boot.prototype.create = function () {
                this.game.stage.backgroundColor = "#EFDD6F";
                this.game.state.start("Preload");
            };
            return Boot;
        }(Phaser.State));
        State.Boot = Boot;
    })(State = App.State || (App.State = {}));
})(App || (App = {}));
var App;
(function (App) {
    var State;
    (function (State) {
        var Game = (function (_super) {
            __extends(Game, _super);
            function Game() {
                _super.apply(this, arguments);
            }
            Game.prototype.create = function () {
            };
            Game.prototype.update = function () {
            };
            return Game;
        }(Phaser.State));
        State.Game = Game;
    })(State = App.State || (App.State = {}));
})(App || (App = {}));
var App;
(function (App) {
    var State;
    (function (State) {
        var Preload = (function (_super) {
            __extends(Preload, _super);
            function Preload() {
                _super.apply(this, arguments);
            }
            Preload.prototype.preload = function () {
            };
            Preload.prototype.create = function () {
            };
            return Preload;
        }(Phaser.State));
        State.Preload = Preload;
    })(State = App.State || (App.State = {}));
})(App || (App = {}));
