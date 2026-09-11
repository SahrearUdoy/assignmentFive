import logo from "../../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="lg:w-[40%]">
            <img src={logo} alt="" />
            <p className="mt-4 pb-2 border-b border-gray-200">
              Curated tools , Technologies , and resources for developers
              building modern software.
            </p>
            <div className="flex gap-4 mt-5">
              <a className="hover:text-pink-500 font-bold" href="">
                GitHub
              </a>
              <a className="hover:text-pink-500 font-bold" href="">
                Twitter
              </a>
              <a className="hover:text-pink-500 font-bold" href="">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:w-[50%] mt-10 lg:mt-0">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold mb-4">Product</h3>
              <a className="hover:text-pink-500" href="">
                Technologies
              </a>
              <a className="hover:text-pink-500" href="">
                Projects
              </a>
              <a className="hover:text-pink-500" href="">
                Features
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold mb-4 ">Company</h3>
              <a className="hover:text-pink-500" href="">
                About
              </a>
              <a className="hover:text-pink-500" href="">
                Contact
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold mb-4">Legal</h3>
              <a className="hover:text-pink-500" href="">
                Privacy
              </a>
              <a className="hover:text-pink-500" href="">
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright etc */}

        <div className="border-t border-gray-200 mt-10 pt-5 flex flex-col sm:flex-row justify-between gap-3">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex justify-between">
            <a className="hover:text-pink-500" href="">
              Privacy
            </a>
            <a className="hover:text-pink-500 px-3" href="">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
