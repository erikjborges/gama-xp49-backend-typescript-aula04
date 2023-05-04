var DBConnect = /** @class */ (function () {
    function DBConnect() {
        console.log("Conexao aberta com o banco de dados.");
    }
    DBConnect.getInstance = function () {
        if (!DBConnect._instance) {
            DBConnect._instance = new DBConnect();
        }
        return DBConnect._instance;
    };
    return DBConnect;
}());
var ClientDao = /** @class */ (function () {
    function ClientDao() {
        this._db = DBConnect.getInstance();
    }
    return ClientDao;
}());
function cadastraUsuario() {
    var clientDao = new ClientDao;
    //...
}
function atualizaUsuario() {
    var clientDao = new ClientDao;
    //...
}
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
