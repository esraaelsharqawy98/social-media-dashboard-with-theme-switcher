import "./App.css";
import EngagementsWrapper from "./Components/EngagementsWrapper/EngagementsWrapper";
import FollowersWrapper from "./Components/FollowersWrapper/FollowersWrapper";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className="top-nav"></div>
      <main>
        <Header />
        <FollowersWrapper />
        <EngagementsWrapper />
      </main>
    </>
  );
}

export default App;
