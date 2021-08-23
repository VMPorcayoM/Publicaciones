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
                  <px-button-comment @custom-click="goToPost(a.id)"/>          
                </div>
                
            </div>                        
        </div>
    </div>
    
</template>

<script>
import PxButtonComment from './PxButtonComment.vue';

export default {
  name: "PxAssetsTable",

  components: {PxButtonComment  },

  props: {
    assets: {
      type: Array,
      default: () => [],

    },
  },

  methods: {
    goToPost(id){
      this.$router.push({name: 'post-detail', params: {id}})
    }
  }
};
</script>

<style scoped>
    .card-title{
        color: #1f3d79;
        font-weight: bold;
    }
    .card{
        margin-bottom:20px;
    }
    
</style>