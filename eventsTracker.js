/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', () => {
  let divBlue = document.querySelector('#blue');
  let divRed = document.querySelector('#red');
  let divGreen = document.querySelector('#green');
  let divOrange = document.querySelector('#orange');

  let tracker = (() => {
    const trackedEvents = [];
    return {
      list() {
        return trackedEvents.slice();
      },

      elements() {
        return this.list().map(({target}) => target);
      },

      add(event) {
        trackedEvents.push(event);
      },

      clear() {
        trackedEvents.length = 0;
        return trackedEvents.length;
      },
    };
  })();

  function track(callback) {
    function isEventTracked(events, event) {
      return events.includes(event);
    }

    return event => {
      if (!isEventTracked(tracker.list(), event)) {
        tracker.add(event);
      }

      callback(event);
    };
  }

  divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));

  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));

  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));

  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));

});