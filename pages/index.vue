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
        <h1>Website Projects</h1>
        <hr class="mb-5" />
        <v-row>
          <Cards
            v-for="(pValues, index) in projects"
            :pValues="pValues"
            :key="index"
          />
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
      position: relative;
      transition: all 0.4s ease;
      &:hover {
        transform: translateY(10px);
      }
    }
  }
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
}
</style>
