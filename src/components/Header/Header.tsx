import React from 'react'

import Container from '@components/Layout/Container'
import HeaderMenu from '@components/Menus/HeaderMenu'

import * as styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<Container type="wide">
				<p>This is the header</p>
				<HeaderMenu />
			</Container>
		</header>
	)
}

export default Header
