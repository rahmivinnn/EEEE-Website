import { useState } from "react";
import { Image, Crown, Star, Zap, Shield, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useQuery } from "@tanstack/react-query";
import EEEEEPopup from "@/components/EEEEEPopup";

export default function NFTSection() {
  const { ref, isInView } = useScrollAnimation();
  const [selectedNFT, setSelectedNFT] = useState(0);

  // Fetch real NFT collections from database
  const { data: nftCollectionsData, isLoading, error } = useQuery({
    queryKey: ['/api/nft-collections'],
  });

  console.log('NFT data:', { nftCollectionsData, isLoading, error });

  // Process data with proper error handling  
  let nftCollections;
  try {
    nftCollections = nftCollectionsData && Array.isArray(nftCollectionsData) ? nftCollectionsData.slice(0, 3).map((collection: any) => ({
    name: collection.name,
    price: collection.price,
    rarity: collection.rarity,
    supply: collection.supply,
    description: collection.description,
    image: collection.imageUrl || "🔥",
    gradient: collection.gradient || "from-violet-500 to-purple-500"
  })) : [
    {
      name: "EEEEE Genesis",
      price: "127.5 ADA",
      rarity: "Legendary",
      supply: "1000",
      description: "The original EEEEE genesis collection with exclusive staking rewards and governance rights.",
      image: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#FFD700"/>
        </svg>
      ),
      gradient: "from-violet-500 to-purple-500"
    },
    {
      name: "EEEEE Warriors",
      price: "89.2 ADA",
      rarity: "Epic",
      supply: "5000",
      description: "Elite warrior NFTs providing access to premium DeFi features and metaverse experiences.",
      image: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.92 5H5L6.5 2.5H8.5L10 5H8.08L9 8H15L15.92 5H14L15.5 2.5H17.5L19 5H17.08L18 8V9C18 10.1 17.1 11 16 11H15L16 21H8L9 11H8C6.9 11 6 10.1 6 9V8L6.92 5Z" fill="#C0392B"/>
        </svg>
      ),
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "EEEEE Builders",
      price: "45.8 ADA",
      rarity: "Rare",
      supply: "10000",
      description: "Community builder collection with voting power and exclusive development insights.",
      image: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74C8.5 10.3 8.5 7.7 10.27 6.26C12.04 4.82 14.96 4.82 16.73 6.26C18.5 7.7 18.5 10.3 16.73 11.74C16.4 11.88 16.03 10.1 17.5 10.1Z" fill="#3498DB"/>
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    }
  ];
  } catch (err) {
    console.error('Error processing NFT collections:', err);
    nftCollections = [
      {
        name: "EEEEE Genesis",
        price: "127.5 ADA",
        rarity: "Legendary",
        supply: "1000",
        description: "The original EEEEE genesis collection with exclusive staking rewards and governance rights.",
        image: (
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#FFD700"/>
          </svg>
        ),
        gradient: "from-violet-500 to-purple-500"
      }
    ];
  }

  if (error) {
    console.error('NFT section error:', error);
  }

  return (
    <section id="nft" className="pt-40 pb-32 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 section-fade ${isInView ? 'in-view' : ''}`}>
          <h2 className="font-montserrat text-5xl lg:text-6xl uppercase mb-6 tracking-wider font-black">
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
                <div className={`aspect-square bg-gradient-to-br ${nftCollections?.[selectedNFT]?.gradient || 'from-violet-500 to-purple-500'} rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}>
                  <div className="text-white scale-[2]">{nftCollections?.[selectedNFT]?.image || (
                    <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="45" fill="#8B5CF6" stroke="#FFD700" strokeWidth="4"/>
                      <text x="50" y="35" textAnchor="middle" fill="#FFD700" fontSize="14" fontWeight="bold">EEEEE</text>
                      <text x="50" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="10">COIN</text>
                      <circle cx="50" cy="70" r="8" fill="#FFD700"/>
                      <text x="50" y="75" textAnchor="middle" fill="#8B5CF6" fontSize="8" fontWeight="bold">E</text>
                    </svg>
                  )}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 rounded-full text-sm font-bold text-white">
                    #{String(selectedNFT + 1).padStart(4, '0')}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">{nftCollections?.[selectedNFT]?.name || 'EEEEE Genesis'}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    nftCollections?.[selectedNFT]?.rarity === 'Legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                    nftCollections?.[selectedNFT]?.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {nftCollections?.[selectedNFT]?.rarity || 'Legendary'}
                  </span>
                  <span className="text-2xl font-bold text-emerald-400">{nftCollections?.[selectedNFT]?.price || '127.5 ADA'}</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">{nftCollections?.[selectedNFT]?.description || 'The original EEEEE genesis collection with exclusive staking rewards and governance rights.'}</p>
                </div>
              </div>

              {/* NFT Info & Actions */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-zinc-800/50 to-black/50">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Collection Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-zinc-800/50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-violet-400">{nftCollections?.[selectedNFT]?.supply || '1000'}</div>
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
                    <EEEEEPopup>
                      <button className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-bold text-lg tracking-wide hover:scale-105 transition-all duration-300">
                        MINT NOW
                      </button>
                    </EEEEEPopup>
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
                  <div className="text-white">{collection.image}</div>
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