function Navbar() {
  return (
    <div className="inter-font border-b border-gray-300 py-4">
      <nav className="flex justify-between container mx-auto max-w-7xl">
        {/* logos */}
        <div className="">
          <img src="../../assets/logo-text.png" alt="" />
          <img src="" alt="" />
        </div>
        {/* links in the middle */}
        <ul className="flex gap-4 items-center">
          <li>
            <a href="" className="text-pink-500">
              Home
            </a>
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        {/* Sign in and sign up buttons */}

        <div className="flex gap-3">
          <button>Sign In</button>
          <button className="bg-pink-600 rounded-l-2xl rounded-r-2xl px-4 py-2 text-white">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
