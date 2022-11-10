import 'normalize.css'

import React from 'react'

import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'

import '@styles/global.scss'

interface Props {
	children: React.ReactNode
}

const Layout = (props: Props) => {
	return (
		<>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</>
	)
}

export default Layout
