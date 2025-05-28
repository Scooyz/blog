function mostrarSugestao() {
    const livros = [
        "O Ano Velho – João Antônio",
        "O Pequeno Príncipe – Antoine de Saint-Exupéry",
        "1984 – George Orwell",
        "Sapiens – Yuval Harari",
        "Dom Casmurro – Machado de Assis"
    ];
    const sugestao = livros[Math.floor(Math.random() * livros.length)];
    document.getElementById("sugestao").innerText = `Você poderia começar com: ${sugestao}`;
}
