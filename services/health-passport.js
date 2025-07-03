// Health Passport Page JavaScript
// Interactive functionality for tabs and FAQ accordion

document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // タブ機能の実装
    // ========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // すべてのタブボタンとペインの非アクティブ化
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // クリックされたタブのアクティブ化
            this.classList.add('active');
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
    
    // ========================================
    // FAQ アコーディオン機能の実装
    // ========================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            // 他のFAQアイテムを閉じる
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // 現在のアイテムをトグル
            item.classList.toggle('active');
        });
    });
    
    // ========================================
    // スムーススクロール機能
    // ========================================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // ヘッダーのスクロール時の挙動
    // ========================================
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // スクロール方向による表示/非表示
        if (currentScrollY > lastScrollY && currentScrollY > 300) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollY = currentScrollY;
    });
    
    // ========================================
    // 料金表のハイライト効果
    // ========================================
    const pricingRows = document.querySelectorAll('.pricing-table tbody tr');
    
    pricingRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // ========================================
    // LINE CTAボタンのアニメーション
    // ========================================
    const ctaButtons = document.querySelectorAll('.btn-primary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.btn-icon');
            if (icon) {
                icon.style.animation = 'bounce 0.5s ease';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.btn-icon');
            if (icon) {
                icon.style.animation = 'none';
            }
        });
    });
    
    // ========================================
    // 数値カウントアップアニメーション
    // ========================================
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const countUpObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-count'));
                const duration = 2000; // 2秒
                const increment = finalValue / (duration / 16); // 60fps
                let currentValue = 0;
                
                const updateCount = () => {
                    currentValue += increment;
                    if (currentValue < finalValue) {
                        target.textContent = Math.floor(currentValue);
                        requestAnimationFrame(updateCount);
                    } else {
                        target.textContent = finalValue;
                    }
                };
                
                updateCount();
                countUpObserver.unobserve(target);
            }
        });
    }, observerOptions);
    
    // カウントアップ要素を監視
    const countElements = document.querySelectorAll('.count-up');
    countElements.forEach(element => {
        countUpObserver.observe(element);
    });
});

// ========================================
// CSS アニメーション用のキーフレーム
// ========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .header.hidden {
        transform: translateY(-100%);
        transition: transform 0.3s ease;
    }
    
    .header {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);