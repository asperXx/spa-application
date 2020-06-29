<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <h1 class="text--secondary mb-5">Orders</h1>
        <v-card>
          <v-list subheader two-line flat>
            <v-list-item-group v-model="settings" multiple>
              <v-list-item
              avatar
              v-for="order in orders"
              :key="order.id"
              >
                  <v-list-item-action>
                    <v-checkbox 
                    color="success"
                    :input-value="order.done"
                    @change="markDone(order)"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{order.name}}</v-list-item-title>
                    <v-list-item-subtitle
                      >{{order.phone}}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn 
                    class="primary"
                    :to="'/ad/' + order.adId"
                    >Open</v-btn>
                  </v-list-item-action>
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
                {id: '1', 
                name: 'Vasya', 
                phone: '89228312485', 
                adId: '123',
                done: false
                }
            ]
        }
    },
    methods: {
        markDone(order) {
          order.done = true
        }
    }
};
</script>
