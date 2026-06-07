import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.nossaplaylist.app',
  appName: 'Nossa Playlist',
  webDir: 'dist',
  android: {
    allowMixedContent: true,
    backgroundColor: '#0a0a0a',
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      backgroundColor: '#0a0a0a',
      showSpinner: false,
    },
  },
}

export default config
