# Node.js Installation Instructions

## Steps to Install Node.js

1. **Locate the installer**: Find the `node-v22.18.0-x64.msi` file in your workspace directory.

2. **Run the installer**: 
   - Double-click on the `node-v22.18.0-x64.msi` file to start the installation process.
   - If you see a security warning, click "Yes" or "Run" to proceed.

3. **Installation wizard**:
   - Click "Next" on the welcome screen.
   - Read and accept the license agreement, then click "Next".
   - Choose the installation location (you can keep the default) and click "Next".
   - Select the features to install (you can keep the defaults) and click "Next".
   - Click "Install" to begin the installation process.
   - Wait for the installation to complete.
   - Click "Finish" when the installation is complete.

4. **Verify installation**:
   - Open a new Command Prompt or PowerShell window.
   - Type `node --version` and press Enter to check the Node.js version.
   - Type `npm --version` and press Enter to check the npm version.

5. **Next steps**:
   - Once Node.js is installed, navigate to your project directory.
   - Run `npm install` to install all project dependencies.
   - Run `npm start` to start the development server.

## Troubleshooting

- If the commands are not recognized after installation, you may need to restart your terminal or computer.
- Make sure you're opening a new terminal window after installation.
- If you still have issues, try adding Node.js to your system PATH manually.