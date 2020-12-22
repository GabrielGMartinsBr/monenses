<template>
  <div class="sign-in-view">
    <h3 class="form-title">Access account</h3>
    <hr>
    <b-form novalidate>
      <b-form-group label="Email or username">
        <b-form-input type="text" />
      </b-form-group>

      <b-form-group label="Password">
        <b-form-input type="password" />
      </b-form-group>

      <div class="form-actions">
        <div>
          <div class="mb-1">
            <small>Don't have an account?</small>
          </div>
          <b-button variant="outline-dark" @click="signUp()">
            Create one now
          </b-button>
        </div>
        <b-button variant="orange" size="lg" class="ml-auto my-3"
          >Sign in</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<style lang="scss" scoped>
.sign-in-view {
  background: rgba(#fff, 0.3);
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

<script>
export default {
  methods: {
    signUp() {
      this.$router.push({ name: "SignUpView" });
    },
  },
};
</script>