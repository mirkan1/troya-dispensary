import PurpeHazeImage from '../assets/purple-haze.png';
import React from 'react';

const PurpleHazeComponent = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <img
        src={PurpeHazeImage}
        width={200}
        height={200}
        alt="Purple Haze"
        className="rounded shadow-md"
      />
      <h2 className="text-2xl font-semibold text-[#F8420B]">Purple Haze</h2>
      <p className="text-gray-500">Full Gram - $20</p>
      <p className="text-gray-500">Half Gram - $12</p>
    </div>
  );
}

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
        className="w-full max-w-4xl flex flex-row flex-wrap justify-center gap-12"
        style={{ width: '500px' }}
      >
        <PurpleHazeComponent />
        <PurpleHazeComponent />
        <PurpleHazeComponent />
        <PurpleHazeComponent />
      </div>
    </div>
  );
};

export default Home;
