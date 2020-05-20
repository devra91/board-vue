<template>
  <div>
    BoardCreate
    <div class="form">
      <input v-model="form.sTitle" placeholder="제목" class="input" />
      <input v-model="form.sContext" placeholder="내용" class="input" />
    </div>
    <div>
      <button @click="create" class="btn-submit">submit</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BoardCreate",
  data() {
    return {
      form: {
        sTitle: "",
        sContext: ""
      }
    };
  },
  created() {},
  methods: {
    ...mapActions({
      createPost: "board/createPost"
    }),
    create() {
      this.createPost(this.form);
      this.$router.push({
        path: `/board`
      });
    }
  }
};
</script>

<style>
.form {
  max-width: 500px;
  margin: auto;
}
label {
  display: block;
  margin-bottom: 4px;
}
.input {
  width: 100%;
  font-size: 16px;
  padding: 12px 16px;
  outline: 0;
  border-radius: 3px;
  border: 1px solid lightgrey;
  margin-bottom: 16px;
}
.btn-submit {
  width: 500px;
  padding: 14px 12px;
  font-size: 18px;
  font-weight: bold;
  background: #ff4500;
  color: white;
  border-radius: 3px;
  cursor: pointer;
}
</style>
