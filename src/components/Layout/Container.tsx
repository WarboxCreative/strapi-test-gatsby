import React from 'react'

import * as styles from './Container.module.scss'

interface Props {
	children: React.ReactNode
}

const Container = (props: Props) => {
	return <div className={styles.container}>{props.children}</div>
}

export default Container
