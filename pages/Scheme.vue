<template>
  <div class="scheme">
    <div class="scheme-title">
      <v-container>
        <v-row>
          <v-col>
            <h1>My Scheme</h1>
            <hr />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="scheme-2">
      <v-container>
        <v-row>
          <v-col
            md="6"
            sm="6"
            lg="4"
            xl="3"
            cols="12"
            v-for="(scheme, i) in schemes"
            :key="i"
          >
            <v-card class="mx-auto" max-width="400px">
              <v-img
                class="white--text align-end"
                :src="require(`@/assets/img/scheme/${scheme.img}`)"
              >
              </v-img>
              <v-card-title class="text--darken-4">{{
                scheme.title
              }}</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="pb-0 green--text" color="secondary">
                {{ scheme.Subtitle }}
              </v-card-text>

              <v-card-text class="text--primary">
                <div>
                  {{ scheme.text }}
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>
                <NuxtLink :to="`/scheme/${scheme.id}`" color="orange" text>
                  Explore
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schemes: [
        {
          img: "1.png",
          title: "Nuxt",
          text: "Nuxt Guid Quick Start up",
          id: 1
        },
        {
          img: "2.png",
          title: "Vite",
          text: "Vite Guid Quick Start up",
          id: 2
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.scheme {
  color: #fff;
  padding: 100px 0px;
}
</style>
