**My Learning Goal**: To learn the patterns of react and javascript

**Structure**:

1. [Overview of React](###Overview-of-React)
2. [Singleton Pattern](###Singleton-Pattern)
3. Proxy Pattern
4. Provider Pattern
5. Prototype Pattern
6. Module Pattern
7. Mixin Pattern
8. Mediator/ Middleware Pattern
9. Render Props Pattern
10. Hooks Pattern
11. HOC Pattern
12. Flyweight Pattern
13. Compound Pattern
14. Command Pattern
15. Overview of Next.js
16. Client-side rendering
17. Server-side rendering
18. Static Rendering
19. Incremental Static Generation
20. Progressive Hydration
21. Streaming Server-side Rendering
22. React Server Components
23. Selective Hydration
24. Optimizing for the Core Web Vitals on a Next.js app
25. Islands Architecture
26. Optimize your loading sequence
27. Static Import
28. Dynamic Import
29. Import on Visibility
30. Import on Interaction
31. Route Base Splitting
32. Bundle Splitting
33. PRPL Pattern
34. Tree Shaking
35. Preload
36. Prefetch
37. List Virtualization
38. Conclusions

### Overview of React

Terminology in this book:

* React - React Library
* ReactDOM - The package for DOM and server rendering
* JSX - Syntax extension to Javascript
* Redux - Centralized state comtainer
* Hooks - a new way to use state and other React features without writing a class
* React Native - The library to develop cross-platform native apps with Javascript
* Webpack - JavaScript module bundler
* Next.js - A React framework with many best-in-class features including SSR, Code splitting, optimized for performance



**Props**: short for properties. refer to internal data to a component in React.

**State**: is an object holds some information that may change over the lifetime of the component. manage the way that data changes becomes. 

**Props vs State**: **props** are variables passed to it by its parent component

**State** is still variable. but directly initialized and managed by the component

Think of React components like micro-applications each component should have a single purpose.

###Singleton Pattern