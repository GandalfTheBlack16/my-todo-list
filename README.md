# My Todo List Application 📝

A modern, responsive todo list application built with Angular 14 and Angular Material. This application helps users organize their daily tasks efficiently with a clean, material design interface.

## 🎯 Features

- **Task Management**: Create, edit, delete, and mark tasks as completed
- **Categories**: Organize tasks by categories (Personal, Work, Home, etc.)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Material Design**: Beautiful UI components following Google's Material Design principles
- **Real-time Updates**: Instant feedback and smooth animations
- **Local Storage**: Tasks persist between browser sessions
- **Search & Filter**: Find tasks quickly with search and filtering capabilities
- **Task Priorities**: Set and manage task priorities (High, Medium, Low)
- **Due Dates**: Set deadlines and get visual indicators for overdue tasks

## 🛠️ Tech Stack

### Frontend
- **Angular 14.2.x** - Modern web application framework
- **Angular Material 14** - UI component library with Material Design
- **TypeScript 4.7** - Type-safe JavaScript superset
- **SCSS** - Enhanced CSS with variables and mixins
- **Angular CDK** - Component development kit for advanced UI components

### Testing & Quality
- **Jest 28** - JavaScript testing framework (replaced Karma/Jasmine)
- **Jest Preset Angular** - Angular-specific Jest configuration
- **Angular Testing Utilities** - TestBed, ComponentFixture, etc.
- **100% Test Coverage** - Comprehensive unit test coverage

### DevOps & CI/CD
- **GitHub Actions** - Automated testing and deployment
- **Node.js 18/20** - JavaScript runtime environment
- **npm** - Package manager with legacy peer deps support

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or 20.x
- npm 8.x or higher
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GandalfTheBlack16/my-todo-list.git
   cd my-todo-list
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 📜 Available Scripts

### Development
- `npm start` - Start development server on port 4200
- `npm run build` - Build the project for production
- `npm run watch` - Build in watch mode for development

### Testing
- `npm test` - Run tests using Angular CLI with Jest
- `npm run test:jest` - Run Jest directly
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run test:ci` - Run tests in CI mode (no watch, with coverage)

### Code Generation
- `ng generate component <name>` - Generate a new component
- `ng generate service <name>` - Generate a new service
- `ng generate module <name>` - Generate a new module

## 📱 Application Architecture

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   ├── services/           # Business logic and data services
│   ├── models/             # TypeScript interfaces and models
│   ├── shared/             # Shared modules (Material, etc.)
│   └── pages/              # Feature pages/routes
├── assets/                 # Static assets (images, icons)
├── environments/           # Environment-specific configurations
└── styles.scss            # Global styles and Material theme
```

## 🎨 UI Components

The application uses Angular Material components including:
- **Navigation**: Toolbar, Menu, Sidenav
- **Layout**: Cards, Lists, Dividers, Grid
- **Forms**: Input fields, Select dropdowns, Checkboxes, Date pickers
- **Buttons**: Raised, Flat, Icon buttons with Material ripple effects
- **Feedback**: Snackbars, Dialogs, Progress indicators
- **Data Display**: Tables, Pagination, Sorting

## 🧪 Testing Strategy

- **Unit Tests**: Component logic, service methods, and utility functions
- **Integration Tests**: Component-service interactions
- **Material Component Testing**: Proper Material component integration
- **Accessibility Testing**: ARIA labels, keyboard navigation
- **Responsive Testing**: Mobile and desktop layouts

## 🔄 CI/CD Pipeline

GitHub Actions automatically:
1. **Installs dependencies** with compatibility flags
2. **Runs linter** for code quality
3. **Builds application** for production
4. **Executes all tests** with coverage reporting
5. **Uploads coverage reports** to Codecov (optional)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🛠️ Development Notes

### Key Configuration Files
- `jest.config.js` - Jest testing configuration
- `angular.json` - Angular CLI project configuration
- `tsconfig.json` - TypeScript compiler options
- `package.json` - Dependencies and scripts

### Material Design Theme
The application uses the **Indigo-Pink** Material Design theme with:
- Primary color: Indigo (#3F51B5)
- Accent color: Pink (#E91E63)
- Roboto font family
- Material Icons

---

**Built with ❤️ using Angular and Material Design**