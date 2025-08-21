import { sql, relations } from "drizzle-orm";
import { 
  sqliteTable, 
  text, 
  integer,
  blob,
  index 
} from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = sqliteTable("users", {
  id: text("id").primaryKey().default(sql`(lower(hex(randomblob(16))))`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Session storage table for authentication
export const sessions = sqliteTable(
  "sessions",
  {
    sid: text("sid").primaryKey(),
    sess: text("sess").notNull(),
    expire: integer("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// Enhanced users table for Web3
export const usersTable = sqliteTable("users_table", {
  id: text("id").primaryKey().default(sql`(lower(hex(randomblob(16))))`),
  email: text("email").unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  profileImageUrl: text("profile_image_url"),
  createdAt: integer("created_at").default(sql`(unixepoch())`),
  updatedAt: integer("updated_at").default(sql`(unixepoch())`),
});

// Staking pools for Cardano DeFi
export const stakingPools = sqliteTable("staking_pools", {
  id: text("id").primaryKey().default(sql`(lower(hex(randomblob(16))))`),
  name: text("name").notNull(),
  ticker: text("ticker").notNull(),
  apy: text("apy").notNull(),
  totalStaked: text("total_staked").notNull(),
  validatorFee: text("validator_fee").notNull(),
  status: text("status").default("active"), // active, inactive, full
  description: text("description"),
  createdAt: integer("created_at").default(sql`(unixepoch())`),
  updatedAt: integer("updated_at").default(sql`(unixepoch())`),
});

// NFT Collections for the ecosystem  
export const nftCollections = sqliteTable("nft_collections", {
  id: text("id").primaryKey().default(sql`(lower(hex(randomblob(16))))`),
  name: text("name").notNull(),
  price: text("price").notNull(),
  rarity: text("rarity").notNull(), // Common, Rare, Epic, Legendary
  supply: text("supply").notNull(),
  minted: text("minted").default("0"),
  description: text("description"),
  imageUrl: text("image_url"),
  utilities: text("utilities"), // array of utility features as JSON string
  gradient: text("gradient"),
  createdAt: integer("created_at").default(sql`(unixepoch())`),
  updatedAt: integer("updated_at").default(sql`(unixepoch())`),
});

// DeFi Liquidity Pools
export const liquidityPools = sqliteTable("liquidity_pools", {
  id: text("id").primaryKey().default(sql`(lower(hex(randomblob(16))))`),
  name: text("name").notNull(),
  tokenA: text("token_a").notNull(),
  tokenB: text("token_b").notNull(),
  apr: text("apr").notNull(),
  tvl: text("tvl").notNull(),
  volume24h: text("volume_24h").notNull(),
  fees: text("fees").default("0.3%"),
  rewards: text("rewards"), // reward tokens as JSON string
  status: text("status").default("active"),
  createdAt: integer("created_at").default(sql`(unixepoch())`),
  updatedAt: integer("updated_at").default(sql`(unixepoch())`),
});

// Governance Proposals
export const governanceProposals = sqliteTable("governance_proposals", {
  id: text("id").primaryKey().default(sql`(lower(hex(randomblob(16))))`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status: text("status").default("active"), // active, passed, rejected
  votesFor: text("votes_for").default("0"),
  votesAgainst: text("votes_against").default("0"),
  totalVotes: text("total_votes").default("0"),
  startDate: integer("start_date").default(sql`(unixepoch())`),
  endDate: integer("end_date").notNull(),
  createdBy: text("created_by"),
  createdAt: integer("created_at").default(sql`(unixepoch())`),
  updatedAt: integer("updated_at").default(sql`(unixepoch())`),
});

// Market data for tokens
export const tokenPrices = sqliteTable("token_prices", {
  id: text("id").primaryKey().default(sql`(lower(hex(randomblob(16))))`),
  symbol: text("symbol").notNull(),
  name: text("name").notNull(),
  price: text("price").notNull(),
  change24h: text("change_24h").notNull(),
  volume24h: text("volume_24h").notNull(),
  marketCap: text("market_cap").notNull(),
  circulatingSupply: text("circulating_supply").notNull(),
  lastUpdated: integer("last_updated").default(sql`(unixepoch())`),
});

// User Cardano Wallets
export const cardanoWallets = sqliteTable("cardano_wallets", {
  id: text("id").primaryKey().default(sql`(lower(hex(randomblob(16))))`),
  userId: text("user_id").references(() => usersTable.id),
  walletAddress: text("wallet_address").notNull(),
  walletType: text("wallet_type").notNull(), // nami, eternl, yoroi, etc
  adaBalance: text("ada_balance").default("0"),
  stakedAmount: text("staked_amount").default("0"),
  rewards: text("rewards").default("0"),
  isConnected: integer("is_connected").default(0),
  lastSync: integer("last_sync"),
  createdAt: integer("created_at").default(sql`(unixepoch())`),
  updatedAt: integer("updated_at").default(sql`(unixepoch())`),
});

// User Staking Positions
export const stakingPositions = sqliteTable("staking_positions", {
  id: text("id").primaryKey().default(sql`(lower(hex(randomblob(16))))`),
  userId: text("user_id").references(() => usersTable.id),
  poolId: text("pool_id").references(() => stakingPools.id),
  walletId: text("wallet_id").references(() => cardanoWallets.id),
  stakedAmount: text("staked_amount").notNull(),
  lockPeriod: text("lock_period").notNull(), // flexible, 30_days, 90_days
  lockEndDate: integer("lock_end_date"),
  apy: text("apy").notNull(),
  rewardsEarned: text("rewards_earned").default("0"),
  rewardType: text("reward_type").default("EEEEE"), // EEEEE, partner_token, nft_whitelist
  claimableRewards: text("claimable_rewards").default("0"),
  totalClaimed: text("total_claimed").default("0"),
  lastRewardCalculation: integer("last_reward_calculation").default(sql`(unixepoch())`),
  startDate: integer("start_date").default(sql`(unixepoch())`),
  lastClaim: integer("last_claim"),
  status: text("status").default("active"), // active, unstaking, completed, locked
  transactionHash: text("transaction_hash"), // Cardano transaction hash
  smartContractAddress: text("smart_contract_address"),
  createdAt: integer("created_at").default(sql`(unixepoch())`),
  updatedAt: integer("updated_at").default(sql`(unixepoch())`),
});

// Reward Claims History
export const rewardClaims = sqliteTable("reward_claims", {
  id: text("id").primaryKey().default(sql`(lower(hex(randomblob(16))))`),
  userId: text("user_id").references(() => usersTable.id),
  stakingPositionId: text("staking_position_id").references(() => stakingPositions.id),
  walletId: text("wallet_id").references(() => cardanoWallets.id),
  rewardAmount: text("reward_amount").notNull(),
  rewardType: text("reward_type").notNull(), // EEEEE, partner_token, nft_whitelist
  tokenSymbol: text("token_symbol"),
  transactionHash: text("transaction_hash"), // Cardano transaction hash
  blockHeight: text("block_height"),
  status: text("status").default("pending"), // pending, confirmed, failed
  claimedAt: integer("claimed_at").default(sql`(unixepoch())`),
  confirmedAt: integer("confirmed_at"),
  createdAt: integer("created_at").default(sql`(unixepoch())`),
});

// Staking Snapshots for reward calculation
export const stakingSnapshots = sqliteTable("staking_snapshots", {
  id: text("id").primaryKey().default(sql`(lower(hex(randomblob(16))))`),
  stakingPositionId: text("staking_position_id").references(() => stakingPositions.id),
  snapshotDate: integer("snapshot_date").notNull(),
  stakedAmount: text("staked_amount").notNull(),
  rewardsEarned: text("rewards_earned").notNull(),
  apy: text("apy").notNull(),
  totalValueLocked: text("total_value_locked"),
  poolPerformance: text("pool_performance"),
  createdAt: integer("created_at").default(sql`(unixepoch())`),
});

// Relations
export const usersRelations = relations(usersTable, ({ many }) => ({
  wallets: many(cardanoWallets),
  stakingPositions: many(stakingPositions),
  rewardClaims: many(rewardClaims),
}));

export const cardanoWalletsRelations = relations(cardanoWallets, ({ one, many }) => ({
  user: one(usersTable, {
    fields: [cardanoWallets.userId],
    references: [usersTable.id],
  }),
  stakingPositions: many(stakingPositions),
}));

export const stakingPoolsRelations = relations(stakingPools, ({ many }) => ({
  positions: many(stakingPositions),
}));

export const stakingPositionsRelations = relations(stakingPositions, ({ one, many }) => ({
  user: one(usersTable, {
    fields: [stakingPositions.userId],
    references: [usersTable.id],
  }),
  pool: one(stakingPools, {
    fields: [stakingPositions.poolId],
    references: [stakingPools.id],
  }),
  wallet: one(cardanoWallets, {
    fields: [stakingPositions.walletId],
    references: [cardanoWallets.id],
  }),
  rewardClaims: many(rewardClaims),
}));

export const rewardClaimsRelations = relations(rewardClaims, ({ one }) => ({
  user: one(usersTable, {
    fields: [rewardClaims.userId],
    references: [usersTable.id],
  }),
  stakingPosition: one(stakingPositions, {
    fields: [rewardClaims.stakingPositionId],
    references: [stakingPositions.id],
  }),
}));

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type UpsertUser = typeof usersTable.$inferInsert;

export type StakingPool = typeof stakingPools.$inferSelect;
export type InsertStakingPool = typeof stakingPools.$inferInsert;

export type NFTCollection = typeof nftCollections.$inferSelect;
export type InsertNFTCollection = typeof nftCollections.$inferInsert;

export type LiquidityPool = typeof liquidityPools.$inferSelect;
export type InsertLiquidityPool = typeof liquidityPools.$inferInsert;

export type GovernanceProposal = typeof governanceProposals.$inferSelect;
export type InsertGovernanceProposal = typeof governanceProposals.$inferInsert;

export type TokenPrice = typeof tokenPrices.$inferSelect;
export type InsertTokenPrice = typeof tokenPrices.$inferInsert;

export type CardanoWallet = typeof cardanoWallets.$inferSelect;
export type InsertCardanoWallet = typeof cardanoWallets.$inferInsert;

export type StakingPosition = typeof stakingPositions.$inferSelect;
export type InsertStakingPosition = typeof stakingPositions.$inferInsert;

export type RewardClaim = typeof rewardClaims.$inferSelect;
export type InsertRewardClaim = typeof rewardClaims.$inferInsert;

export type StakingSnapshot = typeof stakingSnapshots.$inferSelect;
export type InsertStakingSnapshot = typeof stakingSnapshots.$inferInsert;
