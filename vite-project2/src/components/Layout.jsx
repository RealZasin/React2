export default function Layout(properties) {
    const {children} = properties
  return (
    <div className="layout">
      <header></header>
      <main>
        {children}
      </main>
      <footer>© 2023 eirbec.kodehode</footer>
    </div>
  );
}
