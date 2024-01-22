import './App.css';

import Header from "./Header";
import Card from"./card/Card";

import { Books, Categories } from './data/data';


let App = function BootstrapDemo() {  
  let cardsRendered = Books.map(book => <Card key={book.url} data={book} />)
  return (
    <div>
        <Header categories={Categories} />
        <div className="d-flex flex-row row row-cols-1 row-cols-md-3 m-3 mb-3 text-center cards">
            {cardsRendered}
        </div>
    </div>
  );
}

export default App;
