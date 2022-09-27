<script>
import SubmitForm from "~/components/SubmitForm.vue";

export default {
	layout: "layout",
	components: {
		SubmitForm,
	},
	data() {
		return {
			title: "Info",
			description: "This is a blog about music for people who like music.",
		};
	},
	computed: {
		isInfoPage() {
			return this.$nuxt._route.name === "info" && true;
		},
	},
	async asyncData() {
		try {
			const data = await import(`~/content/data/info.json`);
			return {
				data,
			};
		} catch (err) {
			return false;
		}
	},
	head() {
		return {
			title: this.title,
			description: this.description,
		};
	},
};
</script>

<template>
	<main id="main" class="info_blurb">
		<h2>{{ data.description }}</h2>
		<section v-html="data.cta"></section>
		<ul role="list">
			<li>
				<p>
					<a :href="`mailto:${data.contact.email}`">Email: {{ data.contact.email }}</a>
				</p>
			</li>
			<li>
				<p>
					<a :href="`https://twitter.com/${data.contact.twitter_handle}`"
						>Twitter: @{{ data.contact.twitter_handle }}</a
					>
				</p>
			</li>
			<li>
				<p>
					<a :href="`https://github.com/${data.contact.github_handle}`"
						>GitHub: {{ data.contact.github_handle }}</a
					>
				</p>
			</li>
		</ul>
		<SubmitForm />
	</main>
</template>

<style scoped>
.info_blurb {
	max-inline-size: 800px;
	padding: 1.5rem;
}

.info_blurb h2 {
	margin-block-end: revert;
}
</style>
