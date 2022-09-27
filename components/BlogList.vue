<script>
export default {
	props: {
		posts: {
			type: Array,
			required: true,
		},
	},
	computed: {
		sortedPosts() {
			const sortedPosts = this.posts;
			sortedPosts.sort((a, b) => {
				const dateA = new Date(a.attributes.date);
				const dateB = new Date(b.attributes.date);
				if (dateA < dateB) {
					return 1;
				}
				if (dateA > dateB) {
					return -1;
				}
				return 0;
			});
			return sortedPosts;
		},
	},
	methods: {
		formatDate(date) {
			return new Date(date).toDateString().slice(4);
		},
		formatExcerpt(body) {
			return body.slice(0, 200).trimEnd();
		},
		formatSlug(title) {
			const regex = / /gi;
			return title.toLowerCase().trim().replace(regex, "-");
		},
	},
};
</script>

<template>
	<main id="main">
		<ul class="list" role="list">
			<li v-for="post in sortedPosts" :key="post.attributes.title">
				<NuxtLink :to="`${formatSlug(post.attributes.title)}`">
					<div class="hero_image">
						<img
							:src="post.attributes.hero_image"
							:alt="post.attributes.title"
							width="400"
							height="250"
							loading="lazy"
							decoding="async" />
					</div>
					<div class="blogList__info">
						<h2>{{ post.attributes.title }}</h2>
						<p>{{ formatDate(post.attributes.date) }}</p>
						<p>{{ formatExcerpt(post.body) }}...</p>
					</div>
				</NuxtLink>
			</li>
		</ul>
	</main>
</template>

<style scoped>
.list a {
	color: inherit;
	display: flex;
	flex-direction: column;
	opacity: inherit;
	text-decoration: none;
}

.list a:hover .hero_image img {
	opacity: 0.8;
	transition: opacity 0.3s ease;
}

.hero_image {
	min-block-size: 33.333vh;
	overflow: hidden;
}

.hero_image img {
	min-block-size: 100%;
	min-inline-size: 100%;
	object-fit: cover;
	object-position: center;
	opacity: 1;
	transition: opacity 0.3s ease;
}

.blogList__info {
	border-bottom: 1px solid var(--border-color);
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1.5rem;
}

.blogList__info :is(h2, h3, p) {
	transition: transform 0.5s ease-out;
}

.blogList__info h2 {
	margin-block-end: 0.5rem;
}

.blogList__info p {
	max-inline-size: 900px;
}

@media (min-width: 768px) {
	.list a {
		flex-direction: row;
		min-block-size: 33.333vh;
	}

	.list a:hover :is(h2, p) {
		transition: transform 0.5s ease-out;
		transform: translateX(10px);
	}

	.hero_image {
		min-block-size: 100%;
	}

	.blogList__info {
		min-inline-size: 70%;
	}
}
</style>
