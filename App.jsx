import { useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Search, Sparkles, Menu, X, Scissors, MapPin, CalendarDays, Camera, SlidersHorizontal, Heart, ChevronDown } from 'lucide-react';

const styles = [
  { id: 1, name: 'Poola Jada', group: 'Indian Heritage', region: 'Andhra Pradesh', gender: 'Women', length: 'Long', type: 'Traditional', image: 'photo-1515886657613-9f3515b0c78f' },
  { id: 2, name: 'Telangana Pelli Jada', group: 'Bridal & Festive', region: 'Telangana', gender: 'Women', length: 'Long', type: 'Traditional', image: 'photo-1524504388940-b1c1722653e1' },
  { id: 3, name: 'Kerala Jasmine Bun', group: 'Indian Heritage', region: 'Kerala', gender: 'Women', length: 'Medium', type: 'Traditional', image: 'photo-1534528741775-53994a69daeb' },
  { id: 4, name: 'Bengali Khopa', group: 'Bridal & Festive', region: 'West Bengal', gender: 'Women', length: 'Medium', type: 'Traditional', image: 'photo-1529139574466-a303027c1d8b' },
  { id: 5, name: 'Punjabi Paranda Braid', group: 'Indian Heritage', region: 'Punjab', gender: 'Women', length: 'Long', type: 'Traditional', image: 'photo-1508214751196-bcfd4ca60f91' },
  { id: 6, name: 'Mughal-Inspired Waves', group: 'Indian Heritage', region: 'North India', gender: 'Women', length: 'Long', type: 'Historical-inspired', image: 'photo-1524250502761-1ac6f2e30d43' },
  { id: 7, name: 'Butterfly Layers', group: 'Modern Women', region: 'Contemporary', gender: 'Women', length: 'Long', type: 'Modern', image: 'photo-1524504388940-b1c1722653e1' },
  { id: 8, name: 'Soft Layered Bob', group: 'Modern Women', region: 'Contemporary', gender: 'Women', length: 'Short', type: 'Modern', image: 'photo-1534528741775-53994a69daeb' },
  { id: 9, name: 'Wolf Cut', group: 'Modern Women', region: 'Contemporary', gender: 'Women', length: 'Medium', type: 'Modern', image: 'photo-1529139574466-a303027c1d8b' },
  { id: 10, name: 'Curtain Bangs', group: 'Modern Women', region: 'Contemporary', gender: 'Women', length: 'Medium', type: 'Modern', image: 'photo-1508214751196-bcfd4ca60f91' },
  { id: 11, name: 'Low Taper Fade', group: 'Modern Men', region: 'Contemporary', gender: 'Men', length: 'Short', type: 'Modern', image: 'photo-1500648767791-00dcc994a43e' },
  { id: 12, name: 'Textured Quiff', group: 'Modern Men', region: 'Contemporary', gender: 'Men', length: 'Short', type: 'Modern', image: 'photo-1507003211169-0a1dd7228f2d' },
  { id: 13, name: 'Modern Crew Cut', group: 'Modern Men', region: 'Contemporary', gender: 'Men', length: 'Short', type: 'Modern', image: 'photo-1506794778202-cad84cf45f1d' },
  { id: 14, name: 'Curly Crop', group: 'Modern Men', region: 'Contemporary', gender: 'Men', length: 'Short', type: 'Modern', image: 'photo-1500648767791-00dcc994a43e' },
  { id: 15, name: 'Odissi Dance Bun', group: 'Bridal & Festive', region: 'Odisha', gender: 'Women', length: 'Medium', type: 'Traditional', image: 'photo-1524250502761-1ac6f2e30d43' },
  { id: 16, name: 'Maharashtrian Ambada', group: 'Indian Heritage', region: 'Maharashtra', gender: 'Women', length: 'Medium', type: 'Traditional', image: 'photo-1524504388940-b1c1722653e1' },
];

