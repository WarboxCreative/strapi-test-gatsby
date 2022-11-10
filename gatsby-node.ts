const path = require("path")
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

import { PageProps } from '@contracts/page'

// @ts-ignore
exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	// Get all templates that we're going to use below
	const PageTemplate = path.resolve(`src/templates/Page.tsx`)

	// Create Pages
	const PagesQuery = await graphql(`
		query AllPages {
			allStrapiPage {
				nodes {
					id
					slug
					title
					featuredImage {
						image {
							localFile {
								childImageSharp {
									gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [WEBP, JPG])
								}
							}
						}
					}
					seo {
						metaTitle
						metaDescription
						socialImage {
							localFile {
								childImageSharp {
									gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [WEBP, JPG])
								}
							}
						}
					}
				}
			}
		}
	`)

	if (PagesQuery.errors) {
		return reporter.panicOnBuild('Error while running GraphQL query "AllPages"')
	} else {
		PagesQuery.data.allStrapiPage.nodes.forEach((page: PageProps) => {
			createPage({
				path: `/${page.slug}`,
				component: PageTemplate,
				context: {
					data: { page }
				},
			})
		})
	}
}

// @ts-ignore
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			// Setup some aliases for our imports
			alias: {
				'@components': path.resolve(__dirname, 'src/components'),
				'@hooks': path.resolve(__dirname, 'src/hooks'),
				'@contracts': path.resolve(__dirname, 'src/contracts'),
				'@styles': path.resolve(__dirname, 'src/styles'),
				'@images': path.resolve(__dirname, 'src/images'),
			},
		},
		plugins: [
			// We use this to ignore the conflicting order errors. We're using css modules so these can be safely ignored 
			new FilterWarningsPlugin({
				exclude: /mini-css-extract-plugin[^]*Conflicting order./,
			}),
		],
	})
}
