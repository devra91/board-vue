<template>
  <div>
    BoardList
    <div v-for="post in posts" :key="post.id">
        <div @click="toDetail(post)">
            {{post.sTitle}}
            {{post.created_at}}
        </div>
        
    </div>
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
      //   updatePost: "board/updatePost",
    }),
    ...mapMutations({
        setCurrentPost: "board/SET_CURRENT_POST",
    }),
    toDetail(post) {
        this.setCurrentPost(post);
        this.$router.push({
        path: `/board/detail`,
      });
    }
  }
};
</script>
