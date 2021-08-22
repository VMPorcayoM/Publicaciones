<template>
  <header >
    <title>Facebook</title>   

    <div class="container-fluid">
      <div class="row">
        <div class="col-3 col-md-4 ">
          <h1 >Facebook</h1> 
        </div>
        <div class="col-4 col-md-3">
          <a class="nav-link" aria-current="page" href="#"><b-icon icon="house" class="offset-8 border rounded p-2"  style="color: #385898; vertical-align:middle;" font-scale="3"></b-icon></a>
        </div>
      </div>  
    </div>

  </header>
</template>

<script>

export default {
  name: "PxHeader",
  components: {  },
};
</script>

<style scoped>
  .container-fluid{
    background-color: #e6e9ee;
    height: 56px;
    display: inline-block;
  }
  .icon{
    color: #385898;
  }
  h1{
    display:table-cell; 
    vertical-align:middle;
    color: #1f3d79;
  }
</style>