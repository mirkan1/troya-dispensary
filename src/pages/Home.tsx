import React from 'react';
import PermanentImage from '../assets/permanent.jpg';
import TropicanaImage from '../assets/tropicana.jpg';
import BlackMambaImage from '../assets/black-mamba.jpg';
import GrapesImage from '../assets/grapes.jpg';
import BananaOGImage from '../assets/banana-og.jpg';
import PPopRuntzImage from '../assets/p-pop-runtz.jpg';
import IECOGImage from '../assets/iec-og.jpg';
import CaptainKushcoImage from '../assets/captain-kushco.jpg';
import RS11Image from '../assets/rs-11.jpg';
import MelonHeadImage from '../assets/melon-head.jpg';
import BruceBannerImage from '../assets/bruce-banner.jpg';
import BlackBerryImage from '../assets/black-berry.jpg';
import BlackOreoImage from '../assets/black-oreo.jpg';
import WhiteRuntzImage from '../assets/white-runtz.jpg';
import DeathStarImage from '../assets/death-star.jpg';
import BlackTitanImage from '../assets/black-titan.jpg';
import MimosaImage from '../assets/mimosa.jpg';

const products = [
  { name: "Tropicana", image: TropicanaImage, fullGramPrice: 22, halfGramPrice: 13 },
  { name: "Black Mamba", image: BlackMambaImage, fullGramPrice: 30, halfGramPrice: 18 },
  { name: "Grapes", image: GrapesImage, fullGramPrice: 24, halfGramPrice: 14 },
  { name: "Banana OG", image: BananaOGImage, fullGramPrice: 26, halfGramPrice: 15 },
  { name: "P'Pop Runtz", image: PPopRuntzImage, fullGramPrice: 28, halfGramPrice: 16 },
  { name: "IEC OG", image: IECOGImage, fullGramPrice: 25, halfGramPrice: 15 },
  { name: "Captain Kushco", image: CaptainKushcoImage, fullGramPrice: 27, halfGramPrice: 16 },
  { name: "RS-11", image: RS11Image, fullGramPrice: 29, halfGramPrice: 17 },
  { name: "Melon Head", image: MelonHeadImage, fullGramPrice: 23, halfGramPrice: 14 },
  { name: "Bruce Banner", image: BruceBannerImage, fullGramPrice: 31, halfGramPrice: 19 },
  { name: "Black Berry", image: BlackBerryImage, fullGramPrice: 26, halfGramPrice: 15 },
  { name: "Black Oreo", image: BlackOreoImage, fullGramPrice: 28, halfGramPrice: 16 },
  { name: "White Runtz", image: WhiteRuntzImage, fullGramPrice: 30, halfGramPrice: 18 },
  { name: "Death Star", image: DeathStarImage, fullGramPrice: 32, halfGramPrice: 20 },
  { name: "Black Titan", image: BlackTitanImage, fullGramPrice: 29, halfGramPrice: 17 },
  { name: "Permanent", image: PermanentImage, fullGramPrice: 25, halfGramPrice: 15 },
  { name: "Mimosa", image: MimosaImage, fullGramPrice: 28, halfGramPrice: 16 },
];

const ProductComponent: React.FC<{ name: string; image: string; fullGramPrice: number; halfGramPrice: number }> = ({
  name,
  image,
  fullGramPrice,
  halfGramPrice,
}) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <img
        src={image}
        width={200}
        height={200}
        alt={name}
        className="rounded shadow-md"
      />
      <h2 className="text-2xl font-semibold text-[#F8420B]">{name}</h2>
      <p className="text-gray-500">Full Gram - ${fullGramPrice}</p>
      <p className="text-gray-500">Half Gram - ${halfGramPrice}</p>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-8 bg-white text-gray-800">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#83E213]">Items On Sale</h1>
        <p className="text-gray-600">(All prices are per item)</p>
      </div>
      {/* Products */}
      <div
        className="w-full max-w-4xl flex flex-row flex-wrap justify-center gap-12 sell-items"
      >
        {products.map((product) => (
          <ProductComponent
            key={product.name}
            name={product.name}
            image={product.image}
            fullGramPrice={product.fullGramPrice}
            halfGramPrice={product.halfGramPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
