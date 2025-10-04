import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import ModalKelompok from "@/components/ModalKelompok";
import SearchBar from "@/components/SearchBar";
import SurahCard from "@/components/SurahCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import ScrollToTop from "@/components/ScrollToTop";

const fetchSurahList = async () => {
  const response = await fetch("https://equran.id/api/v2/surat");
  if (!response.ok) throw new Error("Gagal memuat data surah");
  const data = await response.json();
  return data.data;
};

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: surahList, isLoading, error } = useQuery({
    queryKey: ["surahList"],
    queryFn: fetchSurahList,
  });

  const filteredSurah = surahList?.filter((surah) =>
    surah.namaLatin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <ModalKelompok isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Al-Qur'an Digital
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Baca, dengarkan, dan pahami Al-Qur'an dengan terjemahan bahasa Indonesia
          </p>
        </div>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {isLoading && <LoadingSpinner />}

        {error && (
          <div className="text-center py-12">
            <p className="text-destructive">Gagal memuat data. Silakan coba lagi.</p>
          </div>
        )}

        {filteredSurah && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSurah.map((surah) => (
              <SurahCard key={surah.nomor} surah={surah} />
            ))}
          </div>
        )}

        {filteredSurah && filteredSurah.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Surah tidak ditemukan</p>
          </div>
        )}
      </main>

      <ScrollToTop />
    </div>
  );
};

export default Home;
