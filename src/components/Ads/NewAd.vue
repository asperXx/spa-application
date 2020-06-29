<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form 
        ref="form" 
        class="mb-3" 
        v-model="valid" 
        validation
        >
          <v-text-field
            label="Ad title"
            name="title"
            type="text"
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
            required
          ></v-text-field>

          <v-textarea
            id="description"
            label="Ad description"
            name="descrption"
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Description is required']"
            multi-line
          ></v-textarea>
        </v-form>

        <v-row>
          <v-col cols="12">
            <v-btn
              color="primary"
              class="ma-2 white--text"
            >
              Загрузить
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>

           
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
               <v-img src="" height="100"></v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
              <v-switch
              v-model="promo"
              label="Add to promo?"></v-switch>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="12">
              <v-spacer></v-spacer>
              <v-btn 
              class="success"
              @click="createAd"
              :disabled="!valid"
              >Create ad</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            description: '',
            title: '',
            valid: false,
            promo: false
        }
    },
    methods: {
        createAd() {
            if (this.$refs.form.validate()) {
                // logic
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo
                }
                console.log(ad)
            }
        }
    }
};
</script>