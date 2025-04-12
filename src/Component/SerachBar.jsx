import React, { useEffect, useState } from 'react';

function SerachBar({ item }) {
  const [data, setData] = useState([]);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("filteredData");
    const localType = localStorage.getItem("filterType");

    if (item.length > 0) {
      setData(item);
    } else if (localData) {
      setData(JSON.parse(localData));
    }

    if (localType) {
      setFilterType(localType);
    }
  }, [item]);

  const getHeading = () => {
    switch (filterType) {
      case "movie":
        return "🎬 Movie Hits";
      case "show":
        return "📺 TV Show Hits";
      case "By Language":
        return "🌐 Hindi/English Content";
      case "latest":
        return "🆕 Latest Releases";
      default:
        return "🎞 All Titles";
    }
  };

  return (
    <div className="">  <br /><br />
      <br />
      <h1 className="text-xl font-bold mb-4">{getHeading()}</h1>

      {data.length > 0 ? (
        data.map((item, i) =>
          item.titles?.map((title, j) => {
            const js = title?.jawSummary;
            return (
              <div key={j} className="border rounded p-4 mb-6 bg-gray-100 dark:bg-gray-800 text-black dark:text-white shadow-lg">
                <h2 className="text-2xl font-bold text-red-600 mb-2">{js?.title}</h2>
                <p><strong>Type:</strong> {title.summary?.type}</p>
                <p><strong>Year:</strong> {js?.releaseYear}</p>
                <p><strong>Genres:</strong> {js?.genres?.map(g => g.name).join(', ')}</p>
                <p><strong>Cast:</strong> {js?.cast?.map(c => c.name).join(', ')}</p>
                <p><strong>Rating:</strong> {js?.maturity?.rating?.value}</p>
                <p><strong>Synopsis:</strong> {js?.synopsis}</p>
                {js?.backgroundImage?.url && (
                  <img src={js.backgroundImage.url} alt={js.title} className="mt-4 w-full rounded shadow" />
                )}
              </div>
            );
          })
        )
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SerachBar;
