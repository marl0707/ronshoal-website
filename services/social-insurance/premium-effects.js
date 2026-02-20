/* Premium Effects for First View */

document.addEventListener('DOMContentLoaded', function() {
    // パララックス効果
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            heroContent.style.transform = `translateY(${scrolled * -parallaxSpeed * 0.3}px)`;
        });
    }
    
    // フローティングエレメントを動的に追加
    const createFloatingElements = () => {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        for (let i = 0; i < 3; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.style.top = `${Math.random() * 100}%`;
            element.style.left = `${Math.random() * 100}%`;
            element.style.animationDelay = `${i * 3}s`;
            hero.appendChild(element);
        }
    };
    
    createFloatingElements();
    
    // テキストアニメーション
    const animateText = () => {
        const title = document.querySelector('.hero-title');
        const subtitle = document.querySelector('.hero-subtitle');
        const highlight = document.querySelector('.hero-highlight');
        
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(30px)';
            setTimeout(() => {
                title.style.transition = 'all 0.8s ease';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 100);
        }
        
        if (subtitle) {
            subtitle.style.opacity = '0';
            subtitle.style.transform = 'translateY(30px)';
            setTimeout(() => {
                subtitle.style.transition = 'all 0.8s ease';
                subtitle.style.opacity = '1';
                subtitle.style.transform = 'translateY(0)';
            }, 300);
        }
        
        if (highlight) {
            highlight.style.opacity = '0';
            highlight.style.transform = 'translateY(30px)';
            setTimeout(() => {
                highlight.style.transition = 'all 0.8s ease';
                highlight.style.opacity = '1';
                highlight.style.transform = 'translateY(0)';
            }, 500);
        }
    };
    
    animateText();
    
    // カードのスクロールアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);
    
    // 削減例カードにアニメーションを適用
    const cards = document.querySelectorAll('.reduction-card, .example-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    // マウス追従エフェクト
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;
            
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((el, index) => {
                const speed = (index + 1) * 20;
                el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    }
});