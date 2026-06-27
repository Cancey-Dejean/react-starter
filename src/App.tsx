import Header from "./components/_blocks/header/header";
import Footer from "./components/_blocks/footer/footer";

export function App() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main>Main Content</main>
      <Footer />
    </div>
  );
}

export default App;
