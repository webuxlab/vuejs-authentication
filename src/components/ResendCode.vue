<template>
  <div id="resendCode" class="card">
    <div class="card-body">
      <div class="card-title">
        <div class="d-inline">
          <router-link class="btn btn-outline-secondary" to="/verify-account">
            <i class="bi bi-arrow-return-left"></i>
          </router-link>
          <span class="ms-2 fs-4 align-middle">Resend Code</span>
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

        <hr class="w-75 mx-auto" />

        <div class="d-grid gap-2 col-6 mx-auto">
          <button id="resendCodeBtn" class="btn btn-outline-primary" type="submit">
            Resend
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebuxlabResendCode",

  props: {
    resendCode: { type: Function, required: true },
  },

  data() {
    return {
      email: "",
    };
  },

  methods: {
    submit() {
      this.resendCode({
        email: this.email,
      });
    },
  },
};
</script>

<style></style>
