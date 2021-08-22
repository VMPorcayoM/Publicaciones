<template>
    <div class="container">        
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Haz un nuevo post</h5>
                        <div class="input-group mb-3">
                            <div class="col-12 col-md-12">
                                <input type="text" class="form-control" placeholder="Tu nombre" aria-label="name" aria-describedby="basic-addon1">
                                <br>
                            </div>                            
                            <div class="col-12 col-md-12">
                                <textarea class="form-control" placeholder="Qué piensas" aria-label="With textarea"></textarea>
                            </div>                
                            <div class="custom-file">
                                <span style="color:grey">Opcional</span><br>
                                <input type="file" class="custom-file-input" id="inputGroupFile04">
                                <br>
                            </div>
                        </div>
                        <a href="#" class="col-12 btn btn-primary">Publicar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "PxCardNewPost",

  components: { },

  props: {
    assets: {
    },
  },

  methods: {
  }
};
</script>
<style scoped>
    .card-title{
        color: #1f3d79;
        font-weight: bold;
    }
</style>