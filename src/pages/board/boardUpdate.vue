<template>
  <div>
    BoardUpdate
    <div>
      <input v-model="form.sTitle" placeholder="제목" />
      <input v-model="form.sContext" placeholder="내용" />
    </div>
    <button @click="update(form)">submit</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "BoardUpdate",
  data() {
    // const contentId = Number(this.$route.params.contentId);

    return {
      form: {
        sTitle: "",
        sContext: ""
        // image: "1.gif"
      }
      //   updateMode: this.$route.params.contentId > 0 ? true : false,
      //   contentId,
      //   myHTML: "",
      //   files: []
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
      await this.updatePost({...this.form, id: this.post.id});
      // TODO: routig
      this.$router.push({
        path: `/board`
      });
    }
  }
};
</script>
