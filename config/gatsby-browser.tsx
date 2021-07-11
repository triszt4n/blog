/**
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import '@fontsource/ubuntu/300.css'
import '@fontsource/ubuntu/400.css'
import '@fontsource/ubuntu/500.css'
import '@fontsource/ubuntu/700.css'
import { GatsbyBrowser } from 'gatsby'
import React from 'react'
import '../src/assets/stylesheets/markdown.css'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => <>{element}</>
