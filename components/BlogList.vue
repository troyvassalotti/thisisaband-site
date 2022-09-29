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
		<ul class="post-list" role="list">
			<li v-for="post in sortedPosts" :key="post.attributes.title">
				<NuxtLink class="post-list__link" :to="`${formatSlug(post.attributes.title)}`">
					<img
						class="hero_image"
						:src="post.attributes.hero_image"
						:alt="post.attributes.title"
						width="400"
						height="250"
						loading="lazy"
						decoding="async" />
					<div class="post-list__info flow">
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
/* The link that wraps the post card */
.post-list__link {
	--flow-space: 1ch;

	border-bottom: 1px solid var(--border-color);
	color: inherit;
	opacity: inherit;
	/* Prevent horizontal scrollbar on hover animation */
	overflow: hidden;
	text-decoration: none;
}

.hero_image {
	min-block-size: 100%;
	min-inline-size: 100%;
	min-block-size: 33.333vh;
	object-fit: cover;
	object-position: center;
	transition: opacity 0.3s ease;
}

/* Adjust appearance of only the hero image when the card is hovered */
.post-list__link:hover .hero_image {
	opacity: 0.8;
}

.post-list__info {
	padding-block: 2rem;
	padding-inline: 1.5rem;
}

@media (min-width: 768px) {
	.post-list__link {
		display: grid;
		grid-template-columns: 30% 1fr;
		place-items: center;
	}

	.post-list__info {
		transition: transform 0.5s ease-out;
	}

	.post-list__link:hover .post-list__info {
		transform: translateX(10px);
	}
}
</style>
