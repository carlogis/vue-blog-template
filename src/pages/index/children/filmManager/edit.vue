<template>
  <el-dialog
    :close-on-click-modal="false"
    :close-on-press-escape="true"
    :title="title"
    :type="type"
    :visible.sync="isVisible"
    :width="width"
    top="50px">
  <el-form
      :model="film"
      :rules="rules"
      label-position="right"
      label-width="100px"
      ref="form">
      <el-form-item label="电影名称" prop="filmName">
        <el-input v-model="film.filmName" />
      </el-form-item>
      <el-form-item label="导演" prop="direct">
        <el-input v-model="film.direct" />
      </el-form-item>
      <el-form-item label="上映时间" prop="playDate">
        <el-input v-model="film.playDate" />
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-input v-model="film.type" />
      </el-form-item>
      <el-form-item label="时长" prop="duration">
        <el-input v-model="film.duration" />
      </el-form-item>
      <el-form-item label="发行国家" prop="issueCountry">
        <el-input v-model="film.issueCountry" />
      </el-form-item>
    </el-form>
    <div class="dialog-footer" slot="footer">
      <el-button @click="isVisible = false" plain type="warning">
        取消
      </el-button>
      <el-button @click="submitForm" plain type="primary">
        确定
      </el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "filmEdit",
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
      film: this.initFilm(),
      width: this.initWidth(),
      screenWidth: 0,
      rules: {
        filmName: [
          {
            required: true,
            message: '电影名称不能为空',
            trigger: "blur"
          },
          {
            min: 1,
            max: 255,
            message: '电影名称不超过255个字',
            trigger: "blur"
          }
        ],
        direct: {
          required: true,
          message: "导演不能为空",
          trigger: "blur"
        }
      }
    };
  },
  computed: {
    isVisible: {
      get() {
        return this.dialogVisible;
      },
      set() {
        this.close();
        this.reset();
      }
    },
    title() {
      return this.type === "add"
        ? "新增"
        : "编辑";
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    initFilm(){
      return {
        id: '',
        filmName: '',
        direct: '',
        playDate: '',
        type: '',
        duration: '',
        issueCountry: ''
      };
    },
    initWidth() {
      this.screenWidth = document.body.clientWidth;
      if (this.screenWidth < 991) {
        return "90%";
      } else if (this.screenWidth < 1400) {
        return "45%";
      } else {
        return "800px";
      }
    },
    close() {
      this.$emit("close");
    },
    submitForm() {
      const vm = this;
      this.$refs.form.validate(valid => {
        if (valid) {
          // vm.editSubmit();
        } else {
          return false;
        }
      });
    }
  }
};
</script>
