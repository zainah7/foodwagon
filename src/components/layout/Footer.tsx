import { Button } from "@/lib/shared";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Top Cities */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-4">Our top cities</h3>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-2 gap-x-4 text-gray-300">
            {[
              "San Francisco", "Miami", "San Diego", "East Bay", "Long Beach",
              "Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville",
              "New York City", "Orange County", "Atlanta", "Charlotte", "Denver",
              "Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City",
              "Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans"
            ].map((city, i) => (
              <a key={i} href="#" className="hover:text-[#F48102] transition-colors text-xs sm:text-sm md:text-base break-words">
                {city}
              </a>
            ))}
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Footer Links + Social */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
            <form className="flex w-full">
              <div className="flex items-center bg-[#2A2A2A] px-3 rounded-l-md flex-grow">
                <HiOutlineMail className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="bg-transparent text-sm px-2 py-2 focus:outline-none text-white w-full min-w-0"
                />
              </div>
              <Button className="bg-gradient-to-r from-[#F48102] to-[#F4A102] px-5 py-2 rounded-r-md font-semibold shadow-lg hover:opacity-90 transition flex-shrink-0 cursor-pointer">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-2">
          <p className="text-center">All rights Reserved © <span className="text-white font-semibold">Your Company</span>, 2021</p>
          <p className="text-center">
            Made with <span className="text-chart-4">♥</span> by <span className="font-semibold">Themewagon</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
