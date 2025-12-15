/* assets/js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    initLoginSystem();
    initSearchSystem();
    loadPortfolioData();
});

// --- 1. Sistema de Login (Simulado com LocalStorage) ---
function initLoginSystem() {
    const userBtn = document.getElementById('user-btn');
    const storedUser = localStorage.getItem('singularSteelUser');

    if (userBtn) {
        if (storedUser) {
            userBtn.textContent = `Olá, ${storedUser}`;
            userBtn.href = "login.html"; // Leva ao perfil para fazer logout
        } else {
            userBtn.textContent = "Login";
        }
    }

    // Lógica na página de Login.html
    const loginForm = document.getElementById('login-form');
    const profileArea = document.getElementById('profile-area');
    const logoutBtn = document.getElementById('logout-btn');

    if (loginForm && profileArea) {
        // ... (Inclua a lógica de login/logout da resposta original se você criar o login.html)
    }
}

// --- 2. Sistema de Busca Avançada ---
let allProducts = []; 

function initSearchSystem() {
    const openBtn = document.getElementById('open-search-btn');
    const closeBtn = document.getElementById('close-search-btn');
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');

    if(!openBtn) return;

    openBtn.addEventListener('click', () => { overlay.style.display = 'flex'; input.focus(); });
    closeBtn.addEventListener('click', () => { overlay.style.display = 'none'; });

    input.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        resultsContainer.innerHTML = '';

        if (searchTerm.length < 2) return;

        const filtered = allProducts.filter(prod => 
            prod.titulo.toLowerCase().includes(searchTerm) || 
            prod.descricao.toLowerCase().includes(searchTerm)
        );

        filtered.forEach(prod => {
            resultsContainer.innerHTML += `
                <a href="${prod.categoria}s.html" class="search-result-item glow-effect">
                    <img src="${prod.imagem}" alt="${prod.titulo}">
                    <div>
                        <h4 style="color: var(--forge-orange)">${prod.titulo}</h4>
                        <p style="font-size: 0.8rem">${prod.categoria}</p>
                    </div>
                </a>
            `;
        });
    });
}


// --- 3. Carregamento do Portfólio via JSON ---
async function loadPortfolioData() {
    try {
        const response = await fetch('assets/data/portfolio.json');
        allProducts = await response.json(); 

        const featuredContainer = document.getElementById('featured-items-container');
        if (featuredContainer) {
            const featured = allProducts.filter(p => p.destaque).slice(0, 3);
            renderProducts(featured, featuredContainer);
        }

        const portfolioContainer = document.getElementById('portfolio-container');
        if (portfolioContainer) {
            const categoryToLoad = portfolioContainer.getAttribute('data-category');
            let productsToShow = allProducts;
            
            if (categoryToLoad && categoryToLoad !== 'all') {
                productsToShow = allProducts.filter(p => p.categoria === categoryToLoad);
            }
            renderProducts(productsToShow, portfolioContainer);
        }

    } catch (error) {
        console.error("Erro ao carregar o portfólio:", error);
    }
}

function renderProducts(products, container) {
    container.innerHTML = '';
    if(products.length === 0) {
        container.innerHTML = '<p>Nenhum item encontrado nesta categoria.</p>';
        return;
    }
    products.forEach(prod => {
        const card = `
            <div class="product-card glow-effect">
                <img src="${prod.imagem}" alt="${prod.titulo}">
                <div class="product-info">
                    <h3>${prod.titulo}</h3>
                    <p style="color: var(--forge-text-muted); font-size: 0.9rem;">${prod.descricao}</p>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}