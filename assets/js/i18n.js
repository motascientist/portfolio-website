// ===================================
//    INTERNATIONALIZATION (i18n)
//    Bilingual Support: PT-BR / EN
// ===================================

const translations = {
    pt: {
        // Navigation
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.services': 'Serviços',
        'nav.products': 'Produtos',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',

        // Hero Section
        'hero.badge': 'Disponível para projetos',
        'hero.title': 'Leonardo Mota',
        'hero.subtitle': 'Especialista em',
        'hero.typed': 'Automações',
        'hero.description': 'Construo automações que transformam processos manuais em sistemas eficientes, reduzindo custos e aumentando produtividade.',
        'hero.cta.whatsapp': 'Iniciar Conversa',
        'hero.cta.products': 'Ver Produtos',
        'hero.stats.years': 'Anos de Experiência',
        'hero.stats.automations': 'Automações Entregues',
        'hero.stats.automations': 'Automações Entregues',
        'hero.scroll': 'Role para baixo',
        'hero.typed.words': ['Engenharia de Dados', 'MLOps', 'DataOps', 'Automação', 'Agentes de IA'],

        // About Section
        'about.tag': 'Sobre Mim',
        'about.title.1': 'Resolvendo problemas',
        'about.title.2': 'criando soluções',
        'about.text': 'Possuo formação em <strong>Administração de Empresas pelo Ibmec</strong> e <strong>especialização em IA pelo MIT</strong> — Construo ecossistemas completos de automação.',
        'about.stack.title': 'Stack Principal',
        'about.card.education.title': 'Formação',
        'about.card.education.text': 'Ibmec & MIT',
        'about.card.location.title': 'Localização',
        'about.card.location.text': 'Rio de Janeiro, Brasil',
        'about.card.focus.title': 'Foco Atual',
        'about.card.focus.text': 'Automações Corporativas',

        // Services Section
        'services.tag': 'Serviços',
        'services.title.1': 'Principais',
        'services.title.2': 'Serviços',
        'services.description': 'Soluções completas para automação e infraestrutura de dados',

        'services.whatsapp.title': 'Agentes de IA para WhatsApp',
        'services.whatsapp.description': 'Desenvolvimento de agentes inteligentes deployados no WhatsApp Oficial via Evolution API. Automação de atendimento com IA que resolve tickets e qualifica leads automaticamente.',
        'services.whatsapp.tag1': 'WhatsApp Oficial',
        'services.whatsapp.tag2': 'IA',

        'services.n8n.title': 'n8n Escalável',
        'services.n8n.description': 'Arquiteturas de n8n em alta escala sem depender de ferramentas limitantes. Configuração com Docker Swarm, workers separados, filas Redis/RabbitMQ para alta disponibilidade.',
        'services.n8n.tag1': 'Alta Disponibilidade',
        'services.n8n.tag2': 'Escalável',

        'services.data.title': 'Engenharia de Dados',
        'services.data.description': 'Construção de pipelines de dados robustos. Integração com BigQuery, Supabase e PostgreSQL. Análise de dados e criação de dashboards para tomada de decisão.',
        'services.data.tag1': 'Análise de Dados',
        'services.data.tag2': 'Dashboards',

        'services.mlops.title': 'MLOps & IAOps',
        'services.mlops.description': 'Deploy de modelos de Machine Learning e agentes de IA em produção. Pipelines automatizados para treinamento, validação e monitoramento contínuo.',
        'services.mlops.tag1': 'IA/LLM',
        'services.mlops.tag2': 'Pipelines',

        // Products Section
        'products.tag': 'Produtos',
        'products.title.1': 'Soluções',
        'products.title.2': 'em Produção',
        'products.description': 'Produtos proprietários que geram resultados reais para empresas',
        'products.badge': 'Em Produção',

        'products.tickets.title': 'IA de Resolução de Tickets',
        'products.tickets.description': 'Agente de IA que analisa, classifica e resolve tickets de suporte automaticamente. Integração com sistemas de helpdesk existentes.',
        'products.tickets.metric1.value': '50%',
        'products.tickets.metric1.label': 'Tickets Resolvidos',
        'products.tickets.metric2.value': '-70%',
        'products.tickets.metric2.label': 'Tempo de Resposta',

        'products.whatsapp.title': 'Agentes WhatsApp Oficial',
        'products.whatsapp.description': 'Agentes de IA no WhatsApp Business API Oficial. Atendimento automatizado, qualificação de leads e integração com CRMs.',
        'products.whatsapp.metric1.value': '∞',
        'products.whatsapp.metric1.label': 'Conversas Simultâneas',
        'products.whatsapp.metric2.value': '<3s',
        'products.whatsapp.metric2.label': 'Tempo de Resposta',

        'products.n8n.title': 'n8n Enterprise Stack',
        'products.n8n.description': 'Arquitetura n8n em alta disponibilidade. Sem Easypanel. Workers distribuídos, filas gerenciadas e monitoramento completo.',
        'products.n8n.metric1.value': '99.9%',
        'products.n8n.metric1.label': 'Uptime',
        'products.n8n.metric2.value': '+10k',
        'products.n8n.metric2.label': 'Execuções/Dia',

        'products.cta.text': 'Precisa de uma solução personalizada para sua empresa?',
        'products.cta.button': 'Vamos Conversar',

        // Projects Section
        'projects.tag': 'Open Source',
        'projects.title.1': 'Projetos',
        'projects.title.2': 'no GitHub',
        'projects.description': 'Projetos públicos e contribuições open source',

        'projects.risk.category': 'Data Science',
        'projects.risk.title': 'Risk Management',
        'projects.risk.description': 'Monitoramento automatizado de portfólio com cálculo de VaR, Sharpe Ratio, correlação e volatilidade.',
        'projects.risk.button': 'Ver Projeto',

        'projects.ml.category': 'MLOps',
        'projects.ml.title': 'Machine Learning Deploy',
        'projects.ml.description': 'Pipeline completo de ML Ops: da validação de dados ao deploy d.',
        'projects.ml.button': 'Ver Projeto',

        'projects.laws.category': 'Big Data',
        'projects.laws.title': 'Legal Big Data',
        'projects.laws.description': 'Rastreamento de leis municipais para treinamento de modelos de Deep Learning e análise de BI.',
        'projects.laws.button': 'Ver Projeto',

        'projects.realestate.category': 'Web Scraping',
        'projects.realestate.title': 'Europe Real Estate',
        'projects.realestate.description': 'Bot de Web Scraping para identificar oportunidades imobiliárias na Europa baseadas no preço por m².',
        'projects.realestate.button': 'Ver Projeto',

        // CTA Section
        'cta.title': 'Vamos trabalhar juntos?',
        'cta.description': 'Precisa de automação, agentes de IA ou infraestrutura escalável? Entre em contato e vamos transformar seus processos.',
        'cta.button.whatsapp': 'WhatsApp',
        'cta.button.email': 'Email',

        // Footer
        'footer.tagline': 'Transformando processos em soluções escaláveis com automação e IA.',
        'footer.links.title': 'Links',
        'footer.social.title': 'Social',
        'footer.copyright': '© 2026 Leonardo Mota. Todos os direitos reservados.',
        'footer.backtotop': 'Voltar ao topo',
    },

    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.products': 'Products',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.badge': 'Available for projects',
        'hero.title': 'Leonardo Mota',
        'hero.subtitle': 'Specialist in',
        'hero.typed': 'Automation',
        'hero.description': 'I build automations that transform manual processes into efficient systems, reducing costs and increasing productivity.',
        'hero.cta.whatsapp': 'Start Conversation',
        'hero.cta.products': 'View Products',
        'hero.stats.years': 'Years of Experience',
        'hero.stats.automations': 'Automations Delivered',
        'hero.stats.automations': 'Automations Delivered',
        'hero.scroll': 'Scroll down',
        'hero.typed.words': ['Data Engineering', 'MLOps', 'DataOps', 'Automation', 'AI Agents'],

        // About Section
        'about.tag': 'About Me',
        'about.title.1': 'Solving problems',
        'about.title.2': 'creating solutions',
        'about.text': 'I hold a degree in <strong>Business Administration from Ibmec</strong> and <strong>specialization in AI from MIT</strong> — I build complete automation ecosystems.',
        'about.stack.title': 'Main Stack',
        'about.card.education.title': 'Education',
        'about.card.education.text': 'Ibmec & MIT',
        'about.card.location.title': 'Location',
        'about.card.location.text': 'Rio de Janeiro, Brazil',
        'about.card.focus.title': 'Current Focus',
        'about.card.focus.text': 'Corporate Automation',

        // Services Section
        'services.tag': 'Services',
        'services.title.1': 'Main',
        'services.title.2': 'Services',
        'services.description': 'Complete solutions for automation and data infrastructure',

        'services.whatsapp.title': 'AI Agents for WhatsApp',
        'services.whatsapp.description': 'Development of intelligent agents deployed on Official WhatsApp via Evolution API. AI-powered customer service that resolves tickets and qualifies leads automatically.',
        'services.whatsapp.tag1': 'Official WhatsApp',
        'services.whatsapp.tag2': 'AI',

        'services.n8n.title': 'Scalable n8n',
        'services.n8n.description': 'High-scale n8n architectures without relying on limiting tools. Configuration with Docker Swarm, separate workers, Redis/RabbitMQ queues for high availability.',
        'services.n8n.tag1': 'High Availability',
        'services.n8n.tag2': 'Scalable',

        'services.data.title': 'Data Engineering',
        'services.data.description': 'Building robust data pipelines. Integration with BigQuery, Supabase and PostgreSQL. Data analysis and dashboard creation for decision making.',
        'services.data.tag1': 'Data Analysis',
        'services.data.tag2': 'Dashboards',

        'services.mlops.title': 'MLOps & IAOps',
        'services.mlops.description': 'Deployment of Machine Learning models and AI agents in production. Automated pipelines for training, validation and continuous monitoring.',
        'services.mlops.tag1': 'AI/LLM',
        'services.mlops.tag2': 'Pipelines',

        // Products Section
        'products.tag': 'Products',
        'products.title.1': 'Solutions',
        'products.title.2': 'in Production',
        'products.description': 'Proprietary products that generate real results for companies',
        'products.badge': 'In Production',

        'products.tickets.title': 'AI Ticket Resolution',
        'products.tickets.description': 'AI agent that analyzes, classifies and resolves support tickets automatically. Integration with existing helpdesk systems.',
        'products.tickets.metric1.value': '50%',
        'products.tickets.metric1.label': 'Tickets Resolved',
        'products.tickets.metric2.value': '-70%',
        'products.tickets.metric2.label': 'Response Time',

        'products.whatsapp.title': 'Official WhatsApp Agents',
        'products.whatsapp.description': 'AI agents on Official WhatsApp Business API. Automated service, lead qualification and CRM integration.',
        'products.whatsapp.metric1.value': '∞',
        'products.whatsapp.metric1.label': 'Simultaneous Conversations',
        'products.whatsapp.metric2.value': '<3s',
        'products.whatsapp.metric2.label': 'Response Time',

        'products.n8n.title': 'n8n Enterprise Stack',
        'products.n8n.description': 'High availability n8n architecture. No Easypanel. Distributed workers, managed queues and complete monitoring.',
        'products.n8n.metric1.value': '99.9%',
        'products.n8n.metric1.label': 'Uptime',
        'products.n8n.metric2.value': '+10k',
        'products.n8n.metric2.label': 'Executions/Day',

        'products.cta.text': 'Need a custom solution for your company?',
        'products.cta.button': 'Let\'s Talk',

        // Projects Section
        'projects.tag': 'Open Source',
        'projects.title.1': 'Projects',
        'projects.title.2': 'on GitHub',
        'projects.description': 'Public projects and open source contributions',

        'projects.risk.category': 'Data Science',
        'projects.risk.title': 'Risk Management',
        'projects.risk.description': 'Automated portfolio monitoring with VaR calculation, Sharpe Ratio, correlation and volatility.',
        'projects.risk.button': 'View Project',

        'projects.ml.category': 'MLOps',
        'projects.ml.title': 'Machine Learning Deploy',
        'projects.ml.description': 'Complete ML Ops pipeline: from data validation to deployment.',
        'projects.ml.button': 'View Project',

        'projects.laws.category': 'Big Data',
        'projects.laws.title': 'Legal Big Data',
        'projects.laws.description': 'Tracking municipal laws for Deep Learning model training and BI analysis.',
        'projects.laws.button': 'View Project',

        'projects.realestate.category': 'Web Scraping',
        'projects.realestate.title': 'Europe Real Estate',
        'projects.realestate.description': 'Web Scraping bot to identify real estate opportunities in Europe based on price per m².',
        'projects.realestate.button': 'View Project',

        // CTA Section
        'cta.title': 'Let\'s work together?',
        'cta.description': 'Need automation, AI agents or scalable infrastructure? Get in touch and let\'s transform your processes.',
        'cta.button.whatsapp': 'WhatsApp',
        'cta.button.email': 'Email',

        // Footer
        'footer.tagline': 'Transforming processes into scalable solutions with automation and AI.',
        'footer.links.title': 'Links',
        'footer.social.title': 'Social',
        'footer.copyright': '© 2026 Leonardo Mota. All rights reserved.',
        'footer.backtotop': 'Back to top',
    }
};

// Current language (default: Portuguese)
let currentLanguage = localStorage.getItem('language') || 'pt';

// Set language and update all translatable elements
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if element has child nodes (like icons) that we should preserve
            // If it has only text, we replace simple innerHTML
            // If it has dedicated structure, we might need a more careful approach
            // For this project, most keys map to full content, but let's be safe
            element.innerHTML = translations[lang][key];
        }
    });

    // Update active flag in language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update typing effect words
    if (window.updateTypingWords && translations[lang]['hero.typed.words']) {
        window.updateTypingWords(translations[lang]['hero.typed.words']);
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);

    // Add click event to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
