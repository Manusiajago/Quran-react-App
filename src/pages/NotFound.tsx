import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4 animate-fade-in">
        <div className="mb-8">
          <BookOpen className="h-24 w-24 text-primary mx-auto mb-4" />
          <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
          <p className="mb-2 text-2xl font-semibold text-foreground">Halaman Tidak Ditemukan</p>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak ada. Mari kembali membaca Al-Qur'an.
          </p>
        </div>
        
        <Link to="/">
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <Home className="h-4 w-4" />
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
