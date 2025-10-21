// Menu Toggle para Mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Função para mostrar método de estudo
function showMethod(methodType) {
    // Remover active de todos os botões e conteúdos
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll('.method-content').forEach(content => {
        content.classList.remove('active');
    });

    // Adicionar active ao botão clicado e ao conteúdo correspondente
    event.target.classList.add('active');
    document.getElementById(`${methodType}-method`).classList.add('active');
}

// Modal
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Conteúdos detalhados para o modal
const detailContent = {
    videoaula: {
        title: '🎥 Videoaulas',
        content: `
            <h2>Como Aproveitar as Videoaulas</h2>
            <p>As videoaulas são completas, diretas e focadas na sua aprovação. Nossa equipe de professores está pronta para te auxiliar.</p>

            <h3>Dicas Importantes:</h3>
            <ul>
                <li><strong>Sempre tenha material escrito:</strong> Imprima o resumo para acompanhar</li>
                <li><strong>Velocidade 1.5x ou mais:</strong> Otimize seu tempo de estudo</li>
                <li><strong>Resolva antes do professor:</strong> Tente fazer o exercício antes de ver a resposta</li>
                <li><strong>Pause quando necessário:</strong> Para anotar ou refletir sobre o conteúdo</li>
            </ul>

            <div class="alert alert-warning">
                <strong>⚠️ Cuidado:</strong> Não se vicie em videoaulas! Elas são ótimas, mas a leitura ativa treina mais para a prova.
            </div>

            <h3>Quando Usar Videoaulas:</h3>
            <ol>
                <li>Quando estiver expresso nas tarefas das metas</li>
                <li>Quando você sentir dificuldades na leitura do PDF</li>
                <li>Quando tiver cansado e quer revisar o assunto (esporadicamente)</li>
            </ol>
        `
    },
    pdf: {
        title: '📄 Estudo por PDF',
        content: `
            <h2>A Leitura é Seu Aliado Principal</h2>
            <p>A melhor forma de aprender é através da leitura. Isso ocorre porque:</p>
            <ul>
                <li><strong>Treina sua leitura:</strong> A prova é escrita e você terá que ler bastante</li>
                <li><strong>Você imprime seu ritmo:</strong> Controla sua velocidade de estudo</li>
            </ul>

            <h3>Passo a Passo para Estudar o PDF:</h3>

            <div class="step-detail">
                <h4>1. Entender onde o conhecimento se encaixa</h4>
                <p>Compartimentalize o conhecimento. É como organizar objetos em casa - cada coisa no seu lugar.</p>
            </div>

            <div class="step-detail">
                <h4>2. Imprimir resumo e fazer anotações</h4>
                <p>Leia e grife o importante. Suas anotações serão cruciais nas revisões!</p>
            </div>

            <div class="step-detail">
                <h4>3. Logo após a teoria, faça questões</h4>
                <p>Você só aprende a nadar nadando! Coloque a teoria em prática.</p>
            </div>

            <div class="step-detail">
                <h4>4. Sempre faça as revisões previstas</h4>
                <p>Você vai decorar na revisão, não no estudo inicial.</p>
            </div>

            <div class="alert alert-danger">
                <strong>🚫 Lembre-se:</strong> Assistir aula NÃO é estudar!
            </div>
        `
    },
    resumo: {
        title: '📝 Resumos Esquematizados',
        content: `
            <h2>Personalize Seu Resumo</h2>
            <p>Depois de estudar pela primeira vez e fazer exercícios, você já identifica o que é mais importante.</p>

            <h3>Como Criar Seu Resumo Personalizado:</h3>
            <ol>
                <li><strong>Use os resumos disponíveis:</strong> Comece com o material da meta</li>
                <li><strong>Personalize com suas observações:</strong> Adicione suas dificuldades</li>
                <li><strong>Melhore a cada revisão:</strong> Adicione ou remova informações</li>
                <li><strong>Mantenha tudo em um lugar:</strong> Um único resumo por assunto</li>
            </ol>

            <div class="alert alert-success">
                <strong>✅ Regra de Ouro:</strong> O estudo teórico de um assunto só deve ser realizado UMA VEZ. Depois, use apenas seu resumo personalizado!
            </div>

            <h3>Dicas para Resumos Eficientes:</h3>
            <ul>
                <li>Use cores para diferenciar tópicos</li>
                <li>Crie siglas e abreviações</li>
                <li>Desenhe diagramas quando possível</li>
                <li>Destaque jurisprudências importantes</li>
                <li>Anote pegadinhas de provas anteriores</li>
            </ul>
        `
    },
    questoes: {
        title: '✅ Caderno de Questões',
        content: `
            <h2>A Importância dos Exercícios</h2>
            <p>Fazer questões é essencial! Você só aprende de verdade fazendo exercícios.</p>

            <h3>Cadernos Disponíveis:</h3>
            <ul>
                <li><strong>TEC Concursos:</strong> Questões filtradas por banca e assunto</li>
                <li><strong>Q Concursos:</strong> Cadernos personalizados</li>
            </ul>

            <h3>Como Fazer Questões Corretamente:</h3>
            <ol>
                <li>Faça questões após cada tópico estudado</li>
                <li>Veja o comentário imediatamente após resolver</li>
                <li>Marque: erros, dúvidas e questões que resumem bem</li>
                <li>Calcule seu percentual de acertos</li>
                <li>Repita as mesmas questões pelo menos 3 vezes</li>
            </ol>

            <div class="alert alert-warning">
                <strong>🎯 Meta de Acertos:</strong>
                <ul>
                    <li>Bancas normais: 70% ou mais</li>
                    <li>CESPE/CEBRASPE: 60% ou mais</li>
                </ul>
            </div>

            <h3>Caderno de Alavancagem:</h3>
            <p>Separe 3 tipos de questões para revisar:</p>
            <ul>
                <li>❌ Questões que você errou</li>
                <li>❓ Questões que ficou em dúvida</li>
                <li>⭐ Questões que resumem bem o assunto</li>
            </ul>

            <div class="alert alert-info">
                <strong>💡 Dica:</strong> Não busque perfeição! Ninguém acerta 100%. Se atingiu 80-90%, avance para o próximo assunto.
            </div>
        `
    }
};

