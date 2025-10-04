import AudioPlayer from "./AudioPlayer";

const AyahCard = ({ ayah, onAudioPlay, index }) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          <span className="text-primary font-bold text-sm">{ayah.nomorAyat}</span>
        </div>
        <AudioPlayer
          audioUrl={ayah.audio["05"]}
          ayahNumber={ayah.nomorAyat}
          onPlay={onAudioPlay}
        />
      </div>

      <div className="space-y-4">
        <p className="font-arabic text-3xl text-right leading-loose text-foreground">
          {ayah.teksArab}
        </p>

        <div className="h-px bg-border"></div>

        <p className="text-sm text-muted-foreground italic">
          {ayah.teksLatin}
        </p>

        <p className="text-foreground leading-relaxed">
          {ayah.teksIndonesia}
        </p>
      </div>
    </div>
  );
};

export default AyahCard;
