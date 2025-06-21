# ChemPrep9 Online Course Platform

A comprehensive React 19 + TypeScript chemistry education platform featuring a complete 12-unit curriculum with integrated practice question banks.

## 🧪 Features

### Complete Chemistry Curriculum
- **12 comprehensive units** covering Introduction to Nuclear Chemistry
- **370+ authoritative citations** from peer-reviewed sources
- **4.8/5 quality rating** with rigorous content validation
- **Modern design system** with dark mode and accessibility features

### Interactive Practice System ✨ **NEW**
- **132 practice questions** across all 12 units
- **5 question types**: Multiple Choice, Short Answer, Problem Solving, Application, Extension
- **Smart filtering** by question type and unit
- **Progress tracking** with detailed statistics
- **Responsive navigation** with Previous/Next controls

### Technical Excellence
- **React 19** with TypeScript for type safety
- **Vite** build system with lazy loading
- **Tailwind CSS** for modern styling
- **35/35 tests passing** with comprehensive coverage
- **Production-ready** deployment configuration

## 📚 Curriculum Overview

| Unit | Topic | Questions | Key Concepts |
|------|-------|-----------|--------------|
| 1 | Introduction to Chemistry & Measurement | 11 | Scientific method, units, significant figures |
| 2 | Atomic Structure | 11 | Electrons, protons, neutrons, quantum theory |
| 3 | The Periodic Table | 11 | Periodic trends, electron configuration |
| 4 | Chemical Bonding | 11 | Ionic, covalent, metallic bonding |
| 5 | Chemical Reactions & Stoichiometry | 11 | Balancing equations, mole calculations |
| 6 | Physical Behavior of Matter | 11 | Gas laws, kinetic theory, phase changes |
| 7 | Solutions & Energy | 11 | Concentration, thermodynamics, colligative properties |
| 8 | Kinetics & Equilibrium | 11 | Reaction rates, Le Châtelier's principle |
| 9 | Acids, Bases & Salts | 11 | pH, neutralization, buffers |
| 10 | Redox & Electrochemistry | 11 | Oxidation states, galvanic cells |
| 11 | Organic Chemistry | 11 | Hydrocarbons, functional groups |
| 12 | Nuclear Chemistry | 11 | Radioactivity, fission, fusion |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
git clone https://github.com/mirvoism/chemprep9-online-course.git
cd chemprep9-online-course
npm install
npm run dev
```

### Development Server
Open [http://localhost:5173](http://localhost:5173) to view the application.

## 🎯 Practice Question System

### Question Types
- **Multiple Choice (4 per unit)**: Quick assessment with immediate feedback
- **Short Answer (3 per unit)**: Conceptual understanding with key points
- **Problem Solving (2 per unit)**: Step-by-step calculations with formulas
- **Application (1 per unit)**: Real-world scenarios and practical applications  
- **Extension (1 per unit)**: Advanced concepts for deeper learning

### Navigation Features
- Filter questions by type or view all
- Previous/Next navigation with progress tracking
- Unit-specific question banks
- Responsive design for all devices

## 🛠️ Technical Architecture

### Frontend Stack
- **React 19** with functional components and hooks
- **TypeScript** for type safety and developer experience
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling

### Component Structure
```
src/
├── components/
│   ├── practice/           # Question bank components
│   │   ├── PracticeSection.tsx
│   │   ├── MultipleChoiceQuestion.tsx
│   │   ├── ShortAnswerQuestion.tsx
│   │   ├── ProblemSolvingQuestion.tsx
│   │   ├── ApplicationQuestion.tsx
│   │   └── ExtensionQuestion.tsx
│   ├── demo/               # Lesson viewer components
│   └── ui/                 # Reusable UI components
├── data/
│   ├── practiceQuestions/  # Question bank data
│   └── lessonContent/      # Curriculum content
└── types/                  # TypeScript definitions
```

### Key Features
- **Lazy loading** for optimal performance
- **Type-safe** question bank system
- **Modular architecture** for easy maintenance
- **Comprehensive testing** with Vitest
- **Accessibility** features throughout

## 📊 Testing & Quality

- **35/35 tests passing** with comprehensive coverage
- **TypeScript strict mode** for type safety
- **ESLint + Prettier** for code quality
- **Responsive design** testing across devices
- **Accessibility** compliance (WCAG guidelines)

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run preview
```

### Deployment Options
- **Vercel**: Zero-config deployment with GitHub integration
- **Netlify**: Continuous deployment with form handling
- **GitHub Pages**: Static site hosting
- **Docker**: Containerized deployment

## 📈 Project Status

- ✅ **Complete curriculum** (12 units)
- ✅ **Question bank system** (132 questions)
- ✅ **Modern UI/UX** with dark mode
- ✅ **Type safety** throughout
- ✅ **Production ready** with testing
- ✅ **GitHub repository** with proper CI/CD setup

## 🤝 Contributing

This is an educational platform designed for chemistry students and educators. Contributions are welcome for:

- Additional practice questions
- UI/UX improvements
- Performance optimizations
- Accessibility enhancements
- Bug fixes and testing

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Bronx Science Honors Chemistry** curriculum foundation
- **370+ scientific citations** from authoritative sources
- **Modern web technologies** enabling interactive learning
- **Open source community** for tools and libraries

---

**ChemPrep9** - Empowering chemistry education through interactive technology 🧪✨