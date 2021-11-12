<template>
  <div>
   <form>
   <div class="row">
      <div class="col-12">
         <div class="mb-3">
           <label class="form-label" for="formrow-firstname-input">Name</label>
             <vs-input  primary v-model="service.name" placeholder="Service Name" />
         </div>
      </div>
       <div class="col-12">
         <div class="mb-3">
           <label class="form-label" for="formrow-firstname-input">Service Thumbnail</label>
              <vue2Dropzone :options="dropzoneOptions" :useCustomSlot=true>
                <div class="dropzone-custom-content">
                    <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
                    <div class="subtitle">...or click to select a file from your computer</div>
                </div>
                </vue2Dropzone>
         </div>
      </div>
   </div>

   <div class="mt-4">
      <button type="submit" class="btn btn-primary w-md">Submit</button>
   </div>
</form>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
components: {vue2Dropzone},
data(){
    return {
         dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
        },
         service:{},
    };
},
}
</script>

<style>
.vs-input {
    width: 100%;
}
</style>