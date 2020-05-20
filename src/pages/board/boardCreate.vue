<template>
  <div>
    BoardCreate
    <div>
      <input v-model="form.sTitle" placeholder="제목" />
      <input v-model="form.sContext" placeholder="내용" />
    </div>
    <button @click="createPost(form)">submit</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BoardCreate",
  data() {
    // const contentId = Number(this.$route.params.contentId);

    return {
      form: {
        sTitle: "",
        sContext: "",
        // image: "1.gif"
      },
    //   updateMode: this.$route.params.contentId > 0 ? true : false,
    //   contentId,
    //   myHTML: "",
    //   files: []
    };
  },
  created() {},
  methods: {
    ...mapActions({
      createPost: "board/createPost"
      //   updatePost: "board/updatePost",
    })
  }
};
</script>
