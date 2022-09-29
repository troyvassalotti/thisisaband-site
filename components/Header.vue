<script>
export default {
	props: {
		isInfoPage: Boolean,
	},
	computed: {
		infoRoute() {
			return this.isInfoPage ? "/" : "/info/";
		},
	},
};
</script>

<template>
	<header class="header">
		<nav class="nav">
			<h1>
				<NuxtLink to="/">This is a Band</NuxtLink>
			</h1>
			<div>
				<h2>
					<NuxtLink :to="infoRoute">{{ isInfoPage ? "close" : "info" }}</NuxtLink>
				</h2>
			</div>
		</nav>
	</header>
</template>

<style scoped>
a {
	color: inherit;
	text-decoration: none;
}

.nav {
	--item-alignment: center;

	align-items: var(--item-alignment);
	border-bottom: 1px solid var(--border-color);
	display: flex;
	justify-content: space-between;
	padding: 1.5rem;
}

@media (min-width: 768px) {
	/* Keeps the header in view while scrolling */
	.header {
		block-size: 100vh;
		inset-block-start: 0;
		position: sticky;
	}

	/* Turn the navigation into a column */
	.nav {
		--item-alignment: flex-start;

		block-size: 100%;
		border-bottom: none;
		border-right: 1px solid var(--border-color);
		flex-direction: column;
	}
}
</style>
