const app = document.getElementById("app");
ReactDOM.render(<h1>Hey I am rendered by the react js.</h1>, app);

//always capital
function Header() {
  return <h2>I am component.🚀 </h2>;
}

ReactDOM.render(<Header/>, app);
