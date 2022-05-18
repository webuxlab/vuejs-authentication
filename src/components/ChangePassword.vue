<template>
  <div id="changePassword" class="card">
    <div class="card-body">
      <div class="card-title">
        <h4>Change Password</h4>
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
          <label for="currentPassword" class="form-label"
            >Current Password</label
          >
          <input
            id="currentPassword"
            type="password"
            class="form-control"
            v-model="currentPassword"
            required
          />
        </div>

        <div class="mb-3">
          <label for="newPassword" class="form-label">New Password</label>
          <input
            id="newPassword"
            type="password"
            class="form-control"
            v-model="newPassword"
            required
          />
        </div>

        <hr class="w-75 mx-auto" />

        <div class="d-grid gap-2 col-6 mx-auto">
          <button
            id="changePasswordBtn"
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
  name: "WebuxlabChangePassword",

  props: {
    changePassword: { type: Function, required: true },
  },

  data() {
    return {
      email: "",
      code: "",
      newPassword: "",
      currentPassword: "",
    };
  },

  methods: {
    submit() {
      this.changePassword({
        email: this.email,
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
      });
    },
  },
};
</script>

<style></style>
