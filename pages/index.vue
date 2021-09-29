<template>
  <div>
    <div class="hero">
      <v-container>
        <v-row align-md="center">
          <v-col cols="12" sm="12" md="6" lg="6">
            <h1>Welcome to Dashboard</h1>
            <p>Sign up rexsahvan</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium maiores eius obcaecati, asperiores saepe quas! Possimus
              hic sequi harum voluptatum.
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <SvgBgIn class="w-100" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="projectss">
      <v-container>
        <!-- <Cards-Wrapper :projects="projects" /> -->

        <h1>Website Projects</h1>
        <hr class="mb-5" />
        <v-row>
          <v-col
            v-for="(project, index) in projects"
            :key="index"
            md="6"
            sm="12"
            lg="4"
            xl="3"
            cols="12"
          >
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="require(`@/assets/img/png-svg/${project.photo}`)"
              >
              </v-img>
              <v-card-title class="text--darken-4">{{
                project.title
              }}</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="pb-0 green--text">
                {{ project.subtitle }}
              </v-card-text>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>

                <v-btn color="orange" text> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <div class="see-more-wrp">
          <h1 class="see-more">See more</h1>
          <NuxtLink to="/Projects" class="text-none">
            <v-avatar color="grey darken-4">
              <v-icon dark>mdi-arrow-down</v-icon>
            </v-avatar>
          </NuxtLink>
        </div>
      </v-container>
    </div>
    <div class="progress-d">
      <v-container>
        <h1 class="mb-2">My Development Skills</h1>
        <hr class="my-5" />
        <v-row>
          <v-col sm="12" lg="6">
            <Progress />
          </v-col>
          <v-col sm="12" lg="6">
            <SvgBgProgress class="w-100" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="contact-me"></div>
  </div>
</template>

<script>
import SvgBgIn from "@/assets/img/undraw_Hello_re_3evm.svg";
import SvgBgProgress from "@/assets/img/undraw_work_in_progress.svg";
export default {
  components: {
    SvgBgIn,
    SvgBgProgress,
  },
  created() {
    //update the mutation in vuex if the user login or logout
    // $fire.auth.onAuthStateChanged((user) => {
    //   this.$store.commit("SET_USER", user);
    //   if (user) {
    //     this.$store
    //     .dispatch("getCurrentUser", user);
    //   }
    // });

    console.log(this.$fire.auth.currentUser.uid);
    console.log(this.$store.database);
  },
  data() {
    return {};
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style lang="scss">
.hero {
  padding-top: 80px;
  background: url("~assets/img/bg-curvy-desktop.svg?inline");
  background-size: cover;
}
.projectss {
  padding: 80px 0px 40px 0px;
  h1 {
    padding: 0px 0px 10px 0px;
  }
  .see-more-wrp {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .see-more {
      padding-top: 40px;
    }
    .text-none {
      text-decoration: none;
    }
  }
}
</style>
