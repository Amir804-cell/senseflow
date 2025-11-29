import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, AlertCircle } from 'lucide-react';

// Individual Video Box Component
interface VideoBoxProps {
  videoSrc: string;
  title: string;
  brightness?: number; // Optional brightness value (default 1.0)
}

const VideoBox: React.FC<VideoBoxProps> = ({ videoSrc, title, brightness = 1.0 }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const togglePlay = () => {
    if (videoRef.current && !videoError) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-200 bg-slate-900 aspect-video">
      {!videoError ? (
        <>
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            style={{ filter: `brightness(${brightness})` }}
            loop
            muted={isMuted}
            playsInline
            onError={() => setVideoError(true)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Overlay Controls */}
          <div
            className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
          >
            {/* Play/Pause Button */}
            <div className={`w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100 scale-90' : 'opacity-100 scale-100 hover:scale-110'}`}>
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white fill-white" />
              ) : (
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              )}
            </div>

            {/* Mute Toggle (Bottom Right) */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </>
      ) : (
        /* Error State / Instructions */
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center bg-slate-800">
          <AlertCircle className="w-10 h-10 text-amber-400 mb-3" />
          <h3 className="text-lg font-bold mb-2">Video Not Found</h3>
          <p className="text-slate-300 text-sm max-w-md mb-4">
            Add your video file to: <span className="text-emerald-400 font-mono text-xs">/public/videos/</span>
          </p>
          <div className="bg-slate-900 px-3 py-2 rounded-lg font-mono text-xs text-slate-400 border border-slate-700">
            {videoSrc.split('/').pop()}
          </div>
        </div>
      )}
    </div>
  );
};

const ProductVideo: React.FC = () => {

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">See SenseFlow in Action</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Watch the breakdown of our compact cooling technology and smart sensor integration.
          </p>
        </div>

        {/* Two Video Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Video Box 1 */}
          <VideoBox
            videoSrc="/videos/senseflow-demo.MP4"
            title="Product Demo"
            brightness={1.2}
          />

          {/* Video Box 2 */}
          <VideoBox
            videoSrc="/videos/senseflow1-demo.MP4"
            title="Technical Breakdown"
            brightness={1.4}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductVideo;