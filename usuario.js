const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function mostrarmenu() {
    console.log("\n=====================");
    console.log("    CRUD USUARIOS");
    console.log("1) cadastrar usuarios");
    console.log("2) listar usuarios");
    console.log("3) visualizar usuario (por id");
    console.log("4) editar usuario");
    console.log("5) deletar usuario ");
    console.log("0) sair ");
    console.log("==========================");
}


function memu() {
    mostrarmenu();
    pergutar("escolha uma opçao: ", (opcao) =>
        opcao = opcao.trim();

    switch (opcao) {
        case "1" return cadastrarUsuarios();
        case "2" return listarUsuarios();
        case "3" return visualizarUsuarios();
        case "4" return editarUsuarios();
        case "5" return deletarUsuarios();
        case "0"();
    }

)
}