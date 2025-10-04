import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
        <p className="text-muted-foreground">Memuat data...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
