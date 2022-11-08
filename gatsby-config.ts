require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

import type { GatsbyConfig } from "gatsby";

// Strapi Source Config
const strapiConfig = {
	apiURL: process.env.STRAPI_API_URL,
	accessToken: process.env.STRAPI_API_TOKEN,
	collectionTypes: [
		'post',
		{
			singularName: 'simple-page',
			queryParams: {
				populate: {
					featuredImage: "*",
					seo: {
						populate: "*"
					}
				}
			}
		}
	],
	singleTypes: [],
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby - Strapi Test`,
    siteUrl: `http://localhost:8000`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
	plugins: [
		{
			resolve: `gatsby-source-strapi`,
			options: strapiConfig,
		},
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		}
	]
};

export default config;
