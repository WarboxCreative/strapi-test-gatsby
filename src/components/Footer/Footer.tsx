import React from 'react'

import Container from '@components/Layout/Container'

import * as styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<p>This is the footer</p>
			</Container>
		</footer>
	)
}

export default Footer
