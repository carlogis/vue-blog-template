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
      label-width="100px"
      ref="form">
      <el-form-item label="电影名称" prop="filmName" style="width:100%" >
        <el-input v-model="film.filmName" />
      </el-form-item>
      <el-form-item label="导演" prop="direct" style="width:100%" >
        <el-input v-model="film.direct" />
      </el-form-item>
      <el-form-item label="上映时间" prop="playDate" style="width:100%">
        <el-input v-model="film.playDate" />
      </el-form-item>
      <el-form-item label="类型" prop="type" style="width:100%">
        <el-checkbox-group v-model="film.type">
          <el-checkbox name="fulicheckbox" v-for="(item,index) in filmType" :key="index" :label="item.value">{{ item.label }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="时长" prop="duration" style="width:100%">
        <el-input-number v-model="film.duration" :min="120" :max="1000" label="时长" />
      </el-form-item>
      <el-form-item label="发行国家" prop="issueCountry" style="width:100%">
        <el-select v-model="film.issueCountry" placeholder="请选择">
          <el-option
            v-for="item in countryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
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
      filmType: [
        {
          value: '1',
          label: '剧情'
        }, 
        {
          value: '2',
          label: '科幻'
        }, 
        {
          value: '3',
          label: '动作'
        }, 
        {
          value: '4',
          label: '战争'
        }, 
        {
          value: '5',
          label: '喜剧'
        }
      ],
      countryOptions: [
        {
          value: '1',
          label: '中国'
        }, 
        {
          value: '2',
          label: '美国'
        }, 
        {
          value: '3',
          label: '日本'
        }
      ],
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
        type: [],
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
        return "600px";
      }
    },
    close() {
      this.$emit("close");
    },
    reset() {
      this.$refs.form.clearValidate();
      this.$refs.form.resetFields();
      this.film = this.initFilm();
    },
    submitForm() {
      const vm = this;
      this.$refs.form.validate(valid => {
        if (valid) {
          vm.editSubmit();
        } else {
          return false;
        }
      });
    },
    editSubmit() {
      const vm = this;
      if (vm.type === "add") {
        vm.save();
      } else {
        vm.update();
      }
    },
    save() {
      const vm = this;
      console.log(this.film);
      vm.$message({
        message: "新增电影操作成功",
        type: "success"
      });
      // stationApi.save(this.station).then(response => {
      //   const res = response.data;
      //   if (res.isSuccess) {
      //     vm.isVisible = false;
      //     vm.$message({
      //       message: vm.$t("tips.createSuccess"),
      //       type: "success"
      //     });
      //     vm.$emit("success");
      //   }
      // });
    }
  }
};
</script>
