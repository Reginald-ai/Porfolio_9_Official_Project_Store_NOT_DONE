<template>
  <div class="py-100 mb-100">
    <div v-if="project">
      <v-container>
        <v-row align="center">
          <v-col
            cols="12"
            sm="12"
            lg="12"
            data-aos-delay="600"
            data-aos="fade-left"
          >
            <h1>{{ project.title }}</h1>
            <p>{{ project.page.summary }}</p>
            <p>{{ project.page.summary }}</p>
            <v-btn large color="primary"> Visit now!! </v-btn>
          </v-col>
          <v-col cols="12" sm="12" lg="12">
            <v-carousel data-aos="fade-down">
              <v-carousel-item
                v-for="(itemsP, i) in project.photos"
                :key="i"
                :src="require(`@/assets/img/id-img/${itemsP.src}`)"
              ></v-carousel-item>
            </v-carousel>
            <!-- <img
              :src="require(`@/assets/img/id-img/${project.photos.src}`)"
              class="w-100"
              alt=""
            /> -->
          </v-col>
        </v-row>
      </v-container>
      <hr class="m-100" />
      <v-container>
        <v-row>
          <!-- <v-col cols="12" sm="12" md="6">
            <h1>{{ project.title }}</h1>
            <p>{{ project.page.summary }}</p>
          </v-col> -->
          <v-col cols="12" lg="6">
            <v-card data-aos-delay="700" data-aos="fade-right">
              <v-list two-line>
                <template v-for="(item, index) in items_2">
                  <v-subheader v-if="item.header" :key="item.header">
                    {{ item.header }}
                  </v-subheader>
                  <v-divider
                    v-else-if="item.divider"
                    :key="index"
                    :inset="item.inset"
                  ></v-divider>
                  <v-list-item v-else :key="item.title">
                    <v-list-item-avatar>
                      <img :src="item.avatar" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <hr class="m-100" />

      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="6">
            <div data-aos="fade-up" class="fedback-wrapper">
              <v-container>
                <v-row justify="center">
                  <v-col cols="12">
                    <h1>Feedback</h1>
                  </v-col>
                  <v-col cols="12">
                    <p>We'll never share your email with anyone else.</p>
                    <p>
                      The dev author uses customer feedback to improve its
                      products and developement.
                    </p>
                  </v-col>
                  <!-- <v-divider></v-divider> -->
                  <v-col sm="12" cols="12">
                    <v-text-field
                      label="Email"
                      :rules="rules.name"
                      outlined
                      v-model="email"
                    ></v-text-field>
                  </v-col>
                  <v-col sm="12" cols="12">
                    <v-textarea
                      outlined
                      name="input-7-4"
                      label="Outlined textarea"
                      value=""
                      :rules="rules.name"
                      v-model="textFeed"
                    ></v-textarea>
                  </v-col>
                  <v-btn class="ma-2" large color="dark"> Submit </v-btn>
                </v-row>
              </v-container>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <error v-else />
  </div>
</template>

<script>
import error from "../../layouts/error.vue";
import { mapState } from "vuex";
export default {
  components: { error },
  data() {
    return {
      email: null,
      textFeed: null,
    };
  },
  computed: {
    //getting the projects from store
    project() {
      return this.$store.getters.getProjects(this.$route.params.id);
    },
    //carousel reviews and forms from store
    ...mapState(["items", "items_2", "rules"]),
  },
};
</script>

<style lang="scss">
.py-100 {
  padding: 100px 0px;
  background: url("~assets/img/blob-scene-haikei (3).svg?inline") no-repeat;
  background-size: cover;
}
.m-100 {
  margin: 100px 0px;
}
.fedback-wrapper {
  background: #242534;
  padding: 15px;
  position: relative;
}

// .v-window {
//   height: 355px;
//   .v-image__image--cover {
//     background-size: contain;
//   }
//   .v-image {
//     background: #fff;
//     height: 355px !important;
//   }
// }
</style>
