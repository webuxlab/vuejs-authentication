<template>
  <div id="signOut" class="card">
    <div class="card-body">
      <div class="card-title">
        <h4>Revoke Access</h4>
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <button
          id="revokeAllSessionsBtn"
          class="btn btn-outline-danger"
          type="button"
          @click.prevent="signOut"
        >
          Revoke All Sessions
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebuxlabSignOut",

  props: {
    signOut: { type: Function, required: true },
  },

  methods: {
    submit() {
      this.signOut(true);
    },
  },
};
</script>

<style></style>
