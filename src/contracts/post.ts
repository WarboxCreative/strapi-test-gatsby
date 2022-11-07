export interface StrapiPost {
	id: string
	Title: string
	Content: {
		data: {
			Content: string
		}
	}
}

export interface StrapiPosts extends Array<StrapiPost> { }

export interface StrapiPostsQueryResult {
	nodes: StrapiPosts
}
