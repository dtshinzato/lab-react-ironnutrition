import { Divider, Input } from 'antd';
import { useState } from 'react';

export function AddFoodForm({ adicionarComida }) {
  const [comida, setComida] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  function handleChange(event) {
    setComida({ ...comida, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    adicionarComida(comida);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input
        id="name"
        value={comida.name}
        type="text"
        onChange={handleChange}
        name="name"
      />

      <label htmlFor="image">Image</label>
      <Input
        id="image"
        value={comida.image}
        type="text"
        onChange={handleChange}
        name="image"
      />

      <label htmlFor="calories">Calories</label>
      <Input
        id="calories"
        value={comida.calories}
        type="number"
        onChange={handleChange}
        name="calories"
      />

      <label htmlFor="servings">Servings</label>
      <Input
        id="servings"
        value={comida.servings}
        type="number"
        onChange={handleChange}
        name="servings"
      />

      <button>Create</button>
    </form>
  );
}
