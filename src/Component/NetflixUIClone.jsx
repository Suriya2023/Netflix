import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaFilm, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import Slider from './Slider';

function NetflixUIClone({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const allShows = items?.flatMap((e) => e?.titles || []) || [];
    const thumbnailsRef = useRef([]);
    const containerRef = useRef(null);

    if (!items || items.length === 0 || allShows.length === 0) {
        return <div className="text-white p-4">No content available.</div>;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % allShows.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [allShows.length]);

    useEffect(() => {
        if (!containerRef.current || !thumbnailsRef.current[currentIndex]) return;

        const container = containerRef.current;
        const thumbnail = thumbnailsRef.current[currentIndex];

        const containerRect = container.getBoundingClientRect();
        const thumbnailRect = thumbnail.getBoundingClientRect();

        const scrollAmount = thumbnail.offsetLeft - container.offsetLeft - container.clientWidth / 2 + thumbnail.clientWidth / 2;

        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth',
        });
    }, [currentIndex]);

    const currentShow = allShows[currentIndex]?.jawSummary ?? null;

    return (
        <>

            <br /><br />
            <div className=" bg-black z-0 text-white">
                <div id="MySlide" className="text-white  font-sans flex flex-col md:flex-row">
                    <main className="flex-1 container mx-auto flex-row-reverse p-4 md:p-6 relative">
                        {currentShow?.backgroundImage?.url && (
                            <div className="absolute inset-0 mix-blend-multiply">
                                <img loading='lazy'
                                    src={currentShow.backgroundImage.url}
                                    alt={currentShow?.title || 'Poster'}
                                    className="w-full cursor-pointer h-full object-cover transition-opacity duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
                            </div>
                        )}

                        {currentShow && (
                            <div style={{ display: 'flex', justifyContent: 'end' }} id="adujest" className="relative  container mx-auto overflow-x-hidden">
                                <Link to={`/PageDetails/${currentShow?.id || ''}`}>
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
                                        {currentShow?.title || 'No Title'}
                                    </h1>
                                </Link>

                                <p className="text-sm text-gray-300 mt-2">
                                    {currentShow?.supplementalMessageIcon || ''} / {currentShow?.title || 'No Title'} (
                                    {currentShow?.availability?.availabilityDate || 'N/A'}, {currentShow?.releaseYear || 'N/A'})
                                </p>

                                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-200">
                                    <span>{currentShow?.runtime || 'N/A'} min</span><br />
                                    <div className="text-blue-300">{currentShow?.contextualSynopsis?.text || ''}</div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-4">
                                    <button
                                        onClick={() => {
                                            const movieTitle = currentShow?.title || 'Movie';
                                            const searchQuery = encodeURIComponent(`${movieTitle} trailer`);
                                            const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;
                                            window.open(youtubeSearchUrl, '_blank');
                                        }}
                                        className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 flex items-center gap-2"
                                    >
                                        <FaPlay />
                                        <span>Play</span>
                                    </button>

                                    <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2">
                                        <FaFilm />
                                        <span>Trailer</span>
                                    </button>

                                    <div className="bg-yellow-500 text-black font-bold px-3 py-2 rounded flex items-center gap-1">
                                        <FaStar />
                                        <span>{currentShow?.maturity?.rating?.maturityDescription || 'Rating'} 7.8</span>
                                    </div>
                                </div>

                                <h2 className="mt-10 text-lg sm:text-xl font-semibold">Coming Movies</h2>
                                <div ref={containerRef} className="mt-4 overflow-x-auto overflow-y-hidden pb-2 scrollbar-hidden">
                                    <div className="flex gap-3 md:gap-4">
                                        {allShows.map((movie, index) => {
                                            const show = movie?.jawSummary;
                                            return (
                                                <Link
                                                    to={`/PageDetails/${show?.id || ''}`}
                                                    key={`${show?.id || 'movie'}-${index}`}
                                                    ref={(el) => (thumbnailsRef.current[index] = el)}
                                                    className={`shrink-0 h-fit rounded-lg   overflow-hidden w-[100px] sm:w-[110px] md:w-[10%] lg:w-[8%] 
                                                ${index === currentIndex ? ' scale-105 transition-transform duration-300' : ''}`}
                                                >
                                                    {show?.backgroundImage?.url && (
                                                        <img loading='lazy'
                                                            src={show.backgroundImage.url}
                                                            alt={show?.title || 'Thumbnail'}
                                                            className="w-full hover:scale-[0.9]  hover:border hover:rounded-2xl hover:p-0.5 transition t-0.5  cursor-pointer h-[140px] sm:h-[150px] md:h-[160px] object-cover"
                                                        />
                                                    )}
                                                    <p className="font-semibold italic text-shadow-2xs">
                                                        {show?.title || ''}
                                                    </p>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </main>

                </div>


            </div>

        </>

    );
}

export default NetflixUIClone;
