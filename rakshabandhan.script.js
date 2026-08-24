// ==================================================
// 1. CONFIGURATION SECTION
// ==================================================
// Edit all the text, names, and images here!

const CONFIG = {
    // Names
    sisterName: "Sister",
    brotherName: "Your Brother",

    // Screen 1: Intro
    introHeading: "Hey Sister...",
    introSub: "I made something for you.",
    introQuestion: "Do you wanna see it?",
    yesButtonText: "YES ❤️",
    noButtonText: "NO 😏",
    noButtonResponses: [
        "Nope 😭",
        "Are you sure?",
        "Try again 😂",
        "Nice try 😭",
        "You can't escape!"
    ],

    // Screen 2: Main Letter
    letterHeading: "Happy Raksha Bandhan ❤️",
    letterText: `Life would be a little more boring without you.
We may fight, annoy each other and tease each other,
but you're genuinely one of the people I will always be grateful for.

This little website is just a small reminder
that you're special to me.

Happy Raksha Bandhan!`,

    // Screen 3: Memories
    memoriesHeading: "Our Little Memories 📸",
    // To use real photos, change "" to "assets/memory1.jpg" etc.
    memories: [
        {
            image: "", 
            caption: "One of those random memories ❤️"
        },
        {
            image: "",
            caption: "Always causing chaos 😂"
        },
        {
            image: "",
            caption: "Best memories are the unplanned ones."
        }
    ],

    // Screen 4: Award
    awardTitle: "OFFICIAL SISTER AWARD",
    awardSubtitle: "Awarded to",
    awardReason: "For being an amazing sister,\nprofessional annoyance,\nand a permanent part of my life.",

    // Screen 5: Rakhi Reveal
    rakhiText1: "A Rakhi isn't just a thread...",
    rakhiText2: "It's a reminder that no matter how far life takes us,\nI'll always have your back.",
    rakhiButtonText: "One More Thing →",

    // Screen 6: Final
    finalHeading: "One last thing...",
    finalSub: "Thank you for being my sister ❤️",
    finalText: "No matter how much we grow up,\nI'll always be your brother first.\n\nHappy Raksha Bandhan ❤️",
    finalSignature: "Made with ❤️ by your brother",

    // Music
    // To add music, change "" to "assets/music.mp3"
    musicFile: ""
};

// ==================================================
// 2. APP LOGIC (Do not edit below unless you know JS)
// ==================================================

document.addEventListener('DOMContentLoaded', () => {
    // Inject Config Data
    document.getElementById('intro-heading').innerText = CONFIG.introHeading.replace("Sister", CONFIG.sisterName);
    document.getElementById('intro-sub').innerText = CONFIG.introSub;
    document.getElementById('intro-question').innerText = CONFIG.introQuestion;
    document.getElementById('btn-yes').innerText = CONFIG.yesButtonText;
    document.getElementById('btn-no').innerText = CONFIG.noButtonText;

    document.getElementById('letter-heading').innerText = CONFIG.letterHeading;
    document.getElementById('letter-text').innerText = CONFIG.letterText;

    document.getElementById('memories-heading').innerText = CONFIG.memoriesHeading;
    
    document.getElementById('award-title').innerText = CONFIG.awardTitle;
    document.getElementById('award-subtitle').innerText = `${CONFIG.awardSubtitle} ${CONFIG.sisterName}`;
    document.getElementById('award-reason').innerText = CONFIG.awardReason;
    document.getElementById('award-signature').innerText = CONFIG.brotherName;

    document.getElementById('rakhi-text-1').innerText = CONFIG.rakhiText1;
    document.getElementById('rakhi-text-2').innerText = CONFIG.rakhiText2;
    document.getElementById('btn-rakhi-next').innerText = CONFIG.rakhiButtonText;

    document.getElementById('final-heading').innerText = CONFIG.finalHeading;
    document.getElementById('final-sub').innerText = CONFIG.finalSub;
    document.getElementById('final-text').innerText = CONFIG.finalText;
    document.getElementById('final-signature').innerText = CONFIG.finalSignature;

    // Render Memories Safely (No 404 console errors)
    const memoriesContainer = document.getElementById('memories-container');
    CONFIG.memories.forEach((mem, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        
        let imageHTML = '';
        if (mem.image && mem.image.trim() !== "") {
            // Include fallback onerror just in case the path is wrong
            imageHTML = `<img src="${mem.image}" alt="Memory ${index+1}" class="memory-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                         <div class="memory-placeholder" style="display:none;"><span>📸</span></div>`;
        } else {
            // Render placeholder directly if no image path provided
            imageHTML = `<div class="memory-placeholder"><span>📸</span></div>`;
        }

        card.innerHTML = `
            <div class="memory-image-container">
                ${imageHTML}
            </div>
            <p class="memory-caption">${mem.caption}</p>
        `;
        memoriesContainer.appendChild(card);
    });

    // Navigation Logic
    let currentScreenId = 'screen-intro';
    
    function navigateTo(screenId) {
        document.getElementById(currentScreenId).classList.remove('active');
        document.getElementById(currentScreenId).style.display = 'none';
        
        const nextScreen = document.getElementById(screenId);
        nextScreen.style.display = 'flex';
        // Trigger reflow
        void nextScreen.offsetWidth;
        nextScreen.classList.add('active');
        
        currentScreenId = screenId;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (screenId === 'screen-letter') {
            setTimeout(() => {
                document.getElementById('letter-text').classList.add('revealed');
            }, 500);
        }
    }

    // No Button Logic
    const btnNo = document.getElementById('btn-no');
    const btnYes = document.getElementById('btn-yes');
    let noClickCount = 0;

    btnNo.addEventListener('click', () => {
        if (noClickCount < CONFIG.noButtonResponses.length) {
            btnNo.innerText = CONFIG.noButtonResponses[noClickCount];
        } else {
            btnNo.innerText = CONFIG.noButtonResponses[CONFIG.noButtonResponses.length - 1];
        }
        
        noClickCount++;
        
        // Make YES button larger
        const currentScale = 1 + (noClickCount * 0.1);
        btnYes.style.transform = `scale(${currentScale})`;
        
        // Randomly move NO button slightly
        const randomX = (Math.random() - 0.5) * 50;
        const randomY = (Math.random() - 0.5) * 50;
        btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });

    // Yes Button Logic
    btnYes.addEventListener('click', () => {
        fireConfetti();
        playAudio();
        navigateTo('screen-letter');
    });

    // Next Buttons
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const nextScreen = e.target.getAttribute('data-next');
            if (nextScreen) navigateTo(nextScreen);
        });
    });

    // Audio Logic Safely
    const audio = document.getElementById('bg-music');
    const musicControl = document.getElementById('music-control');
    let isPlaying = false;

    // Only attempt to load audio if configured, avoiding 404 console errors
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

    // Simple Confetti Generator
    function fireConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const pieces = [];
        const colors = ['#E84855', '#FF8A95', '#FFD1D6', '#FFFFFF'];

        for (let i = 0; i < 100; i++) {
            pieces.push({
                x: canvas.width / 2,
                y: canvas.height / 2 + 100,
                vx: (Math.random() - 0.5) * 20,
                vy: (Math.random() - 1) * 20 - 5,
                size: Math.random() * 10 + 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let active = false;
            
            pieces.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.5; // gravity
                p.rotation += p.rotationSpeed;
                
                if (p.y < canvas.height) active = true;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
                ctx.restore();
            });

            if (active) {
                requestAnimationFrame(animate);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
        animate();
    }
});
