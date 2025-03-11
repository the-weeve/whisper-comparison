import React from 'react';

const VolumeComparison = () => {
  const data = [
    {
      name: 'Whisper MiniVent',
      volume: 2183,
      fill: '#E91E63' // Pink for Whisper MiniVent
    },
    {
      name: 'Whisper',
      volume: 2704,
      fill: '#9C27B0' // Purple for Whisper
    },
    {
      name: 'Brand X',
      volume: 4032,
      fill: '#9E9E9E' // Gray for competitor
    }
  ];

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 p-8 rounded-lg shadow-lg border border-pink-200">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2 text-purple-800 drop-shadow-sm">Whisper Machines: Compact & Stylish</h2>
        <p className="text-pink-700 italic">Whisper machines are significantly smaller, maximizing your salon's floor space</p>
        <div className="w-32 h-1 bg-gradient-to-r from-pink-300 to-purple-400 mx-auto mt-2 rounded-full"></div>
        <div className="mt-6 text-center">
        <p className="text-sm text-purple-700 italic">✨ The perfect choice for modern, space-conscious salons ✨</p>
      </div>
    </div>
      
      {/* Visual Size Comparison */}
      <div className="w-full max-w-2xl mb-8 p-6 bg-white rounded-lg shadow-md border border-pink-100">
        <h3 className="text-center font-bold text-purple-800 mb-4 text-lg">Visual Size Comparison</h3>
        <div className="flex justify-center items-end space-x-12 py-8 relative">
          {/* Decorative nail polish bottles */}
          <div className="absolute -top-2 -left-2 w-12 h-16 bg-pink-300 rounded-b-lg rounded-t-sm transform rotate-12"></div>
          <div className="absolute -bottom-2 -right-2 w-10 h-14 bg-purple-300 rounded-b-lg rounded-t-sm transform -rotate-6"></div>
          <div className="flex flex-col items-center">
            <div className="relative transform hover:scale-105 transition-transform duration-300" style={{width: '80px', height: '80px'}}>
              {/* Top face */}
              <div style={{width: '80px', height: '80px'}} 
                   className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-md absolute top-0 left-0 transform -translate-y-2 shadow-md flex items-center justify-center">
                <span className="text-white font-bold text-xs drop-shadow-sm">MiniVent</span>
              </div>
              {/* Right side */}
              <div style={{width: '10px', height: '80px'}} 
                   className="bg-gradient-to-b from-pink-300 to-pink-400 absolute top-0 right-0 transform translate-x-2 shadow-md"></div>
              {/* Front face */}
              <div style={{width: '80px', height: '80px'}} 
                   className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-md absolute top-0 left-0 shadow-lg flex items-center justify-center z-10 border border-pink-300">
                <span className="text-white font-bold text-xs drop-shadow-sm">MiniVent</span>
              </div>
            </div>
            <p className="mt-6 text-center text-sm font-medium text-pink-800">Whisper MiniVent</p>
            <p className="text-xs font-bold bg-pink-100 px-3 py-1 rounded-full text-pink-700 inline-block">2,183 cu. in.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative transform hover:scale-105 transition-transform duration-300" style={{width: '90px', height: '90px'}}>
              {/* Top face */}
              <div style={{width: '90px', height: '90px'}} 
                   className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-md absolute top-0 left-0 transform -translate-y-2 shadow-md flex items-center justify-center">
                <span className="text-white font-bold text-xs drop-shadow-sm">Whisper</span>
              </div>
              {/* Right side */}
              <div style={{width: '10px', height: '90px'}} 
                   className="bg-gradient-to-b from-purple-300 to-purple-400 absolute top-0 right-0 transform translate-x-2 shadow-md"></div>
              {/* Front face */}
              <div style={{width: '90px', height: '90px'}} 
                   className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-md absolute top-0 left-0 shadow-lg flex items-center justify-center z-10 border border-purple-300">
                <span className="text-white font-bold text-xs drop-shadow-sm">Whisper</span>
              </div>
            </div>
            <p className="mt-6 text-center text-sm font-medium text-purple-800">Whisper</p>
            <p className="text-xs font-bold bg-purple-100 px-3 py-1 rounded-full text-purple-700 inline-block">2,704 cu. in.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative transform hover:scale-105 transition-transform duration-300" style={{width: '120px', height: '120px'}}>
              {/* Top face */}
              <div style={{width: '120px', height: '120px'}} 
                   className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-md absolute top-0 left-0 transform -translate-y-2 shadow-md flex items-center justify-center">
                <span className="text-white font-bold text-xs drop-shadow-sm">Brand X</span>
              </div>
              {/* Right side */}
              <div style={{width: '10px', height: '120px'}} 
                   className="bg-gradient-to-b from-gray-400 to-gray-500 absolute top-0 right-0 transform translate-x-2 shadow-md"></div>
              {/* Front face */}
              <div style={{width: '120px', height: '120px'}} 
                   className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-md absolute top-0 left-0 shadow-lg flex items-center justify-center z-10 border border-gray-400">
                <span className="text-white font-bold text-xs drop-shadow-sm">Brand X</span>
              </div>
            </div>
            <p className="mt-6 text-center text-sm font-medium text-gray-700">Brand X</p>
            <p className="text-xs font-bold bg-gray-100 px-3 py-1 rounded-full text-gray-700 inline-block">4,032 cu. in.</p>
          </div>
        </div>
        <p className="text-center text-sm mt-4 text-pink-700 italic">✨ Boxes show relative size comparison (hover for effect) ✨</p>
      </div>
      
      <div className="mt-2 p-6 border-2 border-pink-200 rounded-lg bg-gradient-to-r from-pink-50 to-purple-50 w-full max-w-md shadow-md">
        <h3 className="font-bold mb-3 text-purple-800 text-center border-b border-pink-100 pb-2">Volume Comparison</h3>
        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <span className="font-medium">Whisper MiniVent:</span> 
            <span className="font-bold bg-pink-100 px-3 py-1 rounded-lg text-pink-800">2,183 cubic inches</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-medium">Whisper:</span> 
            <span className="font-bold bg-purple-100 px-3 py-1 rounded-lg text-purple-800">2,704 cubic inches</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-medium">Brand X:</span> 
            <span className="font-bold bg-gray-100 px-3 py-1 rounded-lg text-gray-700">4,032 cubic inches</span>
          </li>
          <li className="mt-6 pt-3 border-t border-pink-200 flex justify-between items-center">
            <span className="font-bold text-pink-800">Whisper MiniVent vs Brand X:</span> 
            <span className="font-bold bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2 rounded-lg text-white shadow-sm">46% smaller</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold text-purple-800">Whisper vs Brand X:</span> 
            <span className="font-bold bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-2 rounded-lg text-white shadow-sm">33% smaller</span>
          </li>
        </ul>
      </div>

      <div className="mt-6 p-6 border-2 border-pink-200 rounded-lg bg-white w-full max-w-md shadow-md relative overflow-hidden">
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-pink-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>
        
        <h3 className="font-bold mb-4 text-purple-800 text-center relative z-10">Advantages of Compact Size</h3>
        <ul className="space-y-3 relative z-10">
          <li className="flex items-start space-x-3 bg-gradient-to-r from-white to-pink-50 p-2 rounded-lg hover:shadow-sm transition-shadow duration-300">
            <div className="text-pink-500 font-bold text-xl">✓</div>
            <div className="font-medium">More room in your salon for additional stations</div>
          </li>
          <li className="flex items-start space-x-3 bg-gradient-to-r from-white to-pink-50 p-2 rounded-lg hover:shadow-sm transition-shadow duration-300">
            <div className="text-pink-500 font-bold text-xl">✓</div>
            <div className="font-medium">Easier to position and fit in tight spaces</div>
          </li>
          <li className="flex items-start space-x-3 bg-gradient-to-r from-white to-pink-50 p-2 rounded-lg hover:shadow-sm transition-shadow duration-300">
            <div className="text-pink-500 font-bold text-xl">✓</div>
            <div className="font-medium">Less visual bulk for a cleaner salon aesthetic</div>
          </li>
          <li className="flex items-start space-x-3 bg-gradient-to-r from-white to-pink-50 p-2 rounded-lg hover:shadow-sm transition-shadow duration-300">
            <div className="text-pink-500 font-bold text-xl">✓</div>
            <div className="font-medium">Same powerful performance in a more efficient design</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VolumeComparison;