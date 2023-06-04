import Companies from "./components/sections/companies";
import Creator from "./components/sections/creators";
import Hero from "./components/sections/hero";
import Plugin from "./components/sections/plugins";
import Sounds from "./components/sections/sounds";
import Studio from "./components/sections/studio";

function App() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Hero />
      <Companies />
      <Sounds />
      <Plugin />
      <Studio />
      <Creator />
    </div>
  );
}

export default App;
