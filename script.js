// ========================================
// Falling Particles Animation (Hearts & Sparkles)
// ========================================
function createFallingParticle() {
    const particlesContainer = document.getElementById('particlesContainer');
    const particle = document.createElement('div');
    particle.classList.add('falling-particle');
    
    // Mix of hearts and sparkles
    const particles = ['💕', '💖', '💝', '✨', '⭐', '💫', '💍'];
    particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
    
    // Random horizontal position
    particle.style.left = Math.random() * 100 + '%';
    
    // Random animation duration (10-18 seconds)
    const duration = Math.random() * 8 + 10;
    particle.style.animationDuration = duration + 's';
    
    // Random delay for staggered effect
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    // Random size variation
    const size = Math.random() * 8 + 18;
    particle.style.fontSize = size + 'px';
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation completes
    setTimeout(() => {
        particle.remove();
    }, (duration + 2) * 1000);
}

// Create initial batch of particles
function initializeFallingParticles() {
    const initialParticles = 12;
    for (let i = 0; i < initialParticles; i++) {
        setTimeout(() => {
            createFallingParticle();
        }, i * 400);
    }
}

// Continuously create new particles
function continuousFallingParticles() {
    setInterval(() => {
        createFallingParticle();
    }, 2500);
}

// ========================================
// Interactive Propose Button
// ========================================
function setupProposeButton() {
    const proposeButton = document.getElementById('proposeButton');
    const specialMessage = document.getElementById('specialMessage');
    let isMessageVisible = false;
    
    proposeButton.addEventListener('click', function() {
        if (!isMessageVisible) {
            // Show message with animation
            specialMessage.classList.add('show');
            proposeButton.querySelector('span').textContent = 'Say Yes! 💍✨';
            isMessageVisible = true;
            
            // Create ring burst effect
            createRingBurst(proposeButton);
        } else {
            // Hide message
            specialMessage.classList.remove('show');
            proposeButton.querySelector('span').textContent = 'Click for My Promise';
            isMessageVisible = false;
        }
    });
}

