import * as path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import { CreatePagesArgs, CreateNodeArgs } from 'gatsby';
import { Query } from '~/gatsby-graphql-types';

/**
 * @description This onCreateNode function will be called by Gatsby whenever a new node is created (or updated).
 * https://www.gatsbyjs.org/tutorial/part-seven/#creating-slugs-for-pages
 */
export const onCreateNode = ({ node, actions, getNode }: CreateNodeArgs) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: 'posts' });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

/**
 * @description 들어가는 페이지.... 인듯?
 */
export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;
  const PostTemplate = path.resolve(__dirname, '../templates/PostTemplate.tsx');
  const { errors, data } = await graphql<Query>(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );
  if (errors) {
    throw errors;
  }

  const posts = data?.allMarkdownRemark.edges;
  if (posts) {
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      const path = post.node.fields?.slug;
      if (path) {
        createPage({
          path,
          component: PostTemplate,
          context: {
            slug: path,
            previous,
            next
          }
        });
      }
    });
  }
};
