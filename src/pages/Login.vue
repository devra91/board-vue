<template>
  <div>
    Login
      <form @submit.prevent="submit" class="login-form">
    <div>
      <label for="email">Email</label>

      <input type="text" name="email" id="email" v-model="form.email" class="login-input" />
    </div>

    <div>
      <label for="password">Password</label>

      <input
        type="password"
        name="password"
        id="password"
        v-model="form.password"
        class="login-input"
      />
    </div>

    <div>
      <button type="submit" class="btn-submit" :disabled="!form.email || !form.password">Sign in</button>
    </div>

    <div v-if="error">인증 실패</div>
  </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  components: {},

  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: false
    };
  },

  methods: {
    ...mapActions({
      login: "auth/login"
    }),
    submit() {
      this.login(this.form)
        .then(() => {
          this.$router.push({
            path: "/board"
          });
          // this.$router.replace(this.$route.query.redirect || '/')
        })
        .catch(e => {
          console.log("failed");
          console.log(e);
          this.error = true;
        });
    }
  }
};
</script>