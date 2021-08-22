<template>
    <div class="container">        
        <br>
        <div class="card" 
        v-for="a in assets"
      :key="a.id"
        >
            <div class="card-body">
                <h5 class="card-title">{{a.name}}</h5>
                <p class="card-text">{{a.post}}</p>
                <img style="margin-bottom:5px" 
                :src="`${a.img}`"
                 class="card-img-bottom" alt="">                
                <div class="d-grid gap-2 col-12 col-md-6 mx-auto">
                    <button class="btn  btn-outline-secondary" type="button"><b-icon icon="chat-text" class="rounded p-2"  style="vertical-align:middle;" font-scale="2"></b-icon>Comentar</button>
                </div>
                
            </div>            
            
        </div>
    </div>
</template>

<script>

export default {
  name: "PxAssetsTable",

  components: { },

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    goToCoin(id){
      this.$router.push({name: 'coin-detail', params: {id}})
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