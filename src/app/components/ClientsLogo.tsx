import Image from "next/image";

const clientsLogo = [
  {
    url: "/meetFashion.png",
    name: "Meet Fashion", // Text to show on hover
  },
  {
    url: "/rjFashion.png",
    name: "RJ Fashion",
  },
  {
    url: "/SmartTextInt.png",
    name: "Smart Tex Int",
  },
  {
    url: "/FabriconFashion.png",
    name: "Fabricon Fashion",
  },
];

export default function ClientsLogo() {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 justify-items-center md:max-w-4xl mx-auto mt-8 md:mt-10 lg:mt-12 px-4 pt-6 md:pt-8">
      {clientsLogo.map((item, index) => {
        return (
          <div
            key={index}
            className="grid items-center w-full max-w-[150px] sm:max-w-[180px] h-16 sm:h-15 overflow-hidden
                       relative group cursor-pointer rounded-xl shadow-md
                       transition-all duration-300 ease-in-out
                       hover:-translate-y-1 hover:shadow-lg" // Hover effect for the card
          >
            <Image
              src={item.url}
              alt={item.name}
              width={1200}
              height={1200}
              className="w-full h-full object-contain rounded-xl
                         transition-opacity duration-300 ease-in-out opacity-80
                         group-hover:opacity-30" // Image fades out on hover
            />

            {/* Overlay with text that appears on hover */}
            <div
              className="absolute inset-0 bg-black/70 flex items-center justify-center text-white
                         opacity-0 group-hover:opacity-100
                         transition-opacity duration-300 ease-in-out rounded-xl"
            >
              <span className="text-sm font-semibold px-2 text-center">
                {item.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
