<template>
  <div>
    BoardUpdate
    <div class="form">
      <input v-model="form.sTitle" placeholder="제목" class="input" />
      <input v-model="form.sContext" placeholder="내용" class="input" />
    </div>
    <button @click="update(form)" class="btn-submit">submit</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "BoardUpdate",
  data() {
    return {
      form: {
        sTitle: "",
        sContext: ""
      }
    };
  },
  computed: mapState({
    post: state => state.board.currentPost
  }),
  mounted: function() {
    if (this.post) {
      this.form.sTitle = this.post.sTitle;
      this.form.sContext = this.post.sContext;
    }
  },
  created() {},
  methods: {
    ...mapActions({
      updatePost: "board/updatePost"
    }),
    async update() {
      await this.updatePost({ ...this.form, id: this.post.id });
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
