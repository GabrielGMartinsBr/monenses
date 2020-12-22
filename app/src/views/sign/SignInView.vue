<template>
  <div class="sign-in-view">
    <h3 class="form-title">Access account</h3>
    <hr />
    <!-- Sign In Form -->
    <ValidationObserver ref="form">
      <b-form @submit="onSubmit" novalidate>
        <!-- Username/Email Field -->
        <ValidationProvider
          v-slot="v"
          name="email/username"
          rules="req|min:4|max:64"
        >
          <b-form-group
            label="Email or username"
            :invalid-feedback="v.errors[0]"
          >
            <b-form-input
              type="text"
              v-model="model.username"
              :state="validated ? v.valid : null"
            />
          </b-form-group>
        </ValidationProvider>

        <!-- Password Field -->
        <ValidationProvider v-slot="v" name="password" rules="req|min:4|max:32">
          <b-form-group label="Password" :invalid-feedback="v.errors[0]">
            <b-form-input
              type="password"
              v-model="model.password"
              :state="validated ? v.valid : null"
            />
          </b-form-group>
        </ValidationProvider>

        <!-- Form Actions Section -->
        <div class="form-actions">
          <div>
            <div class="mb-1">
              <small>Don't have an account?</small>
            </div>
            <!-- Sign Up Button -->
            <b-button variant="outline-dark" @click="signUp()">
              Create one now
            </b-button>
          </div>
          <!-- Submit Button -->
          <b-button
            variant="orange"
            size="lg"
            class="ml-auto my-3"
            type="submit"
            >Sign in</b-button
          >
        </div>
      </b-form>
    </ValidationObserver>
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
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: { ValidationObserver, ValidationProvider },
  data() {
    return {
      validated: false,
      model: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.signIn();
    },
    signUp() {
      this.$router.push({ name: "SignUpView" });
    },
    async signIn() {
      const valid = await this.$refs.form.validate();
      this.$data.validated = true;
      if (!valid) {
        return;
      }
      const model = this.model;
      console.log({ login: model });
    },
  },
};
</script>