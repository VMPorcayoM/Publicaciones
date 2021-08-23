<template>
  <button 
  @click="buttonClick"
  type="button" class="btn btn-primary">Publicar</button>
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