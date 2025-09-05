# EEEEE Website Deployment Guide

## Automatic Deployment to Vercel

This project is configured for automatic deployment to Vercel whenever changes are pushed to the main branch.

### Setup Instructions

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project to Vercel**
   - Click "New Project" in Vercel dashboard
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

3. **Configure GitHub Secrets**
   Add these secrets to your GitHub repository (Settings > Secrets and variables > Actions):
   
   - `VERCEL_TOKEN`: Get from Vercel Account Settings > Tokens
   - `VERCEL_ORG_ID`: Found in Vercel project settings
   - `VERCEL_PROJECT_ID`: Found in Vercel project settings

4. **Environment Variables**
   Set these in Vercel dashboard (Project Settings > Environment Variables):
   ```
   NODE_ENV=production
   DATABASE_URL=your_database_url
   SESSION_SECRET=your_session_secret
   ```

### Manual Deployment

If you prefer manual deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Build Configuration

The project uses these build settings:
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist/public`
- **Node.js Version**: 18.x

### Features Enabled

✅ **All buttons functional** - No browser popups or alerts
✅ **Toast notifications** - User-friendly error/success messages  
✅ **External links** - NFT marketplace and trading platform links
✅ **Wallet integration** - Cardano wallet connection
✅ **Auto-deployment** - GitHub Actions workflow for Vercel

### Troubleshooting

If deployment fails:
1. Check build logs in Vercel dashboard
2. Ensure all environment variables are set
3. Verify GitHub secrets are configured correctly
4. Check that all dependencies are in package.json

### Performance Optimizations

- Static assets are cached by Vercel CDN
- API routes are serverless functions
- Client-side code is minified and optimized
- Images are automatically optimized by Vercel
