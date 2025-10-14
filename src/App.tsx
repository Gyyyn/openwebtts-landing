import { useState, useEffect } from 'react';

export default function OpenWebTTSLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.debug(activeFeature);
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '🎯',
      title: 'Clean Interface',
      description: 'Straight to the point, no ads. Simple and accessible by design.'
    },
    {
      icon: '🔧',
      title: 'Multiple Engines',
      description: 'Support for Piper, Kokoro, Coqui, and more. Works on any hardware.'
    },
    {
      icon: '🎤',
      title: 'Voice Cloning',
      description: 'Clone any voice with just a 10-second audio sample. Premium feature, free here.'
    },
    {
      icon: '📄',
      title: 'Import Anything',
      description: 'PDFs, EPUBs, URLs, and more. Automatic OCR for scanned documents.'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Run completely offline. Your data never leaves your machine.'
    },
    {
      icon: '🚀',
      title: 'Self-Hostable',
      description: 'Full control over your data. No features locked behind paywalls.'
    }
  ];

  const comparisons = [
    { feature: 'Voice Cloning', openwebtts: true, competitors: 'Paid' },
    { feature: 'Offline Mode', openwebtts: true, competitors: 'Limited' },
    { feature: 'Auto OCR', openwebtts: true, competitors: 'Paid' },
    { feature: 'Skip Headers/Footers', openwebtts: true, competitors: 'Paid' },
    { feature: 'No Tracking', openwebtts: true, competitors: false },
    { feature: 'Self-Hostable', openwebtts: true, competitors: false },
    { feature: 'Asking Price', openwebtts: '$0', competitors: 'At least $20/month' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white">
    {/* Navigation */}
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <img className='rounded-lg' src="./maskable_icon_x128.png" alt="OpenWebTTS logo" />
            </div>
            <span className="text-xl font-raleway font-extrabold">OpenWebTTS</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="font-bold hover:text-indigo-400 transition-colors">Features</a>
            <a href="#comparison" className="font-bold hover:text-indigo-400 transition-colors">Compare</a>
            <a href="#setup" className="font-bold hover:text-indigo-400 transition-colors">Hear the Voices</a>
          </div>
          <button 
          className="cursor-pointer bg-indigo-600 font-xs md:font-base
          px-6 py-2 rounded-lg font-semibold transition-all
          hover:shadow-lg hover:shadow-indigo-700/50">Get Started</button>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="rotate-359 inline-block mb-4 px-4 py-2 bg-indigo-600 bg-opacity-10 rounded-xl border border-indigo-500">
          <span className="text-sm font-raleway font-semibold">Open Source • Privacy First • No Subscriptions</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-[900] mb-6">
          AI Reader,
          <br />
          Without the Price Tag
        </h1>
        <p className="text-xl md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          The open-source alternative to Speechify and ElevenLabs. Self-host, use any TTS engine, and read documents without subscriptions or tracking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a target='_blank' href="https://github.com/Gyyyn/OpenWebTTS/releases" className="bg-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-indigo-600/50 transition-all transform hover:scale-105">
          Download Now</a>
          <a target='_blank' href="https://github.com/Gyyyn/OpenWebTTS" className="border-2 border-indigo-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-500 hover:bg-opacity-20 transition-all">
          View on GitHub ⭐</a>
        </div>
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 blur-3xl opacity-30"></div>
          <div className="relative bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex">
              <img className='border border-gray-700 rounded-lg' src="https://private-user-images.githubusercontent.com/6964711/488397411-5bcdd59d-f30e-4b56-9b14-a58c1a29ab36.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjA0NTY0NzcsIm5iZiI6MTc2MDQ1NjE3NywicGF0aCI6Ii82OTY0NzExLzQ4ODM5NzQxMS01YmNkZDU5ZC1mMzBlLTRiNTYtOWIxNC1hNThjMWEyOWFiMzYucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MTAxNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTEwMTRUMTUzNjE3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NDcyZTRkODBmNmVlYzQ5NzllODRhM2NhZDBlNTY3Njc5NmQxNWYyOGRkYTllYjU1ZThjMzA1MDc1YjE0NGM5ZSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.Mpws-NQb0SUo0DCZZNC2hRDE5d2ecI08aj-6qgIknCA" alt="OpenWebTTS screenshot, showing functionality." />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Grid */}
    <section id="features" className="py-20 px-4 bg-gray-900 bg-opacity-50">
    <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features, Zero Cost</h2>
    <p className="text-xl text-gray-400">Everything you need. Really. No catch.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {features.map((feature, index) => (
      <div
      key={index}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-indigo-500 transition-all hover:shadow-xl hover:shadow-indigo-500/20 transform hover:scale-105"
      >
      <div className="text-5xl mb-4">{feature.icon}</div>
      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
      </div>
    ))}
    </div>
    </div>
    </section>

    {/* Comparison Table */}
    <section id="comparison" className="py-20 px-4">
    <div className="max-w-5xl mx-auto">
    <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">Better Than Paid Alternatives</h2>
    <p className="text-xl text-gray-400">See how we stack up against the competition</p>
    </div>
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700">
    <div className="grid grid-cols-3 gap-4 p-6 bg-gray-900 bg-opacity-50">
    <div className="font-bold text-lg">Feature</div>
    <div className="font-bold text-lg text-center">OpenWebTTS</div>
    <div className="font-bold text-lg text-center">Competitors</div>
    </div>
    {comparisons.map((item, index) => (
      <div
      key={index}
      className={`grid grid-cols-3 gap-4 p-6 border-t border-gray-700 ${
        index % 2 === 0 ? 'bg-gray-800 bg-opacity-30' : ''
      }`}
      >
      <div className="text-gray-300">{item.feature}</div>
      <div className="text-center">
      {item.openwebtts === true ? (
        <span className="inline-block w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">✓</span>
      ) : (
        <span className="text-green-500 font-bold">{item.openwebtts}</span>
      )}
      </div>
      <div className="text-center">
      {item.competitors === true ? (
        <span className="inline-block w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">✓</span>
      ) : item.competitors === false ? (
        <span className="inline-block w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">✗</span>
      ) : (
        <span className="text-yellow-500 font-semibold">{item.competitors}</span>
      )}
      </div>
      </div>
    ))}
    </div>
    </div>
    </section>

    {/* Tech Stack */}
    <section id="setup" className="py-20 px-4 bg-gray-900 bg-opacity-50">
    <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">Natural Voices</h2>
    <p className="text-xl text-gray-400">Options for any hardware. All natural-sounding.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      { name: "Piper", sample: 'piper_sample.wav', icon: "🪈"},
      { name: "Kokoro", sample: 'kokoro_sample.wav', icon: "❤️"},
      { name: "Kitten", sample: 'kitten_sample.wav', icon: "😻"},
      { name: "Coqui", sample: 'coqui_sample.wav', icon: "🐸"}
    ].map((engine, index) => (
      <div
      key={index}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-indigo-500 transition-all"
      >
      <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
      {engine.icon}
      </div>
      <h3 className="text-xl font-bold">{engine.name}</h3>

      <button
        onClick={() => {
          const audio = new Audio(engine.sample);
          audio.play();
        }}
        className="cursor-pointer mt-4 inline-flex items-center px-3 py-2 border border-indigo-500 rounded-md text-sm font-medium text-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors"
      >
        🎧 Listen to Sample
      </button>

      </div>
    ))}
    </div>
    </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
    <div className="rounded-3xl p-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose an experience without corporations</h2>
    <p className="text-xl mb-8 text-indigo-100">
    Join a community, renounce the price tag on your data
    </p>
    <a href="https://github.com/Gyyyn/OpenWebTTS" className="cursor-pointer bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors">
      Get OpenWebTTS on GitHub
    </a>
    </div>
    </div>
    </section>
    </div>
  );
}
