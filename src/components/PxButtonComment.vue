<template>
  <button 
  @click="buttonClick"
  type="button" class="btn btn-primary"><b-icon icon="chat-text" class="rounded p-2"  style="vertical-align:middle;" font-scale="2"></b-icon>
  Comentar
  </button>
</template>

<script>


export default {
  name: 'PxButton',
  
  methods: {
    buttonClick() {
      this.$emit('custom-click')
    }
  }
}
</script>