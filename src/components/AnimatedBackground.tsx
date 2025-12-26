const AnimatedBackground = () => {
  return (
    <div className="fixed inset-x-0 top-16 bottom-0 overflow-hidden pointer-events-none -z-10">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated blobs - more subtle blue/purple like reference */}
      <div className="blob blob-1 -top-32 -left-32" />
      <div className="blob blob-2 top-1/4 -right-40" />
      <div className="blob blob-3 bottom-1/4 left-1/4" />
      <div className="blob blob-4 -bottom-32 right-1/4" />
      <div className="blob blob-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="blob blob-6 top-10 left-1/3" />
      
      {/* Tight grid overlay - white */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(0 0% 100% / 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(0 0% 100% / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />
      
      {/* Subtle noise overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
