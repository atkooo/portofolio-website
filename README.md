# Okta Maulana - Software Engineer Portfolio (Vue 3 + Vite)

Website portofolio pribadi Okta Maulana (Software Engineer / Full-Stack Developer) yang dibangun menggunakan **Vue 3 (Composition API)**, **Vite**, dan **Tailwind CSS**.

---

## 🛠️ Tech Stack & Technologies

- **Vue 3 (Composition API)** & Single File Components (`.vue`)
- **Vite** (Next-Generation Frontend Tooling)
- **Tailwind CSS v3** (Modular Design System & Utility-First CSS)
- **LogRocket & Disqus** Integration

---

## 📁 Modular Project Structure

```text
2026-web-portfolio-okta/
├── ARCHITECTURE.md            # Vue 3 System Architecture Documentation
├── index.html                 # Main Root HTML (#app mount point)
├── vite.config.js             # Vite Configuration
├── src/
│   ├── main.js                # Vue App Entrypoint
│   ├── App.vue                # Root App Component
│   ├── assets/css/main.css    # Master CSS Import
│   ├── composables/           # Shared Reactive Logic (useTheme, useVisitor)
│   └── components/            # Vue Single File Components (.vue)
│       ├── WelcomeModal.vue   # Visitor Welcome Modal
│       ├── Navbar.vue         # Responsive Header & Drawer
│       ├── HeroSection.vue    # Hero Section & Typewriter
│       ├── AboutSection.vue   # About Me & Bio
│       ├── ExperienceSection.vue # Career Timeline
│       ├── SkillsSection.vue  # Skill Bars & Badges
│       ├── ProjectsSection.vue # Project Grid & Category Filter
│       ├── ContactSection.vue  # Contact Form & Info
│       ├── DisqusComments.vue  # Comment Thread
│       └── FooterSection.vue  # Footer
```

Untuk penjelasan arsitektur lengkap, silakan lihat [ARCHITECTURE.md](file:///d:/Okta/Project/2026-web-portfolio-okta/ARCHITECTURE.md).

---

## 🚀 Getting Started

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/atkooo/portofolio-website.git
cd 2026-web-portfolio-okta

# Install dependencies
npm install
```

### 2. Development Server

Jalankan server pengembangan lokal dengan Hot Module Replacement (HMR):

```bash
npm run dev
```

### 3. Production Build

Bundling dan minifikasi aplikasi untuk produksi:

```bash
npm run build
```

---

## 📄 License

Project ini dibuat oleh Okta Maulana.
