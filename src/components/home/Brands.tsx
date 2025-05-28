import Section from '../ui/Section';

const Brands = () => {
  // This would typically be images of car manufacturer logos
  const brands = [
    'BMW', 'Mercedes-Benz', 'Audi', 'Toyota', 'Honda', 'Ford', 
    'Chevrolet', 'Nissan', 'Hyundai', 'Kia'
  ];

  return (
    <Section>
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold mb-3">Brands We Service</h3>
        <p className="text-[#666666] max-w-2xl mx-auto">
          We have expertise in servicing a wide range of automotive brands, providing specialized care for each make and model.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {brands.map((brand, index) => (
          <div 
            key={index} 
            className="text-xl md:text-2xl font-bold text-gray-400 hover:text-[#0A66C2] transition-colors"
          >
            {brand}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Brands;