import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { items } from '../Data/400Data';

function FlintstonesUI() {
    const { id } = useParams();
    const [product, SetProduct] = useState({});
    const [favorited, setFavorited] = useState(false);
    const [suggested, setSuggested] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const slidesPerPage = 12;

    useEffect(() => {
        if (!id) {
            console.error('Invalid ID');
            return;
        }

        const foundTitle = items.flatMap(entry => entry.titles).find(title => title.summary?.id?.toString() === id);

        if (foundTitle) {
            SetProduct(foundTitle);

            const genreNames = foundTitle?.jawSummary?.genres?.map(g => g.name);
            const allTitles = items.flatMap(entry => entry.titles);
            const filtered = allTitles.filter(t => t.summary?.id?.toString() !== id &&
                t.jawSummary?.genres?.some(g => genreNames?.includes(g.name)));
            setSuggested(filtered);
            setSlideIndex(0);
        } else {
            console.log('No data found for the provided ID');
        }
    }, [id]);

    const handleSlide = (direction) => {
        const totalSlides = Math.ceil(suggested.length / slidesPerPage);
        setSlideIndex((prev) => {
            if (direction === 'left') {
                return prev > 0 ? prev - 1 : totalSlides - 1;
            } else {
                return prev < totalSlides - 1 ? prev + 1 : 0;
            }
        });
    };

    const visibleSuggestions = suggested.slice(slideIndex * slidesPerPage, (slideIndex + 1) * slidesPerPage);

    return (
        <>
            <br /><br />
            <ul id="centerid" className="m-auto items-center relative p-3 align-middle w-full flex flex-col">
                <li className="w-full">

                    <div className="w-full  mx-auto p-4 rounded-lg shadow-md">
                        <div className="md:flex  gap-6">

                            {/* section content  */}
                            <div className="md:w-1/2  hover:border-b-black shadow
                              duration-300 ease-in  hover:border-l-red-600  hover:border-l-8 hover:border-b-3 border-r-0  border-b-2 border-t-0  p-1 border-t-white border-b-white px-2.5 rounded-2xl mb-6 md:mb-0">
                                <nav className=" py-2 ">

                                    <div className="container flex mx-auto"> <h1 className="text-xl italic font-bold">Streaming Platform</h1>

                                    </div>
                                </nav>
                                <h1 className="text-3xl text-red-600 font-bold mb-1">
                                    {product?.jawSummary?.title || 'Title not available'}
                                </h1>

                                <div className="mb-4">
                                    {/* <span className="text-sm font-bold italic">Season 1</span> */}
                                    <div className="flex items-center text-sm text-gray-600 gap-2">
                                        <span>{product?.jawSummary?.type || 'Type'}</span>
                                        <span>•</span>
                                        <span>{product?.jawSummary?.releaseYear || 'Year'}</span>
                                        <span className="border border-gray-300 text-xs px-1 rounded">{product?.jawSummary?.maturity?.rating?.value || 'Rating'}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-500 mb-2"     >
                                    {product?.jawSummary?.synopsis || 'Synopsis not available'}
                                    <button className="text-blue-500 font-medium">MORE</button>
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">

                                    <div className="flex gap-2 mt-2">
                                        <button
                                            className="border shadow duration-300 ease-in hover:bg-white   hover:border-red-600 hover:text-black  bg-red-600 cursor-pointer text-white rounded-lg py-3.5 px-5 text-xs"
                                            onClick={() => handlePlay(product?.summary?.id)}
                                        >
                                            Play
                                        </button>
                                        <button
                                            className="border shadow hover:scale-3d duration-300 ease-in border-black cursor-pointer text-black rounded-lg py-1.5 px-5 text-xs   hover:bg-red-600 hover:text-white "
                                        >
                                            Download
                                        </button>
                                    </div>




                                    <div className="space-y-3 mt-4 text-sm text-gray-800">
                                        <p className='text-gray-500'>📅 <strong className='text-black'>Release Date:</strong> {product?.jawSummary?.releaseDate || 'Unknown'}</p>
                                        <p className='text-gray-500'>⭐ <strong className='text-black'>Rating:</strong> {product?.jawSummary?.maturity?.rating?.value || 'Not Rated'}</p>
                                        <p className='text-gray-500'>🎭 <strong className='text-black'>Genres:</strong> {product?.jawSummary?.genres?.map(g => g.name).join(', ') || 'N/A'}</p>
                                        <p className='text-gray-500'>👥 <strong className='text-black'>Cast:</strong> {product?.jawSummary?.cast?.map(c => c.name).join(', ') || 'Cast info not available'}</p>
                                        <p className='text-gray-500'> 🎬 <strong className='text-black'>Creators:</strong> {product?.jawSummary?.creators?.map(c => c.name).join(', ') || 'Unknown'}</p>
                                    </div>


                                </div>
                            </div>

                            <div className="md:w-1/2 flex justify-center md:justify-end">
                                <img
                                    src={product?.jawSummary?.backgroundImage?.url || "/api/placeholder/400/320"}
                                    alt="Poster"
                                    className="rounded-lg  shadow-md max-w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="mt-10">
                            <div className='flex p-1.5 justify-between my-1.5'>
                                <h2 className="text-xl font-bold mb-4">You May Also Like</h2>
                                <div>
                                    <button className='border shadow-2xl border-red-600 cursor-pointer text-red-600 hover:bg-red-600 hover:text-white hover:border-0 rounded-xl py-3.5 px-3.5' onClick={() => handleSlide('left')}>{`<`}</button> &nbsp;
                                    <button className='border shadow-2xl border-red-600 cursor-pointer text-red-600 hover:bg-red-600 hover:text-white hover:border-0 rounded-xl py-3.5 px-3.5' onClick={() => handleSlide('right')}>{`>`}</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {visibleSuggestions.map((s, index) => (
                                    <Link to={`/PageDetails/${s.summary?.id}`} key={index} className="rounded-md overflow-hidden   shadow-sm">
                                        <img
                                            src={s.jawSummary?.backgroundImage?.url || '/api/placeholder/180/120'}
                                            alt={s.jawSummary?.title}
                                            className="w-full h-auto object-cover"
                                        />
                                        <div className="p-2 bg-white">
                                            <h1 className="text-xs text-red-600 mb-1">{s.jawSummary?.releaseYear}</h1>

                                            <div className="text-sm  font-medium truncate">{s.jawSummary?.title}</div>

                                            {/* Play and Download buttons */}
                                            <div className="flex gap-2 mt-2">
                                                <button
                                                    className="border  duration-300 ease-in hover:border-white   hover:bg-red-600 hover:text-white border-black cursor-pointer text-black rounded-lg py-1.5 px-5 text-xs"
                                                    onClick={() => handlePlay(s.summary?.id)} // Call play function
                                                >
                                                    Play
                                                </button>
                                                <button
                                                    className="border  duration-300 ease-in hover:border-white   hover:bg-black hover:text-white border-black cursor-pointer text-black rounded-lg py-1.5 px-5 text-xs"
                                                    onClick={() => handleDownload(s.summary?.id)} // Call download function
                                                >
                                                    Download
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default FlintstonesUI;
