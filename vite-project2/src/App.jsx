import "./App.css";
import MenuCard from "./components/MenuCard"

export default function App(properties) {
  const { name, imageUrl, decription, recipe } = properties;

  return (
    <MenuCard
      name="Garlic lemon chicken"
      description="Garlic lemon chicken is a delicious dish that consists of chicken pieces marinated in a mixture of lemon juice, garlic, salt, pepper, and herbs. The chicken is then cooked in a skillet or oven until golden and tender. The dish is usually served with rice, potatoes, or salad, and garnished with more lemon wedges and parsley. Garlic lemon chicken is a popular choice for a quick and easy weeknight meal or a special occasion ."
      imageUrl="https://life-in-the-lofthouse.com/wp-content/uploads/2017/06/Lemon-Garlic-Chicken-and-Veggies2.jpg"
    />
  );
}