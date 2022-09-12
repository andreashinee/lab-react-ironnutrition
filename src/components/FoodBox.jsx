import { Col, Card, Button } from 'antd';

function FoodBox({ food, listOfFood, setListOfFood, index }) {
  const totalCalories = food.calories * food.servings;

  function deleteFood(i) {
    const updatedList = [...listOfFood];
    updatedList.splice(i, 1);

    setListOfFood(updatedList);
  }

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>

        <Button onClick={() => deleteFood(index)} type="primary">
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
