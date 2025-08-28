import Button from "./components/Button";
import Counter from "./components/Counter";
import AccordionList from "./components/AccordionList";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Button />
      <Button />
      <Counter />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <AccordionList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
