import React, { useEffect, useRef } from 'react';
import { items } from '../Data/400Data';
import { SeralData } from '../Data/Serial';
import { movies } from '../Data/Movies';
import { Link } from 'react-router-dom';
function Slider() {
    const featuredMovie = {
        title: "Brahmastra: Part One - Shiva",
        year: "2022",
        rating: "U/A 13+",
        duration: "2h 48m",
        languages: "5 Languages",
        description: "A journey of fantasy, action and romance comes to life as Shiva enters the Astraverse! He discovers true love and also, the power of fire within him.",
        image: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6998/1729134966998-i"
    };


    const BASE_URL = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/";
    const getImageUrl = (path) => path ? `${BASE_URL}${path}` : "/api/placeholder/180/270";

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const autoSlide = (ref) => {
        if (ref.current) {
            const { scrollLeft, scrollWidth, clientWidth } = ref.current;
            const isEnd = scrollLeft + clientWidth >= scrollWidth;
            ref.current.scrollTo({
                left: isEnd ? 0 : scrollLeft + 200,
                behavior: "smooth",
            });
        }
    };

    const handleSlide = (direction, ref) => {
        if (ref.current) {
            const scrollAmount = 200;
            const newScrollPosition =
                direction === 'left'
                    ? ref.current.scrollLeft - scrollAmount
                    : ref.current.scrollLeft + scrollAmount;

            ref.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const interval1 = setInterval(() => autoSlide(ref1), 2000);
        const interval2 = setInterval(() => autoSlide(ref2), 2000);
        const interval3 = setInterval(() => autoSlide(ref3), 2000);
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, []);

    return (
        <>
            <section className='bg-black text-white scroll-auto relative'>
                <div className='md:p-6  relative'>
                    <div className=" min-h-screen">
                        <main className="container mx-auto px-4">


                            <section className="mb-8">
                                <div className='flex p-1.5 items-baseline  justify-between my-1.5'>
                                    <h2 className="text-xl font-bold mb-4">Latest Releases </h2>
                                    <div className=''>
                                        <button className='border smvisible shadow-2xl border-white cursor-pointer hover:bg-red-600 hover:text-white hover:border-0 rounded-xl py-3.5 px-3.5' onClick={() => handleSlide('left', ref2)}>{`<`}</button> &nbsp;
                                        <button className='border shadow-2xl border-white cursor-pointer hover:bg-red-600 hover:text-white hover:border-0 rounded-xl py-3.5 px-3.5' onClick={() => handleSlide('right', ref2)}>{`>`}</button>
                                    </div>
                                </div>
                                <div ref={ref2} className="flex scrollbar-hidden overflow-x-auto space-x-4 pb-4 scroll-smooth">
                                    {movies.map((entry, index) => (
                                        <div key={entry.id || index} className="flex-none  w-32 md:w-40 lg:w-44">
                                            <Link to={`/StreamingPlatform/${entry.id}`} className="rounded overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
                                                <img loading='lazy'
                                                    src={(entry.image)}
                                                    alt={entry.image?.alt || entry.title}
                                                    className="w-full cursor-pointer h-48 md:h-56 lg:h-64 object-cover"
                                                />


                                            </Link>
                                            <div className="mt-1 text-sm truncate text-white">{entry.title}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <section className="mb-8">
                                <div className='flex p-1.5  items-baseline  justify-between my-1.5'>
                                    <h2 className="text-xl font-bold mb-4">Latest Episodes Before TV</h2>
                                    <div >
                                        <button className='border smvisible shadow-2xl border-white cursor-pointer hover:bg-red-600 hover:text-white hover:border-0 rounded-xl py-3.5 px-3.5' onClick={() => handleSlide('left', ref1)}>{`<`}</button> &nbsp;
                                        <button className='border shadow-2xl border-white cursor-pointer hover:bg-red-600 hover:text-white hover:border-0 rounded-xl py-3.5 px-3.5' onClick={() => handleSlide('right', ref1)}>{`>`}</button>
                                    </div>
                                </div>
                                <div ref={ref1} className="flex scrollbar-hidden overflow-x-auto space-x-4 pb-4 scroll-smooth">
                                    {SeralData.map((entry, index) => (
                                        <div key={entry.id || index} className="flex-none w-32 md:w-40 lg:w-44">
                                            <Link to={`/StreamingPlatform/${entry.id}`} className="rounded scrollbar-hidden overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
                                                <img loading='lazy'
                                                    src={getImageUrl(entry.image?.thumbnail)}
                                                    alt={entry.image?.alt || entry.title}
                                                    className="w-full cursor-pointer h-48 md:h-56 lg:h-64 object-cover"
                                                />
                                            </Link>
                                            <div className="mt-1 text-sm truncate text-white">{entry.title}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>


                            <section className="mb-8 relative">
                                <div className="bg-gray-900 rounded-lg overflow-hidden">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/2">
                                            <img loading='lazy'
                                                src={featuredMovie.image}
                                                alt={featuredMovie.title}
                                                className="w-full cursor-pointer h-64 md:h-full object-cover"
                                            />
                                        </div>
                                        <div className="md:w-1/2 p-6">
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="text-xl font-bold text-orange-500">{featuredMovie.title}</h3>
                                                <span className="text-gray-400">हिंदी</span>
                                            </div>
                                            <div className="flex text-sm text-gray-400 space-x-2 mb-4">
                                                <span>{featuredMovie.year}</span>
                                                <span>•</span>
                                                <span>{featuredMovie.rating}</span>
                                                <span>•</span>
                                                <span>{featuredMovie.duration}</span>
                                                <span>•</span>
                                                <span>{featuredMovie.languages}</span>
                                            </div>
                                            <p className="text-gray-300 mb-6">{featuredMovie.description}</p>
                                            <button className="flex items-center justify-center bg-white text-black rounded-md px-6 py-2 font-bold">
                                                <span className="mr-2">▶</span> Watch Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>





                            <section id='SdNone' className="mb-8 ">
                                <div className='flex p-1.5 items-baseline  justify-between my-1.5'>
                                    <h2 className="text-xl font-bold mb-4">Movies Entertainment</h2>
                                    <div>
                                        <button className='border smvisible shadow-2xl border-white cursor-pointer hover:bg-red-600 hover:text-white hover:border-0 rounded-xl py-3.5 px-3.5' onClick={() => handleSlide('left', ref3)}>{`<`}</button> &nbsp;
                                        <button className='border shadow-2xl border-white cursor-pointer hover:bg-red-600 hover:text-white hover:border-0 rounded-xl py-3.5 px-3.5' onClick={() => handleSlide('right', ref3)}>{`>`}</button>
                                    </div>
                                </div>
                                <div ref={ref3} className="flex scrollbar-hidden overflow-x-auto space-x-4 pb-4 scroll-smooth">
                                    {items.map((entry, index) =>
                                        entry.titles.map((title, subIndex) => {
                                            const jaw = title.jawSummary;
                                            return (
                                                <div key={`${index}-${subIndex}`} className="flex-none  w-32 md:w-40 lg:w-44">
                                                    <Link to={`/PageDetails/${jaw?.id || ''}`} className="rounded overflow-hidden  shadow-lg hover:scale-105 transition-transform duration-200">
                                                        <img loading='lazy'
                                                            src={jaw.backgroundImage?.url || "/api/placeholder/180/270"}
                                                            alt={jaw.title}
                                                            className="w-full cursor-pointer h-48 md:h-56 lg:h-64 object-cover"
                                                        />
                                                    </Link>
                                                    <div className="mt-1 text-sm truncate text-white">{jaw.title}</div>
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            </section>

                        </main>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Slider;
