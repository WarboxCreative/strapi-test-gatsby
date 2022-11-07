import { StrapiFieldRichText } from './strapi'

export interface StrapiPost {
	id: string
	Title: string
	Content: StrapiFieldRichText
}

export interface StrapiPosts extends Array<StrapiPost> { }

export interface StrapiPostsQueryResult {
	nodes: StrapiPosts
}
