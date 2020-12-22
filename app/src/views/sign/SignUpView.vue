<template>
  <div class="sign-up-view">
    <h3 class="form-title">Create an account</h3>
    <p>Please fill the fields below to create an account.</p>
    <hr />
    <b-form novalidate>
      <div class="row">
        <div class="col">
          <b-form-group label="First name">
            <b-form-input type="text" placeholder="What should we call you?" />
          </b-form-group>
        </div>
        <div class="col">
          <b-form-group label="Last name">
            <b-form-input type="text" />
          </b-form-group>
        </div>
      </div>

      <b-form-group
        label="Email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          type="text"
          placeholder="Where should we send you informations?"
        />
      </b-form-group>

      <b-form-group label="Username">
        <b-form-input type="text" placeholder="Choose a username" />
      </b-form-group>

      <b-form-group label="Password">
        <b-form-input
          type="password"
          placeholder="Choose a secret to us let you in"
        />
      </b-form-group>

      <b-form-group label="Confirm password">
        <b-form-input
          type="password"
          placeholder="Confirm the secret just one more time"
        />
      </b-form-group>
      <hr />
      <div class="form-actions">
        <div>
          <div class="mb-1">
            <small>Already have an account?</small>
          </div>
          <b-button variant="outline-dark" @click="signIn()">Click here to sign in</b-button>
        </div>
        <b-button variant="primary" size="lg" class="ml-auto my-3"
          >Sign up</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<style lang="scss" scoped>
.sign-up-view {
  background: rgba(#fff, 0.5);
  padding: 18px 36px;
  max-width: 500px;
  margin: auto;
  border-radius: 0.5rem;
  color: #333;
  text-align: left;
  box-shadow: 3px 3px 9px rgba(#000, 0.3);

  .form-actions {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

<style lang="scss">
.sign-up-view {
  .form-group {
    small {
      color: #555 !important;
    }
  }
}
</style>

<script>
export default {
  methods: {
    signIn() {
      this.$router.push({ name: "SignInView" });
    },
  },
};
</script>