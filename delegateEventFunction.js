document.addEventListener('DOMContentLoaded', () => {

  function delegateEvent(parentElement, selector, eventType, callback) {
    if (parentElement === null) return undefined;
    
    parentElement.addEventListener(eventType, (event) => {
      let targets = parentElement.querySelectorAll(selector)
  
      if ((Array.prototype.slice.call(targets).includes(event.target) && event.target !== parentElement)) {
        callback(event)
      }
    });
    
    return true
  }
  
    const element1 = document.querySelector('table');
    const element2 = document.querySelector('main h1');
    const element3 = document.querySelector('main');
  
    const callback = ({target, currentTarget}) => {
      alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
  };
  
  // console.log(delegateEvent(element1, 'p', 'click', callback));
  // console.log(delegateEvent(element2, 'p', 'click', callback));
  // console.log(delegateEvent(element2, 'h1', 'click', callback));
  // console.log(delegateEvent(element3, 'h1', 'click', callback));
  // console.log(delegateEvent(element3, 'aside p', 'click', callback));
  // console.log(delegateEvent(element2, 'p', 'click', callback));
  });
  
  