import React from "react";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  // Convert YouTube watch URL to embed URL
  const getEmbedUrl = (url: string) => {
    const videoId = url.match(/v=([^&]+)/)?.[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="rounded-2xl shadow-lg overflow-hidden w-full">
        <iframe
          src={getEmbedUrl(videoUrl)}
          className="w-full aspect-video rounded-2xl shadow-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoPlayer;