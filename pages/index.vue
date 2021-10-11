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
          <v-col
            data-aos="fade-up"
            data-aos-delay="600"
            cols="12"
            sm="12"
            md="6"
          >
            <Progress
              v-for="(progres, index) in progress.slice(0, 4)"
              :key="index"
              :progres="progres"
            />
          </v-col>
          <v-col
            data-aos="fade-left"
            data-aos-delay="500"
            cols="12"
            sm="12"
            md="6"
          >
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
    <div class="about-me">
      <v-container>
        <hr />
        <v-row class="align-center">
          <v-col cols="12" sm="12" md="6">
            <h1>About Me</h1>

            <p>
              Hi! I am Reginald Ivan P. Mangubat, a web designer/developer
              focused on crafting great web experiences. Designing and Coding
              have been my passion since the days I started working with
              computers but I found myself into web design/development since
              2019. I enjoy creating beautifully designed, intuitive and
              functional websites.
            </p>
            <p>
              I like to create and contribute to open source projects. That
              helps me to learn a ton of new stuff, grow as a developer and
              support other open source projects. Also I enjoy writing technical
              things ✍️ at my blog.
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <SvgBgAbout class="w-100" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="contact-me">
      <v-container>
        <hr />
        <v-row class="ty-msg">
          <v-col>
            <h1 class="py-5">Thank you Messages</h1>
            <p>
              I will forever be grateful to you for your help. Thank you! Some
              people deserve more than just a thank you. Just like you! Thanks
              for everything. Thanking you from the core of my heart. I truly
              appreciate you. My heart is overflowing with gratitude. Thanks
              from the bottom of my heart!
            </p>
            <p>
              I appreciate everything you do for me with so much care. Thank
              you! Your thoughtfulness always touches my heart. Thanks a ton for
              everything! Kindness is just what you do, and you do it so well!
              Thank You! Thank you won’t be enough for what you’ve done for me.
              But, let me try a little. Thanks a lot for your support!
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="credits">
      <v-container>
        <h1>Credits Libraries I Use</h1>
        <hr class="my-5" />

        <v-row>
          <v-col
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="200"
            cols="12"
            sm="12"
            md="6"
            v-for="(credit, i) in credits"
            :key="i"
          >
            <v-card elevation="2" outlined shaped>
              <v-card-title>
                {{ credit.title }}
              </v-card-title>
              <v-card-subtitle>
                <p>{{ credit.category }}</p>
              </v-card-subtitle>
              <v-card-text>
                {{ credit.text }}
              </v-card-text>
              <v-card-text>
                {{ credit.text1 }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SvgBgIn from "@/assets/img/undraw_Hello_re_3evm.svg";
import SvgBgProgress from "@/assets/img/undraw_work_in_progress.svg";
import SvgBgAbout from "@/assets/img/Group 1 flexie.svg";
export default {
  components: {
    SvgBgIn,
    SvgBgProgress,
    SvgBgAbout
  },

  data() {
    return {
      svgWork: [
        {
          href: "1-1.png",
          title: "Responsive",
          subtext: "Responsive realy needed to make ",
          text: "Responsive to make more elegant in different viewports"
        },
        {
          href: "2-2.png",
          title: "Creative Design",
          subtext: "Lorem ipsum dolor sit amet consectetur.",
          text:
            "Creative Design is one of the most important thing in web designing"
        },
        {
          href: "3-3.png",
          title: "Unique Layout",
          subtext: "Lorem ipsum dolor sit amet consectetur.",
          text:
            "Unique simply means an improved version of an already better product"
        },
        {
          href: "4-4.png",
          title: "Classic Design",
          subtext: "Lorem ipsum dolor sit amet consectetur.",
          text:
            'I prefer classic design it still the best, there is a quote "The simplier the better"'
        }
      ],
      credits: [
        {
          title: "Vuetify",
          category: "Vue UI Library",
          text:
            "Material Design Framework Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips."
        },
        {
          title: "Undraw.co / Svgrepo.com / Iradesing.co / flexiple.com",
          category: " Images ",
          text:
            "Browse 300.000+ SVG Vectors and Icons Explore, search and find the best fitting icons or vectors for your projects using wide variety vector library. Download free SVG Vectors for commercial use.",
          text1:
            "Create better designed websites, products and applications. Browse to find the images that fit your messaging, automagically customise the color to match your brand and use it as a normal image, embedded code or directly in your design workflow."
        },
        {
          title: "Aos Library",
          category: " Js libary ",
          text: "Animate On Scroll Library"
        }
      ]
    };
  },
  computed: {
    ...mapState(["projects", "sources", "progress"])
  }
};
</script>

<style lang="scss">
.mb-100 {
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
.about-me {
  padding: 50px 0px;
}
.contact-me {
  .ty-msg {
    padding: 50px 0px;
  }
}
.credits {
  padding: 50px 0px 200px 0px;
}
</style>
