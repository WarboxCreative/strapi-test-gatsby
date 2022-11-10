import React from 'react'

import * as styles from './Container.module.scss'

interface Props {
	children: React.ReactNode
	type: 'normal' | 'wide'
}

const Container = (props: Props) => {
	const containerStyles = [styles.container]

	if (props.type === 'wide') {
		containerStyles.push(styles.wide)
	}

	return <div className={containerStyles.join(' ')}>{props.children}</div>
}

Container.defaultProps = {
	type: 'normal',
}

export default Container
