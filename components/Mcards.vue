<template>
  <v-col cols="12" sm="12" md="6" lg="4" xl="3">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card class="mx-auto">
          <v-img
            :src="require(`@/assets/img/id-sources/${source.src}`)"
          ></v-img>

          <v-card-text>
            <h2 class="text-h6 primary--text">{{ source.title }}</h2>
            {{ source.text }}
          </v-card-text>

          <v-card-title class="align-base">
            <v-rating
              :value="source.value"
              dense
              color="orange"
              background-color="orange"
              hover
              class="mr-2"
            ></v-rating>
            <span class="primary--text text-subtitle-2">{{
              source.reviews
            }}</span>
          </v-card-title>

          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#036358">
              <a :href="source.href" target="_blank" class="btns btn-6"
                >See more info</a
              >
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  props: ["source"],
};
</script>

<style>
</style>