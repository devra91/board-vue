<template>
  <div>
    BoardDetail
    {{ post.id }}
    {{ post.sTitle }}
    {{ post.sContext }}
    {{ post.created_at }}
    {{ post.updated_at }}
    <div>
      <button @click="update">수정</button>
      <button @click="remove">삭제</button>
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
      // TODO: routig
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
