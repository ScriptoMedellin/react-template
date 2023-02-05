import { analytics } from '../config/firebase';
import { logEvent } from 'firebase/analytics';

const sendToAnalytics = (id, name, value) => {  
  logEvent(analytics, 'event', {
    eventCategory: 'Web Vitals',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
}

const reportWebVitals = sendToAnalytics => {
  if (sendToAnalytics && sendToAnalytics instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    });
  }
};

export default reportWebVitals;

reportWebVitals(sendToAnalytics);