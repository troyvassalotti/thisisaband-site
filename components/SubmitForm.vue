<template>
  <section class='form-wrapper'>
    <h3>Submit a band</h3>
    <p>Use this form to submit a band to the site. You don't have to give me a name or email, but then I won't be able to attribute the post to you nor would I be able to contact you if there's something weird about your submission.</p>
    <p>Include as much information as you'd like in the submission box. Write your story, include a link to a video or song, etc. Please don't write a novel.</p>
    <form class="submission" method="POST" name="Band Submission" data-netlify='true' data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="Band Submission" />
      <label style="display: none;">Don’t fill this out: <input name="bot-field"></label>
      <label for="name">Name (optional)<input id='name' name='name' placeholder='Cool Person' type='text'></label>
      <label for="email">Email (optional)<input id="email" name="email" type="email" placeholder='you@are.cool'></label>
      <label for="submission">Submission<textarea id="submission" name="submission" required placeholder="Please don't write a novel."></textarea></label>
      <input id="submit" type="submit" value="Submit">
    </form>
  </section>
</template>

<script>
export default {
  name: 'SubmitForm'
};
</script>

<style scoped lang='scss'>
.form-wrapper {
  margin-block-start: 2rem;
}

h3 {
  margin-block-end: revert;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1ch;
  width: 100%;
  padding: 1ch;

  label {
    display: flex;
    flex-direction: column;
    margin: 0.5ex 0;
  }
}

#email,
#submission,
#name {
  padding: 1ex;
}

#submission {
  height: 10em;
}

#submit {
  cursor: pointer;
  margin-inline-start: auto;
  margin-inline-end: auto;
  display: inline-block;
  background-color: transparent;
  border: 1px solid currentColor;
  padding: 1ex 2ex;
  color: currentColor;
  text-decoration: none;
  width: max-content;

  &:hover {
    background: var(--black-2);
    color: #fff;
  }
}
</style>