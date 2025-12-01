# TSL Certificates

For macOS users only

## What is it ?


 TSL certificates allow to secure our connection with the HTTPS protocol

## How to use TSL Certificates ?

There are 2 ways to add HTTPS protocol to the app:

### Option 1: Mkcert

This will set up for safari and chrome:

1. Download the __mkcert CLI__ with homebrew <br> `brew install mkcert`

2. __Install the certificates__ your system <br> 

```bash
mkcert -install && mkcert -CAROOT)
```

3\. Go to your vite app folder

```bash
cd ./frontend && pwd
```

4\. Create folder to keep all organized

```bash
mkdir tsl-certificates && cd tsl-certificates
```

5\. Generate the certificates

```bash
sudo mkcert -key-file ./localhost-key.pem -cert-file ./localhost.pem localhost 127.0.0.1 ::1
```

6\. modify vite.config

```bash
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  base: '/react-init/',
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'tsl-certificates', 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'tsl-certificates', 'localhost.pem')),
    },
    host: 'localhost',
    port: 5173,
  },
})
```

7\. Test your server `sudo npm run dev` then `o` and if https applies to the url it means that it perfectly works ✅

## How to set TSL Certificates on firefox ?

`brew install nss`

### Option 2: vit.config

0. install it + initialize it
1. add certfificates to vite `mkcert localhost`
2. enable https natively

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    https: true,  // <-- enable HTTPS
    port: 3000,   // optional
  },
}); 
```

🔸 So just remember that the mkcert way is good for production and the vite.config way for learning and quick testing.
🔸 Now you'ill have to use sudo for any change aven git changes.

We can resolve that ...........to code..........