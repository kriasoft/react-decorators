/**
 * React Decorators
 * Copyright (c) Konstantin Tarkus | MIT License
 */

import React from 'react/addons';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import withViewport from '../src/withViewport.js';

const TestUtils = React.addons.TestUtils;

describe('withViewport', () => {

  it('Should set a default viewport', () => {
    class MyComponent { }

    const ViewportComponent = withViewport(MyComponent);
    const renderer = TestUtils.createRenderer();

    renderer.render(<ViewportComponent />);
    const output = renderer.getRenderOutput();

    expect(output._store.props.viewport).to.exist;
    expect(output._store.props.viewport).to.deep.equal({ width: 1366, height: 768 });
  });

});
