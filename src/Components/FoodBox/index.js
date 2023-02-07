import { Card, Col, Button } from 'antd';

export function FoodBox({ food, apagarComida, index }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {Number(food.calories) * Number(food.servings)}</b>
          kcal
        </p>
        <Button
          type="primary"
          onClick={() => {
            apagarComida(index);
          }}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
}
