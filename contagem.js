let totalPessoas = 32; // Total de pessoas inicial

// Função para adicionar uma pessoa
function adicionarPessoa() {
    totalPessoas++;
    atualizarContagem();
}

// Função para remover uma pessoa
function removerPessoa() {
    if (totalPessoas > 0) {
        totalPessoas--;
        atualizarContagem();
    }
}

// Função para atualizar o painel de contagem
function atualizarContagem() {
    const painelContagem = document.getElementById('painel-contagem');
    painelContagem.textContent = `Total de pessoas: ${totalPessoas}`;
}

// Chamada inicial para exibir o total de pessoas
atualizarContagem();