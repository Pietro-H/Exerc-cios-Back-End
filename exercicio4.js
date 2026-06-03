let convidados = ["Amanda", "Adriana", "Vanderlei", "Bruno", "Jessica"];

let nomeParaVerificar = "Vanderlei";

if (convidados.includes(nomeParaVerificar)) {
    console.log("Pode entrar, você é convidado VIP!");
} else {
    console.log("Desculpe, seu nome não está na lista.");
}