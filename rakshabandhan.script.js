:root {
    --bg: #FFF8F0;
    --text-main: #8B1E41;
    --text-light: #B43A5F;
    --primary: #E84855;
    --primary-light: #FF8A95;
    --primary-dark: #C62E3A;
    --card-bg: #FFFFFF;
    --shadow: 0 8px 24px rgba(139, 30, 65, 0.08);
    --shadow-hover: 0 12px 32px rgba(139, 30, 65, 0.12);
    --gingham: repeating-linear-gradient(
        45deg,
        rgba(232, 72, 85, 0.03),
        rgba(232, 72, 85, 0.03) 10px,
        rgba(232, 72, 85, 0.08) 10px,
        rgba(232, 72, 85, 0.08) 20px
    );
    --font-main: 'Quicksand', sans-serif;
    --font-hand: 'Caveat', cursive;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

body {
    font-family: var(--font-main);
    background-color: var(--bg);
    color: var(--text-main);
    overflow-x: hidden;
    line-height: 1.6;
    background-image: radial-gradient(circle at center, rgba(232,72,85,0.03) 0%, transparent 100%);
}

#app {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    background: var(--bg);
    box-shadow: 0 0 40px rgba(0,0,0,0.05);
}

/* Audio Player */
#music-control {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
    background: var(--card-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow);
    cursor: pointer;
    z-index: 100;
    color: var(--primary);
    transition: transform 0.3s ease;
}
#music-control:active {
    transform: scale(0.9);
}
#music-control.hidden {
    display: none;
}
#music-control svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
}
.music-playing {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(232, 72, 85, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(232, 72, 85, 0); }
    100% { box-shadow: 0 0 0 0 rgba(232, 72, 85, 0); }
}

/* Screens */
.screen {
    min-height: 100vh;
    padding: 40px 24px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0;
    transition: opacity 0.8s ease, transform 0.8s ease;
}
.screen.active {
    display: flex;
    opacity: 1;
    animation: slideUpFade 0.8s ease forwards;
}

@keyframes slideUpFade {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
}

/* Typography */
h1, h2, h3 {
    color: var(--text-main);
    font-weight: 700;
}
.handwritten {
    font-family: var(--font-hand);
    font-size: 2.8rem;
    line-height: 1.2;
    color: var(--primary);
    margin-bottom: 16px;
    transform: rotate(-2deg);
}
p {
    font-size: 1.1rem;
    margin-bottom: 24px;
    font-weight: 600;
    color: var(--text-light);
}

/* Buttons */
.button-group {
    display: flex;
    gap: 16px;
    margin-top: 32px;
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    min-height: 120px;
}

button {
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 1.1rem;
    padding: 14px 32px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    outline: none;
}

.btn-primary, .btn-next {
    background: var(--primary);
    color: white;
    box-shadow: 0 6px 16px rgba(232, 72, 85, 0.3);
}
.btn-primary:active, .btn-next:active {
    transform: scale(0.95);
    background: var(--primary-dark);
}

.btn-secondary {
    background: var(--card-bg);
    color: var(--text-main);
    box-shadow: var(--shadow);
    position: relative;
}

/* Intro Screen */
#screen-intro .svg-container {
    margin: 40px 0;
    width: 180px;
    height: 180px;
    animation: float 4s ease-in-out infinite;
}
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}

/* Card Styling (Letter & Award) */
.card {
    background: var(--card-bg);
    border-radius: 24px;
    padding: 40px 24px;
    width: 100%;
    box-shadow: var(--shadow);
    position: relative;
    overflow: hidden;
    margin-bottom: 32px;
}
.card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 12px;
    background: var(--gingham);
}
.card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0; height: 12px;
    background: var(--gingham);
}

.typewriter-text {
    font-size: 1.15rem;
    line-height: 1.8;
    color: var(--text-main);
    white-space: pre-wrap;
    text-align: left;
    margin: 24px 0;
    font-weight: 600;
    opacity: 0;
}
.typewriter-text.revealed {
    opacity: 1;
    transition: opacity 1s ease;
}

/* Memories Screen */
.memories-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    margin-bottom: 32px;
}
.memory-card {
    background: #fff;
    padding: 16px 16px 24px 16px;
    border-radius: 12px;
    box-shadow: var(--shadow);
    transform: rotate(-2deg);
    transition: transform 0.3s ease;
}
.memory-card:nth-child(even) {
    transform: rotate(2deg);
}
.memory-image-container {
    width: 100%;
    aspect-ratio: 1/1;
    background: var(--gingham);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.memory-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
.memory-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%);
    color: white;
    font-family: var(--font-hand);
    font-size: 2rem;
    position: absolute;
    top: 0; left: 0;
}
.memory-caption {
    font-family: var(--font-hand);
    font-size: 1.6rem;
    color: var(--text-main);
}

/* Award Screen */
.award-ribbon {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
}
.award-signature {
    margin-top: 32px;
    font-family: var(--font-hand);
    font-size: 2rem;
    color: var(--primary);
    text-align: right;
    padding-top: 16px;
    border-top: 1px dashed var(--primary-light);
}

/* Rakhi Screen */
.rakhi-svg {
    width: 200px;
    height: 200px;
    margin: 32px auto;
    filter: drop-shadow(0 10px 15px rgba(232, 72, 85, 0.2));
}

/* Final Screen */
#screen-final {
    background-color: var(--primary);
    color: white;
}
#screen-final h1, #screen-final h2, #screen-final p {
    color: white;
}
#screen-final .handwritten {
    color: #FFD1D6;
    font-size: 3.5rem;
}

/* Confetti Container */
#confetti-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .screen { transition: none; animation: none; }
    .screen.active { animation: none; opacity: 1; transform: none; }
    .svg-container { animation: none; }
}

@media (min-width: 481px) {
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f0e9e1;
    }
    #app {
        border-radius: 40px;
        height: 90vh;
        overflow-y: auto;
        margin: 5vh 0;
        border: 8px solid white;
    }
}
