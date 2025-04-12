import React, { useState } from 'react';

function VideoSuggestions() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const suggestions = [
        {
            entityId: "Video:70025585",
            name: "Chel Chabilo Gujarati: Gujarati",
            videoUrl: "https://www.youtube.com/embed/jOhWqL4k1L0", // Replace with actual video if needed
        },
        {
            entityId: "Video:70025586",
            name: "Gujarati Lok Dayro",
            videoUrl: "https://www.youtube.com/embed/MOCK_VIDEO_2", // Mock example
        }
    ];

    return (
        <div className="max-w-3xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Suggested Videos</h1>

            <div className="grid gap-4">
                {suggestions.map((video, index) => (
                    <div key={index} className="bg-white rounded-xl shadow p-4">
                        <h2 className="text-lg font-semibold">{video.name}</h2>
                        <button
                            className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                            onClick={() => setSelectedVideo(video)}
                        >
                            ▶ Play
                        </button>
                    </div>
                ))}
            </div>

            {selectedVideo && (
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-2">Now Playing: {selectedVideo.name}</h2>
                    <div className="aspect-video w-full">
                        <iframe
                            src={selectedVideo.videoUrl}
                            title={selectedVideo.name}
                            className="w-full h-64 rounded-xl"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>`--`
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideoSuggestions;
