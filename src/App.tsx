/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Gamepad2, 
  Trophy, 
  Users, 
  Zap, 
  ChevronRight, 
  Play,
  Flame,
  Globe,
  Twitter,
  Github,
  Twitch,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 py-4 h-20 border-b border-dark-border" : "bg-transparent py-6 h-24"}`}>
      <div className="max-w-7xl mx-auto px-10 h-full flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-2xl font-display font-black tracking-tighter uppercase text-neon-cyan leading-none">
            NEON.ZONE
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.3em] font-black">
          <a href="#" className="text-neon-cyan">Arena</a>
          <a href="#games" className="opacity-40 hover:opacity-100 transition-opacity">Tournaments</a>
          <a href="#tournaments" className="opacity-40 hover:opacity-100 transition-opacity">Leaderboard</a>
          <a href="#community" className="opacity-40 hover:opacity-100 transition-opacity">Vault</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-cyan to-blue-500"></div>
          <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Level 42</span>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark-bg border-b border-dark-border flex flex-col p-8 gap-6 md:hidden z-50"
          >
            <a href="#" className="text-2xl font-display font-black uppercase text-neon-cyan">Arena</a>
            <a href="#games" className="text-2xl font-display font-black uppercase opacity-40">Tournaments</a>
            <a href="#tournaments" className="text-2xl font-display font-black uppercase opacity-40">Leaderboard</a>
            <a href="#community" className="text-2xl font-display font-black uppercase opacity-40">Vault</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-dark-border">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#00FFCC_0%,_transparent_70%)] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-8xl md:text-[140px] lg:text-[180px] font-display font-black leading-[0.8] tracking-tighter uppercase mb-12">
            HYPER<span className="stroke-text">DRIVE</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] text-neon-cyan font-bold mb-1">Active Players</p>
              <p className="text-3xl md:text-5xl font-mono tabular-nums">1,204,911</p>
            </div>
            
            <div className="hidden md:block w-[1px] h-16 bg-dark-border"></div>

            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] text-neon-cyan font-bold mb-1">Total Prize Pool</p>
              <p className="text-3xl md:text-5xl font-mono tabular-nums">$250,000</p>
            </div>

            <button className="px-10 py-5 bg-neon-cyan text-black font-black uppercase text-sm tracking-tighter hover:bg-white transition-colors">
              Join The Rift
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute left-10 bottom-10 [writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[0.5em] opacity-30 font-mono uppercase hidden lg:block">
        Terminal_Output // Sector_07
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="flex flex-col items-center gap-2 p-6 glass-effect">
    <Icon className="w-8 h-8 text-neon-cyan mb-2" />
    <span className="text-4xl font-display font-black italic">{value}</span>
    <span className="text-xs uppercase tracking-widest text-white/40 font-bold">{label}</span>
  </div>
);

interface GameCardProps {
  title: string;
  category: string;
  img: string;
  players: string;
  key?: any;
}

const GameCard = ({ title, category, img }: GameCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group flex flex-col justify-between p-8 border border-dark-border hover:bg-dark-surface transition-all duration-300"
  >
    <div>
      <span className="text-[10px] font-bold text-neon-cyan uppercase tracking-widest leading-none">
        0{Math.floor(Math.random() * 9) + 1} / {category}
      </span>
      <h3 className="text-4xl font-display font-black uppercase tracking-tighter mt-4 leading-none group-hover:text-neon-cyan transition-colors">
        {title}
      </h3>
    </div>
    <div className="h-32 bg-dark-bg border border-dark-border mt-8 relative overflow-hidden flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-teal-900/20 group-hover:opacity-0" />
    </div>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      title: "Action",
      name: "Cyber Strike",
      img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Strategy",
      name: "Void Realm",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Racing",
      name: "Nitro Pulse",
      img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="flex flex-col lg:flex-row border-t border-dark-border">
      {features.map((f, i) => (
        <div key={i} className="flex-1 border-r border-dark-border p-12 flex flex-col justify-between group hover:bg-dark-surface transition-colors cursor-pointer">
          <div>
            <span className="text-[10px] font-bold text-neon-cyan uppercase tracking-widest">0{i+1} / {f.title}</span>
            <h3 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mt-4 leading-none group-hover:text-neon-cyan transition-colors">{f.name}</h3>
          </div>
          <div className="h-40 bg-dark-bg border border-dark-border mt-12 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
             <img src={f.img} alt={f.name} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest">Deploy_Module</span>
             </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default function App() {
  const featuredGames = [
    {
      title: "Neon Strikers",
      category: "Action / FPS",
      players: "1.2M Active",
      img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Ether Racing",
      category: "Racing / Sim",
      players: "450K Active",
      img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Void Legends",
      category: "RPG / MMO",
      players: "3.8M Active",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Chrome Tactics",
      category: "Strategy",
      players: "150K Active",
      img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Featured Games Grid Layout Change to match Design HTML */}
      <section id="games" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-dark-border">
        {featuredGames.map((game, idx) => (
          <GameCard 
            key={idx} 
            title={game.title}
            category={game.category}
            players={game.players}
            img={game.img}
          />
        ))}
        {/* Placeholder for the 4th slot if needed to keep symmetric border lines, or just extra content */}
        <div className="p-8 border border-dark-border flex flex-col justify-center">
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em]">Upcoming_Drop</span>
            <div className="mt-4 text-white/20 font-display font-black text-2xl">LOCKED</div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* CTA / Newsletter */}
      <section className="py-24 border-y border-white/5 bg-gradient-to-b from-transparent to-neon-purple/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase italic italic-small mb-8">
            READY TO <span className="text-neon-purple">EVOLVE?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12">
            The nexus doesn't wait for anyone. Secure your handle today and 
            start your journey towards the master league.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="ENTER YOUR ENCRYPTION KEY (EMAIL)"
              className="bg-white/5 border border-white/10 px-8 py-4 focus:outline-none focus:border-neon-cyan min-w-[300px] text-sm font-bold tracking-widest uppercase"
            />
            <button className="px-10 py-4 bg-neon-cyan text-black font-black uppercase italic tracking-tighter hover:bg-white transition-colors">
              Initialize Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-auto md:h-[120px] border-t border-dark-border flex flex-col md:flex-row items-center justify-between px-10 text-[10px] uppercase font-black tracking-[0.2em] text-[#444] py-8 md:py-0">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
            <span className="text-neon-cyan">Servers: Online</span>
          </div>
          <span>© 2026 NEON.ZONE STUDIOS</span>
        </div>
        
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Terminal Integrity</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
          <a href="#" className="hover:text-white transition-colors">Comm-Link</a>
        </div>
      </footer>
    </div>
  );
}

