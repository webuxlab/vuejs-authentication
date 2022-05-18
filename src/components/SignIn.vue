<template>
  <div id="signIn" class="card">
    <div class="card-body">
      <div class="card-title">
        <h4>Sign In</h4>
      </div>

      <form @submit.prevent="submit" class="form">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            id="email"
            type="email"
            class="form-control"
            v-model="email"
            placeholder="noreply@webuxlab.com"
            required
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            type="password"
            class="form-control"
            v-model="password"
            required
          />
        </div>

        <hr class="w-75 mx-auto" />

        <div class="d-grid gap-2 col-6 mx-auto">
          <button
            id="signInBtn"
            class="btn btn-outline-primary"
            type="submit"
            :disabled="loading"
          >
            <div class="loading" v-if="loading">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <span v-else>Sign In</span>
          </button>
        </div>
      </form>

      <div class="row mt-3 text-center">
        <div class="col">
          <router-link
            id="lostPasswordBtn"
            to="/lost-password"
            class="fw-lighter fst-italic text-decoration-none text-secondary"
            >Lost password ?</router-link
          >
        </div>

        <div class="col">
          <router-link
            id="signUpBtn"
            to="/sign-up"
            class="fw-lighter fst-italic text-decoration-none text-secondary"
            >Sign Up</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebuxlabSignIn",

  props: {
    signIn: { type: Function, required: true },
  },

  data() {
    return {
      email: "",
      password: "",

      loading: false,
    };
  },

  methods: {
    async submit() {
      try {
        this.loading = true;

        await this.signIn({
          email: this.email,
          password: this.password,
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
