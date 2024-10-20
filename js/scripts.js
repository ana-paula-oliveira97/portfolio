/*
// Transição suave ao clicar nos links de navegação
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        const targetId = this.getAttribute('href'); // Obtém o ID do destino
        const targetSection = document.querySelector(targetId); // Seleciona a seção correspondente
        
        // Suavemente rola até a seção desejada
        window.scrollTo({
            top: targetSection.offsetTop, 
            behavior: 'smooth'
        });
    });
});
*/

// Exemplo de hover nos vídeos
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
