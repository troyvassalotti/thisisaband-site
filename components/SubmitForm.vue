<script>
export default {
	name: "SubmitForm",
};
</script>

<template>
	<section class="form-wrapper">
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
			class="submission"
			method="POST"
			name="Band Submission"
			data-netlify="true"
			data-netlify-honeypot="bot-field">
			<input type="hidden" name="form-name" value="Band Submission" />
			<label style="display: none">Don’t fill this out: <input name="bot-field" /></label>
			<label for="name"
				>Name (optional)<input id="name" name="name" placeholder="Cool Person" type="text"
			/></label>
			<label for="email"
				>Email (optional)<input id="email" name="email" type="email" placeholder="you@are.cool"
			/></label>
			<label for="submission"
				>Submission<textarea
					id="submission"
					name="submission"
					required
					placeholder="Please don't write a novel."></textarea>
			</label>
			<input id="submit" type="submit" value="Submit" />
		</form>
	</section>
</template>

<style scoped>
.form-wrapper {
	--spacing: 1ch;
	margin-block-start: 2rem;
}

h3 {
	margin-block: revert;
}

form {
	display: flex;
	flex-direction: column;
	gap: var(--spacing);
}

label {
	display: flex;
	flex-direction: column;
	margin-block: var(--spacing);
}

input {
	padding: var(--spacing);
}

#submission {
	block-size: 10em;
}

#submit {
	cursor: pointer;
	inline-size: max-content;
}
</style>
