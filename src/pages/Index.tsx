import { useState, useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { BookOpen, Pen, Sparkles, RefreshCw, BookMarked, Search, Mic, ScanLine, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav 
        className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-700 ease-out ${
          scrolled 
            ? "backdrop-blur-2xl" 
            : "backdrop-blur-none"
        }`}
        style={{
          // Always fade to transparent at the bottom so the animated background stays visible
          background: scrolled 
            ? "linear-gradient(to bottom, hsl(var(--background) / 0.28) 0%, hsl(var(--background) / 0.14) 65%, transparent 100%)"
            : "linear-gradient(to bottom, hsl(var(--background) / 0.05) 0%, hsl(var(--background) / 0.02) 55%, transparent 100%)"
        }}
      >
        <div className="flex items-center gap-2">
          <BookMarked className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg">ZoeNote</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm">
          <NavButton href="#features">AI Features</NavButton>
          <NavButton href="#showcase">Showcase</NavButton>
          <NavButton href="#">Verse Search</NavButton>
          <NavButton href="#pricing">Pricing</NavButton>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-4 text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >

        {/* Bottom fade (starts under buttons and tapers to white) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[32vh]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, hsl(var(--background) / 0.02) 10%, hsl(var(--background) / 0.06) 25%, hsl(var(--background) / 0.14) 40%, hsl(var(--background) / 0.28) 55%, hsl(var(--background) / 0.48) 70%, hsl(var(--background) / 0.72) 85%, hsl(var(--background)) 100%)",
          }}
        />

        <motion.p 
          className="relative z-10 text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Modern Workspace
        </motion.p>
        <motion.h1 
          className="relative z-10 text-6xl md:text-8xl font-light tracking-tight text-foreground mb-6" 
          style={{ fontFamily: 'Georgia, serif' }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ZoeNote
        </motion.h1>
        <motion.p 
          className="relative z-10 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A beautiful, intuitive notebook workspace designed for creative minds. 
          Capture your thoughts, organize your ideas, and bring your projects to life.
        </motion.p>
        <motion.div 
          className="relative z-10 flex gap-4"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" className="px-8">Get Started</Button>
          <Button size="lg" variant="outline" className="px-8 bg-background/50 backdrop-blur-sm">Learn More</Button>
        </motion.div>
      </motion.section>
      
      {/* Clean white background for rest of page */}
      <div className="relative bg-background z-10">
        {/* Features Section */}
        <motion.section 
          id="features" 
          className="py-24 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <motion.p 
              className="text-sm tracking-[0.2em] text-muted-foreground uppercase text-center mb-3"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Features
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl font-light text-center mb-16" 
              style={{ fontFamily: 'Georgia, serif' }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Everything you need
            </motion.h2>
            <motion.p 
              className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 -mt-12"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Powerful features designed to help you study deeper, organize better, and grow spiritually.
            </motion.p>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              <FeatureCard
                icon={<BookOpen className="w-6 h-6" />}
                title="Organized Notebooks"
                description="Create unlimited notebooks and organize your Bible study notes with an intuitive folder structure."
                index={0}
              />
              <FeatureCard
                icon={<Pen className="w-6 h-6" />}
                title="Rich Editing"
                description="Write with a beautiful editor that supports markdown, formatting, and seamless Scripture embedding."
                index={1}
              />
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                title="AI-Powered Features"
                description="Auto-populate verses, OCR capture, smart search, and transcription to enhance your study."
                index={2}
              />
              <FeatureCard
                icon={<RefreshCw className="w-6 h-6" />}
                title="Multi-Platform Sync"
                description="Access your notes anywhere with seamless sync across all your devices."
                index={3}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Showcase Section */}
        <motion.section 
          id="showcase" 
          className="py-24 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <motion.p 
              className="text-sm tracking-[0.2em] text-muted-foreground uppercase text-center mb-3"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              See It In Action
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl font-light text-center mb-6" 
              style={{ fontFamily: 'Georgia, serif' }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              A workspace that inspires deeper study
            </motion.h2>
            <motion.p 
              className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Watch how ZoeNote auto-populates Scripture verses, adds inline comments, and captures your insights—all in one seamless experience.
            </motion.p>
            
            <motion.div 
              className="bg-muted/30 rounded-2xl border border-border/50 p-8 shadow-xl"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BookMarked className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">App Preview</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* AI Features Section */}
        <motion.section 
          className="py-24 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <motion.p 
              className="text-sm tracking-[0.2em] text-muted-foreground uppercase text-center mb-3"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              AI-Powered
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl font-light text-center mb-6" 
              style={{ fontFamily: 'Georgia, serif' }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Smart features for deeper study
            </motion.h2>
            <motion.p 
              className="text-center text-muted-foreground max-w-3xl mx-auto mb-16"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              OCR capture turns printed or handwritten notes into text. AI transcription records meetings. 
              Smart search finds notes by semantics, not just keywords. Auto-populate verses from Recovery Version, ESV, or KJV.
            </motion.p>
            
            <motion.div 
              className="grid md:grid-cols-4 gap-6"
              variants={staggerContainer}
            >
              <AIFeatureCard icon={<ScanLine className="w-5 h-5" />} title="OCR Capture" index={0} />
              <AIFeatureCard icon={<Mic className="w-5 h-5" />} title="AI Transcription" index={1} />
              <AIFeatureCard icon={<Search className="w-5 h-5" />} title="Smart Search" index={2} />
              <AIFeatureCard icon={<BookOpen className="w-5 h-5" />} title="Auto-Populate Verses" index={3} />
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          id="pricing" 
          className="py-24 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.p 
              className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-3"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Start Today
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl font-light mb-6" 
              style={{ fontFamily: 'Georgia, serif' }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Begin your study journey
            </motion.h2>
            <motion.p 
              className="text-muted-foreground mb-10"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Join thousands of believers who have found their perfect Bible study workspace with ZoeNote.
            </motion.p>
            <motion.div 
              className="flex gap-4 justify-center"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <Button size="lg" className="px-8">Get Started Free</Button>
              <Button size="lg" variant="outline" className="px-8">View Pricing</Button>
            </motion.div>
          </div>
        </motion.section>

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

const NavButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="group relative flex items-center gap-1 px-4 py-2 text-foreground font-medium rounded-full border border-transparent hover:border-border/60 hover:bg-background/60 transition-all duration-300"
  >
    <span>{children}</span>
    <ChevronUp className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
  </a>
);

const FeatureCard = ({ icon, title, description, index }: { icon: React.ReactNode; title: string; description: string; index: number }) => (
  <motion.div 
    className="bg-muted/20 rounded-xl p-6 border border-border/30 hover:bg-muted/40 transition-colors"
    variants={fadeInUp}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
      {icon}
    </div>
    <h3 className="font-medium mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

const AIFeatureCard = ({ icon, title, index }: { icon: React.ReactNode; title: string; index: number }) => (
  <motion.div 
    className="bg-muted/20 rounded-xl p-5 border border-border/30 flex items-center gap-3 hover:bg-muted/40 transition-colors"
    variants={fadeInUp}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      {icon}
    </div>
    <span className="font-medium text-sm">{title}</span>
  </motion.div>
);

export default Index;