// npm
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
	const posts = await getCollection('docs')
	return rss({
		title: "bla bla",
		description: "bla desc.",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/docs2/${post.slug}/`,
		})),
	})
}
