<template>
  <div class="nuxt-wrapper">
    <v-container>
      <div class="nuxt-bg">
        <v-container>
          <v-row>
            <v-col cols="6">
              <h1>Nuxt</h1>
              <p>The Intuitive Vue Framework</p>
              <p>
                Build your next Vue.js application with confidence using Nuxt.
                An open source framework making web development simple and
                powerful.
              </p>
            </v-col>
            <v-col class="svgPhoton">
              <SvgNuxtLogo class="w-100" />
            </v-col>
          </v-row>
        </v-container>
      </div>
      <hr />
      <div
        class="nuxt-info"
        v-for="(schemes, i) in schemess.slice(0, 1)"
        :key="i"
      >
        <v-container>
          <v-row>
            <v-col>
              <h3>{{ schemes.text }}</h3>
              <h3 class="pt-5">{{ schemes.text1 }}</h3>
              <ul>
                <li>{{ schemes.n1 }}</li>
                <li>
                  {{ schemes.text2 }}
                  <ul>
                    <li>{{ schemes.n2 }}</li>
                    <li>{{ schemes.n3 }}</li>
                    <li>
                      <a :href="schemes.ref" target="_blank">{{
                        schemes.ref
                      }}</a>
                    </li>
                  </ul>
                </li>
                <li>
                  {{ schemes.text3 }}
                  <ul>
                    <li>
                      <a :href="schemes.text5" target="_blank">{{
                        schemes.text5
                      }}</a>
                    </li>
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
      <div class="nuxt-dynamic-id">
        <ul>
          <li>
            Make Dynamic Id Pages
            <ul>
              <li>
                First Step
                <ul>
                  <li>
                    Put the data into the store vuex ;
                    <ul>
                      <li>
                        Examples:
                        <ul>
                          <li>
                            State
                            <ul>
                              <li>examples:{ title: "example" }</li>
                            </ul>
                          </li>

                          <li>
                            Getters
                            <ul>
                              <li>
                                getExamples: state => id => { return
                                state.examples.find(example => example.id ==
                                id); }
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Second Step
                <ul>
                  <li>Make A New Folder and new file with _example.vue</li>
                </ul>
              </li>
              <li>
                Third Step
                <ul>
                  <li>
                    link it to dynamic id
                    <ul>
                      <li>
                        NuxtLink :to="`/schemes/${scheme.id}`" color="orange"
                        text> Explore NuxtLink
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </v-container>
  </div>
</template>

<script>
import SvgNuxtLogo from "@/assets/img/scheme/id-scheme/nuxt-square.svg";
export default {
  components: {
    SvgNuxtLogo,
  },
  data() {
    return {};
  },
  computed: {
    schemess() {
      return this.$store.state.schemes;
    },
  },
};
</script>

<style lang="scss" >
.nuxt-wrapper {
  padding: 100px 0px 200px 0px;
  background: #001e26;

  .nuxt-bg {
    font-size: 16px;
    background: url("@/assets/img/scheme/id-scheme/Photon-10s-1920px.svg?inline");
    height: 100%;
    width: 100%;
    h1 {
      font-size: 2em;
    }
  }
  .nuxt-info {
    pre {
      font-family: "Fira Code", monospace;
    }
  }
}
</style>
