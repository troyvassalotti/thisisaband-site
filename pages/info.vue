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
			description: "This blog is about your favorite bands.",
			contact: {
				email: "contact@thisisa.band",
				twitter_handle: "validcharacters",
				github_handle: "troyvassalotti",
			},
		};
	},
	computed: {
		isInfoPage() {
			return this.$nuxt._route.name === "info" && true;
		},
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
	<main id="main" class="flow">
		<h2>{{ this.description }}</h2>
		<section class="flow">
			<p>
				One night, I was looking for a new domain to buy and stumbled upon <em>thisisa.band</em>. It
				served a completely different purpose at the time, but it wasn't long before I thought of a
				better way to put this internet real estate to use. <em>This Is A Band</em> is a place for
				you to spread the word about the bands in your life, but not just for the hell of it.
			</p>
			<ul>
				<li>
					<p>
						Did you see this amazing band on your travels in Europe that you'd never heard of and
						think everyone else needs to hear them?
					</p>
				</li>
				<li>
					<p>
						While you were on tour with your own band, did you perform alongside just the greatest
						people you'd ever met and feel like everyone else needs to know how great they were?
					</p>
				</li>
				<li>
					<p>
						Maybe you were going through a tough time a few years ago and this one band was the
						reason you're where you are today?
					</p>
				</li>
			</ul>
			<p>Whatever the reason is, <em>This is a Band</em> is the place to talk about it.</p>
		</section>
		<ul role="list">
			<li>
				<a :href="`mailto:${this.contact.email}`">Email: {{ this.contact.email }}</a>
			</li>
			<li>
				<a :href="`https://twitter.com/${this.contact.twitter_handle}`"
					>Twitter: @{{ this.contact.twitter_handle }}</a
				>
			</li>
			<li>
				<a :href="`https://github.com/${this.contact.github_handle}`"
					>GitHub: {{ this.contact.github_handle }}</a
				>
			</li>
		</ul>
		<SubmitForm />
	</main>
</template>

<style scoped>
main {
	max-inline-size: 800px;
	padding: 1.5rem;
}
</style>
