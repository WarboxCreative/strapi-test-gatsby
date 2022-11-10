import React from 'react'

import * as styles from './Container.module.scss'

interface Props {
	children: React.ReactNode
	containerClassName?: string
	type?: 'normal' | 'wide'
}

const Container = (props: Props) => {
	const containerStyles = [styles.container]

	if (props.type === 'wide') {
		containerStyles.push(styles.wide)
	}

	if (props.containerClassName) {
		containerStyles.push(props.containerClassName)
	}

	return <div className={containerStyles.join(' ')}>{props.children}</div>
}

Container.defaultProps = {
	type: 'normal',
}

export default Container