// ========================================
// Ring Burst Animation
// ========================================
function createRingBurst(button) {
    const symbols = ['💍', '💎', '✨', '💫', '⭐'];
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 16; i++) {
        const symbol = document.createElement('div');
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.position = 'fixed';
        symbol.style.left = centerX + 'px';
        symbol.style.top = centerY + 'px';
        symbol.style.fontSize = '28px';
        symbol.style.pointerEvents = 'none';
        symbol.style.zIndex = '9999';
        
        document.body.appendChild(symbol);
        
        // Calculate random direction
        const angle = (i / 16) * Math.PI * 2;
        const distance = 120 + Math.random() * 60;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        // Animate symbol
        symbol.animate([
            {
                transform: 'translate(0, 0) scale(0) rotate(0deg)',
                opacity: 1
            },
            {
                transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(1.5) rotate(${Math.random() * 360}deg)`,
                opacity: 0
            }
        ], {
            duration: 1200 + Math.random() * 500,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        // Remove symbol after animation
        setTimeout(() => {
            symbol.remove();
        }, 1700);
    }
}

// ========================================
// Scroll Animations
// ========================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in effect
    const sections = document.querySelectorAll('.message-section, .gallery-section, .reasons-section, .interactive-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// ========================================
// Photo Placeholder Handler
// ========================================
function setupPhotoPlaceholders() {
    const photoCards = document.querySelectorAll('.photo-card');
    
    photoCards.forEach(card => {
        const img = card.querySelector('.gallery-photo');
        const placeholder = card.querySelector('.photo-placeholder');
        
        // Check if image loads successfully
        img.addEventListener('load', function() {
            if (this.complete && this.naturalHeight !== 0) {
                placeholder.style.display = 'none';
                img.style.display = 'block';
            }
        });
        
        // Check for error
        img.addEventListener('error', function() {
            placeholder.style.display = 'flex';
            img.style.display = 'none';
        });
        
        // Trigger load check
        if (img.complete) {
            if (img.naturalHeight !== 0) {
                placeholder.style.display = 'none';
                img.style.display = 'block';
            }
        }
    });
}

// ========================================
// Ring Animation Enhancement
// ========================================
function enhanceRingAnimation() {
    const ringContainer = document.querySelector('.animated-ring-container');
    
    // Add sparkle effect on hover
    ringContainer.addEventListener('mouseenter', function() {
        createRingSparkles(this);
    });
}

function createRingSparkles(element) {
    const rect = element.getBoundingClientRect();
    const sparkles = ['✨', '⭐', '💫', '✦'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'fixed';
            sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            sparkle.style.fontSize = '24px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            
            document.body.appendChild(sparkle);
            
            sparkle.animate([
                {
                    transform: 'translateY(0) scale(0) rotate(0deg)',
                    opacity: 1
                },
                {
                    transform: 'translateY(-60px) scale(1.5) rotate(180deg)',
                    opacity: 0
                }
            ], {
                duration: 1200,
                easing: 'ease-out'
            });
            
            setTimeout(() => {
                sparkle.remove();
            }, 1200);
        }, i * 100);
    }
}

// ========================================
// Random Sparkles on Scroll
// ========================================
let sparkleTimeout;
function createScrollSparkles() {
    clearTimeout(sparkleTimeout);
    
    sparkleTimeout = setTimeout(() => {
        const sparkle = document.createElement('div');
        const sparkles = ['✨', '💫', '⭐'];
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = '0px';
        sparkle.style.fontSize = (Math.random() * 12 + 16) + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1';
        sparkle.style.opacity = '0.7';
        
        document.body.appendChild(sparkle);
        
        const duration = Math.random() * 2000 + 2000;
        sparkle.animate([
            {
                transform: 'translateY(0) rotate(0deg)',
                opacity: 0.7
            },
            {
                transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'linear'
        });
        
        setTimeout(() => {
            sparkle.remove();
        }, duration);
    }, 50);
}

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize falling particles
    initializeFallingParticles();
    continuousFallingParticles();
    
    // Setup interactive elements
    setupProposeButton();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup photo placeholders
    setupPhotoPlaceholders();
    
    // Enhance ring animation
    enhanceRingAnimation();
    
    // Add scroll sparkles
    window.addEventListener('scroll', createScrollSparkles);
    
    // Setup Yes/No buttons
    setupYesNoButtons();
    
    // Console message for the developer :)
    console.log('💍 Made with love for a lifetime of happiness ✨');
});

// ========================================
// Yes/No Interactive Buttons
// ========================================
function setupYesNoButtons() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const finalMessage = document.getElementById('finalMessage');
    const buttonsContainer = document.querySelector('.buttons-container');
    
    let noClickCount = 0;
    let noButtonOriginalPosition = null;
    
    // Store original position after page loads
    setTimeout(() => {
        const rect = noButton.getBoundingClientRect();
        const containerRect = buttonsContainer.getBoundingClientRect();
        noButtonOriginalPosition = {
            left: rect.left - containerRect.left,
            top: rect.top - containerRect.top
        };
    }, 100);
    
    // Yes button - Show celebration
    yesButton.addEventListener('click', function() {
        // Hide buttons
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        
        // Show final message with celebration
        finalMessage.classList.add('show');
        
        // Create massive celebration effect
        createMassiveCelebration();
        
        // Confetti effect
        createConfetti();
    });
    
    // No button - Run away on hover and click
    noButton.addEventListener('mouseenter', function() {
        moveNoButton();
    });
    
    noButton.addEventListener('click', function(e) {
        e.preventDefault();
        moveNoButton();
        noClickCount++;
        
        // Change button text to be more pleading
        const messages = [
            "No 😢",
            "Please? 🥺",
            "Really? 😭",
            "Sure? 💔",
            "Chance! 🙏",
            "YES? 💕"
        ];
        
        if (noClickCount < messages.length) {
            noButton.querySelector('span').textContent = messages[noClickCount];
        }
    });
    
    // Touch support for mobile
    noButton.addEventListener('touchstart', function(e) {
        e.preventDefault();
        moveNoButton();
        noClickCount++;
        
        const messages = [
            "No 😢",
            "Please? 🥺",
            "Really? 😭",
            "Sure? 💔",
            "Chance! 🙏",
            "YES? 💕"
        ];
        
        if (noClickCount < messages.length) {
            noButton.querySelector('span').textContent = messages[noClickCount];
        }
    });
    
    function moveNoButton() {
        const container = buttonsContainer.getBoundingClientRect();
        const button = noButton.getBoundingClientRect();
        
        // Calculate safe zone boundaries (avoiding the Yes button)
        const safeMargin = 30;
        const minX = safeMargin;
        const maxX = container.width - button.width - safeMargin;
        const minY = safeMargin;
        const maxY = container.height - button.height - safeMargin;
        
        let randomX, randomY;
        let attempts = 0;
        
        // Try to find a position that's not too close to the Yes button
        do {
            randomX = Math.random() * (maxX - minX) + minX;
            randomY = Math.random() * (maxY - minY) + minY;
            attempts++;
        } while (attempts < 10 && isNearYesButton(randomX, randomY, button.width, button.height));
        
        // Apply new position
        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
        
        // Add wiggle animation
        noButton.style.animation = 'wiggle 0.3s ease';
        setTimeout(() => {
            noButton.style.animation = '';
        }, 300);
    }
    
    function isNearYesButton(x, y, width, height) {
        const yesRect = yesButton.getBoundingClientRect();
        const containerRect = buttonsContainer.getBoundingClientRect();
        const yesX = yesRect.left - containerRect.left;
        const yesY = yesRect.top - containerRect.top;
        
        // Check if the new position overlaps with Yes button (with buffer)
        const buffer = 20;
        return !(x + width + buffer < yesX || 
                 x > yesX + yesRect.width + buffer ||
                 y + height + buffer < yesY ||
                 y > yesY + yesRect.height + buffer);
    }
}

// ========================================
// Massive Celebration Effect
// ========================================
function createMassiveCelebration() {
    const symbols = ['💍', '💎', '💕', '💖', '💝', '✨', '⭐', '💫', '🎉', '🎊'];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Create 50 celebration symbols
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const symbol = document.createElement('div');
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.style.position = 'fixed';
            symbol.style.left = centerX + 'px';
            symbol.style.top = centerY + 'px';
            symbol.style.fontSize = (Math.random() * 30 + 20) + 'px';
            symbol.style.pointerEvents = 'none';
            symbol.style.zIndex = '9999';
            
            document.body.appendChild(symbol);
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300 + 200;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;
            
            symbol.animate([
                {
                    transform: 'translate(-50%, -50%) scale(0) rotate(0deg)',
                    opacity: 1
                },
                {
                    transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(2) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ], {
                duration: 2000 + Math.random() * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => symbol.remove(), 3000);
        }, i * 30);
    }
}

// ========================================
// Confetti Effect
// ========================================
function createConfetti() {
    const colors = ['#d4af37', '#8b5cf6', '#ff6b9d', '#22c55e', '#f59e0b'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-20px';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 20 + 10) + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.opacity = '0.8';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.borderRadius = '2px';
            
            document.body.appendChild(confetti);
            
            const duration = Math.random() * 3000 + 2000;
            const sway = (Math.random() - 0.5) * 200;
            
            confetti.animate([
                {
                    transform: 'translateY(0) rotate(0deg)',
                    opacity: 0.8
                },
                {
                    transform: `translateY(${window.innerHeight + 50}px) translateX(${sway}px) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => confetti.remove(), duration);
        }, i * 20);
    }
}

