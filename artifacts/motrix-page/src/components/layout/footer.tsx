export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 opacity-80">
          <img 
            src={`${import.meta.env.BASE_URL}motrix-logo.png`} 
            alt="Motrix Logo" 
            className="h-6 w-auto grayscale"
          />
          <span className="font-display font-semibold text-muted-foreground">MotrixLab</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Motrix Organization. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
