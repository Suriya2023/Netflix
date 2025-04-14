import { useState, useRef, useEffect } from 'react';

function StreamingPlatform() {
    // Refs for scrollable rows
    const sportsRowRef = useRef(null);
    const latestRowRef = useRef(null);
    const dramaRowRef = useRef(null);
    const everyoneRowRef = useRef(null);
    const topTenRowRef = useRef(null);

    // Function to handle mouse scroll behavior
    const setupScrollBehavior = (ref) => {
        if (!ref.current) return;

        let isDown = false;
        let startX;
        let scrollLeft;

        const mouseDown = (e) => {
            isDown = true;
            ref.current.style.cursor = 'grabbing';
            startX = e.pageX - ref.current.offsetLeft;
            scrollLeft = ref.current.scrollLeft;
        };

        const mouseLeave = () => {
            isDown = false;
            ref.current.style.cursor = 'grab';
        };

        const mouseUp = () => {
            isDown = false;
            ref.current.style.cursor = 'grab';
        };

        const mouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - ref.current.offsetLeft;
            const walk = (x - startX) * 2;
            ref.current.scrollLeft = scrollLeft - walk;
        };

        ref.current.addEventListener('mousedown', mouseDown);
        ref.current.addEventListener('mouseleave', mouseLeave);
        ref.current.addEventListener('mouseup', mouseUp);
        ref.current.addEventListener('mousemove', mouseMove);

        return () => {
            if (ref.current) {
                ref.current.removeEventListener('mousedown', mouseDown);
                ref.current.removeEventListener('mouseleave', mouseLeave);
                ref.current.removeEventListener('mouseup', mouseUp);
                ref.current.removeEventListener('mousemove', mouseMove);
            }
        };
    };

    // Set up scroll behavior when component mounts
    useEffect(() => {
        const cleanupFunctions = [
            setupScrollBehavior(sportsRowRef),
            setupScrollBehavior(latestRowRef),
            setupScrollBehavior(dramaRowRef),
            setupScrollBehavior(everyoneRowRef),
            setupScrollBehavior(topTenRowRef)
        ];

        return () => {
            cleanupFunctions.forEach(cleanup => cleanup && cleanup());
        };
    }, []);

    return (
        <div className="bg-black text-white min-h-screen">
     
            <div className="relative container mx-auto">
          
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

          
                <div className="relative">
                    <div className="w-full h-96 bg-gray-800 relative overflow-hidden">
                     
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Movie+Banner')",
                                filter: "blur(3px)"
                            }}
                        ></div>

           
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>

                 
                        <div className="absolute bottom-0 left-0 p-6 w-full md:w-3/4 lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-2">FIFTYSHADES<br />DARKER</h1>
                            <div className="flex items-center text-sm mb-3">
                                <span className="mr-3">2017</span>
                                <span className="mr-3">•</span>
                                <span className="mr-3">1h 52m</span>
                                <span className="mr-3">•</span>
                                <span>5 Languages</span>
                            </div>
                            <p className="text-sm text-gray-300 mb-4">
                                While Christian wrestles with his inner demons, Anastasia must confront the anger and envy of the women who came before her.
                            </p>
                            <div className="flex space-x-1 mb-4">
                                <span className="px-2 py-1 bg-gray-800 text-xs rounded">Romance</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center">
                                    <i className="fas fa-play mr-2"></i> Subscribe to Watch
                                </button>
                                <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      
            <div className="mt-6 container mx-auto px-4">
                <h2 className="text-xl font-bold mb-3">Non-Stop Sports</h2>
                <div ref={sportsRowRef} className="flex space-x-4 overflow-x-auto pb-4 cursor-grab" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              
                    <div className="flex-shrink-0 w-44 relative">
                        <div className="h-24 bg-gradient-to-r from-pink-600 to-purple-600 rounded overflow-hidden relative">
                            <div className="absolute bottom-2 left-2">
                                <span className="text-xs font-bold">PREVIEW</span>
                                <p className="text-sm">RR vs RCB</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-44 relative">
                        <div className="h-24 bg-gradient-to-r from-orange-500 to-yellow-500 rounded overflow-hidden relative">
                            <div className="absolute bottom-2 left-2">
                                <span className="text-xs">HIGHLIGHTS</span>
                                <p className="text-sm">SRH vs PBKS</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-44 relative">
                        <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded overflow-hidden relative">
                            <div className="absolute bottom-2 left-2">
                                <span className="text-xs font-bold">PREVIEW</span>
                                <p className="text-sm">DC vs MI</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-44 relative">
                        <div className="h-24 bg-gradient-to-r from-sky-500 to-blue-500 rounded overflow-hidden relative">
                            <div className="absolute bottom-2 left-2">
                                <span className="text-xs">HIGHLIGHTS</span>
                                <p className="text-sm">LSG vs GT</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-44 relative">
                        <div className="h-24 bg-gradient-to-r from-red-600 to-orange-600 rounded overflow-hidden relative">
                            <div className="absolute top-2 right-2">
                                <span className="text-xs bg-red-600 px-2 py-1 rounded">LIVE</span>
                            </div>
                            <div className="absolute bottom-2 left-2">
                                <p className="text-sm">Game Day 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="mt-8 container mx-auto px-4">
                <h2 className="text-xl font-bold mb-3">Latest Releases</h2>
                <div ref={latestRowRef} className="flex space-x-4 overflow-x-auto pb-4 cursor-grab" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-purple-900 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/6b46c1/ffffff?text=Ram+Katha" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-blue-900 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/3b82f6/ffffff?text=Sweetheart" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-yellow-600 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/ca8a04/ffffff?text=One+Piece" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-amber-800 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/92400e/ffffff?text=Legend+Hanuman" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-gray-800 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/1f2937/ffffff?text=Marco" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-green-900 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/166534/ffffff?text=Do+Not+Attempt" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-pink-600 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/db2777/ffffff?text=LoveJaPa" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="mt-8 container mx-auto px-4">
                <h2 className="text-xl font-bold mb-3">Drama Delights</h2>
                <div ref={dramaRowRef} className="flex space-x-4 overflow-x-auto pb-4 cursor-grab" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-teal-900 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/0f766e/ffffff?text=Aurora" className="w-full h-full object-cover" alt="Drama poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-yellow-700 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/a16207/ffffff?text=White+Lotus" className="w-full h-full object-cover" alt="Drama poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-amber-900 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/78350f/ffffff?text=Bypass" className="w-full h-full object-cover" alt="Drama poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-red-700 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/b91c1c/ffffff?text=Brahmastra" className="w-full h-full object-cover" alt="Drama poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-blue-900 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/1e3a8a/ffffff?text=Game+of+Thrones" className="w-full h-full object-cover" alt="Drama poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-pink-700 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/be185d/ffffff?text=Jhukra+Hai+Pyaar" className="w-full h-full object-cover" alt="Drama poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-sky-900 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/0c4a6e/ffffff?text=Shilpa+Shanta" className="w-full h-full object-cover" alt="Drama poster" />
                        </div>
                    </div>
                </div>
            </div>

 
            <div className="mt-8 container mx-auto px-4">
                <h2 className="text-xl font-bold mb-3">Something For Everyone</h2>
                <div ref={everyoneRowRef} className="flex space-x-4 overflow-x-auto pb-4 cursor-grab" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-yellow-600 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/ca8a04/ffffff?text=Gangubai" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-yellow-800 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/854d0e/ffffff?text=Singham+Returns" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-red-800 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/991b1b/ffffff?text=Raid" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-pink-500 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/ec4899/ffffff?text=Tumse+Na+Ho+Payega" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-pink-700 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/be185d/ffffff?text=Jhukra+Hai+Pyaar" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-amber-700 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/b45309/ffffff?text=Housefull+4" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32">
                        <div className="h-48 bg-sky-700 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/0369a1/ffffff?text=Super+30" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                </div>
            </div>

  
            <div className="mt-8 container mx-auto px-4 mb-16">
                <h2 className="text-xl font-bold mb-3">Top 10 in India Today - Hindi</h2>
                <div ref={topTenRowRef} className="flex space-x-4 overflow-x-auto pb-4 cursor-grab" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
 
                    <div className="flex-shrink-0 w-32 relative">
                        <div className="absolute -left-4 bottom-0 text-6xl font-bold text-white opacity-80">1</div>
                        <div className="h-48 bg-amber-800 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/92400e/ffffff?text=Legend+Hanuman" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32 relative">
                        <div className="absolute -left-4 bottom-0 text-6xl font-bold text-white opacity-80">2</div>
                        <div className="h-48 bg-pink-600 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/db2777/ffffff?text=LoveJaPa" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32 relative">
                        <div className="absolute -left-4 bottom-0 text-6xl font-bold text-white opacity-80">3</div>
                        <div className="h-48 bg-yellow-900 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/713f12/ffffff?text=Mufasa" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32 relative">
                        <div className="absolute -left-4 bottom-0 text-6xl font-bold text-white opacity-80">4</div>
                        <div className="h-48 bg-blue-900 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/1e3a8a/ffffff?text=Game+of+Thrones" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32 relative">
                        <div className="absolute -left-4 bottom-0 text-6xl font-bold text-white opacity-80">5</div>
                        <div className="h-48 bg-gray-700 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/374151/ffffff?text=Salaar" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32 relative">
                        <div className="absolute -left-4 bottom-0 text-6xl font-bold text-white opacity-80">6</div>
                        <div className="h-48 bg-blue-900 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/3b82f6/ffffff?text=Sweetheart" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-32 relative">
                        <div className="absolute -left-4 bottom-0 text-6xl font-bold text-white opacity-80">7</div>
                        <div className="h-48 bg-gray-800 rounded overflow-hidden">
                            <img src="https://via.placeholder.com/135x200/1f2937/ffffff?text=Animal" className="w-full h-full object-cover" alt="Movie poster" />
                        </div>
                    </div>
                </div>
            </div>

    
            <div className="fixed bottom-0 inset-x-0 bg-gray-900 border-t border-gray-800 flex justify-around py-2 md:hidden">
                <a href="#" className="text-center px-4 py-1">
                    <i className="fas fa-home text-lg"></i>
                    <p className="text-xs">Home</p>
                </a>
                <a href="#" className="text-center px-4 py-1">
                    <i className="fas fa-search text-lg"></i>
                    <p className="text-xs">Search</p>
                </a>
                <a href="#" className="text-center px-4 py-1">
                    <i className="fas fa-tv text-lg"></i>
                    <p className="text-xs">TV</p>
                </a>
                <a href="#" className="text-center px-4 py-1">
                    <i className="fas fa-film text-lg"></i>
                    <p className="text-xs">Movies</p>
                </a>
                <a href="#" className="text-center px-4 py-1">
                    <i className="fas fa-user text-lg"></i>
                    <p className="text-xs">Profile</p>
                </a>
            </div>
        </div>
    );
}

export default StreamingPlatform;