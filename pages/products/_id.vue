<template>
  <div class="py-100">
    <div v-if="project">
      <v-container>
        <v-row align="center">
          <v-col cols="12" sm="12" lg="6">
            <img
              :src="require(`@/assets/img/png-svg/${project.photo}`)"
              alt=""
            />
          </v-col>
          <v-col cols="12" sm="12" lg="6">
            <h1>{{ project.title }}</h1>
            <p>{{ project.page.summary }}</p>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row row-md-6 row-sm-1 row-lg-4>
          <v-col class=""> </v-col>
        </v-row>
      </v-container>
    </div>
    <error v-else />
  </div>
</template>

<script>
import error from "../../layouts/error.vue";
export default {
  components: { error },
  data() {
    return {};
  },
  computed: {
    project() {
      return this.$store.getters.getProjects(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss">
.py-100 {
  padding: 100px 0px;
  background: url("~assets/img/blob-scene-haikei (3).svg?inline") no-repeat;
  background-size: cover;
}
</style>