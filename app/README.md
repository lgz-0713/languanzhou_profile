# Guanzhou Lan - Academic Profile

Personal academic homepage built with React, TypeScript, and Tailwind CSS.

## 🌐 Live Demo

Visit the live site: [https://puze252nxhsaw.ok.kimi.link](https://puze252nxhsaw.ok.kimi.link)

## 📋 Features

- **Academic Style Design** - Clean, professional layout suitable for researchers
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Navigation** - Fixed navigation with smooth scrolling to sections
- **Bilingual Support** - English and Chinese content for international audiences
- **Sections Included:**
  - Hero/Profile with photo placeholder
  - About Me with research interests
  - Education timeline
  - Research Projects
  - Publications with CCF/SCI ratings
  - Experience & Internships
  - Honors & Awards
  - Contact Information

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `yourusername.github.io` (replace `yourusername` with your GitHub username)
3. Make it public

### Step 2: Push Code to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (or click "Pages" in the left sidebar)
4. Under "Build and deployment", select:
   - **Source**: GitHub Actions
5. The workflow will automatically deploy your site

### Step 4: Access Your Site

Your site will be available at:
```
https://yourusername.github.io
```

## 🖼️ Adding Your Photo

To add your personal photo:

1. Prepare a photo with aspect ratio 4:5 (recommended: 400x500px)
2. Replace the placeholder in `src/sections/Hero.tsx`:

```tsx
// Replace this placeholder div:
<div className="text-center p-4">
  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-slate-300 flex items-center justify-center">
    <GraduationCap size={40} className="text-slate-500" />
  </div>
  <p className="text-xs text-slate-500 text-center">
    Add your photo here
    <br />
    (400x500px recommended)
  </p>
</div>

// With your image:
<img 
  src="/your-photo.jpg" 
  alt="Guanzhou Lan" 
  className="w-full h-full object-cover"
/>
```

3. Place your photo in the `public/` folder
4. Rebuild and redeploy

## 📝 Customizing Content

All content is stored in the respective section files under `src/sections/`:

- `Hero.tsx` - Profile photo, name, contact info
- `About.tsx` - Biography and skills
- `Education.tsx` - Education history
- `Research.tsx` - Research projects
- `Publications.tsx` - Papers and publications
- `Experience.tsx` - Work experience
- `Awards.tsx` - Honors and patents
- `Contact.tsx` - Contact details and links

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📄 License

This project is open source and available for personal use.

## 📧 Contact

For questions or suggestions, please contact:
- Email: guanzhoul@mail.nwpu.edu.cn
- Phone: +86 17392534858
