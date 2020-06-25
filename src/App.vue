<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped class="hidden-lg-and-up">
      <v-list dense >
        <v-list-item
        v-for="link in links"
        :key="link.title" 
        :to="link.url"
        >
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="primary" dark >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text
      v-for="link in links"
      :key="link.title"
      :to="link.url"
      >
        <v-icon left>{{link.icon}}</v-icon>
        {{link.title}}
      </v-btn>
      </v-toolbar-items>
    </v-app-bar>

      <v-content>
        <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  props: {
    source: String
  },

  components: {},

  data: () => ({
    drawer: null,
    links: [
      {title:'Login', icon: 'mdi-exit-to-app', url:'/login'},
      {title:'Registration', icon: 'mdi-account', url:'/registration'},
      {title:'Orders', icon: 'mdi-bookmark-outline', url:'/orders'},
      {title:'New ad', icon: 'mdi-note-plus-outline', url:'/new'},
      {title:'My ads', icon: 'mdi-format-list-bulleted', url:'/list'}
    ]
  })
};
</script>
