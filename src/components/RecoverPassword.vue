<template>
  <div id="recoverPassword" class="card">
    <div class="card-body">
      <div class="card-title">
        <div class="d-inline">
          <router-link class="btn btn-outline-secondary" to="/sign-in">
            <i class="bi bi-arrow-return-left"></i>
          </router-link>
          <span class="ms-2 fs-4 align-middle">Recover Password</span>
          <p class="mt-3 fw-lighter fst-italic">
            Please verify your emails, if the account exists you will receive a
            code.
          </p>
        </div>
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
          <label for="code" class="form-label">Code</label>
          <input
            id="code"
            type="text"
            class="form-control"
            v-model="code"
            required
            :disabled="codeRO"
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">New Password</label>
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
            id="recoverPasswordBtn"
            class="btn btn-outline-primary"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebuxlabRecoverPassword",

  props: {
    recoverPassword: { type: Function, required: true },
    code: { type: String, required: true },
    codeRO: { type: Boolean, required: true },
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    submit() {
      this.recoverPassword({
        email: this.email,
        code: this.code,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
