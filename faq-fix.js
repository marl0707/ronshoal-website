/* FAQ Section JavaScript Fix */

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            // Make question focusable and accessible
            question.setAttribute('tabindex', '0');
            question.setAttribute('role', 'button');
            question.setAttribute('aria-expanded', 'false');
            
            // Unique ID for aria-controls
            const itemId = 'faq-' + Array.from(faqItems).indexOf(item);
            answer.setAttribute('id', itemId + '-answer');
            question.setAttribute('aria-controls', itemId + '-answer');
            
            // Click handler
            question.addEventListener('click', function() {
                toggleFAQItem(item, question);
            });
            
            // Keyboard handler
            question.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQItem(item, question);
                }
            });
        }
    });
    
    function toggleFAQItem(item, question) {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                const otherQuestion = otherItem.querySelector('.faq-question');
                if (otherQuestion) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                }
            }
        });
        
        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
            question.setAttribute('aria-expanded', 'false');
        } else {
            item.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    }
});