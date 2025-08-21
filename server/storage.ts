import { 
  stakingPools, 
  nftCollections, 
  liquidityPools, 
  governanceProposals, 
  tokenPrices,
  cardanoWallets,
  stakingPositions,
  rewardClaims,
  stakingSnapshots,
  type StakingPool,
  type InsertStakingPool,
  type NFTCollection,
  type InsertNFTCollection,
  type LiquidityPool,
  type InsertLiquidityPool,
  type GovernanceProposal,
  type InsertGovernanceProposal,
  type TokenPrice,
  type InsertTokenPrice,
  type CardanoWallet,
  type InsertCardanoWallet,
  type StakingPosition,
  type InsertStakingPosition,
  type RewardClaim,
  type InsertRewardClaim,
  type StakingSnapshot,
  type InsertStakingSnapshot,
  type User, 
  type InsertUser 
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations (legacy)
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Staking Pool operations
  getAllStakingPools(): Promise<StakingPool[]>;
  getStakingPool(id: string): Promise<StakingPool | undefined>;
  createStakingPool(pool: InsertStakingPool): Promise<StakingPool>;
  updateStakingPool(id: string, pool: Partial<StakingPool>): Promise<StakingPool | undefined>;
  
  // NFT Collection operations
  getAllNFTCollections(): Promise<NFTCollection[]>;
  getNFTCollection(id: string): Promise<NFTCollection | undefined>;
  createNFTCollection(collection: InsertNFTCollection): Promise<NFTCollection>;
  updateNFTCollection(id: string, collection: Partial<NFTCollection>): Promise<NFTCollection | undefined>;
  
  // Liquidity Pool operations
  getAllLiquidityPools(): Promise<LiquidityPool[]>;
  getLiquidityPool(id: string): Promise<LiquidityPool | undefined>;
  createLiquidityPool(pool: InsertLiquidityPool): Promise<LiquidityPool>;
  updateLiquidityPool(id: string, pool: Partial<LiquidityPool>): Promise<LiquidityPool | undefined>;
  
  // Governance operations
  getAllGovernanceProposals(): Promise<GovernanceProposal[]>;
  getGovernanceProposal(id: string): Promise<GovernanceProposal | undefined>;
  createGovernanceProposal(proposal: InsertGovernanceProposal): Promise<GovernanceProposal>;
  updateGovernanceProposal(id: string, proposal: Partial<GovernanceProposal>): Promise<GovernanceProposal | undefined>;
  voteOnProposal(proposalId: string, vote: 'for' | 'against', amount: string): Promise<void>;
  
  // Token Price operations
  getAllTokenPrices(): Promise<TokenPrice[]>;
  getTokenPrice(symbol: string): Promise<TokenPrice | undefined>;
  updateTokenPrice(symbol: string, priceData: Partial<TokenPrice>): Promise<TokenPrice | undefined>;
  
  // Cardano Wallet operations  
  getCardanoWallets(userId: string): Promise<CardanoWallet[]>;
  getCardanoWallet(id: string): Promise<CardanoWallet | undefined>;
  createCardanoWallet(wallet: InsertCardanoWallet): Promise<CardanoWallet>;
  updateCardanoWallet(id: string, wallet: Partial<CardanoWallet>): Promise<CardanoWallet | undefined>;
  
  // Staking Position operations
  getStakingPositions(userId: string): Promise<StakingPosition[]>;
  createStakingPosition(position: InsertStakingPosition): Promise<StakingPosition>;
  updateStakingPosition(id: string, position: Partial<StakingPosition>): Promise<StakingPosition | undefined>;
  
  // Reward Claim operations
  getRewardClaims(userId: string): Promise<RewardClaim[]>;
  createRewardClaim(claim: InsertRewardClaim): Promise<RewardClaim>;
  getRewardClaimsByPosition(positionId: string): Promise<RewardClaim[]>;
  
  // Staking Snapshot operations
  createStakingSnapshot(snapshot: InsertStakingSnapshot): Promise<StakingSnapshot>;
  getLatestSnapshot(positionId: string): Promise<StakingSnapshot | undefined>;
  getSnapshotsByPosition(positionId: string): Promise<StakingSnapshot[]>;
  calculateRewards(positionId: string): Promise<number>;
  
  // Additional staking operations
  getAllStakingPositions(): Promise<StakingPosition[]>;
  getStakingPositionById(positionId: string): Promise<StakingPosition | null>;
  updateStakingPosition(positionId: string, updates: Partial<StakingPosition>): Promise<StakingPosition>;
}

export class DatabaseStorage implements IStorage {
  // User operations (legacy compatibility)
  async getUser(id: string): Promise<User | undefined> {
    // Legacy user operations - keeping for compatibility
    return undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    return { ...insertUser, id };
  }
  
  // Staking Pool operations
  async getAllStakingPools(): Promise<StakingPool[]> {
    return await db.select().from(stakingPools).orderBy(desc(stakingPools.createdAt));
  }

