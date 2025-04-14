import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SeralData } from '../Data/Serial';
import { movies } from '../Data/Movies';
import { FaPlay } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function StreamingPlatform1() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isMovie, setIsMovie] = useState(false);
    const [products, setProducts] = useState([]);
    const [relatedData, setRelatedData] = useState([]);

    const swiperRef = useRef(null);
    const relatedSwiperRef = useRef(null);

    const BASE_URL = "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/";

    useEffect(() => {
        const serialItem = SeralData.find(e => e.id == id);
        const movieItem = movies.find(e => e.id == id);

        if (serialItem) {
            setProduct(serialItem);
            setIsMovie(false);
        } else if (movieItem) {
            setProduct(movieItem);
            setIsMovie(true);
        }

        if (movieItem) {
            const filteredMovies = movies.filter(e => e.category === movieItem.category && e.id !== movieItem.id);
            setRelatedData(filteredMovies);
        }

        // ⭐ Scroll to top jab id change ho
        window.scrollTo(0, 0);

    }, [id]);

    useEffect(() => {
        const allItems = [...SeralData, ...movies];
        setProducts(allItems);
    }, []);

    if (!product) {
        return (
            <div className="flex items-center justify-center min-h-screen text-white bg-black">
                Loading...
            </div>
        );
    }

    const getImageUrl = (item) => {
        if (item.image?.expanded) {
            return BASE_URL + item.image.expanded;
        }
        return item.image;
    };

    const imageUrl = isMovie ? product.image : BASE_URL + product.image?.expanded;

    return (
        <div className="bg-black text-white min-h-screen">
            <br /><br />

            {/* Top Banner Section */}
            <div className="container mx-auto relative w-full h-[500px]">
                <img
                    src={imageUrl}
                    alt={product.image?.alt || product.title}
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-start p-8 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">{product.title}</h1>
                    <p className="text-sm bg-gray-700 px-3 py-1 rounded">{product.language}</p>
                    <p className="max-w-2xl text-gray-300">{product.description}</p>

                    <div className="flex space-x-4 mt-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded flex items-center">
                            <FaPlay />&nbsp; Play
                        </button>
                        <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded">
                            + My List
                        </button>
                    </div>
                </div>
            </div>

            {/* Movies & Serials Slider */}
            <div className="bg-black container mx-auto text-white p-8">
                <h1 className="text-3xl font-bold mb-6">All Movies & Serials</h1>

                <div className="flex justify-end gap-4 mb-4">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
                    >
                        {`<`}
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
                    >
                        {`>`}
                    </button>
                </div>

                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Navigation]}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link to={`/StreamingPlatform/${item.id}`} className="relative group rounded-lg overflow-hidden">
                                <img
                                    src={getImageUrl(item)}
                                    alt={item.image?.alt || item.title}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p className="text-xs bg-gray-700 w-fit mt-1 px-2 py-1 rounded">{item.language}</p>
                                    <p className="text-sm text-gray-300 line-clamp-3 mt-2">{item.description}</p>

                                    <button className="mt-3 cursor-pointer hover:bg-black-100 text-white px-4 py-2 rounded flex items-center">
                                        <FaPlay />&nbsp; Play
                                    </button>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Related Movies Slider */}
            {relatedData.length > 0 && (
                <div className="bg-black container mx-auto text-white p-8">
                    <h1 className="text-3xl font-bold mb-6">Related Movies</h1>

                    <div className="flex justify-end gap-4 mb-4">
                        <button
                            onClick={() => relatedSwiperRef.current?.slidePrev()}
                            className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
                        >
                            {`<`}
                        </button>
                        <button
                            onClick={() => relatedSwiperRef.current?.slideNext()}
                            className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
                        >
                            {`>`}
                        </button>
                    </div>

                    <Swiper
                        onSwiper={(swiper) => {
                            relatedSwiperRef.current = swiper;
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        modules={[Navigation]}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mySwiper"
                    >
                        {relatedData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link to={`/StreamingPlatform/${item.id}`} className="relative group rounded-lg overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
                                        <h2 className="text-lg font-semibold">{item.title}</h2>
                                        <p className="text-xs bg-gray-700 w-fit mt-1 px-2 py-1 rounded">{item.language}</p>
                                        <p className="text-sm text-gray-300 line-clamp-3 mt-2">{item.description}</p>

                                        <button className="mt-3 cursor-pointer hover:bg-black-100 text-white px-4 py-2 rounded flex items-center">
                                            <FaPlay />&nbsp; Play
                                        </button>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}

export default StreamingPlatform1;
