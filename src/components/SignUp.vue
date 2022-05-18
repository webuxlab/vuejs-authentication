<template>
  <div id="signUp" class="card">
    <div class="card-body">
      <div class="card-title">
        <h4>Sign Up</h4>
      </div>

      <form @submit.prevent="submit" class="form">
        <div class="mb-3">
          <label for="fullname" class="form-label">Fullname</label>
          <input
            id="fullname"
            type="fullname"
            class="form-control"
            v-model="fullname"
            placeholder="Mr. Risotto"
            required
          />
        </div>

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
            id="signUpBtn"
            class="btn btn-outline-primary"
            type="submit"
            :disabled="loading"
          >
            <div class="loading" v-if="loading">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <span v-else>Sign Up</span>
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
            id="signInBtn"
            to="/sign-in"
            class="fw-lighter fst-italic text-decoration-none text-secondary"
            >Sign in</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebuxlabSignUp",

  props: {
    signUp: { type: Function, required: true },
  },

  data() {
    return {
      email: "",
      password: "",
      fullname: "",

      loading: false,
    };
  },

  methods: {
    async submit() {
      try {
        this.loading = true;

        await this.signUp({
          email: this.email,
          password: this.password,
          fullname: this.fullname,
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
