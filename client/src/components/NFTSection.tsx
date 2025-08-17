import { useState } from "react";
import { Image, Crown, Star, Zap, Shield, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function NFTSection() {
  const { ref, isInView } = useScrollAnimation();
  const [selectedNFT, setSelectedNFT] = useState(0);

  const nftCollections = [
    {
      name: "EEEEE Genesis",
      price: "150 ADA",
      rarity: "Legendary",
      supply: "1,000",
      description: "The first and most exclusive EEEEE NFT collection with utility access to premium features",
      image: "🔥",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      name: "EEEEE Warriors",
      price: "75 ADA", 
      rarity: "Epic",
      supply: "5,000",
      description: "Battle-ready EEEEE characters with staking rewards and governance rights",
      image: "⚔️",
      gradient: "from-emerald-500 to-cyan-500"
    },
    {
      name: "EEEEE Kingdom",
      price: "50 ADA",
      rarity: "Rare", 
      supply: "10,000",
      description: "Collectible land plots in the EEEEE metaverse with passive income generation",
      image: "🏰",
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="nft" className="py-32 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 section-fade ${isInView ? 'in-view' : ''}`}>
          <h2 className="font-anton text-5xl lg:text-6xl uppercase mb-6 tracking-wider">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              NFT ECOSYSTEM
            </span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Exclusive NFT collections with real utility. Governance rights, staking rewards, 
            and metaverse access powered by Cardano blockchain technology.
          </p>
        </div>

        {/* Featured NFT Display */}
        <div className={`mb-16 section-fade ${isInView ? 'in-view' : ''}`} style={{animationDelay: '0.2s'}}>
          <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* NFT Display */}
              <div className="p-8 lg:p-12">
                <div className={`aspect-square bg-gradient-to-br ${nftCollections[selectedNFT].gradient} rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}>
                  <div className="text-8xl">{nftCollections[selectedNFT].image}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 rounded-full text-sm font-bold text-white">
                    #{String(selectedNFT + 1).padStart(4, '0')}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">{nftCollections[selectedNFT].name}</h3>
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      nftCollections[selectedNFT].rarity === 'Legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                      nftCollections[selectedNFT].rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {nftCollections[selectedNFT].rarity}
                    </span>
                    <span className="text-2xl font-bold text-emerald-400">{nftCollections[selectedNFT].price}</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{nftCollections[selectedNFT].description}</p>
                </div>
              </div>

              {/* NFT Info & Actions */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-zinc-800/50 to-black/50">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Collection Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-zinc-800/50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-violet-400">{nftCollections[selectedNFT].supply}</div>
                        <div className="text-sm text-zinc-400">Total Supply</div>
                      </div>
                      <div className="bg-zinc-800/50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-emerald-400">847</div>
                        <div className="text-sm text-zinc-400">Minted</div>
                      </div>
                      <div className="bg-zinc-800/50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-400">12.4%</div>
                        <div className="text-sm text-zinc-400">Royalty</div>
                      </div>
                      <div className="bg-zinc-800/50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-400">89.2</div>
                        <div className="text-sm text-zinc-400">Floor ADA</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Utility Features</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg">
                        <Crown className="w-5 h-5 text-yellow-400" />
                        <span className="text-zinc-300">Governance Voting Rights</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg">
                        <Star className="w-5 h-5 text-violet-400" />
                        <span className="text-zinc-300">Exclusive Staking Pools</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg">
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                        <span className="text-zinc-300">Metaverse Access</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-bold text-lg tracking-wide hover:scale-105 transition-all duration-300">
                      MINT NOW
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg font-semibold hover:scale-105 transition-transform">
                        View on CNFT
                      </button>
                      <button className="py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:scale-105 transition-transform">
                        Marketplace
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collection Selector */}
        <div className={`mb-16 section-fade ${isInView ? 'in-view' : ''}`} style={{animationDelay: '0.4s'}}>
          <div className="grid md:grid-cols-3 gap-6">
            {nftCollections.map((collection, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border rounded-2xl p-6 cursor-pointer transition-all duration-500 ${
                  selectedNFT === index 
                    ? 'border-violet-500 shadow-2xl shadow-violet-500/25 scale-105' 
                    : 'border-zinc-800 hover:border-zinc-600'
                }`}
                onClick={() => setSelectedNFT(index)}
              >
                <div className={`w-full aspect-square bg-gradient-to-br ${collection.gradient} rounded-xl flex items-center justify-center mb-4 relative overflow-hidden`}>
                  <div className="text-4xl">{collection.image}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                </div>
                
                <h4 className="font-bold text-lg text-white mb-2">{collection.name}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400 font-bold">{collection.price}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    collection.rarity === 'Legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                    collection.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {collection.rarity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NFT Roadmap */}
        <div className={`section-fade ${isInView ? 'in-view' : ''}`} style={{animationDelay: '0.6s'}}>
          <h3 className="text-3xl font-bold text-white mb-12 text-center tracking-wide">
            NFT ROADMAP
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Genesis Launch",
                status: "Complete",
                icon: <Crown className="w-6 h-6" />,
                items: ["1,000 Genesis NFTs", "Utility Integration", "Community Building"],
                gradient: "from-violet-500 to-purple-500"
              },
              {
                phase: "Phase 2", 
                title: "Warriors Collection",
                status: "Active",
                icon: <Shield className="w-6 h-6" />,
                items: ["5,000 Warrior NFTs", "Staking Rewards", "Governance Launch"],
                gradient: "from-emerald-500 to-cyan-500"
              },
              {
                phase: "Phase 3",
                title: "Kingdom Expansion",
                status: "Coming Soon",
                icon: <Image className="w-6 h-6" />,
                items: ["10,000 Land NFTs", "Metaverse Beta", "P2E Gaming"],
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                phase: "Phase 4",
                title: "Multiverse",
                status: "Planned",
                icon: <Zap className="w-6 h-6" />,
                items: ["Cross-chain Bridge", "AR Integration", "Global Marketplace"],
                gradient: "from-pink-500 to-purple-500"
              }
            ].map((roadmapItem, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${roadmapItem.gradient}`}>
                    {roadmapItem.icon}
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">{roadmapItem.phase}</div>
                    <h4 className="font-bold text-lg text-white">{roadmapItem.title}</h4>
                  </div>
                </div>
                
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                  roadmapItem.status === 'Complete' ? 'bg-emerald-500/20 text-emerald-400' :
                  roadmapItem.status === 'Active' ? 'bg-violet-500/20 text-violet-400' :
                  roadmapItem.status === 'Coming Soon' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-zinc-500/20 text-zinc-400'
                }`}>
                  {roadmapItem.status}
                </div>
                
                <ul className="space-y-2">
                  {roadmapItem.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-zinc-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}