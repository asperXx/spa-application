<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <h1 class="text--secondary mb-5">Orders</h1>
        <v-card>
          <v-list subheader two-line flat>
            <v-list-item-group v-model="settings" multiple>
              <v-list-item>
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-action>
                    <v-checkbox
                      v-model="active"
                      color="primary"
                      @click="markDone"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Notifications</v-list-item-title>
                    <v-list-item-subtitle
                      >Allow notifications</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn class="primary">Open</v-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data () {
        return {
            orders: [
                {id: '1', name: 'dd', phone: '312312312', adId: '123'}
            ]
        }
    },
    methods: {
        markDone() {

        }
    }
};
</script>
