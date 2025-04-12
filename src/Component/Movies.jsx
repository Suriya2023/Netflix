// import React from 'react'
// function Movies({ cart, setCart,items }) {

//     return (
//         <div className="flex flex-wrap gap-4 p-4">
//             {
//                 items.map((show) =>
//                     show.titles.map((e) => (
//                         <div key={e.jawSummary.id} className="flex-none w-40 relative overflow-hidden rounded cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10">
//                             <img
//                                 src={e.jawSummary.backgroundImage.url}
//                                 alt={e.jawSummary.title}
//                                 className="w-full h-56 object-cover rounded"
//                             />
//                             <div className="p-2 bg-gray-900">
//                                 <h3 className="text-white text-sm font-medium truncate">{e.jawSummary.title}</h3>
//                                 <div className="flex justify-between items-center mt-1 text-xs text-gray-400">
//                                     <span>{e.jawSummary.releaseYear || e.jawSummary.year}</span>
//                                     <span className="text-yellow-400">{e.jawSummary.maturity?.rating?.value}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))

//                 )
//             }
//         </div>
//     )
// }


// export default Movies
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Movies({ items, cart, setCart }) {
    console.log(items)
    const stars = (
        <>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
        </>
    );
    const responsive = {
        superLargeDesktop: {
            
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div>
            <Carousel responsive={responsive}>
                {
                    items.map((e) =>
                        e.titles.map((show) => (
                            <section key={show.jawSummary.id} className="p-5">

                                <div id="Mysd"
                                 className="flex border rounded-md overflow-hidden shadow-lg  mb-4">
                                    <div 
                                     className="flex-none w-40 relative transition-transform duration-300 hover:scale-105 hover:z-10 cursor-pointer">
                                        <img alt={show.jawSummary.title} src={show.jawSummary.backgroundImage?.url}
                                            className="w-full h-56 object-cover rounded-l"
                                        />
                                    </div>
                                    <div className="p-3 bg-gray-900 text-white flex-1">
                                        <h3 className="text-lg font-semibold">{show.jawSummary.title}</h3>
                                        <div className="text-sm text-gray-400 mt-1 mb-2">
                                            {show.jawSummary.releaseYear}
                                        </div>
                                        <div className="flex items-center gap-1 mb-2">
                                            {stars}
                                        </div>
                                        {show.jawSummary.synopsis && (
                                            <p className="text-sm text-gray-300 line-clamp-3">{show.jawSummary.synopsis}</p>
                                        )}
                                    </div>
                                </div>
                            </section>
                        ))
                    )
                }
            </Carousel>
        </div>
    )
}

export default Movies
