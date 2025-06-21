# Technical Specifications - Chemistry Learning App

## 🏗️ SYSTEM ARCHITECTURE

### **Current Beta App Technology Stack**

```json
{
  "frontend": {
    "framework": "React 19.1.0",
    "language": "TypeScript 5.7.2",
    "bundler": "Vite 6.2.0",
    "routing": "React Router DOM 7.6.2",
    "styling": "CSS Variables + Custom Classes"
  },
  "development": {
    "nodeVersion": "Required (latest LTS recommended)",
    "packageManager": "npm",
    "devServer": "Vite Dev Server",
    "hotReload": "Yes"
  },
  "deployment": {
    "type": "Static Site",
    "compatibility": "Modern browsers",
    "hosting": "Vercel/Netlify ready"
  }
}
```

### **Planned Enhancements**

```json
{
  "backend": {
    "runtime": "Node.js + Express",
    "database": "SQLite (dev) → PostgreSQL (prod)",
    "api": "RESTful API for progress/analytics"
  },
  "features": {
    "persistence": "localStorage → database",
    "analytics": "Learning progress tracking",
    "citations": "Integration with chemistry databases",
    "assessments": "Enhanced question engine"
  }
}
```

## 📁 PROJECT STRUCTURE

```
chemprep9-online-course/
├── public/                   # Static assets
├── src/                     # React application source
│   ├── components/          # Reusable UI components
│   │   ├── EquationBalancer.tsx
│   │   ├── IdealGasLawSimulator.tsx
│   │   ├── MoleculeBuilder3D.tsx
│   │   ├── ReferencesPage.tsx
│   │   └── VirtualTitration.tsx
│   ├── contexts/           # React Context providers
│   │   ├── ThemeContext.tsx
│   │   └── ProgressContext.tsx
│   └── data/              # Application data
│       ├── elementsData.ts
│       └── lessonContent/ # Individual lesson files
│           ├── c1l1Data.ts
│           ├── c1l2Data.ts
│           └── ... (36 total lessons)
├── data/                   # Top-level data exports
│   ├── lessonsData.ts     # Main lesson aggregation
│   ├── unitsData.ts       # Unit definitions
│   ├── phetMapping.ts     # PhET simulation URLs
│   └── questionsData.ts   # Question bank
├── docs/                  # 📁 NEW: Project documentation
├── App.tsx               # Main application component
├── index.tsx            # React entry point
├── types.ts             # TypeScript type definitions
├── package.json         # Dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## 🧩 COMPONENT ARCHITECTURE

### **Core Components**

#### **Interactive Chemistry Tools**
- **EquationBalancer**: Chemical equation balancing with real-time validation
- **MoleculeBuilder3D**: 3D molecular modeling and VSEPR exploration
- **IdealGasLawSimulator**: PV=nRT calculations and gas behavior
- **VirtualTitration**: Acid-base titration with pH curves

#### **Content Management**
- **LessonPage**: Rich content rendering with markdown support
- **UnitPage**: Unit overview and lesson navigation
- **ProgressTracking**: Completion status and analytics

#### **UI Framework**
- **ThemeProvider**: Light/dark mode management
- **Responsive Design**: Mobile-first approach
- **Navigation**: Hash-based routing system

### **Data Structure Types**

```typescript
interface Lesson {
  id: string;              // e.g., "C1L1"
  unit: number;
  title: string;
  objectives: string[];
  labMinutes: number;
  interactive?: InteractiveElement[];
  narrative: string;       // Rich markdown content
  practice?: PracticeItem[];
  answers?: AnswerItem[];
}

interface InteractiveElement {
  type: 'phet' | '3dmol' | 'custom';
  url?: string;
  title?: string;
  componentKey?: string;   // For custom React components
  description?: string;
  placeholderText?: string;
}

