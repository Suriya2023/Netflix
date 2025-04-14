import React from 'react';

const Footer = () => {
  // Data for the different sections
  const categories = [
    {
      title: "Popular TV Shows",
      links: ["Mahabharat", "Kahan ho Tum", "Jhansi ki Rani", "Kumkum Bhagya", "Kundali Bhagya", 
              "Bhagya Lakshmi", "Meet", "Annapoorna", "Indira", "Korean Drama", "Pakistani Serials"]
    },
    {
      title: "Premium Movies",
      links: ["Viduthalai Part 2", "Geme Changer", "Hisaab Barabar", "Sankranthiki Vasthunam", 
              "Logout", "Mrs", "Bastar", "Kingston", "The Kerala Story", "The Sabarmati Report", 
              "Gadar 2", "Mazaka", "Bandaa", "RRR"]
    },
    {
      title: "Popular LIVE TV Channels",
      links: ["MovieHub News", "MovieHub TV HD", "&TV HD", "MovieHub Marathi HD"]
    },
    {
      title: "Popular Web Series",
      links: ["Murshid", "Gyaarah Gyaarah", "Manorathangal", "Crime Beat", "Seruppugal Jaakirathai", 
              "Aindham Vedham", "The Broken News", "Black Widows", "Duranga 2", "Mithya", 
              "Taj", "Sunflower", "Tripling", "Pitchers"]
    },
    {
      title: "Bollywood Top Celebrities",
      links: ["R Madhavan", "Vikrant Massey", "Deepika Padukone", "Salman Khan", "Manoj Bajpayee", 
              "Pankaj Tripathi", "Vicky Kaushal", "Sunny Deol", "Neil Nitin Mukesh", "Kirti Kulhari", 
              "Amitabh Bachchan", "Kangana Ranaut", "Rashmi Desai"]
    },
    {
      title: "Games & News",
      links: ["Blog", "Web Stories", "ILT20 2025", "Abu Dhabi Knight Riders", "Desert Vipers", 
              "Dubai Capitals", "Gulf Giants", "MI Emirates", "Sharjah Warriors"]
    }
  ];

  const navLinks = ["Channels", "About Us", "Help Center", "Privacy Policy", "Terms of Use", 
                     "Preferences", "Do not Sell or Share my Personal Information"];

  return (
  <div className='bg-black'>
      <footer className="bg-black text-gray-300 py-10 px-4 md:px-8">
      <div className="container mx-auto">
    
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
       
          <div className="mb-6 md:mb-0">
            <h3 className="font-medium mb-3">Download Apps</h3>
            <div className="flex space-x-3">
              <a href="#" className="flex items-center border border-gray-700 rounded-md px-3 py-1.5 hover:bg-gray-800 transition">
                <div className="h-5 w-5 mr-2 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-800 text-xs">GP</span>
                </div>
                <span className="text-xs">GET IT ON<br/>Google Play</span>
              </a>
              <a href="#" className="flex items-center border border-gray-700 rounded-md px-3 py-1.5 hover:bg-gray-800 transition">
                <div className="h-5 w-5 mr-2 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-800 text-xs">AS</span>
                </div>
                <span className="text-xs">Download on the<br/>App Store</span>
              </a>
            </div>
          </div>
 
          <div>
            <h3 className="font-medium mb-3">Connect with us</h3>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                <a key={social} href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
                  <div className="h-5 w-5 flex items-center justify-center">
                    <span className="text-lg">{social.charAt(0).toUpperCase()}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
 
        <div className="border-t border-gray-800 py-4 mb-8">
          <nav className="flex flex-wrap">
            {navLinks.map((link, index) => (
              <React.Fragment key={link}>
                <a href="#" className="mr-4 mb-2 hover:text-white transition">{link}</a>
                {index < navLinks.length - 1 && (
                  <span className="mr-4 mb-2 hidden md:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {categories.map((category) => (
            <div key={category.title}>
              <h4 className="font-medium text-white mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

     
        <div className="border-t border-gray-800 pt-6 text-sm">
          <p>Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+</p>
          <p>Copyright © 2025 MovieHub Entertainment Enterprises Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default Footer;