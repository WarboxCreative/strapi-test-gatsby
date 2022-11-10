import React from 'react'

import Container from '@components/Layout/Container'

import * as styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<p>This is the header</p>
			</Container>
		</header>
	)
}

export default Header