  async getStakingPool(id: string): Promise<StakingPool | undefined> {
    const [pool] = await db.select().from(stakingPools).where(eq(stakingPools.id, id));
    return pool || undefined;
  }

  async createStakingPool(pool: InsertStakingPool): Promise<StakingPool> {
    const [newPool] = await db.insert(stakingPools).values(pool).returning();
    return newPool;
  }

  async updateStakingPool(id: string, pool: Partial<StakingPool>): Promise<StakingPool | undefined> {
    const [updatedPool] = await db
      .update(stakingPools)
      .set({ ...pool, updatedAt: new Date() })
      .where(eq(stakingPools.id, id))
      .returning();
    return updatedPool || undefined;
  }

  // NFT Collection operations
  async getAllNFTCollections(): Promise<NFTCollection[]> {
    return await db.select().from(nftCollections).orderBy(desc(nftCollections.createdAt));
  }

  async getNFTCollection(id: string): Promise<NFTCollection | undefined> {
    const [collection] = await db.select().from(nftCollections).where(eq(nftCollections.id, id));
    return collection || undefined;
  }

  async createNFTCollection(collection: InsertNFTCollection): Promise<NFTCollection> {
    const [newCollection] = await db.insert(nftCollections).values(collection).returning();
    return newCollection;
  }

  async updateNFTCollection(id: string, collection: Partial<NFTCollection>): Promise<NFTCollection | undefined> {
    const [updatedCollection] = await db
      .update(nftCollections)
      .set({ ...collection, updatedAt: new Date() })
      .where(eq(nftCollections.id, id))
      .returning();
    return updatedCollection || undefined;
  }

  // Liquidity Pool operations
  async getAllLiquidityPools(): Promise<LiquidityPool[]> {
    return await db.select().from(liquidityPools).orderBy(desc(liquidityPools.createdAt));
  }

  async getLiquidityPool(id: string): Promise<LiquidityPool | undefined> {
    const [pool] = await db.select().from(liquidityPools).where(eq(liquidityPools.id, id));
    return pool || undefined;
  }

  async createLiquidityPool(pool: InsertLiquidityPool): Promise<LiquidityPool> {
    const [newPool] = await db.insert(liquidityPools).values(pool).returning();
    return newPool;
  }

  async updateLiquidityPool(id: string, pool: Partial<LiquidityPool>): Promise<LiquidityPool | undefined> {
    const [updatedPool] = await db
      .update(liquidityPools)
      .set({ ...pool, updatedAt: new Date() })
      .where(eq(liquidityPools.id, id))
      .returning();
    return updatedPool || undefined;
  }

  // Governance operations
  async getAllGovernanceProposals(): Promise<GovernanceProposal[]> {
    return await db.select().from(governanceProposals).orderBy(desc(governanceProposals.createdAt));
  }

  async getGovernanceProposal(id: string): Promise<GovernanceProposal | undefined> {
    const [proposal] = await db.select().from(governanceProposals).where(eq(governanceProposals.id, id));
    return proposal || undefined;
  }

  async createGovernanceProposal(proposal: InsertGovernanceProposal): Promise<GovernanceProposal> {
    const [newProposal] = await db.insert(governanceProposals).values(proposal).returning();
    return newProposal;
  }

  async updateGovernanceProposal(id: string, proposal: Partial<GovernanceProposal>): Promise<GovernanceProposal | undefined> {
    const [updatedProposal] = await db
      .update(governanceProposals)
      .set({ ...proposal, updatedAt: new Date() })
      .where(eq(governanceProposals.id, id))
      .returning();
    return updatedProposal || undefined;
  }

  async voteOnProposal(proposalId: string, vote: 'for' | 'against', amount: string): Promise<void> {
    const proposal = await this.getGovernanceProposal(proposalId);
    if (!proposal) return;

    const currentVotesFor = parseInt(proposal.votesFor || '0');
    const currentVotesAgainst = parseInt(proposal.votesAgainst || '0');
    const voteAmount = parseInt(amount);

    const updates: Partial<GovernanceProposal> = {
      votesFor: vote === 'for' ? (currentVotesFor + voteAmount).toString() : proposal.votesFor,
      votesAgainst: vote === 'against' ? (currentVotesAgainst + voteAmount).toString() : proposal.votesAgainst,
      totalVotes: (parseInt(proposal.totalVotes || '0') + voteAmount).toString(),
      updatedAt: new Date(),
    };

    await this.updateGovernanceProposal(proposalId, updates);
  }

  // Token Price operations
  async getAllTokenPrices(): Promise<TokenPrice[]> {
    return await db.select().from(tokenPrices).orderBy(desc(tokenPrices.lastUpdated));
  }

  async getTokenPrice(symbol: string): Promise<TokenPrice | undefined> {
    const [price] = await db.select().from(tokenPrices).where(eq(tokenPrices.symbol, symbol));
    return price || undefined;
  }

