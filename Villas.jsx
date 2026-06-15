import { Link } from 'react-router-dom';
import { Waves, Sailboat, ConciergeBell, TreePine, Flame, Bath, Box } from 'lucide-react';

export default function Villas() {
  return (
    <div className="bg-background min-h-screen pt-20">
      <header className="pt-24 pb-20 px-margin-desktop max-w-container-max mx-auto text-center">
        <h1 className="font-display-lg text-display-lg text-primary mb-6 hidden md:block">Sanctuaries of Serenity</h1>
        <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-6 md:hidden">Sanctuaries of Serenity</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Discover our collection of architecturally distinct villas, each designed to harmonize intimately with the untamed beauty of the island while providing peerless comfort.</p>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-32 pb-32">
        {/* Overwater Sanctuary */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative">
          <div className="md:col-span-8 overflow-hidden rounded-lg smooth-scale environmental-shadow relative h-[600px]">
            <img 
              alt="Overwater Villa" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgEf2RhfvQfqbDgYXcCtQ2uf65oxfByEmq8Vwt4kLJJ_PaDk9bNt4MrPJGcOJJGZLuu-mtimhhBm63Kp1AAsydyo2wYFjTtT0WYatk888Kkykd2DupKlYqLatjkEA4fzwnS-3NkRS3x8ySk3cpTHWsl3gKU6LBrfJnfqlq3C8RXFzLCfeDMLTbGB15fKIGad56QE02NYcGWBY1gACngV18vLgRJSYElcyCC3m-zuwDSMaum4f55bYTnLxv1ybaF3mAVnwWSnm2XTrx"
            />
          </div>
          
          <div className="md:col-span-5 md:-ml-24 z-10 glass-panel-solid p-12 rounded-lg border border-outline-variant/30 environmental-shadow">
            <span className="font-label-sm text-label-sm text-tertiary-container tracking-widest uppercase mb-4 block">The Signature Collection</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Overwater Sanctuary</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">Suspended above the crystalline lagoon, these sanctuaries offer an uninterrupted dialogue with the ocean. Featuring glass floors, a private infinity pool, and direct access to the vibrant house reef.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4 text-on-surface-variant font-body-md text-body-md">
                <Waves className="text-primary font-light" />
                Private Infinity Pool
              </li>
              <li className="flex items-center gap-4 text-on-surface-variant font-body-md text-body-md">
                <Sailboat className="text-primary font-light" />
                Direct Lagoon Access
              </li>
              <li className="flex items-center gap-4 text-on-surface-variant font-body-md text-body-md">
                <ConciergeBell className="text-primary font-light" />
                24/7 Dedicated Butler
              </li>
            </ul>
            
            <div className="flex gap-4">
              <Link to={`/book?villa=overwater`} className="bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded-DEFAULT hover:scale-105 transition-transform duration-300">Reserve</Link>
              <button className="glass-panel text-primary font-label-sm text-label-sm px-8 py-4 rounded-DEFAULT gold-border hover:bg-surface-container-high transition-colors duration-300 flex items-center gap-2">
                <Box size={18} />
                3D Plan
              </button>
            </div>
          </div>
        </section>

        {/* Jungle Pavilion */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative">
          <div className="md:col-span-5 md:col-start-2 z-10 glass-panel-solid p-12 rounded-lg border border-outline-variant/30 environmental-shadow md:-mr-24 order-2 md:order-1">
            <span className="font-label-sm text-label-sm text-tertiary-container tracking-widest uppercase mb-4 block">The Canopy Collection</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Jungle Pavilion</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">Concealed within the ancient palm canopy, the Jungle Pavilion is a masterclass in biophilic design. Open-air living spaces blur the boundaries between interior comfort and the wild environment.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4 text-on-surface-variant font-body-md text-body-md">
                <TreePine className="text-primary font-light" />
                Total Seclusion
              </li>
              <li className="flex items-center gap-4 text-on-surface-variant font-body-md text-body-md">
                <Flame className="text-primary font-light" />
                Outdoor Living Room
              </li>
              <li className="flex items-center gap-4 text-on-surface-variant font-body-md text-body-md">
                <Bath className="text-primary font-light" />
                Rainforest Shower
              </li>
            </ul>
            
            <div className="flex gap-4">
              <Link to={`/book?villa=jungle`} className="bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded-DEFAULT hover:scale-105 transition-transform duration-300">Reserve</Link>
              <button className="glass-panel text-primary font-label-sm text-label-sm px-8 py-4 rounded-DEFAULT gold-border hover:bg-surface-container-high transition-colors duration-300 flex items-center gap-2">
                <Box size={18} />
                3D Plan
              </button>
            </div>
          </div>
          
          <div className="md:col-span-8 overflow-hidden rounded-lg smooth-scale environmental-shadow relative h-[600px] order-1 md:order-2">
            <img 
              alt="Jungle Villa" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxqVGLYVskRWdgNlbQAY1E6vF06R6JZAQ-5x78dnWV3QejteUe-j50OMWi0DadkYSm2KbZUUdZzoOWbMy5kdu9fuH_y3JpM8OrS3dj-jgtCrgfUxlc0Bly9vuOqVAHa2NWZUn9-7aQk1VAUyK2TRBFBHvlFeR0JOowUfQqOOYInwehjhkGaeZNuwucQ3OPOk23_-un2nMTih1OdQFGA9fpg0zvYTbNnLmjrts3IGlX5lrnRH21nz18EhSE3Zl-cVqt-g5IZYEaaik-"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