// Função para mostrar detalhes no modal
function showDetail(type) {
    const content = detailContent[type];
    modalBody.innerHTML = `
        <h2>${content.title}</h2>
        ${content.content}
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fechar modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Fechar modal com ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Smooth scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.querySelectorAll('.circle-item, .tip-card, .revision-card, .tip-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contador de progresso de leitura
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    // Você pode adicionar uma barra de progresso aqui se desejar
    // Por exemplo: document.getElementById('progressBar').style.width = scrolled + '%';
});

// Destacar link ativo na navegação
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Efeito de hover removido (não há mais .card, agora é .flow-step)

// Tooltip para dicas
function createTooltip(text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    document.body.appendChild(tooltip);
    return tooltip;
}

// Easter egg: Mensagem motivacional ao clicar 5 vezes no logo
let logoClickCount = 0;
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    logoClickCount++;
    if (logoClickCount === 5) {
        showMotivationalMessage();
        logoClickCount = 0;
    }
});

function showMotivationalMessage() {
    const messages = [
        '🔥 Você é capaz de conquistar sua aprovação!',
        '💪 Cada dia de estudo te aproxima do seu objetivo!',
        '🎯 Consistência é a chave para o sucesso!',
        '⭐ Acredite no seu potencial!',
        '🚀 Você está no caminho certo!'
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    modalBody.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Mensagem Especial</h2>
            <p style="font-size: 1.5rem; color: var(--accent-color);">${randomMessage}</p>
            <p style="margin-top: 1rem; color: var(--text-light);">Continue firme nos estudos!</p>
        </div>
    `;
    modal.style.display = 'block';
}

// Adicionar CSS para step-detail no modal
const style = document.createElement('style');
style.textContent = `
    .step-detail {
        background: var(--light-bg);
        padding: 1.5rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        border-left: 4px solid var(--secondary-color);
    }

    .step-detail h4 {
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }

    #modal-body h2 {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    #modal-body h3 {
        color: var(--secondary-color);
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }

    #modal-body ul, #modal-body ol {
        margin-left: 1.5rem;
        margin-bottom: 1rem;
    }

    #modal-body li {
        margin-bottom: 0.5rem;
        line-height: 1.6;
    }

    #modal-body .alert {
        margin: 1.5rem 0;
    }

    .nav-links a.active {
        background: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(style);

// Console log motivacional
console.log('%c🎯 Método Irmãos Polícia', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%cSeu mapa do tesouro para a aprovação!', 'color: #f59e0b; font-size: 14px;');
console.log('%cDica: Clique 5 vezes no logo para uma surpresa! 😉', 'color: #10b981; font-size: 12px;');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Site carregado com sucesso!');
    console.log('📚 Bons estudos!');
});
