// ==================================================
// 1. CONFIGURATION SECTION
// ==================================================
// Edit all the personal text here.
// DO NOT worry about photos or music right now - they are optional!
// If an image path is empty (""), a beautiful placeholder will automatically appear.

const CONFIG = {
    // Names
    sisterName: "Didi",
    brotherName: "Papa",

    // Section 1: Intro
    introMessage1: "Papa made something for you.",
    introMessage2: "Something small.\nFor a bond that's never been small.",
    
    // Section 2: Little Things
    littleThings: [
        {
            title: "Childhood",
            text: "Remember how we used to fight over the smallest things?\nAnd somehow, five minutes later, everything was normal again."
        },
        {
            title: "Family",
            text: "We may not always say it,\nbut family feels different when you're there."
        },
        {
            title: "Support",
            text: "Through every up and down, you've always been a constant."
        },
        {
            title: "Laughter",
            text: "The kind of laughter that only siblings understand."
        }
    ],

    // Section 3: Memories
    // To add real photos, change "" to "assets/memory1.jpg"
    memories: [
        {
            title: "Childhood",
            image: "", 
            caption: "Where it all started."
        },
        {
            title: "Growing Up",
            image: "",
            caption: "Years passed, but some things never change."
        },
        {
            title: "Family Moments",
            image: "",
            caption: "The moments that matter most."
        },
        {
            title: "Today",
            image: "",
            caption: "Still the same bond."
        }
    ],

    // Section 4: Letter
    letter: `Didi,

We don't always say everything we feel.

Sometimes life gets busy.
Sometimes we fight.
Sometimes we simply move on to the next day.

But today is a good excuse to stop for a moment.

Thank you for being a part of so many memories,
for all the laughter,
the arguments,
the little moments,
and everything in between.

No matter how much time passes,
you will always be my sister,
and that will always mean something special to me.

Happy Raksha Bandhan ❤️`,

    // Section 5: Tease
    teaseText1: "Okay, enough emotions.",
    teaseText2: "You're still annoying.",
    teaseText3: "Luckily, you're my sister.\nSo I guess I'm stuck with you. 😂❤️",

    // Section 6: Final
    finalText1: "No matter where life takes us...",
    finalText2: "...some bonds never change.",
    
    // Music (Optional)
    // To add music, change "" to "assets/music.mp3"
    musicFile: ""
};

