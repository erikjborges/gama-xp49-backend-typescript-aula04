var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Correio = /** @class */ (function () {
    function Correio() {
    }
    Correio.prototype.tempoEntrega = function () {
        return 7;
    };
    return Correio;
}());
var JadLog = /** @class */ (function () {
    function JadLog() {
    }
    JadLog.prototype.tempoEntrega = function () {
        return 3;
    };
    return JadLog;
}());
var LogisticaFactory = /** @class */ (function () {
    function LogisticaFactory() {
    }
    LogisticaFactory.prototype.buscaTempo = function () {
        var logistica = this.factoryMethod();
        return logistica.tempoEntrega() + 3;
        //...
    };
    return LogisticaFactory;
}());
var CorreioFactory = /** @class */ (function (_super) {
    __extends(CorreioFactory, _super);
    function CorreioFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CorreioFactory.prototype.factoryMethod = function () {
        return new Correio();
    };
    return CorreioFactory;
}(LogisticaFactory));
var JadLogFactory = /** @class */ (function (_super) {
    __extends(JadLogFactory, _super);
    function JadLogFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JadLogFactory.prototype.factoryMethod = function () {
        return new JadLog();
    };
    return JadLogFactory;
}(LogisticaFactory));
function tempoDeEntregaCorreio() {
    var logistica = new CorreioFactory();
    console.log("Correio: ".concat(logistica.buscaTempo()));
}
function tempoDeEntregaJadLog() {
    var logistica = new JadLogFactory();
    console.log("JadLog: ".concat(logistica.buscaTempo()));
}
tempoDeEntregaCorreio();
tempoDeEntregaJadLog();
