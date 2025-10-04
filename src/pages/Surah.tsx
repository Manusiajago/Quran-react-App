import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import ModalKelompok from "@/components/ModalKelompok";
import AyahCard from "@/components/AyahCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";

const fetchSurahDetail = async (nomor) => {
  const response = await fetch(`https://equran.id/api/v2/surat/${nomor}`);
  if (!response.ok) throw new Error("Gagal memuat detail surah");
  const data = await response.json();
  return data.data;
};

const Surah = () => {
  const { nomor } = useParams();
  const currentAudioRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: surah, isLoading, error } = useQuery({
    queryKey: ["surah", nomor],
    queryFn: () => fetchSurahDetail(nomor),
  });

  const handleAudioPlay = (newAudioElement) => {
    if (currentAudioRef.current && currentAudioRef.current !== newAudioElement) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    currentAudioRef.current = newAudioElement;
  };

  return (
    <div className="min-h-screen bg-background">
      <ModalKelompok isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Daftar Surah
          </Button>
        </Link>

        {isLoading && <LoadingSpinner />}

        {error && (
          <div className="text-center py-12">
            <p className="text-destructive">Gagal memuat detail surah. Silakan coba lagi.</p>
          </div>
        )}

        {surah && (
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 mb-8 text-center border border-border">
              <span className="font-arabic text-4xl text-primary mb-4 block">
                {surah.nama}
              </span>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {surah.namaLatin}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {surah.arti}
              </p>
              <div className="flex justify-center gap-6 text-sm text-muted-foreground">
                <span>{surah.jumlahAyat} Ayat</span>
                <span>•</span>
                <span>{surah.tempatTurun}</span>
              </div>
            </div>

            <div className="space-y-6">
              {surah.ayat.map((ayah, index) => (
                <AyahCard
                  key={ayah.nomorAyat}
                  ayah={ayah}
                  onAudioPlay={handleAudioPlay}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <ScrollToTop />
    </div>
  );
};

export default Surah;
