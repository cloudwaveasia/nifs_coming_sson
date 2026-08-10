# National Institute of Fundamental Studies (NIFS) - Coming Soon Portal

A modern, high-performance, and professional "Coming Soon / Under Maintenance" web page designed for the **National Institute of Fundamental Studies (NIFS), Sri Lanka** ([https://www.nifs.ac.lk](https://www.nifs.ac.lk)).

---

## 🌟 Highlights & Features

1. **Academic & Scientific UI/UX**:
   - Deep midnight and sapphire aesthetics (`#040814`, `#0d1e44`) paired with glowing neon cyan (`#38bdf8`, `#00f2fe`) and amber gold accents.
   - Interactive SVG emblem representing atomic orbitals, particle physics, and fundamental science.
   - Frosted glassmorphism panels with smooth backdrop blur.

2. **Interactive Molecular / Constellation Particle Canvas**:
   - Custom canvas animation (`particles.js`) simulating connected scientific research nodes.
   - Interactive physics with mouse attraction and repulsion.
   - Optimized for desktop and mobile devices.

3. **Live Precision Launch Countdown**:
   - Displays real-time Days, Hours, Minutes, and Seconds with progress indicators.
   - Automatic time formatting and fallback behavior.

4. **Interactive Early-Access Subscription**:
   - Role selector (Researcher, Student / Postgrad, Industry Partner).
   - Form validation with loading animations, instant feedback, and `localStorage` persistence.
   - Non-intrusive toast notifications.

5. **Upcoming Capabilities Grid**:
   - Highlights 6 core upcoming features: *16 Thematic Research Areas*, *Digital Repository & E-Journals*, *Collaboration & Consultation (CCD)*, *Postgraduate Grants*, *Central Facility Booking*, and *Live Science Metrics*.

6. **Interim Communication & Emergency Contacts Modal**:
   - Direct department directory (Director's Office, CCD, Finance, Science Library).
   - Embedded quick-message form for visitors needing urgent assistance during site maintenance.

---

## 🚀 How to Run Locally or Deploy

### Option 1: Direct Browser Open
Simply double-click [`index.html`](./index.html) or right-click and open with your preferred browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server
Using Python:
```bash
python -m http.server 3000
```
Then navigate to `http://localhost:3000`.

Using Node.js (npx):
```bash
npx serve .
```

---

## 📁 File Structure

```
nifs-coming-soon/
├── index.html       # Semantic HTML5 structure & SEO meta tags
├── style.css        # Responsive CSS3 styles, glassmorphism, animations
├── particles.js     # Canvas constellation particle network simulation
├── app.js           # Countdown timer, modal, forms, toast notifications
└── README.md        # Documentation & setup guide
```
