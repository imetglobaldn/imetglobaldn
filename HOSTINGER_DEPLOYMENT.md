# Deploying to Hostinger

This guide will walk you through the process of deploying your Next.js application to Hostinger.

## Prerequisites

- A Hostinger account with a hosting plan
- Access to Hostinger's control panel
- Domain configured with Hostinger (or a subdomain)
- FTP credentials or SSH access to your Hostinger server

## Step 1: Build Your Next.js Application

Before deploying, you need to build your application for production:

```bash
# Navigate to your project directory
cd /path/to/imetglobal

# Install dependencies (if not already installed)
npm install

# Build the application
npm run build
```

## Step 2: Configure Environment Variables

Make sure to set up the required environment variables on Hostinger:

- `NEXT_PUBLIC_CURRENTS_API_KEY`
- `GMAIL_USER`
- `GMAIL_PASS`
- `NEXT_PUBLIC_TINYMCE_API_KEY`

You can set these in Hostinger's control panel or through an `.env` file on the server.

## Step 3: Upload Files to Hostinger

### Option 1: Using FTP

1. Connect to your Hostinger server using an FTP client (like FileZilla)
2. Upload the following directories and files to your Hostinger public_html directory:
   - `.next/` directory
   - `public/` directory
   - `package.json`
   - `next.config.js`
   - `.env` file (with production values)

### Option 2: Using Git Deployment (if available)

If Hostinger supports Git deployment:

1. Push your code to a Git repository
2. Configure Hostinger to pull from your repository
3. Set up deployment hooks to build the application

## Step 4: Install Dependencies on Hostinger

Connect to your Hostinger server via SSH and run:

```bash
cd /path/to/your/site
npm install --production
```

## Step 5: Configure Node.js Environment

Hostinger needs to be configured to run a Node.js application:

1. In Hostinger's control panel, navigate to the Node.js section
2. Set the entry point to `server.js` (create this file if needed)
3. Configure the Node.js version (use the same version as your development environment)

### Create a server.js file

Create a `server.js` file in your project root with the following content:

```javascript
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
```

## Step 6: Start the Application

In Hostinger's control panel, start your Node.js application.

## Step 7: Configure Domain

Make sure your domain or subdomain is pointing to the correct directory where your application is deployed.

## Step 8: Set Up SSL Certificate

Enable HTTPS for your domain through Hostinger's control panel.

## Troubleshooting

- If you encounter issues with routing, make sure your `next.config.js` is properly configured.
- Check Hostinger's error logs if the application fails to start.
- Ensure all environment variables are correctly set.
- Verify that the Node.js version on Hostinger is compatible with your application.

## Alternative: Static Export

If your Next.js application doesn't require server-side rendering, you can use static export:

1. Add the following to your `next.config.js`:

   ```javascript
   module.exports = {
     // ... other config
     output: "export",
   };
   ```

2. Build your application:

   ```bash
   npm run build
   ```

3. Upload the contents of the `out` directory to your Hostinger public_html folder.

This approach doesn't require Node.js on the server as it generates static HTML files.
