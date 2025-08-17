import { sql, relations } from "drizzle-orm";
import { 
  pgTable, 
  text, 
  varchar, 
  timestamp, 
  jsonb, 
  boolean,
  index 
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Session storage table for authentication
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// Enhanced users table for Web3
export const usersTable = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Staking pools for Cardano DeFi
export const stakingPools = pgTable("staking_pools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: varchar("name").notNull(),
  ticker: varchar("ticker").notNull(),
  apy: varchar("apy").notNull(),
  totalStaked: varchar("total_staked").notNull(),
  validatorFee: varchar("validator_fee").notNull(),
  status: varchar("status").default("active"), // active, inactive, full
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// NFT Collections for the ecosystem  
export const nftCollections = pgTable("nft_collections", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: varchar("name").notNull(),
  price: varchar("price").notNull(),
  rarity: varchar("rarity").notNull(), // Common, Rare, Epic, Legendary
  supply: varchar("supply").notNull(),
  minted: varchar("minted").default("0"),
  description: text("description"),
  imageUrl: varchar("image_url"),
  utilities: jsonb("utilities"), // array of utility features
  gradient: varchar("gradient"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// DeFi Liquidity Pools
export const liquidityPools = pgTable("liquidity_pools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: varchar("name").notNull(),
  tokenA: varchar("token_a").notNull(),
  tokenB: varchar("token_b").notNull(),
  apr: varchar("apr").notNull(),
  tvl: varchar("tvl").notNull(),
  volume24h: varchar("volume_24h").notNull(),
  fees: varchar("fees").default("0.3%"),
  rewards: jsonb("rewards"), // reward tokens
  status: varchar("status").default("active"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Governance Proposals
export const governanceProposals = pgTable("governance_proposals", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: varchar("title").notNull(),
  description: text("description").notNull(),
  status: varchar("status").default("active"), // active, passed, rejected
  votesFor: varchar("votes_for").default("0"),
  votesAgainst: varchar("votes_against").default("0"),
  totalVotes: varchar("total_votes").default("0"),
  startDate: timestamp("start_date").defaultNow(),
  endDate: timestamp("end_date").notNull(),
  createdBy: varchar("created_by"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Market data for tokens
export const tokenPrices = pgTable("token_prices", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  symbol: varchar("symbol").notNull(),
  name: varchar("name").notNull(),
  price: varchar("price").notNull(),
  change24h: varchar("change_24h").notNull(),
  volume24h: varchar("volume_24h").notNull(),
  marketCap: varchar("market_cap").notNull(),
  circulatingSupply: varchar("circulating_supply").notNull(),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

// User Cardano Wallets
export const cardanoWallets = pgTable("cardano_wallets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => usersTable.id),
  walletAddress: varchar("wallet_address").notNull(),
  walletType: varchar("wallet_type").notNull(), // nami, eternl, yoroi, etc
  adaBalance: varchar("ada_balance").default("0"),
  stakedAmount: varchar("staked_amount").default("0"),
  rewards: varchar("rewards").default("0"),
  isConnected: boolean("is_connected").default(false),
  lastSync: timestamp("last_sync"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// User Staking Positions
export const stakingPositions = pgTable("staking_positions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => usersTable.id),
  poolId: varchar("pool_id").references(() => stakingPools.id),
  walletId: varchar("wallet_id").references(() => cardanoWallets.id),
  stakedAmount: varchar("staked_amount").notNull(),
  rewardsEarned: varchar("rewards_earned").default("0"),
  startDate: timestamp("start_date").defaultNow(),
  lastClaim: timestamp("last_claim"),
  status: varchar("status").default("active"), // active, unstaking, completed
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Relations
export const usersRelations = relations(usersTable, ({ many }) => ({
  wallets: many(cardanoWallets),
  stakingPositions: many(stakingPositions),
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

export const stakingPositionsRelations = relations(stakingPositions, ({ one }) => ({
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
