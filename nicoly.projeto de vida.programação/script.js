document.addEventListener('DOMContentLoaded', function() {
    // Atualizar data atual
    updateCurrentDate();
    
    // Navegação por tabs
    setupTabNavigation();
    
    // Modal de nova meta
    setupGoalModal();
    
    // Gerador de citações
    setupQuoteGenerator();
    
    // Simular gráfico (em produção, usar biblioteca como Chart.js)
    simulateProgressChart();
});

function updateCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    document.getElementById('current-date').textContent = today.toLocaleDateString('pt-BR', options);
}

function setupTabNavigation() {
    const tabs = document.querySelectorAll('.smart-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover classe active de todas as tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Adicionar classe active à tab clicada
            this.classList.add('active');
            
            // Esconder todas as seções
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Mostrar seção correspondente
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

function setupGoalModal() {
    const addGoalBtn = document.getElementById('add-goal');
    const modal = document.getElementById('goal-modal');
    const cancelBtn = document.querySelector('.cancel-button');
    const form = document.getElementById('goal-form');
    
    addGoalBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
    
    cancelBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        form.reset();
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você normalmente enviaria os dados para um servidor
        // Vamos apenas simular o comportamento
        setTimeout(() => {
            alert('Nova meta adicionada com sucesso!');
            modal.style.display = 'none';
            form.reset();
            
            // Atualizar contador de metas
            const activeGoals = document.getElementById('active-goals');
            activeGoals.textContent = parseInt(activeGoals.textContent) + 1;
        }, 1000);
    });
}

function setupQuoteGenerator() {
    const quotes = [
        "A jornada de mil milhas começa com um único passo.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Você não precisa ser perfeito, só precisa começar.",
        "Metas são sonhos com prazos.",
        "O que você faz hoje pode melhorar todos os seus amanhãs.",
        "Disciplina é a ponte entre metas e realizações."
    ];
    
    const authors = [
        "Lao Tzu",
        "Robert Collier",
        "Desconhecido",
        "Diana Scharf Hunt",
        "Ralph Marston",
        "Jim Rohn"
    ];
    
    const newQuoteBtn = document.getElementById('new-quote');
    const quoteBox = document.querySelector('.quote-box p');
    
    newQuoteBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteBox.textContent = `"${quotes[randomIndex]}"`;
    });
}

function simulateProgressChart() {
    const chartContainer = document.getElementById('monthly-chart');
    
    // Em produção, você usaria uma biblioteca como Chart.js
    // Aqui vamos apenas criar uma simulação visual
    chartContainer.innerHTML = `
        <div class="chart-placeholder">
            <p>Gráfico de progresso mensal seria exibido aqui</p>
            <small>(Em implementação real, use Chart.js ou similar)</small>
        </div>
    `;
    
    // Simular dados de progresso
    document.getElementById('completion-rate').textContent = '72%';
    document.getElementById('active-goals').textContent = '5';
    document.getElementById('streak-days').textContent = '14';
}