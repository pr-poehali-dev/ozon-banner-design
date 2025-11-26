const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-8">
      <div 
        className="relative overflow-hidden"
        style={{
          width: '1080px',
          height: '450px',
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0000 50%, #0A0A0A 100%)'
        }}
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #DC2626 2px, #DC2626 4px)',
            animation: 'slide 20s linear infinite'
          }}
        />
        
        <div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse at center, #D4AF37 0%, transparent 70%)',
          }}
        />

        <div className="relative h-full flex flex-col justify-between p-12">
          <div className="flex justify-between items-start">
            <div 
              className="w-40 h-40 border-4 border-[#D4AF37] rounded-lg flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
                boxShadow: '0 0 30px rgba(212,175,55,0.3)'
              }}
            >
              <span className="text-[#D4AF37] font-montserrat font-bold text-sm tracking-wider text-center">
                МЕСТО ДЛЯ<br/>ЛОГОТИПА
              </span>
            </div>

            <div 
              className="relative"
              style={{
                transform: 'rotate(-8deg)',
              }}
            >
              <div 
                className="bg-[#DC2626] px-8 py-4 relative overflow-hidden"
                style={{
                  clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
                  boxShadow: '0 0 40px rgba(220,38,38,0.6)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, #D4AF37 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 3s ease-in-out infinite'
                  }}
                />
                <div className="relative">
                  <span className="text-white font-oswald font-bold text-5xl tracking-wider block leading-none">
                    до 17%
                  </span>
                </div>
              </div>
              <div 
                className="absolute -inset-2 bg-[#D4AF37] opacity-30 blur-xl -z-10"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 
              className="font-oswald font-bold text-white leading-none"
              style={{
                fontSize: '5.5rem',
                textShadow: '0 0 20px rgba(212,175,55,0.5), 4px 4px 0px #DC2626',
                letterSpacing: '0.05em'
              }}
            >
              <span className="block">СКИДКИ НА ВЕСЬ</span>
              <span 
                className="block text-[#D4AF37]"
                style={{
                  textShadow: '0 0 30px rgba(212,175,55,0.8), 3px 3px 0px rgba(220,38,38,0.8)'
                }}
              >
                АССОРТИМЕНТ
              </span>
            </h1>
            
            <div className="flex gap-4 items-center">
              <div className="h-1 w-32 bg-gradient-to-r from-[#DC2626] to-[#D4AF37]" />
              <span className="text-white font-montserrat font-semibold text-2xl tracking-wide uppercase">
                Автотовары премиум класса
              </span>
            </div>
          </div>
        </div>

        <div 
          className="absolute bottom-0 left-0 right-0 h-2"
          style={{
            background: 'linear-gradient(90deg, #DC2626 0%, #D4AF37 50%, #DC2626 100%)',
            boxShadow: '0 -2px 20px rgba(212,175,55,0.5)'
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
