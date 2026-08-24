# Raksha Bandhan Surprise Website 🎁

This is a **pure static HTML/CSS/JavaScript website**. It is designed to be a digital Raksha Bandhan gift for your sister. It features a playful YES/NO interaction, a digital letter, memory cards, a certificate, and a final surprise.

## 🛠 How to Personalize

Everything you need to change is located at the very top of `script.js`.

1. Open `script.js`.
2. Find the `CONFIG` object at the top.
3. Change the sister's name, messages, and captions.
4. Save the file.

### HOW TO ADD PHOTOS:

Photos are completely optional. The website works perfectly and will show a beautiful placeholder if no photos are provided.

To add photos later:
1. Place photos into the `assets/` folder (e.g., `assets/memory1.jpg`, `assets/memory2.jpg`).
2. Update the filenames in the `CONFIG` object in `script.js` to match exactly.

### HOW TO ADD MUSIC:

Music is also optional. 
1. Place your audio file into the `assets/` folder and name it EXACTLY `music.mp3` (so the path is `assets/music.mp3`).
2. The website will automatically detect the asset and enable a music player button. If the file is missing, the button safely hides itself without causing errors.

## 🚀 How to Deploy to Vercel

Because this is a pure static website with no build step, it is natively compatible with Vercel right out of the box.

1. Upload this entire folder to a new GitHub repository. Make sure `index.html` is at the very root of your GitHub repository.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your new GitHub repository.
4. **Important:** Leave all configuration settings blank/default. Vercel automatically detects static HTML websites. Do not set a Build Command or an Output Directory.
5. Click **Deploy**.
6. Share the generated Vercel URL with your sister! 🎉

## 📱 Tech Stack
- HTML5
- CSS3 (Mobile-first, fully responsive)
- Vanilla JavaScript
- No backend, no database, no npm build steps.
