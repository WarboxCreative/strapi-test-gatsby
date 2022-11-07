import { StrapiFieldRichText } from './strapi'

export interface Post {
	id: string
	Title: string
	Content: StrapiFieldRichText
}

export interface Posts extends Array<Post> {}

export interface PostsQueryResult {
	nodes: Posts
}
