import React from 'react';
import { messaging } from '../../init-fcm';

class TokenProvider extends React.Component<any, any> {
  async componentDidMount() {
    messaging
      .requestPermission()
      .then(async function() {
        const token = await messaging.getToken();
        // TODO add sending token to BE
        console.log(token);
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
