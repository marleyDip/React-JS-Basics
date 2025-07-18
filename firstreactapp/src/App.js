import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="main">
      <Header />

      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  );
}

export default App;

function Card() {
  return <div className="cardItems">Card div</div>;
}
