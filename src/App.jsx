import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Search, Sparkles, Menu, X, Scissors,
  MapPin, Clock3, Star, ChevronDown, Instagram, Play, SlidersHorizontal
} from "lucide-react";

const categories = ["All styles", "Indian heritage", "Regional looks", "Bridal", "Modern women", "Modern men"];

const styles = [
  { id: "IND-001", name: "Poola Jada", region: "Andhra Pradesh", category: "Indian heritage", tag: "Traditional", length: "Long", description: "A statement bridal braid finished with jasmine and traditional ornaments.", image: "https://images.unsplash.com/photo-151969-c7c5e3a7e2e2?auto=format&fit=crop&w=900&q=85" },
  { id: "IND-002", name: "Telangana Pelli Jada", region: "Telangana", category: "Bridal", tag: "Bridal edit", length: "Long", description: "A richly detailed wedding braid with floral accents and heirloom-inspired styling.", image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=85" },
  { id: "IND-003", name: "Bengali Khopa", region: "West Bengal", category: "Regional looks", tag: "Heritage", length: "Medium", description: "A graceful low bun with a timeless, softly structured silhouette.", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85" },
  { id: "IND-004", name: "Punjabi Paranda Braid", region: "Punjab", category: "Regional looks", tag: "Festive", length: "Long", description: "A bold braid with colourful tassel-inspired detailing.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85" },
  { id: "MOD-001", name: "Butterfly Layers", region: "Contemporary", category: "Modern women", tag: "Trending", length: "Long", description: "Airy, face-framing layers that create movement and volume.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85" },
  { id: "MOD-002", name: "Soft Layered Bob", region: "Contemporary", category: "Modern women", tag: "Minimal", length: "Short", description: "A polished bob with soft movement and an effortless finish.", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85" },
  { id: "MOD-003", name: "Textured Crop", region: "Contemporary", category: "Modern men", tag: "Clean cut", length: "Short", description: "A neat, textured shape with a modern low-maintenance profile.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85" },
  { id: "MOD-004", name: "Low Taper Fade", region: "Contemporary", category: "Modern men", tag: "Popular", length: "Short", description: "A subtle taper that keeps the finish sharp without looking severe.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85" },
  { id: "IND-005", name: "Kerala Jasmine Bun", region: "Kerala", category: "Indian heritage", tag: "Classic", length: "Medium", description: "A traditional bun styled with a delicate jasmine garland.", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85" },
  { id: "IND-006", name: "Odissi Dance Bun", region: "Odisha", category: "Regional looks", tag: "Dance", length: "Medium", description: "A performance-ready bun inspired by classical Odissi styling.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85" },
  { id: "IND-007", name: "Maharashtrian Ambada", region: "Maharashtra", category: "Bridal", tag: "Traditional", length: "Medium", description: "A sculpted bun with a traditional, ornament-ready finish.", image: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?auto=format&fit=crop&w=900&q=85" },
  { id: "MOD-005", name: "Modern Wolf Cut", region: "Contemporary", category: "Modern women", tag: "Editorial", length: "Medium", description: "Shaggy layers, natural texture and a confident silhouette.", image: "https://images.unsplash.com/photo-1524503033411-f7a2fe8c6f7a?auto=format&fit=crop&w=900&q=85" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } }
};

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Discover", "#discover"], ["Indian styles", "#heritage"], ["How it works", "#how"], ["For salons", "#salons"]];
  return <header className="site-header">
    <a className="brand" href="#" aria-label="Teeru home"><span className="brand-mark">t.</span><span>teeru<span className="brand-dot">.</span></span></a>
    <nav className={open ? "nav nav-open" : "nav"}>
      {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#try" onClick={() => setOpen(false)}>Try your look <ArrowUpRight size={15}/></a>
    </nav>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
  </header>;
}

function StyleCard({ item, index }) {
  return <motion.article className="style-card" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.05 }}>
    <div className="style-image-wrap">
      <img src={item.image} alt={`${item.name} hairstyle inspiration`} loading="lazy" />
      <span className="style-tag">{item.tag}</span>
      <button className="save-style" aria-label={`Preview ${item.name}`} onClick={() => document.getElementById("try")?.scrollIntoView({ behavior: "smooth" })}><ArrowUpRight size={18}/></button>
    </div>
    <div className="style-info">
      <div><p className="eyebrow">{item.region} · {item.length} hair</p><h3>{item.name}</h3></div>
      <p className="style-description">{item.description}</p>
    </div>
  </motion.article>;
}

function App() {
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All styles");
  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const filtered = useMemo(() => styles.filter(item => {
    const categoryMatch = activeCategory === "All styles" || item.category === activeCategory;
    const searchMatch = `${item.name} ${item.region} ${item.category}`.toLowerCase().includes(query.toLowerCase());
    return categoryMatch && searchMatch;
  }), [activeCategory, query]);

  return <div className="app-shell">
    <Header />
    <main>
      <section className="hero">
        <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <div className="hero-grid">
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={fadeUp}>
            <div className="eyebrow hero-kicker"><span className="live-dot"/> THE NEW WAY TO FIND YOUR LOOK</div>
            <h1>Your hair.<br/><em>Your identity.</em><br/>Your Teeru.</h1>
            <p className="hero-subtitle">Explore looks from India's rich hair traditions to today's freshest cuts. Find the one that feels like you — before you book the chair.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#discover">Explore hairstyles <ArrowRight size={17}/></a>
              <a className="button button-quiet" href="#how"><span className="play-icon"><Play size={12} fill="currentColor"/></span> How it works</a>
            </div>
            <div className="hero-proof"><div className="proof-avatars"><span>R</span><span>A</span><span>S</span></div><p><strong>One destination.</strong><br/>A world of hairstyles.</p></div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, y: 22 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.25, ease: "easeOut", delay: .15 }}>
            <div className="hero-photo-frame"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=90" alt="Editorial portrait with modern hairstyle"/></div>
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
            <motion.div className="floating-note note-top" animate={reduceMotion ? {} : { y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}><Sparkles size={15}/><span>Find your signature</span></motion.div>
            <motion.div className="floating-note note-bottom" animate={reduceMotion ? {} : { y: [0, 7, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}><span className="note-number">01</span><span>Tradition meets now</span></motion.div>
            <div className="visual-index">LOOKBOOK / 001</div>
          </motion.div>
        </div>
        <div className="hero-bottom"><span>DISCOVER YOUR NEXT LOOK</span><span>SCROLL TO EXPLORE <span className="scroll-line"/></span></div>
      </section>

      <section className="intro-strip" id="heritage">
        <p>FROM THE ROOTS OF INDIA</p><h2>Many cultures. <span>Infinite ways</span> to wear your hair.</h2>
        <p className="intro-note">A growing collection inspired by regional artistry, timeless traditions and modern self-expression.</p>
      </section>

      <section className="discover-section section-pad" id="discover">
        <div className="section-heading">
          <div><p className="eyebrow">THE TEERU LOOKBOOK</p><h2>Find the look<br/><em>that speaks you.</em></h2></div>
          <p className="section-description">Explore the collection by style, region or mood. Your next look might be a classic you know — or a tradition you haven't discovered yet.</p>
        </div>
        <div className="catalog-toolbar">
          <div className="category-tabs">{categories.map(category => <button key={category} className={activeCategory === category ? "category-tab active" : "category-tab"} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
          <label className="search-box"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search styles or regions..." /></label>
        </div>
        <div className="style-grid">
          {filtered.map((item, index) => <StyleCard key={item.id} item={item} index={index}/>)}
        </div>
        {filtered.length === 0 && <div className="empty-state"><SlidersHorizontal/><h3>No styles found</h3><p>Try another search or select a different category.</p></div>}
        <div className="catalog-foot"><span>SHOWING {filtered.length.toString().padStart(2, "0")} OF {styles.length.toString().padStart(2, "0")} FEATURED LOOKS</span><span>MORE STYLES COMING SOON</span></div>
      </section>

      <section className="heritage-feature">
        <div className="heritage-image"><img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85" alt="Fashion portrait"/></div>
        <div className="heritage-copy"><p className="eyebrow">ROOTED IN CULTURE. MADE FOR YOU.</p><h2>India's hair stories<br/>deserve the <em>spotlight.</em></h2><p>From the intricate Poola Jada of Andhra Pradesh to the elegance of a Bengali Khopa, Teeru brings regional inspiration into one discoverable space.</p><a href="#discover" className="text-link">Explore Indian heritage <ArrowUpRight size={17}/></a></div>
      </section>

      <section className="how-section section-pad" id="how">
        <div className="section-heading centered"><div><p className="eyebrow">A BETTER WAY TO DECIDE</p><h2>Your next look,<br/><em>without the guesswork.</em></h2></div><p className="section-description">A simple journey from inspiration to salon chair.</p></div>
        <div className="steps-grid">
          {[["01","Discover","Browse hairstyles across regions, lengths and styles."],["02","Preview","Try a virtual hairstyle preview before making the change."],["03","Book","Find a salon and choose a slot that works for you."]].map(([n,title,desc],i)=><motion.div className="step-card" key={n} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i*.12 }}><span className="step-number">{n}</span><div className="step-icon">{i===0?<Search/>:i===1?<Sparkles/>:<Clock3/>}</div><h3>{title}</h3><p>{desc}</p></motion.div>)}
        </div>
      </section>

      <section className="try-section" id="try">
        <div className="try-inner"><div><p className="eyebrow">THE LOOK STARTS HERE</p><h2>Ready to meet<br/><em>your next look?</em></h2><p>Our virtual preview and salon booking experience is being developed. Join the early-access list to hear when it opens.</p></div>
          <form className="waitlist-form" onSubmit={e => { e.preventDefault(); alert("Thanks for your interest. Connect this form to your email service to collect sign-ups."); }}>
            <label htmlFor="email">Your email address</label><div className="email-row"><input id="email" type="email" placeholder="you@example.com" required/><button type="submit" aria-label="Join early access"><ArrowRight/></button></div><small>No spam. Just a note when Teeru is ready.</small>
          </form>
        </div>
      </section>

      <section className="salon-section section-pad" id="salons"><div className="salon-card"><div><p className="eyebrow">FOR SALON PARTNERS</p><h2>Good work deserves<br/><em>to be discovered.</em></h2><p>Bring your salon online, showcase your work and connect with people looking for their next style.</p><a className="button button-dark" href="mailto:hello@teeru.in?subject=Salon%20Partnership">Partner with Teeru <ArrowUpRight size={17}/></a></div><div className="salon-art"><Scissors size={82} strokeWidth={1}/><span>YOUR CRAFT.<br/>MORE VISIBILITY.</span></div></div></section>
    </main>
    <footer className="footer"><a className="brand" href="#"><span className="brand-mark">t.</span><span>teeru<span className="brand-dot">.</span></span></a><p>Made for every version of you.</p><div className="footer-links"><a href="#discover">Explore</a><a href="#salons">For salons</a><a href="mailto:hello@teeru.in">Contact</a><a href="#"><Instagram size={16}/></a></div><span className="copyright">© 2026 TEERU. ALL RIGHTS RESERVED.</span></footer>
  </div>;
}

export default App;