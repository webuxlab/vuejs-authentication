<template>
  <div id="verifyAccount" class="card">
    <div class="card-body">
      <div class="card-title">
        <div class="d-inline">
          <router-link class="btn btn-outline-secondary" to="/sign-in">
            <i class="bi bi-arrow-return-left"></i>
          </router-link>
          <span class="ms-2 fs-4 align-middle">Verify Account</span>
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
          />
        </div>

        <hr class="w-75 mx-auto" />

        <div class="d-grid gap-2 col-6 mx-auto">
          <button id="verifyBtn" class="btn btn-outline-primary" type="submit">
            Verify
          </button>
        </div>
      </form>

      <div class="row mt-3 text-center">
        <div class="col">
          <router-link id="resendCodeBtn"
            to="/resend-code"
            class="fw-lighter fst-italic text-decoration-none text-secondary"
            >Resend Code</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebuxlabVerifyAccount",

  props: {
    verifyAccount: { type: Function, required: true },
    email: { type: String },
  },

  data() {
    return {
      code: "",
    };
  },

  methods: {
    submit() {
      this.verifyAccount({
        email: this.email,
        code: this.code,
      });
    },
  },
};
</script>

<style></style>
