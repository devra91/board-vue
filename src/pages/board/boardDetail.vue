<template>
  <div class="form">
    <div style="margin-bottom: 10px">BoardDetail</div>
    <!-- <div>{{ post.id }}</div> -->
    <div class="wrap">
      <div class="Box">Title: {{ post.sTitle }}</div>
      <div class="Box">Text: {{ post.sContext }}</div>
      <div class="Box">Date: {{ post.created_at }}</div>
    </div>
    <!-- <div>{{ post.updated_at }}</div> -->
    <div>
      <button @click="update" class="btn-update">EDIT</button>
      <button @click="remove" class="btn-delete">DELETE</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "BoardDetail",
  computed: mapState({
    post: state => state.board.currentPost
  }),
  methods: {
    ...mapActions({
      deletePost: "board/deletePost"
    }),
    async remove() {
      await this.deletePost(this.post.id);
      this.$router.push({
        path: `/board`
      });
    },
    async update() {
      this.$router.push({
        path: `/board/update`
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
.wrap {
}
.Box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  font-size: 16px;
  padding: 12px 16px;
  outline: 0;
  border-radius: 3px;
  border: 1px solid lightgrey;
  margin-bottom: 16px;
}
.btn-update {
  width: 100px;
  padding: 14px 12px;
  font-size: 18px;
  font-weight: bold;
  background: #0020c2;
  color: white;
  border-radius: 3px;
  cursor: pointer;
}

.btn-delete {
  width: 100px;
  padding: 14px 12px;
  font-size: 18px;
  font-weight: bold;
  background: #8c001a;
  color: white;
  border-radius: 3px;
  cursor: pointer;
}
</style>
