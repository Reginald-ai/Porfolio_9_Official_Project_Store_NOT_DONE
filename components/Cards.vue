<template>
  <v-col md="6" sm="12" lg="4" xl="3" cols="12">
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require(`@/assets/img/png-svg/${filtered.photo}`)"
      >
      </v-img>
      <v-card-title class="text--darken-4">{{ filtered.title }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pb-0 green--text" color="secondary">
        {{ filtered.subtitle }}
      </v-card-text>

      <v-card-text class="text--primary">
        <div>{{ filtered.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>

        <NuxtLink :to="`/products/${filtered.id}`" color="orange" text>
          Explore
        </NuxtLink>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["filtered"],
};
</script>

<style lang="scss">
// .text--darken-4 {
//   color: #000;
//   font-weight: 800;
// }
</style>
