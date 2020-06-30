<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" >
          <v-carousel>
            <v-carousel-item
              v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.imageSrc"
            >
                <div class="carousel-link">
                    <v-btn class="error" :to="'/ad/' + ad.id"> {{ad.title}} </v-btn>
                </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col 
          cols="12" 
          sm="6" md="4" lg="4"
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-card class="mx-auto" max-width="400" >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="ad.imageSrc"
            >
              <v-card-title>{{ad.title}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ad.description}}</div>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
              <v-btn 
              color="orange" 
              text
              :to="'/ad/' + ad.id"
              >
                Open
              </v-btn>

              <v-btn color="primary" raised>
                Buy
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    }
  }
};
</script>


<style scoped>
.carousel-link {
    position: absolute;
    bottom: 60px;
    left: 50%;
    background:rgba(0, 0, 0, .5);
    transform: translate(-50%,0);
    padding: 5px 15px;
    border-radius: 5px;
}
</style>