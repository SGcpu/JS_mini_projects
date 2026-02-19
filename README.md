# 🚀 JavaScript Mini Projects

[![GitHub stars](https://img.shields.io/github/stars/SGcpu/JS_mini_projects?style=social)](https://github.com/SGcpu/JS_mini_projects/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/SGcpu/JS_mini_projects?style=social)](https://github.com/SGcpu/JS_mini_projects/network/members)
[![GitHub issues](https://img.shields.io/github/issues/SGcpu/JS_mini_projects)](https://github.com/SGcpu/JS_mini_projects/issues)
[![GitHub license](https://img.shields.io/github/license/SGcpu/JS_mini_projects)](https://github.com/SGcpu/JS_mini_projects/blob/main/LICENSE)

A curated collection of **20+ JavaScript mini projects** designed to help beginners learn and practice essential JavaScript concepts. Each project focuses on specific skills and real-world applications, making it perfect for developers looking to upskill in JavaScript.

🌐 **[View Live Portfolio](https://sgcpu.github.io/JS_mini_projects/)** | 📚 **[Browse Projects](#-projects)**

---

## 📖 About This Repository

This repository is a comprehensive learning resource for JavaScript beginners and intermediate developers. Each project is self-contained, featuring clean code examples that demonstrate core JavaScript concepts, DOM manipulation, API integration, and modern web development practices.

### 🎯 Learning Objectives

- Master **DOM manipulation** and event handling
- Understand **asynchronous JavaScript** (Promises, Async/Await, Fetch API)
- Learn **state management** patterns
- Practice **form validation** and user input handling
- Work with **browser APIs** (Web Audio, Local Storage, etc.)
- Build **interactive UI components**
- Implement **game logic** and algorithms

---

## 🗂️ Projects

### 🎨 UI & Styling Projects

| Project | Description | Key Concepts |
|---------|-------------|--------------|
| **[Background Color Changer](./Backgroundcolorchanger)** | Dynamic background color manipulation | DOM Manipulation, Event Listeners |
| **[Digital Clock](./Digitalclock)** | Real-time clock display | Date/Time Objects, setInterval |
| **[Image Editor](./image_editor)** | Apply CSS filters and transformations | CSS Filters, Range Inputs |

### 🎮 Games & Interactive

| Project | Description | Key Concepts |
|---------|-------------|--------------|
| **[Clicker Game](./clicker)** | State-based clicker game | State Management, Game Loop |
| **[Quiz App](./quiz)** | Interactive quiz with scoring | Event Handling, Conditional Logic |
| **[Snake Game](./snake_game)** | Classic snake game with Tailwind CSS | Game Logic, Canvas/Grid, NPM Setup |
| **[Astro](./astro)** | Space-themed exploration navigation | Animation, User Interaction |
| **[Mini1](./mini1)** | Rectangle movement demo | DOM Position Manipulation |

### 📊 Data & API Projects

| Project | Description | Key Concepts |
|---------|-------------|--------------|
| **[Movie Search](./movie_search)** | Search movies using external API | Fetch API, Async/Await, API Integration |
| **[Data Grid](./data_grid)** | Display data in table/grid format | Array Methods, Table Rendering |
| **[Market Tracker](./market_tracker)** | Track real-time market data | Real-time Data, Charts |
| **[Random Quote](./random_quote)** | Generate random quotes | Array Methods, Random Selection |

### 🧮 Utilities & Tools

| Project | Description | Key Concepts |
|---------|-------------|--------------|
| **[To-Do List](./todo)** | Task manager with persistence | Local Storage, CRUD Operations |
| **[Countdown Timer](./countdown_timer)** | Track time to specific dates | Date Calculations, Intervals |
| **[Form Validation](./form)** | Advanced form validation | Input Validation, RegEx, UI Feedback |
| **[Income Tax Calculator](./incometax)** | Calculate tax based on income | Mathematical Calculations, Logic |
| **[Love Calculator](./lovecal)** | Compatibility calculator | String Manipulation, Algorithms |
| **[Profile Engine](./profile_engine)** | User profiling and assessment | Conditional Logic, Object Handling |

### 🎵 Media & Advanced

| Project | Description | Key Concepts |
|---------|-------------|--------------|
| **[Music Visualizer](./music)** | Audio visualization and playback | Web Audio API, Canvas, Visualizations |
| **[Kanban Board](./kanban)** | Drag-and-drop task management | Drag & Drop API, Event Delegation |
| **[Sheet Email](./sheetemail)** | Google Sheets email integration | Google Sheets API, NPM Packages |

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript
- A code editor (VS Code, Sublime Text, etc.)
- Node.js (only required for `snake_game` and `sheetemail` projects)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SGcpu/JS_mini_projects.git
   cd JS_mini_projects
   ```

2. **Open projects:**
   - Most projects can be opened directly by opening their `index.html` file in a browser
   - For the portfolio view, open the root `index.html` file

3. **For projects with dependencies:**
   ```bash
   # Snake Game
   cd snake_game
   npm install
   npm run dev

   # Sheet Email
   cd sheetemail
   npm install
   ```

### Usage

1. Navigate to any project folder
2. Open the `index.html` file in your browser
3. Interact with the project to see it in action
4. Study the `script.js` file to understand the implementation
5. Experiment by modifying the code and seeing the results

---

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how you can contribute:

### Ways to Contribute

1. **Add New Projects** - Create new mini projects that teach JavaScript concepts
2. **Improve Existing Projects** - Enhance code quality, fix bugs, or add features
3. **Documentation** - Improve README files, add code comments, or create tutorials
4. **Bug Reports** - Report issues or unexpected behavior
5. **Feature Requests** - Suggest new projects or improvements

### Contribution Guidelines

#### 1. Fork & Clone
```bash
# Fork this repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/JS_mini_projects.git
cd JS_mini_projects
```

#### 2. Create a Branch
```bash
# Create a new branch for your feature
git checkout -b feature/your-feature-name
```

#### 3. Make Your Changes

**For adding a new project:**
- Create a new folder with a descriptive name (use lowercase and underscores)
- Include at least: `index.html`, `script.js`, and `style.css`
- Follow the existing project structure
- Add clear comments explaining your code
- Test thoroughly in multiple browsers

**Project Structure Example:**
```
your_project_name/
├── index.html
├── script.js
├── style.css
└── README.md (optional, but recommended)
```

**Code Quality Standards:**
- Write clean, readable code
- Use meaningful variable and function names
- Add comments for complex logic
- Follow consistent formatting
- Ensure cross-browser compatibility

#### 4. Update Documentation
- Add your project to this README.md in the appropriate category
- Include a brief description and key concepts
- Update the project counter if needed

#### 5. Test Your Changes
- Test your project in multiple browsers
- Ensure no console errors
- Verify all features work as expected
- Check that existing projects still work

#### 6. Commit & Push
```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Add: Your descriptive commit message"

# Push to your fork
git push origin feature/your-feature-name
```

#### 7. Create a Pull Request
- Go to the original repository on GitHub
- Click "New Pull Request"
- Select your branch
- Fill in the PR template with:
  - **Description:** What does your PR do?
  - **Type:** New project, bug fix, enhancement, documentation
  - **Screenshots:** If applicable
  - **Testing:** How did you test your changes?

### Commit Message Conventions

Use clear, descriptive commit messages:
- `Add: New calculator project`
- `Fix: Countdown timer bug on mobile`
- `Update: Improve kanban board drag handling`
- `Docs: Add contributing guidelines`

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Give credit where credit is due

---

## 📝 Project Ideas for Contributors

Looking for inspiration? Here are some project ideas:

- **Weather App** - Fetch and display weather data
- **Password Generator** - Generate secure random passwords
- **Currency Converter** - Convert between currencies using an API
- **Pomodoro Timer** - Time management tool
- **Memory Card Game** - Classic memory matching game
- **Markdown Previewer** - Live markdown to HTML converter
- **Drawing App** - Canvas-based drawing tool
- **Recipe Finder** - Search recipes by ingredients
- **Unit Converter** - Convert between different units
- **Color Palette Generator** - Create and save color schemes

---

## 📚 Learning Resources

### JavaScript Fundamentals
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

### DOM Manipulation
- [MDN - DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [JavaScript DOM Manipulation](https://www.freecodecamp.org/news/dom-manipulation-in-javascript/)

### APIs & Async JavaScript
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**SGcpu**
- GitHub: [@SGcpu](https://github.com/SGcpu)
- Portfolio: [View Live Projects](https://sgcpu.github.io/JS_mini_projects/)

---

## 🌟 Acknowledgments

- Thanks to all contributors who have helped improve this repository
- Inspired by the JavaScript community and various tutorial resources
- Built with ❤️ for developers learning JavaScript

---

## 📞 Support

- ⭐ Star this repository if you find it helpful
- 🐛 Report bugs by opening an issue
- 💡 Suggest new features through issues
- 🤝 Contribute by submitting a pull request

---

<div align="center">

**Happy Coding! 🚀**

Made with ❤️ by [SGcpu](https://github.com/SGcpu)

</div>
