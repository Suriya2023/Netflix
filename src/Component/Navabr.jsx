 

import { useState, useEffect } from "react";
import { Bell, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { items } from "../Data/400Data";

function Navbar({ setData }) {
  const [search, setSearch] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const FilterByCategory = (type) => {
    let filtered = [];

    if (type === "movie") {
      filtered = items.filter(item =>
        item.titles?.some(t => t.summary?.type === "movie")
      );
    } else if (type === "show") {
      filtered = items.filter(item =>
        item.titles?.some(t => t.summary?.type === "show")
      );
    } else if (type === "By Language") {
      filtered = items.filter(item =>
        item.titles?.some(t =>
          t.jawSummary?.genres?.some(g =>
            g.name.toLowerCase().includes("hindi") ||
            g.name.toLowerCase().includes("english")
          )
        )
      );
    } else if (type === "latest") {
      filtered = items.filter(item =>
        item.titles?.some(t =>
          [2023, 2024].includes(t.jawSummary?.releaseYear)
        )
      );
    } else {
      filtered = items;
    }

    setData(filtered);  
    localStorage.setItem("filteredData", JSON.stringify(filtered));
    localStorage.setItem("filterType", type);
    navigate("/Search");
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`flex  items-center justify-between fixed w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-black text-white" : "bg-white"
          }`}
      >
        <div className="w-full  z-auto container mx-auto  px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Link to="/" className="w-3 h-3 bg-red-500 rounded-full"></Link>
              <Link to="/" className="w-3 h-3 bg-yellow-400 rounded-full"></Link>
              <Link to="/" className="w-3 h-3 bg-green-500 rounded-full"></Link>
            </div>

            <Link to="/" className="  font-bold text-2xl">MovieHub</Link>

            <div className="hidden lg:flex justify-center items-center gap-3 ml-4 text-sm font-medium">
              <button onClick={() => FilterByCategory("movie")} className="hover:text-red-600 cursor-pointer dark:text-white">Movies</button>
              <button onClick={() => FilterByCategory("show")} className="hover:text-red-600 cursor-pointer dark:text-white">TV Shows</button>
              <button onClick={() => FilterByCategory("By Language")} className="hover:text-red-600 cursor-pointer dark:text-white">By Language</button>
              <button onClick={() => FilterByCategory("latest")} className="hover:text-red-600 cursor-pointer dark:text-white">Latest</button>
              <button onClick={() => FilterByCategory("latest")} className="hover:text-red-600 cursor-pointer dark:text-white">
                <sup className="bg-red-500 text-white px-1 py-1 rounded hover:bg-black transition">New</sup>
              </button>
              {/* <button className="hover:text-red-600 cursor-pointer dark:text-white">Home</button>
              <button className="hover:text-red-600 cursor-pointer dark:text-white">TV Shows</button>
              <button className="hover:text-red-600 cursor-pointer dark:text-white">Movies</button>
              <button className="hover:text-red-600 cursor-pointer dark:text-white">Sports</button>
              <button className="hover:text-red-600 cursor-pointer dark:text-white"> Category</button> */}
              {/* <button className="hover:text-red-600 cursor-pointer dark:text-white">
                <sup className="bg-red-500 text-white px-1 py-1 rounded hover:bg-black transition">Category</sup>
              </button> */}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:inline-block">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="border rounded px-3 py-1 text-sm w-48 md:w-64"
              />
              <Search className="absolute right-2 top-1.5 w-4 h-4 text-gray-500" />
            </div>

            <Bell className="w-5 h-5 cursor-pointer dark:text-white" />
            <Link to="/Contact" >
              {/* <img
                src="https://avatars.githubusercontent.com/u/148303377?v=4"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              /> */}

              <button id="FooterNone" className="button border  rounded-xl py-1 px-4 cursor-pointer hover:bg-black hover:text-white" >Login </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;