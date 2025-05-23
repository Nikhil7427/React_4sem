import logo from './logo.svg';
// import Header from './MyComponents/Header';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    // <Header.js/>
    //{ <Navbar title="TextUtils" aboutText="AboutTextUtils" searchBar={true}/>}
    <Navbar title="TextUtils" aboutText="AboutTextUtils" searchBar={true}/>
  );
}

export default App;

// Functional component:: it is a basically a stateless
// Function is independet , reusable code block , which divides the ui into smaller placess
// componentes are two types functioinal and class component

//// what is props: React is a componenet-based library which divides the UI into little reusable pieces.

