import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const AudioPlayer = ({ audioUrl, ayahNumber, onPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => setIsPlaying(false);
      const handlePause = () => setIsPlaying(false);
      const handlePlay = () => setIsPlaying(true);
      
      audio.addEventListener("ended", handleEnded);
      audio.addEventListener("pause", handlePause);
      audio.addEventListener("play", handlePlay);
      
      return () => {
        audio.removeEventListener("ended", handleEnded);
        audio.removeEventListener("pause", handlePause);
        audio.removeEventListener("play", handlePlay);
      };
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        onPlay(audioRef.current);
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="flex items-center gap-2">
      <audio ref={audioRef} src={audioUrl} />
      <Button
        onClick={togglePlay}
        size="sm"
        variant="outline"
        className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
      >
        {isPlaying ? (
          <>
            <Pause className="h-4 w-4" />
            <span className="text-xs">Pause</span>
          </>
        ) : (
          <>
            <Play className="h-4 w-4" />
            <span className="text-xs">Dengar</span>
          </>
        )}
      </Button>
      {isPlaying && (
        <Volume2 className="h-4 w-4 text-primary animate-pulse" />
      )}
    </div>
  );
};

export default AudioPlayer;
