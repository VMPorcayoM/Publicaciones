<template>
    <div class="container">        
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Haz un nuevo post</h5>
                        <div class="input-group mb-3">
                            <div class="col-12 col-md-12">
                                <input id="nombre" v-model="nombre" type="text" class="form-control" placeholder="Tu nombre" aria-label="name" aria-describedby="basic-addon1">
                                <br>
                            </div>                            
                            <div class="col-12 col-md-12">
                                <textarea id="nombre" v-model="post" class="form-control" placeholder="Qué piensas" aria-label="With textarea"></textarea>
                            </div>                
                            <div class="custom-file">
                                <span style="color:grey">Opcional</span><br>
                                <input type="file" id="file" ref="myfile" class="custom-file-input" @change="previewFiles" >
                                <br>
                            </div>
                        </div>
                        <px-button @custom-click="newPost()"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PxButton from '@/components/PxButton'
import axios from 'axios'

export default {
  name: "PxCardNewPost",
  data(){
      return{
            nombre: '',
            post: ' ',
            file:{}
      }
    
    },
  components: { PxButton },

  props: {
    assets: {
    },
  },
    
  methods: {     
        previewFile(){
            this.file = this.$refs.myFiles.files
        },
         newPost() {
                                         
            if(!this.nombre=='' && !this.post==''){
                const formData = new FormData();
                formData.append('name', this.nombre)
                formData.append('post',  this.post)
                formData.append('img', this.file)

                axios.post("http://localhost:8000/api/posts?api_key=key_cur_prod_fnPqT5xQEi5Vcb9wKwbCf65c3BjVGyBB", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                    .then(response => {
                        console.log(response);
                        alert("Post agregado!");
                        this.nombre='';
                        this.post='';
                    })
                    .catch(error => {
                        console.log(error);
                        alert("Error de agregado!");
                    })
                
            }else{
                alert("Coloca tu nombre y tu post!");
            }
            
                
        }

            
                
        }
  
};
</script>
<style scoped>
    .card-title{
        color: #1f3d79;
        font-weight: bold;
    }
</style>