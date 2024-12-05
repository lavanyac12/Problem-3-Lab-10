import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Building a Web Page with React and Hosting on Render</h1>
     
      <h2>Installation Process</h2>
      <p>
        1. Installed <strong>Node.js</strong> from the official website.<br />
        2. Used the <code>npx create-react-app</code> command to scaffold the project.<br />
        3. Installed dependencies and ran the app locally using <code>npm start</code>.
      </p>

      <h2>Building This Page</h2>
      <p>
        This page was created by modifying the <code>App.js</code> file in the <code>src</code> directory.
        We used basic React components to structure the content and inline styles for design.
      </p>

      <h2>Difficulties Encountered</h2>
      <ul>
        <li>
          <strong>Initial Setup Issues:</strong> Node.js was not installed properly at first.
          <br />
          <strong>Solution:</strong> Reinstalled Node.js and ensured the PATH was updated.
        </li>
        <li>
          <strong>Deploying to Render:</strong> Forgot to build the app before deploying.
          <br />
          <strong>Solution:</strong> Used <code>npm run build</code> to create a production-ready build.
        </li>
      </ul>

      <p>
        This project demonstrates how React simplifies component-based UI development and how Render makes deployment straightforward.
      </p>
    </div>
  );
}

export default App;