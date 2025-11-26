const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-8">
      <div 
        className="relative overflow-hidden"
        style={{
          width: '1080px',
          height: '450px',
          background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 25%, #F4E4C1 50%, #D4AF37 75%, #B8860B 100%)'
        }}
      >
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: 'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px)',
            animation: 'slide 20s linear infinite'
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(184,134,11,0.4) 0%, transparent 50%)',
            mixBlendMode: 'overlay'
          }}
        />

        <div className="relative h-full flex flex-col justify-between p-12">
          <div className="flex justify-between items-start">
            <div 
              className="w-44 h-44 rounded-lg flex items-center justify-center bg-white p-6"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            >
              <img 
                src="https://cdn.poehali.dev/files/41a8ef77-965f-4dd0-9425-72e25c1ff3d7.png" 
                alt="PRADA Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div 
              className="relative"
              style={{
                transform: 'rotate(-8deg)',
              }}
            >
              <div 
                className="bg-[#DC2626] px-16 py-8 relative overflow-hidden"
                style={{
                  clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
                  boxShadow: '0 0 60px rgba(220,38,38,0.8), inset 0 2px 20px rgba(0,0,0,0.3)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 3s ease-in-out infinite'
                  }}
                />
                <div className="relative">
                  <span className="text-white font-oswald font-bold text-8xl tracking-wider block leading-none">
                    до 17%
                  </span>
                </div>
              </div>
              <div 
                className="absolute -inset-4 bg-[#DC2626] opacity-40 blur-2xl -z-10"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 
              className="font-oswald font-bold leading-none"
              style={{
                fontSize: '5.5rem',
                color: '#1A1A1A',
                textShadow: '3px 3px 0px #DC2626, 6px 6px 0px rgba(220,38,38,0.4)',
                letterSpacing: '0.05em'
              }}
            >
              <span className="block">СКИДКИ НА ВЕСЬ</span>
              <span 
                className="block"
                style={{
                  color: '#DC2626',
                  textShadow: '3px 3px 0px #1A1A1A, 6px 6px 0px rgba(26,26,26,0.4)'
                }}
              >
                АССОРТИМЕНТ
              </span>
            </h1>
            
            <div className="flex gap-4 items-center">
              <div className="h-1 w-32 bg-gradient-to-r from-[#DC2626] to-[#1A1A1A]" />
              <span className="text-[#1A1A1A] font-montserrat font-bold text-2xl tracking-wide uppercase">
                Автотовары премиум класса
              </span>
            </div>
          </div>
        </div>

        <div 
          className="absolute bottom-0 left-0 right-0 h-2"
          style={{
            background: 'linear-gradient(90deg, #DC2626 0%, #1A1A1A 50%, #DC2626 100%)',
            boxShadow: '0 -2px 20px rgba(220,38,38,0.5)'
          }}
        />
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(100px); }
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