const path = require('path');

const doctorTemplate = path.resolve(`./src/templates/doctor.jsx`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            category
          }
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes;

  // you'll call `createPage` for each result
  posts.forEach(node => {
    console.log('----', node.frontmatter.slug, node.fields.slug, node.frontmatter.slug || node.fields.slug);
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: node.frontmatter.slug || node.fields.slug,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: `${doctorTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, category: node.frontmatter.category },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: 'slug',
      value: `/${fileNode.relativeDirectory}`,
    });
  }
};
