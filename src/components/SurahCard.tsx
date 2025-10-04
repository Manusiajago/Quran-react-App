import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const SurahCard = ({ surah }) => {
  return (
    <Link to={`/surah/${surah.nomor}`}>
      <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
            <span className="text-primary group-hover:text-primary-foreground font-bold">
              {surah.nomor}
            </span>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">
                  {surah.namaLatin}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {surah.arti}
                </p>
              </div>
              <span className="font-arabic text-2xl text-primary">
                {surah.nama}
              </span>
            </div>
            
            <div className="flex gap-4 text-xs text-muted-foreground mt-3">
              <span className="flex items-center gap-1">
                <BookOpen className="h-3 w-3" />
                {surah.jumlahAyat} Ayat
              </span>
              <span className="px-2 py-1 bg-muted rounded-full">
                {surah.tempatTurun}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SurahCard;
