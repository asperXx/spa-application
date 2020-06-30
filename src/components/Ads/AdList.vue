<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6" offset-sm="3">
                <h1 class="text--secondary mb-3">My ads</h1>

                <v-card 
                class="elevation-10 mb-5"
                v-for="ad in ads"
                :key="ad.id"
                >
                    <v-row>
                        <v-col cols="4" class="pa-0">
                            <v-img 
                            :src="ad.imageSrc"
                            height="100%"
                            ></v-img>
                        </v-col>
                        <v-col cols="8">
                            <v-card-text>
                                <h2 class="text--primary">{{ ad.title }}</h2>
                                <p>{{ ad.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn 
                                class="info"
                                :to="'/ad/' + ad.id"
                                >Open</v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
             ads: [
        {
          title: "First ad",
          description: "Hello im description",
          promo: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "1",
        }, {
          title: "Second ad",
          description: "Hello im description",
          promo: true,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          id: "2",
        },
        {
          title: "Fird ad",
          description: "Hello im description",
          promo: true,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: "3",
        }
        ]
    }
}
}
</script>