import React from 'react'

import { StrapiFieldRichText } from '@contracts/strapi'

interface Props {
	content: StrapiFieldRichText
}

const RichText = (props: Props) => {
	return <div dangerouslySetInnerHTML={{ __html: props.content.data.content }}></div>
}

export default RichText
