<template>
  <div class="vite-wrapper">
    <v-container>
      <div class="vite-bg">
        <v-container>
          <v-row>
            <v-col cols="12">
              <h1>Vite</h1>
              <br />
              <h2>Getting Started</h2>
              <hr />
              <br />
              <pre>
Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

Vite is opinionated and comes with sensible defaults out of the box, but is also highly extensible via its Plugin API and JavaScript API with full typing support.

You can learn more about the rationale behind the project in the Why Vite section.
              </pre>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div class="vite-start">
        <v-container>
          <v-row>
            <v-col>
              <h1>Vite Quick Start up Guide</h1>
              <hr />
              <br />
              <h3>Create Vite App</h3>
              <ul class="first-step">
                <li>npm init vite@latest</li>
                <li>npm install -D sass</li>
                <li>npm i bootstrap</li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" >
.vite-wrapper {
  padding: 100px 0px 200px 0px;
  font-size: 16px;
  .vite-bg {
    h1 {
      font-size: 3.125em;
    }
    pre {
      font-family: Poppins;
    }
  }
}
</style>
