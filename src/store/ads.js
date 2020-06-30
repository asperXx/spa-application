export default {
    state: {
        ads: [
            {
                title: "First ad",
                description: "Hello im description",
                promo: false,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
                id: "1",
              },
              {
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
              },
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        ads (state) {
            return state.ads;
        },
        promoAds (state) {
            return state.ads.filter(ad => {
                return ad.promo;
            });
        },
        myAds (state) {
            return state.ads;
        }
    }
};