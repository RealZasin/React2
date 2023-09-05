/**
 * Card to show of projects
 *
 * @param { { name: string, imageUrl: string, description: string, githubLink: string} } properties
 */

export default function ProductCard(properties) {
  const { name, imageUrl, description, ingredients} = properties;

  return (
    <article>
      <div className="grid-container">
        <div className="grid-item">
          <h3>{name}</h3>
          <p>{description}</p>
          <h3>Ingredients</h3>
          <p>{ingredients}</p>
        </div>
        <div className="grid-item">
          <img className="ProductImageOne" src={imageUrl} alt="" />
        </div>
      </div>

      {/* <a href={githubLink}>Source Code</a> */}
    </article>
  );
}
