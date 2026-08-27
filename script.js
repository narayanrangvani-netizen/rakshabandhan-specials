// ==================================================
// 1. CONFIGURATION SECTION
// ==================================================

const CONFIG = {
    // Names
    sisterName: "छोटी",
    brotherName: "भाई",

    // Section 1: Intro
    introTitle: "छोटी बहन के नाम...",
    introMsg1: "इस बार राखी पर\nकुछ अलग सोचा है।",
    btnYes: "देखोगी? ❤️",
    btnNo: "अभी नहीं 😄",
    noResponses: [
        "अरे, पहले देख तो लो 😄",
        "इतनी जल्दी ना मत बोलो।",
        "एक मिनट... फिर फैसला करना।"
    ],

    // Section 2: Interactive Cards
    interactiveCards: [
        {
            title: "वो बचपन वाली लड़ाइयाँ...",
            text: "जिसका कारण याद नहीं रहता था,\nलेकिन जीतना दोनों को ही था। 😄"
        },
        {
            title: "एक-दूसरे की शिकायतें...",
            text: "मम्मी-पापा से शिकायत करने में भी\nहम दोनों कम नहीं थे। 😂"
        },
        {
            title: "त्योहार...",
            text: "त्योहार चाहे कोई भी हो,\nपरिवार साथ हो तो खुशी अपने आप बढ़ जाती थी।"
        },
        {
            title: "आज...",
            text: "आज उम्र बढ़ गई है,\nजिम्मेदारियाँ बढ़ गई हैं,\nलेकिन अपनापन वही है।"
        }
    ],

    // Section 3: Memories
    memories: [
        {
            title: "एक पुरानी याद",
            image: "assets/WhatsApp Image 2026-08-27 at 11.24.57 PM.jpeg", 
            caption: "कुछ पुरानी यादें ❤️"
        },
        {
            title: "कुछ खूबसूरत पल",
            image: "assets/WhatsApp Image 2026-08-27 at 11.25.28 PM.jpeg",
            caption: "कुछ पल जो हमेशा अपने लगते हैं।"
        },
        {
            title: "आज भी खास",
            image: "assets/WhatsApp Image 2026-08-27 at 11.26.06 PM.jpeg",
            caption: "आज भी उतने ही खास।"
        }
    ],

    // Section 4: Letter
    letter: `छोटी,

जिंदगी की भागदौड़ में
हमेशा हर बात कह पाना आसान नहीं होता।

कभी समय कम पड़ जाता है,
कभी बातें रह जाती हैं।

लेकिन कुछ रिश्तों के लिए
हर दिन कुछ कहने की जरूरत नहीं होती।

तुम मेरी छोटी बहन हो,
और ये रिश्ता अपने आप में ही बहुत खास है।

बचपन की नोकझोंक से लेकर
आज तक की कितनी ही यादें हैं,
जिन्हें सोचकर हमेशा अच्छा लगता है।

बस इतना कहना है —
ऐसे ही हंसती रहो,
खुश रहो,
और परिवार के साथ हमेशा ऐसे ही जुड़ी रहो।

रक्षाबंधन की बहुत-बहुत शुभकामनाएं। ❤️`,

    // Music Configuration updated to the exact real filename
    musicFile: "assets/WhatsApp Audio 2026-08-27 at 11.55.58 PM.mpeg"
};

