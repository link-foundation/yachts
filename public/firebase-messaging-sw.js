importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js')

const firebaseConfig = {
  apiKey: 'AIzaSyAdW-DEUZuYcN-1snWNcL7QvtkNdibT_vY',
  authDomain: 'deep-97e93.firebaseapp.com',
  projectId: 'deep-97e93',
  storageBucket: 'deep-97e93.appspot.com',
  messagingSenderId: '430972811028',
  appId: '1:430972811028:web:7c43130f8166c437c03401',
  measurementId: 'G-NJ1R8HDWLK',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(firebaseApp);

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

    self.registration.showNotification(payload.notification.title,
      payload.notification);
});