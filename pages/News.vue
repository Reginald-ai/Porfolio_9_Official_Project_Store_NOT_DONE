<template>
  <div class="py-100 mb-100">
    <div class="wrapper-news">
      <v-container>
        <v-row>
          <v-col align-self="center" cols="12" sm="12" md="6">
            <h1>World Wide Api News</h1>
            <h2>Search worldwide news with code</h2>
            <p>
              Locate articles and breaking news headlines from news sources and
              blogs across the web with our JSON API
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              dolorum est eveniet cumque aspernatur commodi neque libero, illo
              error inventore quod repudiandae esse id totam. Animi, vel. Odio
              rem a distinctio cupiditate cumque, maxime facilis nemo. Sunt a
              consequuntur reiciendis?
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <SvgBgNews class="w-100" />
          </v-col>
        </v-row>
      </v-container>
    </div>

    <hr class="my-5" />
    <div class="wrapper-news-1">
      <v-container>
        <v-row>
          <v-col
            v-for="(article, index) in articles"
            :key="index"
            sm="12"
            md="6"
            lg="4"
            xl="3"
          >
            <v-card class="mx-auto">
              <v-img :src="article.urlToImage" height="200px"></v-img>

              <v-card-title> {{ article.title }} </v-card-title>

              <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
              <v-divider></v-divider>

              <v-card-text>
                {{ article.description }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import SvgBgNews from "@/assets/img/man, guy, person, chair, armchair, home, workspace, laptop, computer.svg";
export default {
  components: {
    SvgBgNews,
  },
  async asyncData({ app }) {
    const { articles } = await app.$axios.$get(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-09-11&sortBy=publishedAt&apiKey=966de86fece64c47a13363a9ffe70613"
    );
    return { articles };
  },
  data: () => ({
    show: false,
    activeItem: -1,
  }),
  methods: {
    shows() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss">
.py-100 {
  padding: 100px 0px;
  .wrapper-news {
    background: url("@/assets/img/blob-scene-haikei (2).svg?inline");
    background-size: cover;
  }
  .w-100 {
    height: 100%;
  }
}
</style>