// ==================================================
// 2. APP LOGIC 
// ==================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Inject Config Data
    document.getElementById('intro-title').innerText = CONFIG.introTitle;
    document.getElementById('intro-msg-1').innerText = CONFIG.introMsg1;
    document.getElementById('btn-yes').innerText = CONFIG.btnYes;
    document.getElementById('btn-no').innerText = CONFIG.btnNo;
    
    document.getElementById('letter-content').innerText = CONFIG.letter;
    
    // Render Interactive Cards ("याद है?")
    const cardContainer = document.getElementById('interactive-cards-container');
    CONFIG.interactiveCards.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'interactive-card';
        card.innerHTML = `
            <h3 class="card-title">${item.title}</h3>
            <div class="card-content">${item.text}</div>
        `;
        card.addEventListener('click', () => {
            card.classList.toggle('opened');
        });
        cardContainer.appendChild(card);
    });

    // Render Timeline Memories (No Console Errors)
    const timelineContainer = document.getElementById('timeline-container');
    CONFIG.memories.forEach((mem) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        
        // Beautiful SVG Placeholder
        const svgPlaceholder = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
        </svg><span>चित्र</span>`;
        
        let imageHTML = '';
        if (mem.image && mem.image.trim() !== "") {
            // Includes onerror fallback just in case path is wrong but specified
            imageHTML = `<img src="${mem.image}" alt="${mem.title}" class="photo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                         <div class="photo-placeholder" style="display:none;">${svgPlaceholder}</div>`;
        } else {
            imageHTML = `<div class="photo-placeholder">${svgPlaceholder}</div>`;
        }

        card.innerHTML = `
            <div class="photo-title">${mem.title}</div>
            <div class="photo-image-wrapper">
                ${imageHTML}
            </div>
            <p class="photo-caption">${mem.caption}</p>
        `;
        
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
        
        timelineContainer.appendChild(card);
    });

    // Navigation Logic
    let currentScreenId = 'screen-intro';
    
    function navigateTo(screenId) {
        const current = document.getElementById(currentScreenId);
        current.style.opacity = '0';
        
        setTimeout(() => {
            current.classList.remove('active');
            current.style.display = 'none';
            
            const next = document.getElementById(screenId);
            next.style.display = 'flex';
            void next.offsetWidth; // Reflow
            next.classList.add('active');
            
            currentScreenId = screenId;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            triggerScreenAnimations(screenId);
        }, 1000);
    }

    // Playful "No" Button
    const btnNo = document.getElementById('btn-no');
    const btnYes = document.getElementById('btn-yes');
    let noClickCount = 0;

    btnNo.addEventListener('click', () => {
        if (noClickCount < CONFIG.noResponses.length) {
            btnNo.innerText = CONFIG.noResponses[noClickCount];
        } else {
            btnNo.innerText = CONFIG.noResponses[CONFIG.noResponses.length - 1];
        }
        noClickCount++;
        
        // Slight playful movement
        const randomX = (Math.random() - 0.5) * 30;
        const randomY = (Math.random() - 0.5) * 20;
        btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        btnYes.style.transform = `scale(${1 + (noClickCount * 0.05)})`;
    });

    btnYes.addEventListener('click', () => {
        navigateTo('screen-relationship');
    });

    // Next Buttons
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const nextScreen = e.target.getAttribute('data-next');
            if (nextScreen) navigateTo(nextScreen);
        });
    });

    // Screen Animations
    function triggerScreenAnimations(screenId) {
        if (screenId === 'screen-intro') {
            setTimeout(() => document.getElementById('intro-title').classList.add('visible'), 500);
            setTimeout(() => document.getElementById('intro-msg-1').classList.add('visible'), 2500);
            setTimeout(() => document.getElementById('intro-buttons').style.opacity = '1', 4500);
        }
        else if (screenId === 'screen-relationship') {
            setTimeout(() => document.getElementById('rel-text-1').classList.add('visible'), 1000);
            setTimeout(() => document.getElementById('rel-text-2').classList.add('visible'), 4000);
        }
        else if (screenId === 'screen-rakhi') {
            setTimeout(() => {
                document.getElementById('rakhi-anim-box').classList.add('animate');
            }, 500);
            setTimeout(() => {
                document.getElementById('rakhi-msg-1').classList.add('visible');
            }, 3000);
            setTimeout(() => {
                document.getElementById('rakhi-msg-2').classList.add('visible');
            }, 5000);
            setTimeout(() => {
                document.getElementById('rakhi-msg-3').classList.add('visible');
            }, 7500);
        }
        else if (screenId === 'screen-tease') {
            setTimeout(() => document.getElementById('tease-msg-1').classList.add('visible'), 1500);
            setTimeout(() => document.getElementById('tease-msg-2').classList.add('visible'), 3500);
        }
        else if (screenId === 'screen-final') {
            setTimeout(() => document.getElementById('final-msg-1').classList.add('visible'), 1500);
            setTimeout(() => document.getElementById('final-msg-2').classList.add('visible'), 4000);
            setTimeout(() => document.getElementById('final-msg-3').classList.add('visible'), 7000);
            setTimeout(() => document.getElementById('final-msg-4').classList.add('visible'), 9000);
            setTimeout(() => document.getElementById('final-brother').classList.add('visible'), 11000);
            createParticles();
        }
    }

    // Init first screen
    document.getElementById('intro-buttons').style.opacity = '0';
    document.getElementById('intro-buttons').style.transition = 'opacity 1s ease';
    triggerScreenAnimations('screen-intro');

    // Audio Logic (Continuous Background Autoplay)
    const audio = document.getElementById('bg-music');
    let isPlaying = false;

    if (audio) {
        audio.volume = 0.4;
        
        // Attempt immediate playback
        const attemptPlay = () => {
            if (!isPlaying) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        isPlaying = true;
                        // Remove global listeners once playing
                        document.removeEventListener('click', attemptPlay);
                        document.removeEventListener('touchstart', attemptPlay);
                        document.removeEventListener('scroll', attemptPlay);
                        document.removeEventListener('keydown', attemptPlay);
                    }).catch(e => {
                        // Browser blocked autoplay, wait for next interaction
                    });
                }
            }
        };

        // Try immediately
        attemptPlay();

        // Fallback: Bind to any user interaction to start audio
        document.addEventListener('click', attemptPlay);
        document.addEventListener('touchstart', attemptPlay);
        document.addEventListener('scroll', attemptPlay);
        document.addEventListener('keydown', attemptPlay);
    }

    // Final Screen Particles
    function createParticles() {
        const container = document.getElementById('particles-container');
        for (let i = 0; i < 25; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.width = Math.random() * 8 + 3 + 'px';
            p.style.height = p.style.width;
            p.style.animationDelay = Math.random() * 5 + 's';
            p.style.animationDuration = Math.random() * 6 + 10 + 's';
            container.appendChild(p);
        }
    }
});
