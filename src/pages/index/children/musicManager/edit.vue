<template>
  <el-dialog
    :close-on-click-modal="false"
    :close-on-press-escape="true"
    :title="title"
    :type="type"
    :visible.sync="isVisible"
    :width="width"
    top="50px"
  >
  </el-dialog>
</template>
<script>
export default {
  name: "musicEdit",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "add"
    }
  },
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {},
  mounted() {
  },
  methods: {
  }
};
</script>