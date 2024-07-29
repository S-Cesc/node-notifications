var admin = require("firebase-admin");

var serviceAccount = require("./app-bus-barcelona-firebase-adminsdk-7cobs-79e1535b78.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const registrationToken = 'c3sWb-LOSt2SN98hw_QOQm:APA91bHrkupguze5Ns5xkJcZ2CIYCddRFqy-8qyUaxS4uGAcw4oKzVovxeI7pDto1LFXnJ3p8xkeWVqz8QdKgQ0NpMl5Gb3JGF_CyEhynzmVjTKBR7t68gf2E9WhE1loLI1BuYx6qUD8';

const message = {
  notification: {
    title: 'Nova prohibició escales metro',
    body: 'TikTok provoca una prohibició en la famosa escala mecànica del metro de Barcelona',
    image: 'https://images.mychannels.video/imgix/productions/2024/4/e0cf5318-088b-4b48-b19d-1933126f6530/image-export%20%281%29.jpg?h=450&w=800&fit=crop&q=70&auto=format%2Ccompress',
  },
  data: {
    uniqueId: (Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 2)) + 1).toString(),
    title: 'Nova prohibició escales metro',
    subtitle: 'TikTok provoca una prohibició en la famosa escala mecànica del metro de Barcelona',
    info: `La gravació de vídeos en les escales mecàniques \
      s'ha convertit en viral en la xarxa TikTok. \
      Per evitar situacions perilloses, les autoritats de TMB
      han establert una nova prohibició en la famosa escala mecànica
      del metro de Sagrada Família.`,
    image: 'https://images.mychannels.video/imgix/productions/2024/4/e0cf5318-088b-4b48-b19d-1933126f6530/image-export%20%281%29.jpg?h=450&w=800&fit=crop&q=70&auto=format%2Ccompress',
    lat: '41.404706388821644',
    lng: '2.1745499395236334',
    locationType: 'Estació',
    operator: 'Metro',
    locationName: 'Sagrada Família'
  },
  token: registrationToken
}

admin.messaging().send(message)
  .then((response) => {
    console.log('Notification sent:', response);
    if (response.failureCount > 0) {
      const failedTokens = [];
      response.responses.forEach((resp, idx) => {
        if (!resp.success) {
          failedTokens.push(registrationTokens[idx]);
        }
      });
      console.log('List of tokens that caused failures:', failedTokens);
    }
  })
  .catch((error) => {
    console.error('Error sending notification:', error);
  });

const registrationTokens = [
  'c3sWb-LOSt2SN98hw_QOQm:APA91bHrkupguze5Ns5xkJcZ2CIYCddRFqy-8qyUaxS4uGAcw4oKzVovxeI7pDto1LFXnJ3p8xkeWVqz8QdKgQ0NpMl5Gb3JGF_CyEhynzmVjTKBR7t68gf2E9WhE1loLI1BuYx6qUD8',
  'fIJD8LZ8S2uF_03rszWhus:APA91bEe5qyBjNW4QSJkNLmnJw6JJtc_jMEWLIMyue7xOMxCqOEHuUAaZBgJAEcDBIb1ZtxZ0lqUWExFYOIGpJrgb216godPrwNNY8l2KFHGCWbmt6SNoPD5z1-b7PPOKuiItyJEimOn'
]

const multicastMessage = {
  notification: {
    title: 'Nova prohibició escales metro',
    body: 'TikTok provoca una prohibició en la famosa escala mecànica del metro de Barcelona',
    image: 'https://images.mychannels.video/imgix/productions/2024/4/e0cf5318-088b-4b48-b19d-1933126f6530/image-export%20%281%29.jpg?h=450&w=800&fit=crop&q=70&auto=format%2Ccompress',
  },
  data: {
    uniqueId: (Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 2)) + 1).toString(),
    title: 'Nova prohibició escales metro',
    subtitle: 'TikTok provoca una prohibició en la famosa escala mecànica del metro de Barcelona',
    info: `La gravació de vídeos en les escales mecàniques \
      s'ha convertit en viral en la xarxa TikTok. \
      Per evitar situacions perilloses, les autoritats de TMB
      han establert una nova prohibició en la famosa escala mecànica
      del metro de Sagrada Família.`,
    image: 'https://images.mychannels.video/imgix/productions/2024/4/e0cf5318-088b-4b48-b19d-1933126f6530/image-export%20%281%29.jpg?h=450&w=800&fit=crop&q=70&auto=format%2Ccompress',
    lat: '41.404706388821644',
    lng: '2.1745499395236334',
    locationType: 'Estació',
    operator: 'Metro',
    locationName: 'Sagrada Família'
  },
  tokens: registrationTokens
}

admin.messaging().sendEachForMulticast(multicastMessage)
  .then((response) => {
    console.log('Notification sent:', response);
    if (response.failureCount > 0) {
      const failedTokens = [];
      response.responses.forEach((resp, idx) => {
        if (!resp.success) {
          failedTokens.push(registrationTokens[idx]);
        }
      });
      console.log('List of tokens that caused failures:', failedTokens);
    }
  })
  .catch((error) => {
    console.error('Error sending notification:', error);
  });
