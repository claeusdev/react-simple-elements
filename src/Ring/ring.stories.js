import React from 'react'
import { storiesOf } from '@storybook/react'
import { Ring } from '../Ring'

export default { title: 'Ring', component: Ring }

storiesOf('Ring', module).add('Ring', () => <Ring />)
