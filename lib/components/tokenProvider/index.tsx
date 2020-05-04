import React from 'react';
import { messaging } from '../../init-fcm';
import axios from 'axios';

class TokenProvider extends React.Component<any, any> {
  async componentDidMount() {
    messaging
      .requestPermission()
      .then(async function() {
        const token = await messaging.getToken();
        // TODO add sending token to BE
        console.log(token);
        axios
          .post('https://bc5b34b7.ngrok.io/api/user', {
            tokenId: token
          }, {
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          })
          .then(value => {
            console.log(value.data);
          });
      })
      .catch(function(err) {
        console.log('Unable to get permission to notify.', err);
      });
    navigator.serviceWorker.addEventListener('message', message => console.log(message));
  }

  render() {
    return null;
  }
}

export default TokenProvider;
