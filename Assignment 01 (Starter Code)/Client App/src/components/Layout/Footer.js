import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-6 ">
      <div className="container mx-auto bg-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cột 1 */}
          <div>
            <h5 className="font-bold text-uppercase italic mb-4">
              Customer Services
            </h5>
            <ul className="list-none space-y-2">
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  Help & Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  Online Stores
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* Cột 2 */}
          <div>
            <h5 className="font-bold text-uppercase italic mb-4">Company</h5>
            <ul className="list-none space-y-2">
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  Available Services
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  Latest Posts
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* Cột 3 */}
          <div>
            <h5 className="font-bold text-uppercase italic mb-4">
              Social Media
            </h5>
            <ul className="list-none space-y-2">
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
