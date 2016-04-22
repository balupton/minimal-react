import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/app.js'

test('render with container div', (t) => {
    const wrapper = shallow(React.createElement(App))
    t.is(wrapper.find('h1').length, 1)
})
