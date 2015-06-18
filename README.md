# React Decorators

> A collection of higher-order React components

### How to Install

[![npm/react-decorators](https://nodei.co/npm/react-decorators.png?compact=true)](https://www.npmjs.org/package/react-decorators)

```shell
$ npm install react-decorators --save
```

### How to Use

```js
import React from 'react';
import withViewport from 'react-decorators/withViewport';

@withViewport
class MyComponent {
  render() {
    let { width, height } = this.props.viewport;
    return <div>Viewport: {width + 'x' + height}</div>;
  }
}

React.render(<MyComponent />, document.body);
```

*More decorators coming soon...*

### Related Projects

- [React Starter Kit](https://github.com/kriasoft/react-starter-kit)
- [React Starter Kit Add-ons](https://github.com/kriasoft/react-starter-kit-addons)
- [React Style Guide](https://github.com/kriasoft/react-starter-kit/blob/master/docs/react-style-guide.md)
- [React Static Boilerplate](https://github.com/koistya/react-static-boilerplate)

### Copyright

The MIT License (c) Konstantin Tarkus ([@koistya](https://twitter.com/koistya)), Kriasoft LLC
