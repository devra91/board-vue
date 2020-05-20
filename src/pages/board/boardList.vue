<template>
  <div v-if="posts">
    <div>BoardList</div>
    <div v-for="post in posts" :key="post.id" class="wrap">
      <div class="postBox" @click="toDetail(post)">
        <div class="title">Title: {{ post.sTitle }}</div>
        <!-- <div class="time">{{post.created_at}}</div> -->
      </div>
    </div>
    <button @click="writeContext" class="btn-write">post</button>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "BoardList",
  created() {
    this.fetchPost();
  },
  computed: mapState({
    posts: state => state.board.posts
  }),
  methods: {
    ...mapActions({
      fetchPost: "board/fetchPosts"
    }),
    ...mapMutations({
      setCurrentPost: "board/SET_CURRENT_POST"
    }),
    toDetail(post) {
      this.setCurrentPost(post);
      this.$router.push({
        path: `/board/detail`
      });
    },
    writeContext() {
      this.$router.push({
        path: `/board/create`
      });
    }
  }
};
</script>

<style>
.wrap {
  max-width: 500px;
  margin: auto;
}
.postBox {
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
.title {
  flex: 1;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 8px;
}

.time {
  flex: 3;
  max-height: 1.8em;
  line-height: 1.8em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-write {
  width: 100px;
  padding: 14px 12px;
  font-size: 18px;
  font-weight: bold;
  background: #41b883;
  color: white;
  border-radius: 3px;
  cursor: pointer;
}
</style>