  async updateTokenPrice(symbol: string, priceData: Partial<TokenPrice>): Promise<TokenPrice | undefined> {
    const [updatedPrice] = await db
      .update(tokenPrices)
      .set({ ...priceData, lastUpdated: new Date() })
      .where(eq(tokenPrices.symbol, symbol))
      .returning();
    return updatedPrice || undefined;
  }

  // Cardano Wallet operations
  async getCardanoWallets(userId: string): Promise<CardanoWallet[]> {
    return await db.select().from(cardanoWallets).where(eq(cardanoWallets.userId, userId));
  }

  async getCardanoWallet(id: string): Promise<CardanoWallet | undefined> {
    const [wallet] = await db.select().from(cardanoWallets).where(eq(cardanoWallets.id, id));
    return wallet || undefined;
  }

  async createCardanoWallet(wallet: InsertCardanoWallet): Promise<CardanoWallet> {
    const [newWallet] = await db.insert(cardanoWallets).values(wallet).returning();
    return newWallet;
  }

  async updateCardanoWallet(id: string, wallet: Partial<CardanoWallet>): Promise<CardanoWallet | undefined> {
    const [updatedWallet] = await db
      .update(cardanoWallets)
      .set({ ...wallet, updatedAt: new Date() })
      .where(eq(cardanoWallets.id, id))
      .returning();
    return updatedWallet || undefined;
  }

  // Staking Position operations
  async getStakingPositions(userId: string): Promise<StakingPosition[]> {
    return await db.select().from(stakingPositions).where(eq(stakingPositions.userId, userId));
  }

  async createStakingPosition(position: InsertStakingPosition): Promise<StakingPosition> {
    const [newPosition] = await db.insert(stakingPositions).values(position).returning();
    return newPosition;
  }

  async updateStakingPosition(id: string, position: Partial<StakingPosition>): Promise<StakingPosition | undefined> {
    const [updatedPosition] = await db
      .update(stakingPositions)
      .set({ ...position, updatedAt: new Date() })
      .where(eq(stakingPositions.id, id))
      .returning();
    return updatedPosition || undefined;
  }

  // Reward Claim operations
  async getRewardClaims(userId: string): Promise<RewardClaim[]> {
    return await db.select().from(rewardClaims).where(eq(rewardClaims.userId, userId)).orderBy(desc(rewardClaims.claimedAt));
  }

  async createRewardClaim(claim: InsertRewardClaim): Promise<RewardClaim> {
    const [newClaim] = await db.insert(rewardClaims).values({
      ...claim,
      id: randomUUID(),
      claimedAt: new Date()
    }).returning();
    return newClaim;
  }

  async getRewardClaimsByPosition(positionId: string): Promise<RewardClaim[]> {
    return await db.select().from(rewardClaims).where(eq(rewardClaims.stakingPositionId, positionId)).orderBy(desc(rewardClaims.claimedAt));
  }

  // Staking Snapshot operations
  async createStakingSnapshot(snapshot: InsertStakingSnapshot): Promise<StakingSnapshot> {
    const [newSnapshot] = await db.insert(stakingSnapshots).values({
      ...snapshot,
      id: randomUUID(),
      snapshotDate: new Date()
    }).returning();
    return newSnapshot;
  }

  async getLatestSnapshot(positionId: string): Promise<StakingSnapshot | undefined> {
    const [snapshot] = await db.select().from(stakingSnapshots)
      .where(eq(stakingSnapshots.stakingPositionId, positionId))
      .orderBy(desc(stakingSnapshots.snapshotDate))
      .limit(1);
    return snapshot;
  }

  async getSnapshotsByPosition(positionId: string): Promise<StakingSnapshot[]> {
    return await db.select().from(stakingSnapshots)
      .where(eq(stakingSnapshots.stakingPositionId, positionId))
      .orderBy(desc(stakingSnapshots.snapshotDate));
  }

  async calculateRewards(positionId: string): Promise<number> {
    const position = await db.select().from(stakingPositions).where(eq(stakingPositions.id, positionId)).limit(1);
    if (!position[0]) return 0;

    const { stakedAmount, apy, startDate, lastRewardCalculation } = position[0];
    const now = new Date();
    const lastCalc = lastRewardCalculation || startDate;
    const daysSinceLastCalc = Math.floor((now.getTime() - lastCalc.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysSinceLastCalc <= 0) return 0;
    
    // Calculate daily reward based on APY
    const dailyRate = (apy || 0) / 365 / 100;
    const reward = parseFloat(stakedAmount) * dailyRate * daysSinceLastCalc;
    
    return Math.floor(reward * 1000000) / 1000000; // Round to 6 decimal places
  }

  async getAllStakingPositions(): Promise<StakingPosition[]> {
    return await db.select().from(stakingPositions).orderBy(desc(stakingPositions.startDate));
  }

  async getStakingPositionById(positionId: string): Promise<StakingPosition | null> {
    const [position] = await db.select().from(stakingPositions).where(eq(stakingPositions.id, positionId));
    return position || null;
  }
}

export const storage = new DatabaseStorage();
