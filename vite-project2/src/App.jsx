import "./App.css";
import Layout from "./components/Layout";
import MenuCard from "./components/MenuCard"
import {recipeChicken} from "./components/Data"

export default function App() {
  return (
    <Layout>
      <MenuCard
        name={recipeChicken.name}
        description={recipeChicken.description}
        imageUrl={recipeChicken.imageUrl}
        ingredients={recipeChicken.ingredients}
      />
    </Layout>
  );
}