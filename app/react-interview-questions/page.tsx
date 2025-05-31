export default function Page() {
  return (
    <article>
      <h1>React Interview Questions</h1>
      <h3>Foundational React Questions</h3>
      <ul>
        <li>What is React, and what are its main features? </li>
        <li>Explain the difference between a functional component and a class component. </li>
        <li>What are props and state in React? How are they different? </li>
        <li>What is JSX, and why do we use it? </li>
        <li>What is the Virtual DOM, and how does React use it to render the UI? </li>
        <li>What are React Hooks? Name a few commonly used hooks and their purposes. </li>
        <li>How does useEffect work? Can you explain its dependency array? </li>
        <li>What are controlled and uncontrolled components? </li>
        <li>How does lifting state up work in React? Why would you use it? </li>
        <li>What is the role of keys in React lists, and why are they important?</li>
      </ul>
      <h3>Advanced React Questions</h3>
      <ul>
        <li>What is Context API, and when would you use it over props drilling? </li>
        <li>What are Higher-Order Components (HOCs)? Can you provide an example use case? </li>
        <li>What are render props, and how do they differ from HOCs? </li>
        <li>Explain React’s reconciliation process. </li>
        <li>What is the difference between useMemo and useCallback? When would you use each? </li>
        <li>How do you handle side effects in React? </li>
        <li>What are some common performance optimization techniques in React? </li>
        <li>How does React handle error boundaries? How do you implement one? </li>
        <li>What is code splitting, and how can you implement it in a React app? </li>
        <li>
          Explain the difference between SSR (Server-Side Rendering), CSR (Client-Side Rendering), and SSG (Static Site Generation). How does React support
          these?
        </li>
      </ul>
      <h3>Integration &amp; Ecosystem</h3>
      <ul>
        <li>Have you worked with React Router? How do you implement dynamic routing? </li>
        <li>How do you handle form validation in React? Have you used libraries like Formik, React Hook Form, or Yup? </li>
        <li>What’s your experience with state management libraries (e.g., Redux, Zustand, Jotai, or Recoil)? Can you explain the basic flow of Redux? </li>
        <li>How do you handle API calls in React? What patterns do you use to manage loading and error states? </li>
        <li>What testing libraries have you used with React (e.g., Jest, React Testing Library)? How do you test a component that uses hooks? </li>
        <li>What’s your experience integrating a React frontend with a backend API (such as a Golang REST API)? What challenges have you faced?</li>
      </ul>
      <h3>Practical/Scenario-Based Questions</h3>
      <ul>
        <li>Imagine you have a dashboard component that is slow to render because of a large dataset. How would you improve its performance? </li>
        <li>If you need to build a component that fetches data and updates every 30 seconds, how would you do that in React? </li>
        <li>A user reports that a form loses its state unexpectedly when they navigate between pages. How would you debug and fix it? </li>
        <li>You need to secure certain pages behind authentication. How would you implement protected routes in React? </li>
        <li>You notice that your app is re-rendering too often, causing performance issues. How would you diagnose and fix this? </li>
        <li>If you need to internationalize your LMS app, what libraries and approach would you take?</li>
      </ul>
      <h3>Hands-On Coding Tasks (if applicable)</h3>
      <ul>
        <li>Build a To-Do List with add, delete, and edit functionality using functional components and hooks. </li>
        <li>Create a form with validation (e.g., sign-up form) using React Hook Form and Yup. </li>
        <li>Create a simple dashboard that fetches data from a public API and displays it in a table with pagination. </li>
        <li>Refactor a class component into a functional component using hooks.</li>
      </ul>
      <h3>Bonus/Culture Fit</h3>
      <ul>
        <li>Have you contributed to any React open-source projects or written about React? </li>
        <li>How do you stay updated with changes in the React ecosystem? </li>
        <li>What’s the hardest React bug or performance issue you’ve faced and how did you solve it?</li>
      </ul>
    </article>
  )
}
