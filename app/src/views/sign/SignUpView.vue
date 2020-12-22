<template>
  <div class="sign-up-view">
    <h3 class="form-title">Create an account</h3>
    <p>Please fill the fields below to create an account.</p>
    <hr />
    <!-- Sign Up Form -->
    <ValidationObserver ref="form">
      <b-form @submit="onSubmit" novalidate>
        <!-- Name Row -->
        <div class="row">
          <!-- First name Field -->
          <div class="col">
            <ValidationProvider
              v-slot="v"
              name="first name"
              rules="req|min:3|max:32"
            >
              <b-form-group label="First name" :invalid-feedback="v.errors[0]">
                <b-form-input
                  type="text"
                  v-model="model.firstName"
                  :state="validated ? v.valid : null"
                  placeholder="What should we call you?"
                />
              </b-form-group>
            </ValidationProvider>
          </div>
          <!-- Last name Field -->
          <div class="col">
            <ValidationProvider
              v-slot="v"
              name="last name"
              rules="req|min:3|max:64"
            >
              <b-form-group label="Last name" :invalid-feedback="v.errors[0]">
                <b-form-input
                  type="text"
                  v-model="model.lastName"
                  :state="validated ? v.valid : null"
                />
              </b-form-group>
            </ValidationProvider>
          </div>
        </div>

        <!-- Email Field -->
        <ValidationProvider
          v-slot="v"
          name="email"
          rules="req|min:3|max:64|email"
        >
          <b-form-group
            label="Email"
            :invalid-feedback="v.errors[0]"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              type="text"
              v-model="model.email"
              :state="validated ? v.valid : null"
              placeholder="Where should we send you informations?"
            />
          </b-form-group>
        </ValidationProvider>

        <!-- Username Field -->
        <ValidationProvider v-slot="v" name="username" rules="req|min:3|max:32">
          <b-form-group label="Username" :invalid-feedback="v.errors[0]">
            <b-form-input
              type="text"
              placeholder="Choose a username"
              v-model="model.username"
              :state="validated ? v.valid : null"
            />
          </b-form-group>
        </ValidationProvider>

        <!-- Password Field -->
        <ValidationProvider
          v-slot="v"
          name="password"
          rules="req|min:3|max:32"
          vid="password"
        >
          <b-form-group label="Password" :invalid-feedback="v.errors[0]">
            <b-form-input
              type="password"
              placeholder="Choose a secret to us let you in"
              v-model="model.password"
              :state="validated ? v.valid : null"
            />
          </b-form-group>
        </ValidationProvider>

        <!-- Confirm Password Field -->
        <ValidationProvider
          v-slot="v"
          name="password confirmation"
          rules="req|min:3|max:32|confirmed:password"
        >
          <b-form-group
            label="Confirm password"
            :invalid-feedback="v.errors[0]"
          >
            <b-form-input
              type="password"
              placeholder="Confirm the secret just one more time"
              v-model="model.confirmPassword"
              :state="validated ? v.valid : null"
            />
          </b-form-group>
        </ValidationProvider>

        <hr />

        <!-- Form Actions Section -->
        <div class="form-actions">
          <div>
            <div class="mb-1">
              <small>Already have an account?</small>
            </div>
            <!-- Sign In Button -->
            <b-button variant="outline-dark" @click="signIn()"
              >Click here to sign in</b-button
            >
          </div>
          <!-- Submit Button -->
          <b-button
            variant="primary"
            size="lg"
            class="ml-auto my-3"
            type="submit"
            >Sign up</b-button
          >
        </div>
      </b-form>
    </ValidationObserver>
  </div>
</template>

<style lang="scss" scoped>
.sign-up-view {
  background: rgba(#fff, 0.5);
  padding: 18px 36px;
  max-width: 580px;
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
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: { ValidationObserver, ValidationProvider },
  data() {
    return {
      validated: false,
      model: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.signUp();
    },
    signIn() {
      this.$router.push({ name: "SignInView" });
    },
    async signUp() {
      const valid = await this.$refs.form.validate();
      this.$data.validated = true;
      if (!valid) {
        return;
      }
      const model = this.model;
      console.log({ register: model });
    },
  },
};
</script>