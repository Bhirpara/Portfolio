
import './App.css';
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";

const App = () => {
  return (
    <div className="App">
    <MyCarousal />
    <MyTitleMessage />
    <MyNavbar />
    
    </div>
  );
}

export default App;
