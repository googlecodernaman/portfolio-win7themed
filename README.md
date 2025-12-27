# Windows 7 Themed Portfolio

Live demo: https://eshwar.netlify.app/

**Project**: A Windows‑7 themed personal portfolio built with Next.js. It simulates a Windows 7 boot + login experience and then shows a desktop/home screen with a taskbar and desktop icons.

**Key Features**
- 🎨 **Authentic Windows 7 Experience**: Boot-style BIOS screen that types lines one-by-one
- 🎬 **Boot Animation**: Video + animated "Starting Portfolio" message
- 🔐 **Login Screen**: User avatar, Windows‑7 style glass border, startup audio (plays after user interaction), and shutdown menu
- ✨ **Smooth Transitions**: Fade-out/in when logging in, "Logging in — please wait..." message
- 🖥️ **Desktop Environment**: Full Windows 7 desktop with taskbar, start button, system tray and clock
- 📱 **5 Desktop Icons**: 
  - **About Me**: Professional summary, skills, experience, and education
  - **Resume**: PDF viewer for your resume
  - **My Projects**: Modern card-based showcase of your projects with tech stacks
  - **Hire Me**: Contact form with email integration
  - **LinkedIn**: Direct link to your LinkedIn profile
- 🎯 **Modern UI/UX**: Card-based layouts, smooth animations, and professional styling
- 🔄 **Global State Management**: Single flexible global state using `app/context/GlobalContext.tsx` so components can read/write application state

**Tech Stack**
- **Framework:** `Next.js` (v16.1.1) - Latest with security fixes
- **UI:** React (v19.2.3) + Tailwind CSS (v4.1.18)
- **Language:** TypeScript (v5)
- **PDF Viewer:** @embedpdf packages for resume display
- **Styling:** CSS Modules + Tailwind CSS + 7.css (Windows 7 UI library)

**Important Files**
- `app/layout.tsx` — application root, wraps app in `GlobalProvider`
- `app/context/GlobalContext.tsx` — global state store (`useGlobal()` hook)
- `app/page.tsx` — entry page (decides show BIOS / Loading / Login / Main layout)
- `components/LoadingScreen.tsx` — boot animation + video
- `components/BiosScreen.tsx` — BIOS typewriter-style text
- `components/LoginScreen.tsx` — login UI + shutdown menu + audio handling
- `components/HomeScreen.tsx` — desktop and taskbar UI
- `components/Explorer.tsx` — window manager for desktop applications
- `components/ProjectsWindow.tsx` — modern project showcase with cards
- `components/AboutMeWindow.tsx` — professional profile and experience
- `components/ContactWindow.tsx` — contact form with email integration
- `components/PDFViewer.tsx` — resume PDF viewer
- `components/TaskBar.tsx` — Windows 7 style taskbar
- `components/*.module.css` — component styles
- `public/assets` — images, videos and audio used in the UI

**Local Development**
Prerequisites: Node.js (recommended 18+), pnpm / npm / yarn.

1. Install dependencies

```bash
npm install
# or
# pnpm install
```

2. Start dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm run start
```

4. Lint

```bash
npm run lint
```

**Notes & Gotchas**
- Browsers block audio autoplay. The startup sound is triggered only after a user interaction (click) to avoid `NotAllowedError`.
- Static assets (images, videos, audio) live in `public/assets/*` and are referenced from components as `/assets/...`.
- If you change CSS module names or move files, ensure imports (for example `LoadingScreen.module.css`) remain correct.

**How to add a new global state value**
- Open `app/context/GlobalContext.tsx` and add an initial key to `state`.
- Use `const { state, setState, getState } = useGlobal()` in any component to read or update values.

**Deployment**
- The live site is hosted at https://eshwar.netlify.app/. To redeploy, push to the branch linked with Netlify or configure Netlify to run `npm run build` and `npm run start` (or use their Next.js build settings). If you use another host, follow its Next.js deployment instructions.

**Development Tips**
- To debug the BIOS text timing, open `components/BiosScreen.tsx` and tweak the timers and text arrays.
- Video playback issues: ensure the MP4 is present in `public/assets/videos/` and add `muted playsInline autoPlay` attributes if desired (browsers require `muted` for autoplay).

**Customization Guide**

To personalize this portfolio for your own use:

1. **Update Personal Information**:
   - Edit `components/LoginScreen.tsx` to change the name and title on login screen
   - Update `components/AboutMeWindow.tsx` with your skills, experience, and education
   - Modify `components/ProjectsWindow.tsx` to add your actual projects with real data and links
   - Change email in `components/ContactWindow.tsx` for the contact form

2. **Update LinkedIn URL**:
   - In `components/HomeScreen.tsx`, find the LinkedIn icon object and update the `url` property

3. **Replace Resume PDF**:
   - Add your resume PDF to `public/assets/pdf/` folder
   - Update the path in `components/PDFViewer.tsx` if needed

4. **Update Metadata**:
   - Edit `app/layout.tsx` to change the site title and description

5. **Customize Colors/Styling**:
   - Edit `components/*.module.css` files for component-specific styles
   - Modify `app/globals.css` for global styling changes

**License**
This repository is personal — use as you like. Add a license file (e.g., `LICENSE` with MIT) if you plan to share it publicly.

**Contact**
- Website: https://eshwar.netlify.app/
- If you'd like changes or improvements, open an issue or reach out via the contact details on the site.
