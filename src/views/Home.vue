<template>
  <div>
    <br>
    <px-card-new-post/>
    <px-assets-table :assets="assets"/>
  </div>
</template>
<script>
import api from '@/api'
import PxAssetsTable from "@/components/PxAssetsTable";
import PxCardNewPost from "@/components/PxCardNewPost"; 
export default {
  name: "Home",
  components: { PxAssetsTable, PxCardNewPost },
  data(){
    return{
      assets: []
    }
  },
  created(){
    api.getAssets()
    .then(assets => this.assets = assets)
  }
};
</script>
