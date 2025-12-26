import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-6">
            Animated Background
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            A smooth, flowing gradient background inspired by Figma Make. 
            Watch the colors gently dance and blend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
