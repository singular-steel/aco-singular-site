/* assets/js/admin.js */

document.addEventListener('DOMContentLoaded', () => {
    loadAdminSimulation();

    const form = document.getElementById('admin-add-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Item 'adicionado' na simulação! Observe a tabela. Lembre-se: isso não salva de verdade no GitHub Pages.");
            
            // Simula a adição visual na tabela
            const title = document.getElementById('new-title').value;
            const cat = document.getElementById('new-category').value;
            const list = document.getElementById('admin-product-list');
            list.innerHTML += `<tr><td>#NEW</td><td>${title}</td><td>${cat}</td></tr>`;
            form.reset();
        });
    }
});

async function loadAdminSimulation() {
    // Carrega os itens reais apenas para mostrar na tabela
    try {
        const response = await fetch('assets/data/portfolio.json');
        const products = await response.json();
        const list = document.getElementById('admin-product-list');
        
        products.slice(0, 5).forEach(p => {
            list.innerHTML += `<tr><td>#${p.id}</td><td>${p.titulo}</td><td>${p.categoria}</td></tr>`;
        });
    } catch (error) {
        console.error("Erro ao carregar dados do portfólio para o admin:", error);
        document.getElementById('admin-product-list').innerHTML = '<tr><td colspan="3">Erro ao carregar dados. Verifique assets/data/portfolio.json</td></tr>';
    }
}