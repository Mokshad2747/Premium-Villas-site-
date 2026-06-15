import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThreeScene from '../components/ThreeScene';
import { Calendar, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // Scroll reveal
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    
    // Parallax effect
    const parallaxBg = document.querySelector('.parallax-bg');
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scroll * 0.3}px) scale(1.05)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Cinematic aerial view of Aethelis Private Island at sunset" 
            className="parallax-bg w-full h-[110%] object-cover brightness-[0.85] scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJjzh4-83X9lw72acZJduuqGNNxN2U9RCjOF_stjfUul0BhA0HtwDn7C23o74a9yo3_iI-DVS9kb8xm_XErbzAeUYia5zV_SAf_uL5o6dTku3J5GemYV-16ginI2XCl4QLstmfaqxQcq0B67pvO5fPjKGLR8SoUsW7AfjYHApNS062wv8wthkY_P52sRHSovo1T0ctjc2TJQHiPlx6Jsd3VicWl9ILVhknDnYFKcchky6bg7Vby9gFMK0u70v6M6ewp8nanEqCFs24"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
        </div>
        
        <ThreeScene />
        
        <div className="relative z-10 flex flex-col items-center text-center px-margin-mobile md:px-margin-desktop">
          <span className="font-label-sm text-label-sm text-white/80 uppercase tracking-[0.4em] mb-6 reveal-on-scroll">A Private Sanctuary</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-white mb-8 max-w-5xl mx-auto leading-[1.1] hero-text-shadow reveal-on-scroll delay-100">
            The Art of <br/><span className="italic font-normal">Meaningful</span> Escape
          </h1>
          <p className="font-body-lg text-white/90 max-w-2xl mx-auto mb-16 reveal-on-scroll delay-200">
            A sanctuary of eco-luxury tucked away in the heart of the tropics, where raw natural beauty meets uncompromising elegance.
          </p>
          
          <div className="glass-panel p-2 rounded-full flex items-center gap-2 shadow-2xl reveal-on-scroll delay-300 hidden md:flex border-white/30">
            <div className="flex items-center gap-6 px-10 py-4 border-r border-white/20 hover:bg-white/10 transition-colors cursor-pointer rounded-l-full group">
              <Calendar className="text-white group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span className="block font-label-sm text-[10px] text-white/60 uppercase tracking-widest">Arrival - Departure</span>
                <span className="block font-body-md text-white font-medium">Select Dates</span>
              </div>
            </div>
            <div className="flex items-center gap-6 px-10 py-4 border-r border-white/20 hover:bg-white/10 transition-colors cursor-pointer group">
              <Users className="text-white group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span className="block font-label-sm text-[10px] text-white/60 uppercase tracking-widest">Occupancy</span>
                <span className="block font-body-md text-white font-medium">2 Guests</span>
              </div>
            </div>
            <Link to="/book" className="magnetic-btn bg-white text-primary px-12 py-5 rounded-full font-label-sm text-label-sm hover:scale-105 transition-all duration-500 ml-2 shadow-xl uppercase tracking-widest font-bold">
              Check Availability
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[160px] px-margin-mobile md:px-margin-desktop bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 relative z-10 reveal-on-scroll">
            <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-[0.3em] block mb-6">The Sanctuary</span>
            <h2 className="font-headline-lg text-primary mb-8 leading-tight">A Return to Untamed Elegance</h2>
            <div className="space-y-6">
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Born from a deep reverence for the natural world, Aethelis was designed to exist in perfect harmony with its tropical surroundings. Every structural element, every crafted experience, is an ode to the island's pristine beauty.
              </p>
              <p className="font-body-md text-on-surface-variant/80">
                Our philosophy is simple: luxury should be felt, not just seen. From the tactile warmth of reclaimed timber to the cooling touch of local stone, your environment is a living extension of the landscape.
              </p>
            </div>
            <div className="mt-12">
              <Link to="/villas" className="group inline-flex items-center gap-4 font-label-sm text-label-sm text-primary uppercase tracking-widest border-b border-tertiary-fixed-dim pb-2 hover:border-primary transition-all">
                Explore our philosophy 
                <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 relative mt-16 lg:mt-0 reveal-on-scroll delay-200">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-DEFAULT shadow-2xl img-container">
              <img 
                alt="Detail of luxury infinity pool" 
                className="w-full h-full object-cover img-scale-hover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFEPVmZiQfam5xaoL6IzIjCF-h5UtvN4d-F8AalFA4yUcb-aLoeoF6VlaxeIMwBoRxZ5SCEj_ZHsOnNUzdpOB-70YM8Ul9TDyTyvguo8w8hjNqPJeMZlT65DadKWXa1xnTTrCaeXBQT1yZj1XDEiaf3uAWFbR0WZCKbDrC5QYoW_Oz65o3rivyH0RGW_ykiSMOcZFyPHlZJtLVxYDGhN1Q_7q0MVgpO8Y3Nf2Ais3jmgrCUD23blNmN2XSZrHV_kp78BURcHQgSwll"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 md:-left-16 glass-panel-solid p-8 max-w-[280px] shadow-2xl hidden md:block">
              <p className="font-body-md italic text-primary leading-relaxed">
                "The boundary between architecture and nature dissolves into the horizon."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[160px] px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="reveal-on-scroll group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 img-container">
                <img alt="Jungle experience" className="w-full h-full object-cover img-scale-hover grayscale hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGmpNk8FaiZewY7qPW1dt4BOCLSAX-giRB4hmYz06oYv7aRsVbYgyycE-O5evAV_6T3xvz3JuMrZ2TNtz4XkivQHQdKAqeg9LR4t5ePedyoGhYiLsFVDx45oeNyStk8WSG4IDZtqfAe7OBOX3S9o0SJJ4MibMjGgscQFKriofFFpToxJmkql65I0LsfsdHnHYo1_2Y3PApSr4hUaGgjiSfrJIEigCp-VYmr8_ifebL2LUWVfp1v30OCVNoK4LnZbuVxMuklOfb0pul"/>
              </div>
              <h3 className="font-headline-md text-primary mb-2">Wild At Heart</h3>
              <p className="font-body-md text-on-surface-variant/70">Guided jungle treks and biodiversity discovery.</p>
            </div>
            <div className="reveal-on-scroll delay-100 group cursor-pointer md:translate-y-12">
              <div className="aspect-[3/4] overflow-hidden mb-6 img-container">
                <img alt="Wellness experience" className="w-full h-full object-cover img-scale-hover grayscale hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOecsF8wrA_HQ3VVR5a6PbuvPr31hz0CnzbhvhXkPJukc3efrBeNgOHEXtemm9VG87QqPy4xszoJY-aQEllr7FcHcjSia1j0c7TfqPmlRRGlCHoBq52Fl0qaJfzDV0TIKCFMSf_y_sINsIRLl_K7gy7noTgfIIlwt23_OKA_1dqyBJIcgAt7XuB8nQUyONkhI_AOYUUd9-y7c9P4iYflMzfukPncOZfV-w1HADaxyJqQeUPuKUQO_VcTCk9auuDz-8I8q089mlqh9d"/>
              </div>
              <h3 className="font-headline-md text-primary mb-2">Soul Sanctuary</h3>
              <p className="font-body-md text-on-surface-variant/70">Holistic wellness rituals inspired by island traditions.</p>
            </div>
            <div className="reveal-on-scroll delay-200 group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 img-container">
                <img alt="Dining experience" className="w-full h-full object-cover img-scale-hover grayscale hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZD9IHhQ-qtcP3Q_8YthaaGNK50QzcgY4VTr9QjnhRJs-I-sjkSpmzFcrOn9uxKyexslOrIPhBqZkaGNd-oM84z4wScpNWVi0F03gpYz7k_YerjzJ3dP0YTSxE4NdW5Z56T9Bhyw2quPVp5CPrNfz0zdnuMNlthzvC-cTpSDmFHtWD70JqgAhIaNvMHnP79fwAZl5_I0EKX2TFWLOJEm6pXqgH1Y_WO6Nw1_H0UXGOtCI0jtfhxRBrX-Ff-DhzlhMPY0G-0-uXDo3P"/>
              </div>
              <h3 className="font-headline-md text-primary mb-2">Island Table</h3>
              <p className="font-body-md text-on-surface-variant/70">Organic, tide-to-table culinary masterpieces.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
