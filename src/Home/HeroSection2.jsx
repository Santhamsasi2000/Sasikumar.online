
const HeroSection2 = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/Home/HeroCTA/hero-cta.jpg" 
          alt="Modern web development workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              👋 Available for new projects
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Sasikumar</span>
            <br />
            Web Developer &{' '}
            <span className="gradient-text">SEO Specialist</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            I create fast, modern, and SEO-friendly websites to help businesses grow. 
            Specializing in custom solutions with React, Tailwind CSS, and full-stack development.
          </p>

          {/* Statistics */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">8+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">100% Custom Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">SEO Optimized</span>
            </div>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4">
            <button variant="hero" size="lg" className="group">
              Hire Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button variant="outline-hero" size="lg" className="group">
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              View My Work
            </button>
          </div> */}

          {/* Tech Stack */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Built with modern technologies:</p>
            <div className="flex flex-wrap gap-3">
              {['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;