// Add wiggle animation to CSS (we'll add this via JavaScript)
const style = document.createElement('style');
style.textContent = `
    @keyframes wiggle {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(-10deg); }
        50% { transform: rotate(10deg); }
        75% { transform: rotate(-5deg); }
    }
`;
document.head.appendChild(style);

// ========================================
// Additional Interactive Features
// ========================================

// Add hover effect to photo cards
document.addEventListener('DOMContentLoaded', function() {
    const photoCards = document.querySelectorAll('.photo-card');
    
    photoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Create mini rings and hearts around the photo
            const rect = this.getBoundingClientRect();
            const symbols = ['💍', '💕', '💖', '✨'];
            
            for (let i = 0; i < 4; i++) {
                setTimeout(() => {
                    const symbol = document.createElement('div');
                    symbol.textContent = symbols[i];
                    symbol.style.position = 'fixed';
                    symbol.style.left = (rect.left + Math.random() * rect.width) + 'px';
                    symbol.style.top = (rect.top + Math.random() * rect.height) + 'px';
                    symbol.style.fontSize = '18px';
                    symbol.style.pointerEvents = 'none';
                    symbol.style.zIndex = '9999';
                    
                    document.body.appendChild(symbol);
                    
                    symbol.animate([
                        { transform: 'translateY(0) scale(0)', opacity: 1 },
                        { transform: 'translateY(-40px) scale(1.2)', opacity: 0 }
                    ], {
                        duration: 900,
                        easing: 'ease-out'
                    });
                    
                    setTimeout(() => symbol.remove(), 900);
                }, i * 100);
            }
        });
    });
});

// Reason cards animation
document.addEventListener('DOMContentLoaded', function() {
    const reasonCards = document.querySelectorAll('.reason-card');
    
    reasonCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `fadeInScale 0.6s ease-out both`;
        }, index * 150);
    });
});

// Add special effect when ring is clicked
document.addEventListener('DOMContentLoaded', function() {
    const ringContainer = document.querySelector('.animated-ring-container');
    
    ringContainer.addEventListener('click', function() {
        // Create diamond explosion effect
        const rect = this.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 20; i++) {
            const diamond = document.createElement('div');
            diamond.textContent = '💎';
            diamond.style.position = 'fixed';
            diamond.style.left = centerX + 'px';
            diamond.style.top = centerY + 'px';
            diamond.style.fontSize = '20px';
            diamond.style.pointerEvents = 'none';
            diamond.style.zIndex = '9999';
            
            document.body.appendChild(diamond);
            
            const angle = (i / 20) * Math.PI * 2;
            const distance = 80 + Math.random() * 40;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;
            
            diamond.animate([
                {
                    transform: 'translate(0, 0) scale(0)',
                    opacity: 1
                },
                {
                    transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(1.2)`,
                    opacity: 0
                }
            ], {
                duration: 800 + Math.random() * 400,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => {
                diamond.remove();
            }, 1200);
        }
    });
});
