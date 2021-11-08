<template>
  <div class="scheme-id" v-if="schemes">
    <div class="scheme-test">
      <v-container>
        <v-row>
          <v-col>
            <h1>{{ schemes.title }}</h1>
            <hr class="mb-3 mt-1" />
            <h2>{{ schemes.text }}</h2>
            <h3 class="pt-5">{{ schemes.text1 }}</h3>
            <ul>
              <li>{{ schemes.n1 }}</li>
              <li>
                {{ schemes.text2 }}
                <ul>
                  <li>{{ schemes.n2 }}</li>
                  <li>{{ schemes.n3 }}</li>
                  <li>
                    <a :href="schemes.ref" target="_blank">{{ schemes.ref }}</a>
                  </li>
                </ul>
              </li>
              <li>
                {{ schemes.text3 }}
                <ul>
                  <li>{{ schemes.n4 }}</li>
                  <li>{{ schemes.text4 }}</li>
                  <pre>{{ schemes.n5 }}</pre>
                </ul>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  computed: {
    schemes() {
      return this.$store.getters.getSchemes(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" >
.scheme-id {
  padding: 100px 0 300px 0px;
  color: #fff;
  background: #001e26;
  // font-family: "DM Sans", sans-serif;
  font-family: "Roboto Condensed", sans-serif;
  pre {
    // font-family: "Roboto Condensed", sans-serif;
  }
}
</style>

