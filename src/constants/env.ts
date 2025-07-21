export const ENV = {
  fire_apiKey: import.meta.env.VITE_FIRE_API_KEY,
  fire_authDomain: import.meta.env.VITE_FIRE_AUTH_DOMAIN,
  fire_projectId: import.meta.env.VITE_FIRE_PROJECT_ID,
  fire_storageBucket: import.meta.env.VITE_FIRE_STORAGE_BUCKET,
  fire_messagingSenderId: import.meta.env.VITE_FIRE_MESSAGING_SENDER_ID,
  fire_appId: import.meta.env.VITE_FIRE_APP_ID,
  fire_measurementId: import.meta.env.VITE_FIRE_MEASUREMENT_ID
}

console.log(ENV)
