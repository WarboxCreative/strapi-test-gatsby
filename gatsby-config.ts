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
			siteUrl: `http://localhost:8000`,
			twitterHandle: `@warboxcreative`,
	},
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
