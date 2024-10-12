
# Web Wallet

Welcome to the **Web Wallet** project! This is a modern cryptocurrency wallet built using React and Vite, designed for seamless interaction with various blockchain networks. The application allows users to manage their digital assets securely and efficiently.

## Live Demo

You can check out the live application [here](https://web-wallet-frontend.vercel.app/).

---

## Features

- **User-Friendly Interface**: Intuitive UI for easy navigation.
- **Multi-Blockchain Support**: Interact with various blockchain networks.
- **Secure Transactions**: Ensure the safety of your assets with advanced security features.
- **Real-time Updates**: Get instant updates on transaction statuses and wallet balances.

---

## Tech Stack

- **React**: For building user interfaces.
- **Vite**: For fast development and build processes.
- **Web3.js**: To interact with the Ethereum blockchain and other compatible networks.
- **Tailwind CSS**: For styling and responsive design.

---

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Clone the Repository

```bash
git clone https://github.com/yourusername/web-wallet.git
cd web-wallet
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see your application in action.

---

## Vercel Deployment

The project is deployed using **Vercel** for automatic scaling and security. However, during deployment, you might encounter the following issue:

### **"Buffer is not defined" Error**

This error typically occurs because Webpack 5 no longer automatically polyfills Node.js core modules such as `Buffer`. You can fix this by using injecting buffer to globalthis object.

### Solution: 

To resolve this issue, add the following in the respective file:

```javascript
import {Buffer} from 'buffer';
globalthis.Buffer=Buffer;
```

This will ensure that the `Buffer` module is available globally, solving the "Buffer is not defined" error during deployment on Vercel.

### Steps to Deploy on Vercel

1. **Login to Vercel**: 
   Visit [Vercel](https://vercel.com/) and log in or sign up.

2. **Connect GitHub Repository**:
   - Link your project repository from GitHub.
   - Select the correct branch to deploy.

3. **Configure Environment Variables**:
   - Go to the project settings on Vercel and add any required environment variables (e.g., blockchain API URLs, Web3 provider URLs).

4. **Automatic Deployment**:
   - Every push to the configured branch will trigger automatic deployments.

5. **Check Live Deployment**: 
   - Once deployed, your app will be available at a Vercel-generated URL or your custom domain.

---

## Troubleshooting

If you run into any issues, such as deployment failures or runtime errors, check the Vercel logs for detailed information. You can also try the following:

- Ensure all dependencies are correctly installed using `npm install` or `yarn install`.
- Verify environment variables are correctly set in both `.env` and Vercel's project settings.
- Check compatibility of polyfills for Node.js modules in browser environments, particularly `crypto`, `stream`, and `buffer`.

---

### Useful Commands

- **Development**: 
  ```bash
  npm run dev
  ```
  Starts the development server with hot reloading at `http://localhost:5173`.

- **Build for Production**:
  ```bash
  npm run build
  ```
  Builds the application for production.

- **Preview Build**:
  ```bash
  npm run preview
  ```
  Previews the built application locally before deploying it.

---

### Acknowledgments

Special thanks to the developers and open-source contributors who maintain the libraries and tools used in this project, such as **React**, **Vite**, **Web3.js**, and **Vercel**. Your continuous efforts make the web development experience smooth and enjoyable!

---

## Contact

For any queries, feel free to reach out:

- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)

---

Enjoy building with Web Wallet! 🚀
