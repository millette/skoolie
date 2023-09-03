import { defineMarkdocConfig, nodes } from '@astrojs/markdoc/config';
// import Heading from './src/components/Heading.astro';

// console.log("NODES", JSON.stringify(nodes, null, 2))

// TODO: define link tag to pass marketplace var in FAQ
// see https://markdoc.dev/docs/tags
// https://markdoc.dev/docs/variables#caveats
// {% link href=$marketplace %}Marketplace{% /link %}

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

// FIXED FOR 0.4.0 <https://github.com/withastro/astro/releases/tag/%40astrojs%2Fmarkdoc%400.4.0>
import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';
// import Aside from './src/components/Aside.astro';

export default defineMarkdocConfig({
  tags: {
    aside: {
      // FIXED FOR 0.4.0 <https://github.com/withastro/astro/releases/tag/%40astrojs%2Fmarkdoc%400.4.0>
      // render: Aside,
      render: component('./src/components/Aside.astro'),
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
