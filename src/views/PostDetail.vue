<template>
    <div>
        <template v-if="asset.id">
            <div class="card" style="width: 18rem;">                
                <div class="card-body">
                    <h5 class="card-title">{{ asset.name }}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst3.depositphotos.com%2F4177001%2F14431%2Fi%2F950%2Fdepositphotos_144312189-stock-photo-big-family-with-three-little.jpg&f=1&nofb=1" class="card-img-top" alt="">
            </div>
        </template>
    </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'PostDetail',

  data() {
    return {
      asset: {}
    }
  },

  computed: {
  },

  created() {
    this.getPost()
  },

  methods: {
    getPost() {
      const id = this.$route.params.id

      Promise.all(api.getAsset(id)).then(
        (asset) => {
          this.asset = asset
        }
      )
    }
  }
}
</script>