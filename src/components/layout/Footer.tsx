import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Cities */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-4">Our top cities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-2 text-gray-300">
            {[
              "San Francisco", "Miami", "San Diego", "East Bay", "Long Beach",
              "Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville",
              "New York City", "Orange County", "Atlanta", "Charlotte", "Denver",
              "Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City",
              "Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans"
            ].map((city, i) => (
              <a key={i} href="#" className="hover:text-[#F48102] transition-colors">
                {city}
              </a>
            ))}
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Footer Links + Social */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              {["About us", "Team", "Careers", "Blog"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#F48102] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              {["Help & Support", "Partner with us", "Ride with us"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#F48102] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              {["Terms & Conditions", "Refund & Cancellation", "Privacy Policy", "Cookie Policy"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#F48102] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-[#F48102] transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-[#F48102] transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#F48102] transition-colors"><FaTwitter /></a>
            </div>
            <p className="mb-3">Receive exclusive offers in your mailbox</p>
            <div className="flex">
              <div className="flex items-center bg-[#2A2A2A] px-3 rounded-l-md">
                <HiOutlineMail className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="bg-transparent text-sm px-2 py-2 focus:outline-none text-white"
                />
              </div>
              <button className="bg-gradient-to-r from-[#F48102] to-[#F4A102] px-5 py-2 rounded-r-md font-semibold shadow-lg hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>All rights Reserved © <span className="text-white font-semibold">Your Company</span>, 2021</p>
          <p className="mt-2 md:mt-0">
            Made with <span className="text-chart-4">♥</span> by <span className="font-semibold">Themewagon</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
