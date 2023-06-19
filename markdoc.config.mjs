import { defineMarkdocConfig, nodes } from '@astrojs/markdoc/config';
// import Heading from './src/components/Heading.astro';

// console.log("NODES", JSON.stringify(nodes, null, 2))

export default defineMarkdocConfig({
  nodes
})

/*

export default defineMarkdocConfig({
  nodes: {
    heading: {
      ...nodes.heading, // Preserve default anchor link generation
      render: Heading,
    },
  },
})

*/

/*

import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import Aside from './src/components/Aside.astro';

export default defineMarkdocConfig({
  tags: {
    aside: {
      render: Aside,
      attributes: {
      // Markdoc requires type defs for each attribute.
      // These should mirror the `Props` type of the component
      // you are rendering. 
      // See Markdoc's documentation on defining attributes
      // https://markdoc.dev/docs/attributes#defining-attributes
        type: { type: String },
      }
    },
  },
})

*/
