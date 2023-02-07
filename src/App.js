import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import { FoodBox } from './Components/FoodBox';
import { AddFoodForm } from './Components/AddFoodForm';
import { useState } from 'react';
import { Search } from './Components/Search';

function App() {
  const [comidas, setComidas] = useState(foods);
  // const [comidasFiltradas, setComidasFiltradas] = useState(foods);
  // const [procura, setProcura] = useState('');

  function adicionarComida(comida) {
    setComidas([...comidas, comida]);
    // setComidasFiltradas([...comidasFiltradas, comida]);
  }

  function apagarComida(index) {
    console.log(index);
    const clone = [...comidas];
    clone.splice(index, 1);
    setComidas(clone);
  }
  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm adicionarComida={adicionarComida} />
      <Button> Hide Form / Add New Food </Button>
      {/* Display Search component here */}
      <Search />
      {/* {comidas
        .filter((comidas) => {
          if (setProcura === '') {
            return comidas;
          } else if (
            comidas.name.toLowerCase().includes(procura.toLowerCase())
          ) {
            return comidasFiltradas;
          }
        })
        .map((comida, key) => {
          return (
            <div key={key}>
              <p>{comida.name}</p>
            </div>
          );
        })} */}
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {comidas.map((currentFood, index) => (
          <FoodBox
            food={currentFood}
            key={currentFood.name}
            apagarComida={apagarComida}
            index={index}
          />
        ))}

        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;
