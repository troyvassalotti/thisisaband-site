<template>
	<section class="layout">
		<Header :is-info-page="isInfoPage" />
		<div class="content">
			<nuxt />
		</div>
	</section>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
	head() {
		return {
			link: [
				{
					rel: "canonical",
					href: "https://www.thisisa.band" + this.$route.path,
				},
			],
		};
	},
	components: {
		Header,
	},
	computed: {
		isInfoPage() {
			return this.$nuxt._route.name === "info" && true;
		},
	},
};
</script>

<style scoped>
@media (min-width: 768px) {
	.layout {
		display: grid;
		grid-template-columns: 30vw 1fr;
	}
}
</style>
