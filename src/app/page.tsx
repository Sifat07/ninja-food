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
      <main className="px-16 py-6 bg-gray-100">
        <div className="flex justify-center md:justify-end align-middle gap-2">
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
          <div className="bg-white rounded overflow-hidden shadow-md relative">
            <img
              src="/img/stew.jpg"
              alt="stew"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">5 Bean Chilli Stew</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Mario
              </span>
            </div>
            <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
              <span>25 mins</span>
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
