import './styles.scss';

document.addEventListener('DOMContentLoaded', function () {
    const typedText = document.getElementById('typed-text');
    const typedSubtext = document.getElementById('typed-subtext');
    const cursor = document.querySelector('.cursor');

    const textArray = ['Paloma Souza'];
    const subtextArray = ['Tecnologia da Informação'];
    const typingDelay = 150;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
    let subtextIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else if (subtextIndex < subtextArray[subtextIndex].length) { // Corrigido para subtextArray[subtextIndex]
            typedSubtext.textContent += subtextArray[subtextIndex].charAt(subtextIndex);
            subtextIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (subtextIndex > 0) {
            typedSubtext.textContent = subtextArray[subtextIndex].substring(0, subtextIndex - 1);
            subtextIndex--;
            setTimeout(erase, typingDelay);
        } else if (charIndex > 0) {
            typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, typingDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    }

    type();
});

// Botão de voltar ao topo

// Quando o usuário rolar para baixo 20px a partir do topo da página, mostre o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// Quando o usuário clicar no botão, role suavemente para o topo da página
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'}); // Rolagem suave até o topo
}

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 130; // Ajuste este valor conforme necessário
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

