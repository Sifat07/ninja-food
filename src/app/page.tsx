export default function Home() {
  return (
    <div className="text-gray-600">
      {/* nav start */}
      <div>
        <nav>
          <div>
            <h1 className="font-bold uppercase">
              <a href="/">Food Ninja</a>
            </h1>
          </div>
          <ul>
            <li className="text-gray-700 font-bold">
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* nav end */}
      <main>
        <div>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>
        <div>
          <h4 className="font-bold">Latest Recipes</h4>
        </div>
        <div>
          <div>
            <img src="/img/stew.jpg" alt="stew" />
            <div>
              <span>5 Bean Chilli Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>
        <h4 className="font-bold">Most Popular</h4>

        <div>{/* Card go here */}</div>
        <div>
          <div>Load more</div>
        </div>
      </main>
    </div>
  );
}
