import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModalKelompok = ({ isOpen: externalIsOpen, onClose }: { isOpen?: boolean, onClose?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (externalIsOpen !== undefined) {
      setIsOpen(externalIsOpen);
    } else {
      const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }
  }, [externalIsOpen]);

  const handleClose = () => {
    localStorage.setItem("hasSeenWelcomeModal", "true");
    setIsOpen(false);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in mt-16">
      <div className="bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slide-up ">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Selamat Datang
            </h2>
            <p className="text-muted-foreground text-sm">
              Kelompok Pembuat Website Al-Qur'an Digital
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-3">Anggota Kelompok:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Cahaya Maulida Putri
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Elzha Mismaea
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Gebby Aprilliani Prayindra
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Harrits Firmansyah
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Muhamad Faisal Mardani
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Nadia Aprilani
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Nova Indriyani
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Putri Pujiati
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Seyla Alnivia Cahya Islami
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Zahra Nurul Jannah
              </li>
            </ul>
          </div>

          <p className="text-sm text-center text-muted-foreground italic">
            " Bacalah dengan menyebut nama Tuhanmu yang Menciptakan" - Al-Alaq: 1 "
          </p>
        </div>

        <Button
          onClick={handleClose}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Mulai Membaca Al-Qur'an
        </Button>
      </div>
    </div>
  );
};

export default ModalKelompok;