// ==================================================
// 2. APP LOGIC (Do not edit below unless you know JS)
// ==================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Setup UI Text
    document.getElementById('intro-sister').innerText = `${CONFIG.sisterName}...`;
    document.getElementById('intro-msg-1').innerText = CONFIG.introMessage1;
    document.getElementById('intro-msg-2').innerText = CONFIG.introMessage2;
    
    document.getElementById('letter-content').innerText = CONFIG.letter;
    
    document.getElementById('tease-1').innerText = CONFIG.teaseText1;
    document.getElementById('tease-2').innerText = CONFIG.teaseText2;
    document.getElementById('tease-3').innerText = CONFIG.teaseText3;
    
    document.getElementById('final-sister').innerText = `Happy Raksha Bandhan, ${CONFIG.sisterName} ❤️`;
    document.getElementById('final-brother').innerText = `With love,\nYour Brother, ${CONFIG.brotherName}`;
    document.getElementById('final-text-1').innerText = CONFIG.finalText1;
    document.getElementById('final-text-2').innerText = CONFIG.finalText2;

    // Render Little Things
    const littleThingsContainer = document.getElementById('little-things-container');
    CONFIG.littleThings.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'little-card';
        card.innerHTML = `
            <h3 class="little-card-title">${item.title}</h3>
            <div class="little-card-content">${item.text}</div>
        `;
        card.addEventListener('click', () => {
            card.classList.toggle('opened');
        });
        littleThingsContainer.appendChild(card);
    });

    // Render Memories Safely (No 404 console errors)
    const timelineContainer = document.getElementById('timeline-container');
    CONFIG.memories.forEach((mem, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        
        // Beautiful SVG Placeholder
        const svgPlaceholder = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
        </svg><span>Photo reserved for ${mem.title}</span>`;
        
        let imageHTML = '';
        if (mem.image && mem.image.trim() !== "") {
            // Include onerror fallback just in case path is wrong but specified
            imageHTML = `<img src="${mem.image}" alt="${mem.title}" class="memory-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                         <div class="memory-placeholder" style="display:none;">${svgPlaceholder}</div>`;
        } else {
            imageHTML = `<div class="memory-placeholder">${svgPlaceholder}</div>`;
        }

        card.innerHTML = `
            <div class="memory-title">${mem.title}</div>
            <div class="memory-image-wrapper">
                ${imageHTML}
            </div>
            <p class="memory-caption">${mem.caption}</p>
        `;
        
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
        
        timelineContainer.appendChild(card);
    });

    // Navigation & Animations
    let currentScreenId = 'screen-intro';
    
    function navigateTo(screenId) {
        const current = document.getElementById(currentScreenId);
        current.style.opacity = '0';
        
        setTimeout(() => {
            current.classList.remove('active');
            current.style.display = 'none';
            
            const next = document.getElementById(screenId);
            next.style.display = 'flex';
            // reflow
            void next.offsetWidth;
            next.classList.add('active');
            
            currentScreenId = screenId;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            triggerScreenAnimations(screenId);
        }, 1000);
    }

    function triggerScreenAnimations(screenId) {
        if (screenId === 'screen-intro') {
            setTimeout(() => document.getElementById('intro-msg-1').classList.add('visible'), 1500);
            setTimeout(() => document.getElementById('intro-msg-2').classList.add('visible'), 3500);
            setTimeout(() => document.getElementById('btn-open').style.opacity = '1', 5500);
        }
        else if (screenId === 'screen-rakhi') {
            setTimeout(() => {
                document.getElementById('rakhi-anim-container').classList.add('animate');
            }, 500);
            setTimeout(() => {
                document.getElementById('rakhi-text-1').classList.add('visible');
            }, 3000);
            setTimeout(() => {
                document.getElementById('rakhi-text-2').classList.add('visible');
            }, 5000);
            setTimeout(() => {
                document.getElementById('rakhi-text-3').classList.add('visible');
            }, 7000);
        }
        else if (screenId === 'screen-tease') {
            setTimeout(() => document.getElementById('tease-2').classList.add('visible'), 2000);
            setTimeout(() => document.getElementById('tease-3').classList.add('visible'), 4000);
        }
        else if (screenId === 'screen-final') {
            setTimeout(() => document.getElementById('final-text-1').classList.add('visible'), 2000);
            setTimeout(() => document.getElementById('final-text-2').classList.add('visible'), 4500);
            setTimeout(() => document.getElementById('final-sister').classList.add('visible'), 7000);
            setTimeout(() => document.getElementById('final-brother').classList.add('visible'), 8500);
            createParticles();
        }
    }

    // Init first screen
    document.getElementById('btn-open').style.opacity = '0';
    document.getElementById('btn-open').style.transition = 'opacity 1s ease';
    triggerScreenAnimations('screen-intro');

    // Buttons
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const nextScreen = e.target.getAttribute('data-next');
            if (nextScreen) navigateTo(nextScreen);
        });
    });

    // Audio Logic
    const audio = document.getElementById('bg-music');
    const musicControl = document.getElementById('music-control');
    let isPlaying = false;

    // Only attempt to load if configured
    if (CONFIG.musicFile && CONFIG.musicFile.trim() !== "") {
        musicControl.classList.remove('hidden');
        audio.src = CONFIG.musicFile;
    }

    function playAudio() {
        if (!isPlaying && audio.src && CONFIG.musicFile.trim() !== "") {
            audio.play().then(() => {
                isPlaying = true;
                musicControl.classList.add('music-playing');
            }).catch(e => console.log("Audio autoplay prevented by browser"));
        }
    }

    musicControl.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            musicControl.classList.remove('music-playing');
        } else {
            audio.play();
            musicControl.classList.add('music-playing');
        }
        isPlaying = !isPlaying;
    });

    // Handle initial play on first interaction
    document.getElementById('btn-open').addEventListener('click', playAudio);
    
    // Final screen particles
    function createParticles() {
        const container = document.getElementById('particles-container');
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.width = Math.random() * 6 + 2 + 'px';
            p.style.height = p.style.width;
            p.style.animationDelay = Math.random() * 5 + 's';
            p.style.animationDuration = Math.random() * 5 + 8 + 's';
            container.appendChild(p);
        }
    }
});
