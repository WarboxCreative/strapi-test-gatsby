import React from 'react'

interface Props {
	children?: React.ReactNode[]
}

const SEO = (props: Props) => {
	return <div>{props.children}</div>
}

export default SEO
