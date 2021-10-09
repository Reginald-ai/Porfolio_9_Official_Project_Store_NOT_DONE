<template>
  <v-col md="6" sm="6" lg="4" xl="3" cols="12">
    <v-card class="mx-auto" max-width="400px">
      <v-img
        class="white--text align-end"
        :src="require(`@/assets/img/png-svg/${pValues.photo}`)"
      >
      </v-img>
      <v-card-title class="text--darken-4">{{ pValues.title }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pb-0 green--text" color="secondary">
        {{ pValues.subtitle }}
      </v-card-text>

      <v-card-text class="text--primary">
        <div>{{ pValues.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>

        <NuxtLink
          class="btn-yellow"
          :to="`/products/${pValues.id}`"
          color="orange"
          text
        >
          Explore
        </NuxtLink>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["pValues"],
};
</script>

<style lang="scss">
// .text--darken-4 {
//   color: #000;
//   font-weight: 800;
// }
.btn-yellow {
  height: 36px;
  padding: 0.8rem;
  color: #ff9800 !important;
  caret-color: #ff9800 !important;
  font-size: 0.875rem;
  text-decoration: none;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  &:hover::before {
    opacity: 0.08;
  }
  &::before {
    background-color: currentColor;
    border-radius: inherit;
    bottom: 0;
    color: inherit;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  }
}
</style>
