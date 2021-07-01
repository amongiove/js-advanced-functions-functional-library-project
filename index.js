const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(data, alert) {
      for (let [key, value] of Object.entries(data)) {
        alert(value);
      }
      return data
    },

    map: function(data, alert) {
      const newData = [];
      for (let [key, value] of Object.entries(data)) {
        newData.push(alert(value));
      }
      return newData;
    },

    reduce: function(data, alert, acc=0) {
      let total = acc;
        for (let [key, value] of Object.entries(data)) {
          total = alert(total, value);
        }
      return total;
    },

    find: function(data, predicate) {
      for (let [key, value] of Object.entries(data)) {
        if (predicate(value)) {
          return value   
      }}
    },

    filter: function(data, predicate) {
      let matches = [];
        for (let [key, value] of Object.entries(data)) {
          if (predicate(value)) {
            matches.push(value)   
        }}
        return matches
    },

    size: function(data) {
      let l = 0
      for (let [key, value] of Object.entries(data)) {
        l ++ 
      }
      return l
    },

    first: function(data, amount=1) {
      if (amount === 1) {
        return data[0]
      }
      else {
        return data.slice(0,amount)
      }
    },

    last: function(data, amount = 1) {
      if (amount === 1) {
        return data[data.length -1]
      }
      else {
        return data.slice(-amount)
      }
    },

    compact: function(data) {
      let newData = []
      for (let i = 0; i < data.length; i++) {
        if (!!data[i]) {
          newData.push(data[i]) 
        }
      }
      return newData
    },

    sortBy: function(data, sorter) {
      let clone = data.slice()
      return clone.sort((a, b) => sorter(a) - sorter(b))
    },

    flatten: function(data, argument = false ) {
      return data.flat(argument ? 1 : Infinity)
    },

    uniq: function(data, sorted, callback) {
      let uniqData = []
      if (callback) {
        let changed = []
        for (let i = 0; i < data.length; i++) {
          let value = callback(data[i])
          if (!changed.includes(value)) {
            changed.push(value)
            uniqData.push(data[i])
          }
        }
      }
      else {
        for (let i = 0; i < data.length; i++) {
          if (!uniqData.includes(data[i])) {
            uniqData.push(data[i])
          }
        } 
      }
      return uniqData

    },

    keys: function(data) {
      let dataKeys = []
      for (let [key, value] of Object.entries(data)) {
        dataKeys.push(key)
      }
      return dataKeys
    },

    values: function(data) {
      let dataValues = []
      for (let [key, value] of Object.entries(data)) {
        dataValues.push(value)
      }
      return dataValues
    },

    functions: function(object) {
      let values = []
      for (let [key, value] of Object.entries(object)) {
        if (typeof value === "function") { 
        values.push(key)
        }
      }
      return values.sort((a, b) => a - b)
    }
  }
})()

fi.libraryMethod()
