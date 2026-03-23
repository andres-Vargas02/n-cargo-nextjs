import Button from '../ui/Button';

const CTA = () => {
  return (
    <section className="py-20 bg-linear-to-br from-blue-600 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">📦</div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Listo para empezar<br/>a ahorrar en tus compras?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Crea tu casillero gratuito en Miami en menos de 2 minutos.<br/>
            Tu primera dirección americana te espera.
          </p>
          
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-4 mb-6"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Crea tu casillero gratis
          </Button>
          
          <div className="flex flex-wrap justify-center gap-4 text-blue-100 text-sm">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sin costo de membresía
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sin compromisos
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Listo en 2 minutos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;