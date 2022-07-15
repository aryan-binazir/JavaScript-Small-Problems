(function() {
  var _ = function(element) {
    u = {
      first() {
        return element[0];
      },
      last() {
        return element[element.length - 1];
      },
      without(...args) {
        let array = [];
        
        element.forEach(el => { 
          if(!args.includes(el)) {
            array.push(el)
          }
        });
        return array
      },
      lastIndexOf(elToFindIndex) {
        let indexFound;
        
        for(let currentIndex = 0; currentIndex < element.length; currentIndex += 1) {
          if (elToFindIndex === element[currentIndex]) {
            indexFound = currentIndex;
          }
        }
        return indexFound
      },
      sample(qty) {
        const sampled = [];
        const copy = element.slice();
        const get = function() {
          let idx = Math.floor(Math.random() * copy.length);
          let el = copy[idx];
          copy.splice(idx, 1);
          return el;
        };
      
        if(!qty) {return get();}
        while(qty) {
          sampled.push(get());
          qty--;
        }

        return sampled;
      },
      findWhere(objectTypeToFind) {
        let keys = Object.keys(element);
        for(let index = 0; index < keys.length; index += 1) {
          let currentObj = element[index];
          let currentMatch = true;

          Object.keys(objectTypeToFind).forEach(key => {
            if (currentObj[key] !== objectTypeToFind[key])
          {
            currentMatch = false
          }
          }); 
          if(currentMatch) return currentObj
        }
        return undefined
      },
      where(objectTypeToFind) {
        let result = [];
        let keys = Object.keys(element);
        for(let index = 0; index < keys.length; index += 1) {
          let currentObj = element[index];
          let currentMatch = true;

          Object.keys(objectTypeToFind).forEach(key => {
            if (currentObj[key] !== objectTypeToFind[key])
          {
            currentMatch = false
          }
          }); 
          if(currentMatch) result.push(currentObj);
        }
        
        return result
      },
      pluck(requestedKey) {
        let result = [];
        
        element.forEach(obj => {          
          if(obj[requestedKey]) {
            result.push(obj[requestedKey]);
          }
        });
        return result;
      },
      keys() {
        let keys = [];
        
        for (let prop in element) {
          keys.push(prop);
        }
          
        return keys;
      },
      values() {
        let values = [];
        
        for (let prop in element) {
          values.push(element[prop]);
        }
          
        return values;
      },
    };

    return u;
  };

  _.range = function(start, end) {
    
    let result = [];
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    
    for(let currentNum = start; currentNum < end; currentNum += 1) {
      result.push(currentNum);
    };
    return result
  }

  window._ = _;
})();

