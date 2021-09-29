<template>
  <v-app dark class="pt-100">
    <v-container>
      <v-row>
        <v-col cols="12">
          <SvgError class="w-100" />
        </v-col>
        <v-col cols="12" class="text-center">
          <NuxtLink to="/" class="text-none text-light go-b mx-auto">
            Go Back
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import SvgError from "@/assets/img/undraw_page_not_found_su7k.svg";
export default {
  components: {
    SvgError,
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.go-b {
  font-size: 25px;
  background: rgb(70 70 70 / 93%);
  padding: 15px 20px;
  border-radius: 10px;
}
</style>
