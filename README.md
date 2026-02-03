# ncw8.github.io
## Purpose

This is Nathan Wong's personal portfolio website, showcasing technical skills, project experience, and interactive data visualizations. The site serves as a digital portfolio for IAT 355, demonstrating proficiency in web development, design, and data visualization.

## Technologies Used

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Responsive styling and layouts
- **JavaScript (Vanilla)** - Interactive functionality and dynamic SVG generation
- **Font Awesome** - Icon library for social links and UI elements

### Data Visualization
- **D3.js concepts** - Manual SVG creation and manipulation using `document.createElement`
- Custom bar chart implementation
- Procedurally generated SVG graphics (Gundam mecha)

### Tools & Workflow
- **Git/GitHub** - Version control and hosting via GitHub Pages
- **VS Code** - Development environment

## Site Navigation

### Main Pages

1. **Home (index.html)** - Landing page with the following sections:
   - **Hero Section** - Introduction and brief bio
   - **Skills** - Technical skills, frameworks, tools, and education
   - **Experience** - Project portfolio including UBC Climbing Club website design and ethnography research
   - **About** - Personal photo gallery
   - **Footer** - Contact information and copyright

2. **Visualizations (visualizations.html)** - Data visualization showcase:
   - **Gundam Mecha SVG** - Procedurally generated mobile suit illustration
   - **Straw Hat IQ Chart** - Horizontal bar chart showing intelligence levels of One Piece characters
   - All visualizations are generated using JavaScript functions

### Navigation Structure

- **Fixed Sidebar Navigation** (Desktop) - Vertical navigation menu on the left side with links to:
  - About
  - Skills
  - Experience
  - Contact
  - Visualizations

- **Mobile Menu** - Collapsible hamburger menu for responsive mobile experience

- **Social Links** - Direct links to:
  - GitHub profile
  - LinkedIn profile
  - Email contact

### Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Alt text on all images
- Keyboard-navigable links
- Proper heading hierarchy

## File Structure

```
ncw8.github.io/
├── index.html              # Main portfolio page
├── visualizations.html     # Data visualizations page
├── style.css              # Global styles and responsive design
├── main.js                # Main site interactivity
├── vis.js                 # Visualization generation functions
├── README.md              # This file
└── assets/                # Images and media files
```

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ncw8/ncw8.github.io.git
   ```

2. Open `index.html` in a web browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. Navigate to `http://localhost:8000` in your browser

## Live Site

Visit the live site at: https://xxkrestx.github.io/ncw8.github.io/

---

© 2026 Nathan Wong. All rights reserved.