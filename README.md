# Raksha Bandhan Surprise Website 🎁

A cute, mobile-first, interactive website designed to be a digital Raksha Bandhan gift for your sister. It features a playful YES/NO interaction, a digital letter, memory cards, a certificate, and a final surprise.

## 🛠 How to Personalize

Everything you need to change is located at the very top of `script.js`.

1. Open `script.js` in any text editor.
2. Find the `CONFIG` object at the top.
3. Change the names, messages, and captions.
4. Save the file.

### Adding Photos

1. Create a folder named `assets` right next to your HTML file.
2. Place your photos in the `assets/` folder.
3. In `script.js` under the `CONFIG` object, update the `image` path for each memory to match your files (e.g., `assets/my-photo.jpg`).
4. (Optional) If you don't add photos, a cute placeholder will automatically be used instead.

### Adding Music

1. Add an MP3 file to the `assets/` folder and name it EXACTLY `music.mp3` (`assets/music.mp3`).
2. The website will automatically detect the music file and display a small music player button at the top right corner.

## 🚀 How to Deploy (For Free)

The simplest way to host this for free and share the link with your sister is using **GitHub Pages**.

1. Create a free account on [GitHub](https://github.com/).
2. Create a new repository (e.g., `rakhi-surprise`).
3. Upload all the files from this folder (`index.html`, `style.css`, `script.js`, and the `assets/` folder) to your new repository.
4. In your GitHub repository, go to **Settings** > **Pages** (on the left sidebar).
5. Under "Build and deployment", set the **Source** to `Deploy from a branch`.
6. Under **Branch**, select `main` (or `master`) and click **Save**.
7. Wait about 1-2 minutes. GitHub will provide you with a live URL (e.g., `https://yourusername.github.io/rakhi-surprise/`).
8. Send that link to your sister on WhatsApp/Instagram! 🎉

## 📱 Tech Stack
- HTML5
- CSS3 (Mobile-first, fully responsive)
- Vanilla JavaScript (No heavy frameworks)
- Zero external dependencies! (Works perfectly offline and loads instantly)
