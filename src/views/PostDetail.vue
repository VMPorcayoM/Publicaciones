<template>
    <div>
        <template v-if="asset.id">
            <div class="card" style="width: 18rem;">                
                <div class="card-body">
                    <h5 class="card-title">{{ asset.name }}</h5>
                    <p class="card-text">{{asset.post}}</p>
                    <div>
                        <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
                    </div>
                    
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
      asset: {},
      comment: []
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
    
      Promise.all([api.getAsset(id), api.getComments(id)]).then(
        ([asset, comments]) => {
          this.asset = asset
          this.comments = comments
        }
      )
    }
  }
}
</script>