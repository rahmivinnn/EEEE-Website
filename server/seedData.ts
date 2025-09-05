import { storage } from "./storage";
import { db } from "./db";
import { tokenPrices } from "@shared/schema";

export async function seedDatabase() {
  try {
    console.log("🌱 Seeding database with initial EEEEE ecosystem data...");

    // Seed Staking Pools
    const stakingPoolsData = [
      {
        name: "EEEEE Genesis Pool",
        ticker: "EEEEE1", 
        apy: "24.7%",
        totalStaked: "12,847,392 ADA",
        validatorFee: "2.5%",
        status: "active",
        description: "Premium staking pool with the highest APY in the EEEEE ecosystem. Military-grade security and maximum rewards."
      },
      {
        name: "EEEEE Warriors Pool",
        ticker: "EEEEE2",
        apy: "22.4%", 
        totalStaked: "8,234,567 ADA",
        validatorFee: "3.0%",
        status: "active",
        description: "Battle-tested pool for serious stakers. Enhanced rewards with NFT utilities and governance rights."
      },
      {
        name: "EEEEE Diamond Pool",
        ticker: "EEEEE3",
        apy: "20.1%",
        totalStaked: "15,678,901 ADA", 
        validatorFee: "2.0%",
        status: "active",
        description: "Institutional-grade staking with enterprise security. Perfect for large delegators seeking stability."
      }
    ];

    for (const poolData of stakingPoolsData) {
      await storage.createStakingPool(poolData);
    }

    // Seed NFT Collections
    const nftCollectionsData = [
      {
        name: "EEEEE Genesis",
        price: "150 ADA",
        rarity: "Legendary",
        supply: "1000",
        minted: "847",
        description: "The first and most exclusive EEEEE NFT collection with utility access to premium features",
        imageUrl: "<svg className='w-16 h-16' viewBox='0 0 100 100' fill='none'><defs><linearGradient id='coinGradient-genesis' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stopColor='#FFD700'/><stop offset='50%' stopColor='#FFF8DC'/><stop offset='100%' stopColor='#FFD700'/></linearGradient></defs><circle cx='50' cy='50' r='47' fill='url(#coinGradient-genesis)' stroke='#8B5CF6' strokeWidth='2'/><circle cx='50' cy='50' r='40' fill='#8B5CF6' stroke='#FFD700' strokeWidth='1.5'/><text x='50' y='32' textAnchor='middle' fill='#FFD700' fontSize='12' fontWeight='bold'>EEEEE</text><text x='50' y='48' textAnchor='middle' fill='#FFFFFF' fontSize='8'>GENESIS</text><circle cx='50' cy='68' r='10' fill='#FFD700' stroke='#8B5CF6' strokeWidth='1'/><text x='50' y='73' textAnchor='middle' fill='#8B5CF6' fontSize='10' fontWeight='bold'>G</text></svg>",
        utilities: ["Governance Voting Rights", "Exclusive Staking Pools", "Metaverse Access", "Premium Support"],
        gradient: "from-violet-500 to-purple-500"
      },
      {
        name: "EEEEE Warriors",
        price: "75 ADA", 
        rarity: "Epic",
        supply: "5000",
        minted: "3247",
        description: "Battle-ready EEEEE characters with staking rewards and governance rights",
        imageUrl: "<svg className='w-16 h-16' viewBox='0 0 100 100' fill='none'><defs><linearGradient id='coinGradient-warrior' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stopColor='#FFD700'/><stop offset='50%' stopColor='#FFF8DC'/><stop offset='100%' stopColor='#FFD700'/></linearGradient></defs><circle cx='50' cy='50' r='47' fill='url(#coinGradient-warrior)' stroke='#DC2626' strokeWidth='2'/><circle cx='50' cy='50' r='40' fill='#DC2626' stroke='#FFD700' strokeWidth='1.5'/><text x='50' y='32' textAnchor='middle' fill='#FFD700' fontSize='12' fontWeight='bold'>EEEEE</text><text x='50' y='48' textAnchor='middle' fill='#FFFFFF' fontSize='8'>WARRIOR</text><circle cx='50' cy='68' r='10' fill='#FFD700' stroke='#DC2626' strokeWidth='1'/><text x='50' y='73' textAnchor='middle' fill='#DC2626' fontSize='10' fontWeight='bold'>W</text></svg>",
        utilities: ["Staking Rewards Boost", "Governance Rights", "Trading Benefits", "Community Access"],
        gradient: "from-emerald-500 to-cyan-500"
      },
      {
        name: "EEEEE Kingdom",
        price: "50 ADA",
        rarity: "Rare", 
        supply: "10000",
        minted: "6891",
        description: "Collectible land plots in the EEEEE metaverse with passive income generation",
        imageUrl: "<svg className='w-16 h-16' viewBox='0 0 100 100' fill='none'><defs><linearGradient id='coinGradient-kingdom' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stopColor='#FFD700'/><stop offset='50%' stopColor='#FFF8DC'/><stop offset='100%' stopColor='#FFD700'/></linearGradient></defs><circle cx='50' cy='50' r='47' fill='url(#coinGradient-kingdom)' stroke='#2563EB' strokeWidth='2'/><circle cx='50' cy='50' r='40' fill='#2563EB' stroke='#FFD700' strokeWidth='1.5'/><text x='50' y='32' textAnchor='middle' fill='#FFD700' fontSize='12' fontWeight='bold'>EEEEE</text><text x='50' y='48' textAnchor='middle' fill='#FFFFFF' fontSize='8'>KINGDOM</text><circle cx='50' cy='68' r='10' fill='#FFD700' stroke='#2563EB' strokeWidth='1'/><text x='50' y='73' textAnchor='middle' fill='#2563EB' fontSize='10' fontWeight='bold'>K</text></svg>",
        utilities: ["Passive Income", "Land Development", "Resource Mining", "Territory Control"],
        gradient: "from-blue-500 to-indigo-500"
      }
    ];

    for (const collectionData of nftCollectionsData) {
      await storage.createNFTCollection(collectionData);
    }

    // Seed Liquidity Pools
    const liquidityPoolsData = [
      {
        name: "EEEEE/ADA Pool",
        tokenA: "EEEEE",
        tokenB: "ADA",
        apr: "247.5%",
        tvl: "$45,823,617",
        volume24h: "$2,847,391",
        fees: "0.3%",
        rewards: ["EEEEE", "ADA", "Bonus NFTs"],
        status: "active"
      },
      {
        name: "EEEEE/USDC Pool", 
        tokenA: "EEEEE",
        tokenB: "USDC",
        apr: "189.2%",
        tvl: "$28,391,845",
        volume24h: "$1,593,746",
        fees: "0.25%",
        rewards: ["EEEEE", "USDC"],
        status: "active"
      },
      {
        name: "EEEEE/ETH Pool",
        tokenA: "EEEEE", 
        tokenB: "ETH",
        apr: "156.8%",
        tvl: "$19,847,392",
        volume24h: "$984,273",
        fees: "0.3%",
        rewards: ["EEEEE", "ETH"],
        status: "active"
      }
    ];

    for (const poolData of liquidityPoolsData) {
      await storage.createLiquidityPool(poolData);
    }

    // Seed Governance Proposals
    const governanceProposalsData = [
      {
        title: "Increase Staking Rewards to 30% APY",
        description: "Proposal to increase staking rewards across all EEEEE pools to 30% APY to attract more delegators and strengthen network security. This will be funded from the treasury and implemented over 6 months.",
        status: "active",
        votesFor: "12847392",
        votesAgainst: "2847391", 
        totalVotes: "15694783",
        startDate: new Date(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        createdBy: "EEEEE Foundation"
      },
      {
        title: "Launch EEEEE Metaverse Beta",
        description: "Community vote to launch the EEEEE metaverse beta version with land NFTs, virtual economy, and P2E gaming features. Development timeline: 3 months.",
        status: "active",
        votesFor: "8934821",
        votesAgainst: "1847392",
        totalVotes: "10782213", 
        startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // Started 2 days ago
        endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        createdBy: "Community DAO"
      },
      {
        title: "Cross-chain Bridge Integration",
        description: "Proposal to develop and deploy cross-chain bridges to Ethereum, Polygon, and Binance Smart Chain. This will increase EEEEE accessibility and trading volume.",
        status: "passed",
        votesFor: "18392847",
        votesAgainst: "3847291", 
        totalVotes: "22240138",
        startDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // Started 14 days ago
        endDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Ended 7 days ago
        createdBy: "EEEEE Core Team"
      }
    ];

    for (const proposalData of governanceProposalsData) {
      await storage.createGovernanceProposal(proposalData);
    }

    // Seed Token Prices - populate the database with enterprise-grade pricing data
    const tokenPricesData = [
      {
        symbol: "EEEEE",
        name: "EEEEE", 
        price: "2.47",
        change24h: "24.7",
        volume24h: "45823617",
        marketCap: "1247392847",
        rank: "42",
        circulatingSupply: "500000000",
        totalSupply: "1000000000",
        ath: "3.85",
        atl: "0.12",
        coinGeckoId: "eeeee-cardano",
        logoUrl: "🔥"
      },
      {
        symbol: "ADA",
        name: "Cardano",
        price: "0.47", 
        change24h: "8.2",
        volume24h: "142847392",
        marketCap: "15847392847",
        rank: "8",
        circulatingSupply: "35000000000",
        totalSupply: "45000000000",
        ath: "3.10",
        atl: "0.02",
        coinGeckoId: "cardano",
        logoUrl: "₳"
      }
    ];

    await db.insert(tokenPrices).values(tokenPricesData);
    console.log("✅ Seeded token prices successfully!");

    console.log("✅ Database seeded successfully with EEEEE ecosystem data!");

  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}