import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Staking Pool routes
  app.get("/api/staking-pools", async (req, res) => {
    try {
      const pools = await storage.getAllStakingPools();
      res.json(pools);
    } catch (error) {
      console.error("Error fetching staking pools:", error);
      res.status(500).json({ message: "Failed to fetch staking pools" });
    }
  });

  app.get("/api/staking-pools/:id", async (req, res) => {
    try {
      const pool = await storage.getStakingPool(req.params.id);
      if (!pool) {
        return res.status(404).json({ message: "Staking pool not found" });
      }
      res.json(pool);
    } catch (error) {
      console.error("Error fetching staking pool:", error);
      res.status(500).json({ message: "Failed to fetch staking pool" });
    }
  });

  // NFT Collection routes
  app.get("/api/nft-collections", async (req, res) => {
    try {
      const collections = await storage.getAllNFTCollections();
      res.json(collections);
    } catch (error) {
      console.error("Error fetching NFT collections:", error);
      res.status(500).json({ message: "Failed to fetch NFT collections" });
    }
  });

  app.get("/api/nft-collections/:id", async (req, res) => {
    try {
      const collection = await storage.getNFTCollection(req.params.id);
      if (!collection) {
        return res.status(404).json({ message: "NFT collection not found" });
      }
      res.json(collection);
    } catch (error) {
      console.error("Error fetching NFT collection:", error);
      res.status(500).json({ message: "Failed to fetch NFT collection" });
    }
  });

  // Liquidity Pool routes
  app.get("/api/liquidity-pools", async (req, res) => {
    try {
      const pools = await storage.getAllLiquidityPools();
      res.json(pools);
    } catch (error) {
      console.error("Error fetching liquidity pools:", error);
      res.status(500).json({ message: "Failed to fetch liquidity pools" });
    }
  });

  // Governance routes
  app.get("/api/governance", async (req, res) => {
    try {
      const proposals = await storage.getAllGovernanceProposals();
      res.json(proposals);
    } catch (error) {
      console.error("Error fetching governance proposals:", error);
      res.status(500).json({ message: "Failed to fetch governance proposals" });
    }
  });

  app.post("/api/governance/:id/vote", async (req, res) => {
    try {
      const { vote, amount } = req.body;
      if (!vote || !amount) {
        return res.status(400).json({ message: "Vote and amount are required" });
      }
      
      await storage.voteOnProposal(req.params.id, vote, amount);
      res.json({ message: "Vote recorded successfully" });
    } catch (error) {
      console.error("Error recording vote:", error);
      res.status(500).json({ message: "Failed to record vote" });
    }
  });

  // Token Price routes
  app.get("/api/token-prices", async (req, res) => {
    try {
      const prices = await storage.getAllTokenPrices();
      res.json(prices);
    } catch (error) {
      console.error("Error fetching token prices:", error);
      res.status(500).json({ message: "Failed to fetch token prices" });
    }
  });

  app.get("/api/token-prices/:symbol", async (req, res) => {
    try {
      const price = await storage.getTokenPrice(req.params.symbol);
      if (!price) {
        return res.status(404).json({ message: "Token price not found" });
      }
      res.json(price);
    } catch (error) {
      console.error("Error fetching token price:", error);
      res.status(500).json({ message: "Failed to fetch token price" });
    }
  });

  // Cardano Wallet routes
  app.get("/api/wallets/:userId", async (req, res) => {
    try {
      const wallets = await storage.getCardanoWallets(req.params.userId);
      res.json(wallets);
    } catch (error) {
      console.error("Error fetching wallets:", error);
      res.status(500).json({ message: "Failed to fetch wallets" });
    }
  });

  app.post("/api/wallets", async (req, res) => {
    try {
      const wallet = await storage.createCardanoWallet(req.body);
      res.status(201).json(wallet);
    } catch (error) {
      console.error("Error creating wallet:", error);
      res.status(500).json({ message: "Failed to create wallet" });
    }
  });

  // Staking Position routes
  app.get("/api/staking-positions/:userId", async (req, res) => {
    try {
      const positions = await storage.getStakingPositions(req.params.userId);
      res.json(positions);
    } catch (error) {
      console.error("Error fetching staking positions:", error);
      res.status(500).json({ message: "Failed to fetch staking positions" });
    }
  });

  app.post("/api/staking-positions", async (req, res) => {
    try {
      const position = await storage.createStakingPosition(req.body);
      res.status(201).json(position);
    } catch (error) {
      console.error("Error creating staking position:", error);
      res.status(500).json({ message: "Failed to create staking position" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