const filters = ['All styles', 'Indian Heritage', 'Bridal & Festive', 'Modern Women', 'Modern Men'];
const imageUrl = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

function App() {
  const [activeFilter, setActiveFilter] = useState('All styles');
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const reduceMotion = useReducedMotion();

  const visibleStyles = useMemo(() => styles.filter((style) => {
    const matchesCategory = activeFilter === 'All styles' || style.group === activeFilter;
    const matchesGender = gender === 'All' || style.gender === gender;
    const matchesSearch = `${style.name} ${style.region} ${style.type}`.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesGender && matchesSearch;
  }), [activeFilter, gender, search]);

  const fadeUp = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] } } };

  const toggleSave = (id) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const openPreview = (style = null) => { setSelectedStyle(style); setShowPreview(true); };

  return <div className="site-shell">
    <div className="announcement"><span className="announcement-dot" /> A new way to find your signature look <span className="announcement-link" onClick={() => document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })}>Explore styles <ArrowUpRight size={13}/></span></div>
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#top" aria-label="Teeru home"><span className="brand-mark">t.</span><span>teeru<span className="brand-period">.</span></span></a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#discover" onClick={() => setMenuOpen(false)}>Explore styles</a><a href="#heritage" onClick={() => setMenuOpen(false)}>Indian heritage</a><a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
        </div>
        <div className="nav-actions"><button className="nav-ghost" onClick={() => openPreview()}>Try virtual look</button><button className="nav-cta" onClick={() => document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })}>Find your style <ArrowUpRight size={15}/></button></div>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </nav>
    </header>

    <main id="top">
      <section className="hero container">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial="hidden" animate="show" variants={fadeUp}><span className="eyebrow-line"/> THE ART OF YOUR NEXT LOOK</motion.div>
          <motion.h1 initial="hidden" animate="show" variants={{...fadeUp, show:{...fadeUp.show, transition:{...fadeUp.show.transition, delay:.12}}}}>Your hair.<br/><em>Your</em> <span className="serif-accent">story.</span></motion.h1>
          <motion.p className="hero-description" initial="hidden" animate="show" variants={{...fadeUp, show:{...fadeUp.show, transition:{...fadeUp.show.transition, delay:.24}}}}>From timeless Indian heritage to the cut you saved last night. Discover the look that feels like you.</motion.p>
          <motion.div className="hero-buttons" initial="hidden" animate="show" variants={{...fadeUp, show:{...fadeUp.show, transition:{...fadeUp.show.transition, delay:.34}}}}><button className="button-primary" onClick={() => document.getElementById('discover')?.scrollIntoView({behavior:'smooth'})}>Discover hairstyles <ArrowRight size={17}/></button><button className="button-text" onClick={() => openPreview()}><span className="play-icon"><Sparkles size={15}/></span> Preview your look</button></motion.div>
          <motion.div className="hero-note" initial="hidden" animate="show" variants={fadeUp}><div className="avatar-stack"><span>✦</span><span>✦</span><span>✦</span></div><div><strong>Rooted in culture. Made for you.</strong><small>Styles across generations and regions</small></div></motion.div>
        </div>
        <motion.div className="hero-art" initial={{opacity:0, scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:1.15,ease:'easeOut'}}>
          <div className="hero-image-frame"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=90" alt="Portrait with softly styled hair"/><div className="image-shade"/></div>
          <motion.div className="floating-card card-top" animate={reduceMotion ? {} : {y:[0,-8,0]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut'}}><span className="mini-label">THE EDIT</span><strong>Find your<br/>signature style.</strong><ArrowUpRight size={18}/></motion.div>
          <motion.div className="floating-card card-bottom" animate={reduceMotion ? {} : {y:[0,8,0]}} transition={{duration:8,repeat:Infinity,ease:'easeInOut'}}><span className="sparkle-orb"><Sparkles size={16}/></span><div><strong>Heritage meets now</strong><small>100+ looks to explore</small></div></motion.div>
          <div className="hero-vertical">A STYLE FOR EVERY STORY — TEERU 2026</div><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
        </motion.div>
        <div className="hero-bottom"><span>01 / 04</span><span className="hero-bottom-line"/><span>SCROLL TO DISCOVER <ArrowDown size={13}/></span></div>
      </section>

      <section className="ticker" aria-label="Teeru categories"><div className="ticker-track">{['INDIAN HERITAGE','MODERN CUTS','BRIDAL DETAILS','YOUR NEXT LOOK','INDIAN HERITAGE','MODERN CUTS','BRIDAL DETAILS','YOUR NEXT LOOK'].map((item,i)=><span key={i}>{item}<i>✳</i></span>)}</div></section>

      <section className="section discover-section container" id="discover">
        <motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{once:true, amount:.25}} variants={fadeUp}><div><div className="eyebrow"><span className="eyebrow-line"/> THE STYLE LIBRARY</div><h2>Find the look<br/><em>that feels</em> <span className="serif-accent">right.</span></h2></div><p>A considered collection of cuts, textures and traditions. Explore by mood, region or the style you have in mind.</p></motion.div>
        <div className="filter-bar">
          <div className="filter-tabs">{filters.map((filter) => <button key={filter} className={activeFilter===filter?'active':''} onClick={()=>setActiveFilter(filter)}>{filter}</button>)}</div>
          <div className="filter-tools"><label className="search-box"><Search size={16}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search styles or regions" /></label><select value={gender} onChange={e=>setGender(e.target.value)} aria-label="Filter by gender"><option value="All">All looks</option><option value="Women">Women</option><option value="Men">Men</option></select></div>
        </div>
        <div className="results-line"><span>{visibleStyles.length.toString().padStart(2,'0')} STYLES TO EXPLORE</span><span><SlidersHorizontal size={13}/> Curated for inspiration</span></div>
        <motion.div layout className="style-grid">
          <AnimatePresence mode="popLayout">{visibleStyles.map((style,index)=><motion.article layout key={style.id} className="style-card" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.97}} transition={{duration:.45,delay:Math.min(index*.035,.2)}}>
            <button className="save-button" onClick={()=>toggleSave(style.id)} aria-label={saved.includes(style.id)?'Remove saved style':'Save style'}><Heart size={16} fill={saved.includes(style.id)?'currentColor':'none'}/></button>
            <button className="style-image" onClick={()=>openPreview(style)} aria-label={`Preview ${style.name}`}><img src={imageUrl(style.image)} alt={`${style.name} hairstyle inspiration`} loading="lazy"/><span className="image-hover"><Sparkles size={15}/> Preview this look</span></button>
            <div className="style-info"><div><span className="style-region">{style.region} · {style.type}</span><h3>{style.name}</h3></div><button className="round-arrow" onClick={()=>openPreview(style)} aria-label={`Open ${style.name}`}><ArrowUpRight size={17}/></button></div>
          </motion.article>)}</AnimatePresence>
        </motion.div>
        {visibleStyles.length===0 && <div className="empty-state"><Search size={25}/><h3>No styles found</h3><p>Try a different name, region or category.</p><button className="button-text" onClick={()=>{setSearch('');setActiveFilter('All styles');setGender('All')}}>Clear filters <ArrowRight size={15}/></button></div>}
        <div className="catalogue-note"><span className="note-star">✳</span><p>This is a starter catalogue. Add verified regional references and your full 104-style collection in <code>src/App.jsx</code>.</p></div>
      </section>

      <section className="heritage-section" id="heritage"><div className="heritage-inner container"><div className="heritage-image"><img src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1100&q=85" alt="Traditional Indian-inspired beauty portrait"/><div className="heritage-image-caption">ROOTS THAT NEVER FADE <span>✳</span></div></div><div className="heritage-copy"><div className="eyebrow light"><span className="eyebrow-line"/> THE INDIAN EDITION</div><h2>Many roots.<br/><em>Endless</em> <span className="serif-accent">expressions.</span></h2><p>From the flower-wrapped Poola Jada of the South to the vibrant Paranda braid of Punjab, Indian hair traditions carry stories worth celebrating.</p><div className="region-list"><span>ANDHRA PRADESH</span><span>TELANGANA</span><span>PUNJAB</span><span>RAJASTHAN</span><span>KERALA</span><span>WEST BENGAL</span><span>ODISHA</span><span>MAHARASHTRA</span></div><button className="button-light" onClick={()=>{setActiveFilter('Indian Heritage');document.getElementById('discover')?.scrollIntoView({behavior:'smooth'})}}>Explore Indian heritage <ArrowUpRight size={16}/></button></div></div></section>

      <section className="how-section container" id="how"><div className="eyebrow"><span className="eyebrow-line"/> YOUR STYLE JOURNEY</div><div className="how-heading"><h2>A little inspiration.<br/><em>A whole new</em> <span className="serif-accent">you.</span></h2><p>Take the guesswork out of your next salon visit. Start with a style, make it yours, then find a professional.</p></div><div className="steps-grid"><div className="step"><span>01</span><div className="step-icon"><Search/></div><h3>Explore</h3><p>Discover cuts and styles from Indian heritage to today's trends.</p></div><div className="step"><span>02</span><div className="step-icon"><Camera/></div><h3>Visualise</h3><p>See how a new look could work for you with a virtual preview.</p></div><div className="step"><span>03</span><div className="step-icon"><CalendarDays/></div><h3>Book</h3><p>Choose a salon and a time that fits your schedule.</p></div></div></section>

      <section className="final-cta container"><div className="cta-decoration">✳</div><div className="eyebrow light"><span className="eyebrow-line"/> YOUR NEXT CHAPTER STARTS HERE</div><h2>Ready for a <em>new</em><br/>point of view?</h2><p>Your next look is closer than you think.</p><button className="button-light" onClick={()=>openPreview()}>Start with your look <ArrowUpRight size={16}/></button></section>
    </main>

    <footer className="footer"><div className="container footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark">t.</span><span>teeru<span className="brand-period">.</span></span></a><p>Your look. Your style. Your Teeru.</p><div className="footer-links"><a href="#discover">Explore</a><a href="#heritage">Indian heritage</a><a href="#how">How it works</a></div></div><div className="container footer-bottom"><span>© 2026 TEERU. ALL RIGHTS RESERVED.</span><span>MADE FOR EVERY VERSION OF YOU.</span></div></footer>

    <AnimatePresence>{showPreview && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setShowPreview(false)}><motion.div className="preview-modal" initial={{opacity:0,y:25,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:15}} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setShowPreview(false)} aria-label="Close"><X/></button><div className="modal-icon"><Sparkles/></div><div className="eyebrow"><span className="eyebrow-line"/> VIRTUAL STYLE PREVIEW</div><h2>{selectedStyle ? `Try ${selectedStyle.name}.` : 'See a new side of you.'}</h2><p>Upload a clear front-facing photo to prepare for a virtual hairstyle preview. AI transformation is not connected in this starter version.</p><label className="upload-zone"><Camera size={22}/><strong>Choose your photo</strong><span>JPG or PNG · Use a well-lit, front-facing photo</span><input type="file" accept="image/png,image/jpeg,image/webp" onChange={e=>{if(e.target.files?.[0]) alert('Photo selected. Connect your AI image API to generate the hairstyle preview.')}}/></label><button className="button-primary full-button" onClick={()=>setShowPreview(false)}>Got it <ArrowRight size={16}/></button><small className="modal-footnote">Your photo is not uploaded or stored by this demo.</small></motion.div></motion.div>}</AnimatePresence>
  </div>;
}

export default App;
