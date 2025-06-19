# React JS Tutorial

React JS is a popular JavaScript library used primarily as a frontend framework for building fast and interactive single-page web applications (SPAs).

---

## What is React?

React enables developers to create large web applications that can update and render efficiently in response to data changes. It uses a component-based architecture, making your code modular, maintainable, and reusable.

---

## Getting Started

### 1. Install Node.js

First, install [Node.js](https://nodejs.org/) on your system. Node.js comes with npm (Node Package Manager), which is required for installing React and its dependencies.

**Verify installation:**

```bash
node --version
npm --version
npx --version
```

If all of the above commands return a version number, your installation is correct.

---

### 2. Create a New React App

Use the following command to create a new React application:

```bash
npx create-react-app my-app
```

This will generate a new folder called `my-app` with all the necessary files and dependencies for a React project.

---

### 3. Run the React App

Navigate into your app’s directory and start the development server:

```bash
cd my-app
npm start
```

This will open your React app in the browser (usually at [http://localhost:3000](http://localhost:3000)).

---

## How React Works: A Brief Overview

- **Component-Based:** React applications are made up of components, which are reusable pieces of UI. Components can be functional or class-based.
- **JSX Syntax:** React uses JSX, a syntax extension for JavaScript that looks similar to HTML, to describe the UI.
- **State Management:** Each component can maintain its own state, allowing dynamic and interactive user interfaces.
- **Virtual DOM:** React updates a virtual representation of the DOM, and only re-renders the parts of the UI that actually change, leading to high performance.
- **Unidirectional Data Flow:** Data flows from parent to child components, making the app easier to debug and understand.

---

## About `App.js`

The `App.js` file is the main component of your React application. It acts as the root component, meaning all other components will be nested inside it. When you start a new React project with `create-react-app`, you get a default `App.js` file that looks like this:

```jsx
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```

- This component is rendered first and serves as the entry point for your UI.
- You can add other components inside `App.js` or import them to organize your application better.
- You can manage state, handle events, and add logic here or in child components.

### Example: Counter in `App.js`

```jsx
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
```

---
## What are Props?

**Props** (short for "properties") are the mechanism in React that allows you to pass data and event handlers from a parent component to a child component. Think of props as function arguments for components—just like how you pass parameters to a function, you pass props to components.

---

## Why Use Props?

- **Component Reusability:** Pass different data to the same component to reuse it with different content.
- **Customization:** Customize behavior and appearance of child components from the parent.
- **Unidirectional Data Flow:** Props enable the top-down flow of data in React, keeping your application predictable and easier to debug.

- Check-out my-app to see uses of props
---
## Using Hooks in React

- **Hooks** are functions that let you use state and other React features in functional components.
- The most commonly used hook is `useState`:
  ```jsx
  import React, { useState } from 'react';

  function Example() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  ```
  ---
## Adding CSS in React

There are several ways to add CSS to your React application:

### Inline Styling (JavaScript Object)

- Define a JavaScript object with CSS properties and pass it to the `style` prop.
- Example:
  ```jsx
  // Create a style object in your component
  let footerStyle = {
    position: "absolute",
    top: "94.3vh",
    width: "100%"
  };

  return (
    <footer className='bg-dark text-light py=3' style={footerStyle}>
      <p className="text-center">Copyright &copy; MyToDoList.com</p>
    </footer>
  );
  ```
- Property names use camelCase (e.g. `backgroundColor` not `background-color`).

### CSS Files
- Create a `.css` file and import it:
  ```css
  /* App.css */
  .myClass {
    color: blue;
    background-color: lightgrey;
  }
  ```
  ```jsx
  import './App.css';

  function App() {
    return <div className="myClass">Styled by CSS file</div>;
  }
  ```

  ---

## Official Documentation

- [React Documentation](https://react.dev/)

---

## Video Tutorial

- [YouTube Video Tutorial: React JS Crash Course](https://youtu.be/RGKi6LSPDLU?si=f4F4a3pouYBLlGiM)

---

Happy Coding! 🚀

