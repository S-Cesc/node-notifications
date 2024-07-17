const admin = require('firebase-admin');

const serviceAccount = require('./firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const registrationToken = 'cAAuvQfWTAmj1rSSo4Q4gm:APA91bF_MyIuIH4yyGXQCrM4ymwX5xsp2V5tFxkpAmW5CgdqFZ-wGT8UzJynDFv7UDIyN2G_xZAGF8zKmHM0eKSd9pcoehQIPSy-OBz9AoB6z_zynJ-gDLppaKOFmj5qOGhUSzLjBKAJ';
// const message = {
//   data: {
//     title: 'New Notification',
//     body: 'Hello, this is a test notification!'
//   },
//   token: registrationToken
// };

const message =  {
    notification: {
        title: 'Nova vacança',
        body: 'Hem rebut una nova vacanca, consulta-la!',
        image: 'https://www.clinicanoguerol.com/wp-content/uploads/2019/07/verano-gadgets-01.jpg'
    },
    data: {
            id: 'asdcasdcasfdcvadsfv',
            nom: 'Push test',
            preu: '23532',
            descripcio: 'test test decscripcio test test',
            actiu: 'true'
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