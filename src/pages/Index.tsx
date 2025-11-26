import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
      background: 'linear-gradient(135deg, #1A1A1A 0%, #2D1F00 25%, #1A1A1A 50%, #2D1F00 75%, #1A1A1A 100%)',
      image: 'https://cdn.poehali.dev/projects/fbd8a585-8655-4913-a06e-4501bf3ad5f8/files/20f0e286-5ae1-4464-8f02-61799374c5e5.jpg',
      overlay: 'linear-gradient(90deg, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.7) 50%, rgba(26,26,26,0.3) 100%)'
    },
    {
      id: 2,
      background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 25%, #F4E4C1 50%, #D4AF37 75%, #B8860B 100%)',
      image: 'https://cdn.poehali.dev/projects/fbd8a585-8655-4913-a06e-4501bf3ad5f8/files/f1eefb25-7322-43c8-8723-944dc4cd4b12.jpg',
      overlay: 'linear-gradient(90deg, rgba(212,175,55,0.85) 0%, rgba(212,175,55,0.6) 50%, rgba(212,175,55,0.2) 100%)'
    },
    {
      id: 3,
      background: 'linear-gradient(135deg, #DC2626 0%, #7F1D1D 25%, #1A1A1A 50%, #7F1D1D 75%, #DC2626 100%)',
      image: 'https://cdn.poehali.dev/projects/fbd8a585-8655-4913-a06e-4501bf3ad5f8/files/a5111650-f741-4ff1-87cc-0be6892d2de5.jpg',
      overlay: 'linear-gradient(90deg, rgba(220,38,38,0.9) 0%, rgba(220,38,38,0.6) 50%, rgba(220,38,38,0.2) 100%)'
    }
  ];

  const banner = banners[currentBanner];

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-8 gap-8">
      <div className="flex gap-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`px-6 py-3 rounded-lg font-montserrat font-bold transition-all ${
              currentBanner === index 
                ? 'bg-[#D4AF37] text-black' 
                : 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'
            }`}
          >
            Вариант {index + 1}
          </button>
        ))}
      </div>

      <div 
        className="relative overflow-hidden transition-all duration-500"
        style={{
          width: '1080px',
          height: '450px',
          background: banner.background
        }}
      >
        <img 
          src={banner.image}
          alt="Auto products"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div 
          className="absolute inset-0"
          style={{
            background: banner.overlay
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
            animation: 'slide 30s linear infinite'
          }}
        />

        <div className="relative h-full flex flex-col justify-between p-12">
          <div className="flex justify-between items-start">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/41a8ef77-965f-4dd0-9425-72e25c1ff3d7.png" 
                alt="PRADA Logo"
                className="w-72 h-auto object-contain drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.8)) drop-shadow(0 0 40px rgba(212,175,55,0.3))'
                }}
              />
            </div>

            <div className="flex flex-col items-end gap-3">
              <div 
                className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] px-12 py-6 relative overflow-hidden"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                  boxShadow: '0 8px 40px rgba(220,38,38,0.6), inset 0 2px 10px rgba(255,255,255,0.2)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 3s ease-in-out infinite'
                  }}
                />
                <div className="relative flex flex-col items-center">
                  <span className="text-[#D4AF37] font-oswald font-bold text-3xl tracking-widest uppercase">
                    Скидка
                  </span>
                  <span className="text-white font-oswald font-bold text-7xl tracking-wider leading-none">
                    до 17%
                  </span>
                </div>
              </div>
              
              <div 
                className="absolute -right-2 top-20 w-32 h-32 bg-[#D4AF37] opacity-20 blur-3xl rounded-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 
              className="font-oswald font-bold leading-none"
              style={{
                fontSize: '5.5rem',
                color: '#FFFFFF',
                textShadow: '4px 4px 0px rgba(0,0,0,0.8), 8px 8px 0px rgba(220,38,38,0.4), 0 0 40px rgba(212,175,55,0.3)',
                letterSpacing: '0.05em'
              }}
            >
              <span className="block">СКИДКИ НА ВЕСЬ</span>
              <span 
                className="block text-[#D4AF37]"
                style={{
                  textShadow: '4px 4px 0px rgba(0,0,0,0.9), 8px 8px 0px rgba(220,38,38,0.5), 0 0 50px rgba(212,175,55,0.6)'
                }}
              >
                АССОРТИМЕНТ
              </span>
            </h1>
            
            <div className="flex gap-4 items-center">
              <div 
                className="h-1.5 w-40 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #DC2626 0%, #D4AF37 100%)',
                  boxShadow: '0 0 20px rgba(212,175,55,0.5)'
                }}
              />
              <span className="text-white font-montserrat font-bold text-2xl tracking-wide uppercase drop-shadow-lg">
                Автотовары премиум класса
              </span>
            </div>
          </div>
        </div>

        <div 
          className="absolute bottom-0 left-0 right-0 h-3"
          style={{
            background: 'linear-gradient(90deg, #DC2626 0%, #D4AF37 50%, #DC2626 100%)',
            boxShadow: '0 -4px 30px rgba(212,175,55,0.6)'
          }}
        />
      </div>

      <div className="flex gap-4 text-white font-montserrat">
        <button
          onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
          className="flex items-center gap-2 px-6 py-3 bg-[#2A2A2A] rounded-lg hover:bg-[#3A3A3A] transition-all"
        >
          <Icon name="ChevronLeft" size={20} />
          Предыдущий
        </button>
        <button
          onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
          className="flex items-center gap-2 px-6 py-3 bg-[#2A2A2A] rounded-lg hover:bg-[#3A3A3A] transition-all"
        >
          Следующий
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(100px) translateY(100px); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .font-oswald {
          font-family: 'Oswald', sans-serif;
        }
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Index;
