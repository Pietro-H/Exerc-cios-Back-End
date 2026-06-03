const usuarioCadastrado = "admin";
const senhaCadastrada = "1234";
const usuarioDigitado = "admin";
const senhaDigitada = "9999";

if (usuarioDigitado === usuarioCadastrado && senhaDigitada === senhaCadastrada) {
    console.log("Login efetuado com sucesso!");
} else {
    console.log("Usuário ou senha incorretos.");
}