# Raksha Bandhan Surprise Website 🎁

This is a beautiful, static HTML/CSS/JavaScript website designed to be a heartfelt Raksha Bandhan gift from a brother to a sister. 

It is completely static, with no backend or build step required. **It can be imported into Vercel and deployed instantly.**

## 🛠 HOW TO ADD PHOTOS:

The website has been built to work perfectly *right now* with zero photos. You will see beautiful placeholders instead of broken image icons.

When you are ready to add your family photos:
1. Place your photos into the `assets/` folder. Name them things like `memory1.jpg`, `memory2.jpg`.
2. Open `script.js` in a text editor.
3. Scroll to the `CONFIG` section at the very top.
4. Find the `memories` array.
5. Change `image: ""` to `image: "assets/memory1.jpg"`. 

The website will automatically display your photos.

## 🎵 HOW TO ADD MUSIC:

Music is also completely optional and currently turned off. 
1. Place your audio file into the `assets/` folder and name it EXACTLY `music.mp3` (so the path is `assets/music.mp3`).
2. Open `script.js` and go to the `CONFIG` section.
3. Change `musicFile: ""` to `musicFile: "assets/music.mp3"`.

The website will automatically display a music control button. If you leave it blank, the button stays hidden and won't crash the page.

## ✍️ HOW TO PERSONALIZE MESSAGES:

1. Open `script.js`.
2. Find the `CONFIG` object at the very top.
3. Change `sisterName`, `brotherName`, the `littleThings` texts, and the `letter` content. Everything is centralized in this one place.

## 🚀 HOW TO DEPLOY TO VERCEL

Because this is a pure static website with no build step, it deploys instantly on Vercel.

1. Upload this entire folder to a new GitHub repository. **Make sure `index.html` is at the very root of your GitHub repository.** Do not upload it inside a sub-folder!
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. **Important:** Leave all configuration settings blank/default. Vercel automatically detects static HTML websites. Do not set a Build Command or an Output Directory.
5. Click **Deploy**.
6. Share the generated link with your sister! 🎉
