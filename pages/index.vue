<template>
  <div class="mb-100">
    <div class="hero">
      <v-container>
        <v-row align-md="center">
          <v-col class="dd-me">
            <h2 class="text-me">
              I’m Reginald Ivan P. Mangubat, an , <br />
              <span>Front-end Developer</span> , Making
            </h2>
          </v-col>
          <v-col cols="12">
            <v-divider class="mt-5"></v-divider>
          </v-col>
          <v-col data-aos="fade-down" data-aos-delay="300" cols="12">
            <SvgBgIn class="w-100 h-100" />
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="dd-work pt-5">
      <v-container>
        <!-- <hr class="my-5" /> -->
        <v-row>
          <v-col cols="12">
            <h2 class="mb-5 text-center py-16">My Sophistication Web Design</h2>
          </v-col>
          <v-col cols="12">
            <hr style="border: 1px solid rgb(124 130 136) !important" />
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="4"
            xl="3"
            v-for="(work, i) in svgWork"
            :key="i"
            data-aos="flip-left"
          >
            <v-card class="mx-auto" max-width="400px">
              <!-- <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img> -->
              <div class="img-dd">
                <img
                  :src="require(`@/assets/img/ira-design/${work.href}`)"
                  alt=""
                />
                <v-card-title class="text--darken-4 pb-0">{{
                  work.title
                }}</v-card-title>
              </div>

              <v-divider></v-divider>
              <v-card-subtitle class="pb-5">
                {{ work.subtext }}
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <p>
                  {{ work.text }}
                </p>
              </v-card-text>

              <!-- <v-card-actions>
                  <v-btn color="orange" text> Share </v-btn>

                  <v-btn color="orange" text> Explore </v-btn>
                </v-card-actions> -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="projectss">
      <v-container>
        <h1 class="p-5">Website Projects</h1>
        <hr class="mb-5" />
        <v-row>
          <Cards
            data-aos="flip-right"
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
    <div class="aa-sources">
      <v-container>
        <h1>MIT Useful Sources</h1>
        <hr class="mb-5" />
        <v-row>
          <Mcards
            data-aos="flip-right"
            data-aos-duration="1000"
            v-for="(source, i) in sources.slice(0, 8)"
            :key="i"
            :source="source"
          />
        </v-row>
        <div class="see-more-wrp">
          <h1 class="see-more">See more</h1>
          <NuxtLink to="/Sources" class="text-none">
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
          <v-col data-aos="fade-up" data-aos-delay="600" sm="12" lg="6">
            <Progress
              v-for="(progres, index) in progress.slice(0, 4)"
              :key="index"
              :progres="progres"
            />
          </v-col>
          <v-col data-aos="fade-left" data-aos-delay="500" sm="12" lg="6">
            <SvgBgProgress class="w-100" />
          </v-col>
        </v-row>
        <div class="see-more-wrp">
          <h1 class="see-more">See more</h1>
          <NuxtLink to="/Skills" class="text-none">
            <v-avatar color="grey darken-4">
              <v-icon dark>mdi-arrow-down</v-icon>
            </v-avatar>
          </NuxtLink>
        </div>
      </v-container>
    </div>
    <div class="contact-me"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SvgBgIn from "@/assets/img/undraw_Hello_re_3evm.svg";
import SvgBgProgress from "@/assets/img/undraw_work_in_progress.svg";
export default {
  components: {
    SvgBgIn,
    SvgBgProgress,
  },
  created() {
    console.log(this.$fire.auth.currentUser.uid);
    console.log(this.$store.dbResult);
  },
  data() {
    return {
      svgWork: [
        {
          href: "1-1.png",
          title: "Responsive",
          subtext: "Lorem ipsum dolor sit amet consectetur.",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis",
        },
        {
          href: "2-2.png",
          title: "Creative Design",
          subtext: "Lorem ipsum dolor sit amet consectetur.",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis",
        },
        {
          href: "3-3.png",
          title: "Unique Layout",
          subtext: "Lorem ipsum dolor sit amet consectetur.",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis",
        },
        {
          href: "4-4.png",
          title: "Classic Design",
          subtext: "Lorem ipsum dolor sit amet consectetur.",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis",
        },
      ],
    };
  },
  computed: {
    ...mapState(["projects", "sources", "progress"]),
  },
};
</script>

<style lang="scss">
.mb-100 {
  background: url(/_nuxt/assets/bg-curvy-desktop.953dbf39.svg);
  background-size: cover;
}
.hero {
  padding-top: 150px;
  background: url("~assets/img/bg-curvy-desktop.svg?inline");
  background-size: cover;
  background-position: bottom;
  .dd-me {
    padding: 120px 0px;
    text-align: center;
    background: transparent;
    .text-me {
      font-weight: 300 !important;
      line-height: 50px;
      font-size: 46px;
      margin: 20px 0 15px;
      // color: #3e4555;
      span {
        font-weight: 700 !important;
      }
      .pink {
        background-color: #ff4d7e !important;
        border-color: #ff4d7e !important;
        height: 46px;
        min-width: 82px;
        padding: 0 20.4444444444px;
      }
    }
  }
}
.dd-work {
  background: url("@/assets/img/ira-design/6.svg?inline");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 80px;
  position: relative;
  .img-dd {
    margin: 0 auto;
    display: flex;
    padding: 40px;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-weight: 300 !important;
    font-size: 36px;
  }
}

.projectss {
  padding: 80px 0px 20px 0px;
  background: url("@/assets/img/polygon-scatter-haikei.svg?inline");
  h1 {
    padding: 0px 0px 10px 0px;
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
.aa-sources {
  padding: 0px 0px 40px 0px;
  position: relative;
  background: url("@/assets/img/polygon-scatter-haikei.svg?inline");
}
.progress-d {
  padding-bottom: 40px;
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
</style>
