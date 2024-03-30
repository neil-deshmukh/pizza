export default function Header() {
  return (
    <header className="flex items-center justify-between px-9 py-4 bg-base-200">
      <div className="flex gap-10 items-center">
        <div>
          <a className="text-4xl font-bold">Pizza</a>
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex gap-5 px-1 items-center">
            <li className=" font-semibold text-orange-400">
              <a>Home</a>
            </li>
            <li className=" font-semibold text-gray-600">
              <a>Menu</a>
            </li>
            <li className=" font-semibold text-gray-600">
              <a>Services</a>
            </li>
            <li className=" font-semibold text-gray-600">
              <a>Review</a>
            </li>
            <li className=" font-semibold text-gray-600">
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center">
        <a className="btn text-lg">Sign in</a>
      </div>
    </header>
  );
}
