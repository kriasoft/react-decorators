/*!
 * React Decorators
 * MIT License (c) Konstantin Tarkus, Kriasoft LLC
 * https://github.com/kriasoft/react-decorators
 */

import React from 'react';
import { viewport } from './'; // eslint-disable-line no-unused-vars

@viewport
class ViewportTest {
  render() {
    let { width, height } = this.props.viewport;
    return <div>Viewport: {width + 'x' + height}</div>;
  }
}

React.render(<ViewportTest />, document.getElementById('component'));
