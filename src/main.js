import { createAppKit } from '@reown/appkit';
import { solanaTestnet } from '@reown/appkit/networks';

const appKit = createAppKit({
  projectId: "3c2b7a316f5617717cb060bfbe7652d0",
  networks: [solanaTestnet],
  customWallets: [
    {
      id: "fordefi",
      name: "ForDefi",
      homepage: "https://www.fordefi.com",
      image_url: "https://fordefi.com/logo.png",
      mobile_link: "fordefi://app",
      desktop_link: "fordefi://app",
      webapp_link: "https://app.fordefi.com",
      app_store: "https://apps.apple.com/app/fordefi",
      play_store: "https://play.google.com/store/apps/details?id=com.fordefi",
    },
  ],
  includeWalletIds: ["fordefi"],
});

document.addEventListener('DOMContentLoaded', () => {
  appKit.open();
});
