import logo from './logo.svg';
import './App.css';
import Accordion from './Accordions/Accordion';
import accordionData from './Accordions/AccordionData';

function App() {
  return (
   <Accordion accordionData={accordionData}/>
  );
}

export default App;