interface Unit {
  id: number;
  title: string;
  lessons: number;
  weeks: number;
}
```

## 🎨 STYLING SYSTEM

### **CSS Variables Approach**
```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --color-accent: #8b5cf6;
  --color-background-light: #ffffff;
  --color-background-dark: #1e293b;
  --color-text-light: #334155;
  --color-text-dark: #f8fafc;
}
```

### **Theme Implementation**
- **Dynamic switching**: Light/dark mode toggle
- **CSS custom properties**: Consistent color system
- **Responsive design**: Mobile-first breakpoints
- **Accessibility**: WCAG 2.1 AA compliance

## 🚀 DEVELOPMENT WORKFLOW

### **Setup Instructions**
```bash
# Clone/navigate to project
cd /Users/matiasmirvois/Desktop/chemprep9-online-course/

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### **Development Commands**
- `npm run dev` - Start Vite dev server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally

### **File Naming Conventions**
- **Components**: PascalCase (e.g., `EquationBalancer.tsx`)
- **Data files**: camelCase (e.g., `c1l1Data.ts`)
- **Types**: Descriptive interfaces (e.g., `Lesson`, `InteractiveElement`)

## 🔌 INTEGRATION POINTS

### **PhET Simulations**
```typescript
// PhET integration via iframe embedding
const phetSimulations = {
  "states-of-matter": "https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html",
  "build-an-atom": "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html"
};
```

### **Interactive Component Integration**
```typescript
// Custom component registration
const customComponents = {
  EquationBalancer: (props) => <EquationBalancer {...props} />,
  MoleculeBuilder3D: (props) => <MoleculeBuilder3D {...props} />,
  IdealGasLawSimulator: (props) => <IdealGasLawSimulator {...props} />
};
```

## 📊 PERFORMANCE SPECIFICATIONS

### **Current Performance**
- **Bundle size**: ~2MB (development)
- **Load time**: <3 seconds on broadband
- **Interactive responsiveness**: <100ms for UI actions
- **Memory usage**: ~50MB typical browser allocation

### **Optimization Targets**
- **Bundle splitting**: Code splitting by routes
- **Lazy loading**: Dynamic imports for heavy components
- **Asset optimization**: Image compression and format selection
- **Caching strategy**: Service worker for offline capability

## 🔗 PLANNED BACKEND INTEGRATION

### **Database Schema** (Planned)
```sql
-- User progress tracking
CREATE TABLE user_progress (
  id INTEGER PRIMARY KEY,
  lesson_id TEXT NOT NULL,
  completed_at TIMESTAMP,
  score REAL
);

-- Analytics data
CREATE TABLE learning_analytics (
  id INTEGER PRIMARY KEY,
  lesson_id TEXT NOT NULL,
  time_spent INTEGER,
  attempts INTEGER,
  difficulty_rating REAL
);
```

### **API Endpoints** (Planned)
```typescript
// Progress tracking
POST /api/progress/lesson/:lessonId
GET /api/progress/user/:userId

// Analytics
POST /api/analytics/event
GET /api/analytics/summary/:lessonId

// Content management
GET /api/lessons/:unitId
GET /api/units/
```

## 🔒 SECURITY CONSIDERATIONS

### **Current Security**
- **Static site**: No server-side vulnerabilities
- **Client-side validation**: Input sanitization for interactive tools
- **PhET integration**: Sandboxed iframe embedding

### **Enhanced Security** (Planned)
- **API authentication**: JWT token-based auth
- **Data validation**: Server-side input validation
- **Rate limiting**: Prevent abuse of interactive tools
- **HTTPS enforcement**: SSL/TLS for all communications

## 📱 CROSS-PLATFORM COMPATIBILITY

### **Browser Support**
- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Feature detection**: Graceful degradation for unsupported features

### **Device Compatibility**
- **Desktop**: Windows, macOS, Linux
- **Mobile**: iOS 14+, Android 8+
- **Tablet**: iPad, Android tablets
- **Screen sizes**: 320px+ width responsive design

## 🛠️ MAINTENANCE & UPDATES

### **Dependency Management**
- **React**: Major version updates quarterly
- **TypeScript**: Monthly minor updates
- **Security patches**: Weekly automated checks
- **PhET simulations**: Quarterly URL validation

### **Content Updates**
- **Lesson content**: Version-controlled markdown files
- **Interactive components**: Modular update system
- **Assessment questions**: Database-driven content management
- **Citations**: Automated reference validation

---

**Last Updated**: June 6, 2025  
**Version**: 1.0 (Beta app analysis)  
**Next Review**: After Phase 2 completion  
**Maintainer**: Development team lead