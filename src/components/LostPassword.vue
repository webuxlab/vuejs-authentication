<template>
  <div id="lostPassword" class="card">
    <div class="card-body">
      <div class="card-title">
        <div class="d-inline">
          <router-link class="btn btn-outline-secondary" to="/sign-in">
            <i class="bi bi-arrow-return-left"></i>
          </router-link>
          <span class="ms-2 fs-4 align-middle">Lost Password</span>
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
          <button
            id="lostPasswordBtn"
            class="btn btn-outline-primary"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebuxlabLostPassword",

  props: {
    lostPassword: { type: Function, required: true },
  },

  data() {
    return {
      email: "",
    };
  },

  methods: {
    submit() {
      this.lostPassword({
        email: this.email,
      });
    },
  },
};
</script>

<style></style>
