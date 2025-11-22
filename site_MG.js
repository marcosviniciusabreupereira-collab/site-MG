document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // Simulação do Toggle de Atividade do Menu (Opcional)
    // ----------------------------------------------------
    const menuItems = document.querySelectorAll('.main-menu li');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Impede a navegação real em links '#'
            
            // Remove a classe 'active' de todos os itens
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Adiciona a classe 'active' no item clicado
            this.classList.add('active');
            
            // Log simples para demonstrar o clique
            console.log(`Navegando para: ${this.querySelector('a').textContent.trim()}`);
            
            // Em uma aplicação real, aqui você carregaria o novo conteúdo.
        });
    });

    // ----------------------------------------------------
    // Simulação de Toggle de Tema (Opcional)
    // ----------------------------------------------------
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        // Mudar o ícone para feedback visual
        if (body.classList.contains('dark-theme')) {
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
        } else {
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
        }
    });

    // Nota: Para o tema escuro funcionar, você precisaria adicionar as classes de CSS
    // que invertem as cores quando a classe '.dark-theme' está presente no <body>.
});