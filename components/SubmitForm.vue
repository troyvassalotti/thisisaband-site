<script>
export default {
	name: "SubmitForm",
};
</script>

<template>
	<section class="form-wrapper flow">
		<h3>Want to submit a band?</h3>
		<p>
			Use this form to submit a band to the site. You don't have to give me a name or email, but by
			not doing so I won't be able to attribute the post to you nor would I be able to contact you
			if there's something weird about your submission.
		</p>
		<p>
			Include as much information as you'd like in the submission box. Write your story, include a
			link to a video or song, etc. Please don't write a novel.
		</p>
		<p>
			If you like working in GitHub and hate this form, you can also request or submit a band by
			<a href="https://github.com/troyvassalotti/thisisaband-site/issues">filing an issue</a>.
		</p>
		<form
			class="submission-form flow"
			method="POST"
			name="Band Submission"
			data-netlify="true"
			data-netlify-honeypot="bot-field">
			<input type="hidden" name="form-name" value="Band Submission" />
			<label style="display: none">Don't fill this out: <input name="bot-field" /></label>
			<div class="form-field">
				<label for="name">Name (optional)</label>
				<input id="name" name="name" placeholder="Cool Person" type="text" />
			</div>
			<div class="form-field">
				<label for="email">Email (optional)</label>
				<input id="email" name="email" type="email" placeholder="you@are.cool" />
			</div>
			<div class="form-field">
				<label for="submission">Submission</label>
				<textarea
					id="submission"
					name="submission"
					required
					placeholder="Please don't write a novel."
					rows="10"></textarea>
			</div>
			<input id="submit" type="submit" value="Submit" />
		</form>
	</section>
</template>

<style scoped>
.form-wrapper {
	margin-block-start: 2rem;
}

.submission-form {
	--spacing: 1ch;
}

.submission-form .form-field {
	display: flex;
	flex-direction: column;
	gap: var(--spacing);
	margin-block: var(--spacing);
}

.submission-form input {
	padding: var(--spacing);
}

.submission-form #submit {
	cursor: pointer;
}

.submission-form :is(input:not([type="submit"]), textarea) {
	box-shadow: 1px 1px 1px currentColor;
}
</style>
