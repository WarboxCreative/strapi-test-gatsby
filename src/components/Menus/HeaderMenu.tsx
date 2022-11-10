import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import { StrapiMenus } from '@contracts/strapi'

import * as MenuStyles from './Menu.module.scss'

interface StrapiMenusQuery {
	strapiMenus: StrapiMenus
}

const HeaderMenu = () => {
	const { strapiMenus } = useStaticQuery<StrapiMenusQuery>(graphql`
		query StrapiMenus {
			strapiMenus(attributes: { slug: { eq: "header-menu" } }) {
				attributes {
					items {
						data {
							attributes {
								title
								url
								target
							}
						}
					}
					slug
				}
			}
		}
	`)

	const { items } = strapiMenus.attributes

	return (
		<ul className={MenuStyles.menu}>
			{items.data.map((item, i) => {
				const attributes = item.attributes

				return (
					<li key={`header-menu-${i}`} className={MenuStyles.menuItem}>
						<Link to={attributes.url}>{attributes.title}</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default HeaderMenu
