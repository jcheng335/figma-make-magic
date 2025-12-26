import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { BookOpen, Pen, Sparkles, RefreshCw, BookMarked, Search, Mic, ScanLine } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-4">
        <div className="flex items-center gap-2">
          <BookMarked className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg">ZoeNote</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">AI Features</a>
          <a href="#showcase" className="hover:text-foreground transition-colors">Showcase</a>
          <a href="#" className="hover:text-foreground transition-colors">Verse Search</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-4 text-center">
        <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
          Modern Workspace
        </p>
        <h1 className="text-6xl md:text-8xl font-light tracking-tight text-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          ZoeNote
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          A beautiful, intuitive notebook workspace designed for creative minds. 
          Capture your thoughts, organize your ideas, and bring your projects to life.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="px-8">Get Started</Button>
          <Button size="lg" variant="outline" className="px-8 bg-background/50 backdrop-blur-sm">Learn More</Button>
        </div>
      </section>

      {/* Gradient fade-out overlay - very gradual fade like reference */}
      <div 
        className="absolute left-0 right-0 top-[50vh] h-[80vh] z-[5] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--background) / 0.02) 10%, hsl(var(--background) / 0.05) 20%, hsl(var(--background) / 0.1) 30%, hsl(var(--background) / 0.2) 40%, hsl(var(--background) / 0.35) 50%, hsl(var(--background) / 0.55) 60%, hsl(var(--background) / 0.75) 70%, hsl(var(--background) / 0.9) 80%, hsl(var(--background)) 90%)'
        }}
      />
      
      {/* Clean white background for rest of page */}
      <div className="relative bg-background z-10">
        {/* Features Section */}
        <section id="features" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase text-center mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-16" style={{ fontFamily: 'Georgia, serif' }}>
              Everything you need
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 -mt-12">
              Powerful features designed to help you study deeper, organize better, and grow spiritually.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<BookOpen className="w-6 h-6" />}
                title="Organized Notebooks"
                description="Create unlimited notebooks and organize your Bible study notes with an intuitive folder structure."
              />
              <FeatureCard
                icon={<Pen className="w-6 h-6" />}
                title="Rich Editing"
                description="Write with a beautiful editor that supports markdown, formatting, and seamless Scripture embedding."
              />
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                title="AI-Powered Features"
                description="Auto-populate verses, OCR capture, smart search, and transcription to enhance your study."
              />
              <FeatureCard
                icon={<RefreshCw className="w-6 h-6" />}
                title="Multi-Platform Sync"
                description="Access your notes anywhere with seamless sync across all your devices."
              />
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section id="showcase" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase text-center mb-3">See It In Action</p>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              A workspace that inspires deeper study
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Watch how ZoeNote auto-populates Scripture verses, adds inline comments, and captures your insights—all in one seamless experience.
            </p>
            
            <div className="bg-muted/30 rounded-2xl border border-border/50 p-8 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BookMarked className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">App Preview</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase text-center mb-3">AI-Powered</p>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Smart features for deeper study
            </h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              OCR capture turns printed or handwritten notes into text. AI transcription records meetings. 
              Smart search finds notes by semantics, not just keywords. Auto-populate verses from Recovery Version, ESV, or KJV.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <AIFeatureCard icon={<ScanLine className="w-5 h-5" />} title="OCR Capture" />
              <AIFeatureCard icon={<Mic className="w-5 h-5" />} title="AI Transcription" />
              <AIFeatureCard icon={<Search className="w-5 h-5" />} title="Smart Search" />
              <AIFeatureCard icon={<BookOpen className="w-5 h-5" />} title="Auto-Populate Verses" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="pricing" className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-3">Start Today</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Begin your study journey
            </h2>
            <p className="text-muted-foreground mb-10">
              Join thousands of believers who have found their perfect Bible study workspace with ZoeNote.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="px-8">Get Started Free</Button>
              <Button size="lg" variant="outline" className="px-8">View Pricing</Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border/30">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookMarked className="w-4 h-4" />
              <span>© 2025 ZoeNote. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-background/40 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:bg-background/60 transition-colors">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
      {icon}
    </div>
    <h3 className="font-medium mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const AIFeatureCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="bg-background/40 backdrop-blur-sm rounded-xl p-5 border border-border/30 flex items-center gap-3 hover:bg-background/60 transition-colors">
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      {icon}
    </div>
    <span className="font-medium text-sm">{title}</span>
  </div>
);

export default Index;
