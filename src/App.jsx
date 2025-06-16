import './App.css';
import Card from './card';
import restaurants from './data';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>Popular Food Brands</h1>
        <div className="grid">
          {restaurants.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
