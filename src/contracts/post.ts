import { StrapiFieldRichText } from './strapi'

export interface Post {
	id: string
	title: string
	content: StrapiFieldRichText
}

export interface Posts extends Array<Post> {}

export interface PostsQueryResult {
	nodes: Posts
}
