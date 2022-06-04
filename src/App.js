import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
      <Navbar title="Diljot's Website" first="Home" second="Contact Us" />
      <Textarea heading="Enter text here:- "/>
    </>
  );
}

export default App;
