import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "../src/styles/globals.css";

function App() {
  return (
    <main className="flex justify-center items-center h-screen flex-col gap-10">
      <div className="flex items-center gap-2">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <span className="text-2xl font-bold">+</span>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
    </main>
  );
}

export default App;
