import React from "react";
import './App.css';

function App() {
  return (
    <div>
      <h1>Building a Web Page with React and Hosting on Render</h1>
     
      <h2>Installation Process</h2>
      <ol>
        <li>Verified if <strong>Node.js</strong> was installed on the computer using <code>node -v</code></li>
        <li>Used the <code>npx create-react-app</code> command to build the project.</li>
        <li>Installed dependencies and ran the app locally using computer terminal through <code>npm start</code>. This opened the site on my localhost server.</li>
      </ol>

      <h2>Building This Page</h2>
      <p>
        This page was created by modifying the <code>App.js</code> file in the <code>src</code> directory. All files were installed during initiallization, so these files were simply modified.
        Basic React components are used here to structure the content, and the <code>App.css</code> file is used for styling of the page.
      </p>

      <h2>Difficulties Encountered</h2>
      <ul>
        <li>
          <strong>Initial Setup Issues:</strong> Had to update the version of Node.js.
          <br />
          <strong>Solution:</strong> Reinstalled Node.js and ensured the PATH was updated.
        </li>
        <li>
          <strong>Initiallizing the React App on terminal:</strong> Did not run the commands in proper order due to which I faced difficulty in opening the site on my local server. Due to this I had trouble understanding how to create the .json file.
          <br />
          <strong>Solution:</strong> Used commands <code>npx create-react-app</code> and <code>npx react-render-prob</code> to build the React App through terminal. This created my .json file which I did not have to worry about creating myself. I then used <code>npm start</code> to open the React app locally. 
        </li>
        <li>
          <strong>Pushing and committing changes to GitHub from terminal:</strong> Was not the most familiar with GitHub, and hence was unable to understand how to push the documents into my GitHub repository. 
          <br />
          <strong>Solution:</strong> Used commands provided by GitHib on creating the repository in the project directory, i.e. <code>react-render-prob</code>. My project was then uploaded to GitHub. 
        </li>
        <li>
          <strong>Linking the <code>App.css</code> file with the <code>App.js</code> file:</strong> Was not able to view my CSS styles reflected on the webpage. 
          <br />
          <strong>Solution:</strong> Hence did some research and discovered I had to import <code>App.css</code> in the beginning of my <code>App.js</code> file.
        </li>
      </ul>

      <p>
        This project demonstrates how I used React to create a simple web page. 
      </p>
    </div>
  );
}

export default App;