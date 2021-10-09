<template>
  <div class="progress">
    <v-container>
      <h1>Fullstack Skills Map</h1>
      <hr class="mb-5" />
      <v-row>
        <v-col cols="12" data-aos-delay="300" data-aos="fade-down">
          <SvgBgProgress class="w-100" />
        </v-col>
        <v-col
          cols="6"
          sm="6"
          md="6"
          data-aos-delay="400"
          data-aos="fade-right"
        >
          <v-container>
            <Progress
              v-for="(progres, index) in progress.slice(0, 6)"
              :key="index"
              :progres="progres"
            />
          </v-container>
        </v-col>
        <v-col cols="6" sm="6" md="6" data-aos-delay="600" data-aos="fade-left">
          <v-container>
            <Progress
              v-for="(progres, index) in progress.slice(6, 10)"
              :key="index"
              :progres="progres"
            />
            <br />
            <hr />
            <h1>Still Learning. . . .</h1>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SvgBgProgress from "@/assets/img/undraw_work_in_progress.svg";

export default {
  components: {
    SvgBgProgress,
  },
  data() {
    return {};
  },
  computed: {
    progress() {
      return this.$store.state.progress;
    },
  },
};
</script>

<style lang="scss">
.progress {
  padding: 100px 0px 200px 0px;
}
</style>