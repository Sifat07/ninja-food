export default function Home() {
  return (
    <div className="text-gray-600">
      {/* nav start */}
      <div>
        <nav>
          <div>
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
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
      <main className="px-16 py-6">
        <div className="flex justify-end align-middle gap-2">
          <a href="#" className="text-primary">
            Log in
          </a>
          <a href="#" className="text-primary">
            Sign up
          </a>
        </div>
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>
        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-300">
            Latest Recipes
          </h4>
        </div>
        <div className="mt-8">
          <div>
            <img src="/img/stew.jpg" alt="stew" />
            <div>
              <span>5 Bean Chilli Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-300">
          Most Popular
        </h4>

        <div className="mt-8">{/* Card go here */}</div>
        <div className="flex justify-center">
          <div className="bg-secondary-100 text-secondary-200">Load more</div>
        </div>
      </main>
    </div>
  );
}
