camelize = function camelize(c) {
    return c.replace(/\W+(.)/g, function(m, ch)
     {
          return ch.toUpperCase();
      });
  }
  console.log(camelize("background-color"));
  console.log(camelize("list-style-image"));
  console.log(camelize("-webkit-transition"));