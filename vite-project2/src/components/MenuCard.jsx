/**
 * Card to show of projects
 *
 * @param { { name: string, imageUrl: string, description: string, githubLink: string} } properties
 */

export default function ProductCard(properties) {
  const { name, imageUrl, description, githubLink } = properties;

  return (
    <article>
      <div class="grid-container">
        <div class="grid-item">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div class="grid-item">
          <img className="ProductImageOne" src={imageUrl} alt="" />
        </div>
      </div>

      {/* <a href={githubLink}>Source Code</a> */}
    </article>
  );
}
