<template>
  <div class="cropper-app">
    <!-- 剪裁组件弹窗 -->
    <el-dialog
        title="裁切封面"
        :visible.sync="cropperModel"
        width="950px"
        center
       >
     <cropper-image
         :Name="cropperName"
         :ImageSrc="imageSrc"
         @uploadImgSuccess = "handleUploadSuccess"
         ref="child">
     </cropper-image>
    </el-dialog>
  </div>
</template>

<script>
import CropperImage from "./CropperImage";
export default {
  name: "ImageIdentified",
  components: {CropperImage},
  data () {
    return {
      //裁切图片参数
      cropperModel:false,
      cropperName:'',
      imageSrc:''
    }
  },
  created() {
  },
  methods: {
    //设置图片
    setInit(cropperName,imageSrc){
      this.cropperName = cropperName;
      this.imageSrc = imageSrc;
      this.cropperModel = true;
    },
    //图片上传成功后
    handleUploadSuccess (data){
      console.log(data)
      this.cropperModel = false;
    }
  }
}
</script>
<style scoped>
  .upload-list-cover{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 40px;
      align-items: center;
      background: rgba(0,0,0,.6);
      opacity: 0;
      transition: opacity 1s;
  }
  .cover_icon {
    font-size: 30px;
  }
  .upload-btn{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #cccccc;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 1px #cccccc;
  }
  .upload-btn:hover {
    border: 1px solid #69b7ed;
  }
  .upload-btn i{
    margin: 5px;
  }
</style>