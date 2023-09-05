import "./App.css";
import Layout from "./components/Layout";
import MenuCard from "./components/MenuCard"
import {recipe} from "./components/Data"

export default function App() {
  return (
    <Layout>
      {recipe.map((recipe, i) => (
      <MenuCard
      key= {i}
        name={recipe.name}
        description={recipe.description}
        imageUrl={recipe.imageUrl}
        ingredients={recipe.ingredients}
      />))}
    </Layout>
  );
}