// const heading = document.createElement("h1");
// heading.innerHTML = "hello world";

// const root = document.getElementById("root");
// root.appendChild(heading);

const heading = React.createElement("h1", {}, "hello world");
const rootId = document.getElementById("root");
const root = ReactDOM.createRoot(rootId);
root.render(heading)
