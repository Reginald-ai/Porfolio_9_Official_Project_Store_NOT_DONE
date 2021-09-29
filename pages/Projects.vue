<template>
  <div class="pt-100s">
    <v-container>
      <!-- <Cards-Wrapper :projects="projects" /> -->
      <div class="projects">
        <div class="dd-website">
          <h1>Website Projects</h1>
          <div class="btn-category">
            <button class="btns btn-1" @click="toggle($event)">Nuxt</button>

            <button class="btns btn-2" @click="toggle($event)">Html</button>
            <button class="btns btn-3" @click="toggle($event)">Css</button>
            <button class="btns btn-4" @click="toggle($event)">
              Javascript
            </button>
          </div>
        </div>

        <hr class="mb-5" />
        <v-row v-if="this.selected.length > 0" :key="compKey">
          <Cards
            v-for="(filtered, index) in filtereds"
            :key="index"
            :filtered="filtered"
          />
        </v-row>
        <div v-else>There are no post left</div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ["Nuxt", "Html", "Css", "Javascript"],
      compKey: 0,
      // projects: null,
    };
  },
  methods: {
    toggle(event) {
      this.compKey++;

      const element = event.target;
      const text = element.textContent.trim();
      if (this.selected.includes(text)) {
        element.classList.add("opacity-50");
        this.selected.splice(this.selected.indexOf(text), 1);
      } else {
        element.classList.remove("opacity-50");
        this.selected.push(text);
      }
    },
  },
  computed: {
    filtereds() {
      if (this.selected.length == 0) {
        return;
      } else {
        return this.projects.filter((project) =>
          this.selected.includes(project.category)
        );
      }
    },
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style lang="scss">
.pt-100s {
  padding: 100px 0px;
  .projects {
    padding: 80px 0px 40px 0px;
    .dd-website {
      display: flex;
      align-items: center;
      .btn-category {
        margin-left: auto;
        .btns {
          height: 36px;
          min-width: 64px;
          padding: 0 16px;
          font-size: 0.875rem;
          margin: 8px !important;
          box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
            0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
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
          cursor: pointer;
          overflow: visible;
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
        .btn-1 {
          background-color: #00e676 !important;
          border-color: #00e676 !important;
        }
        .btn-2 {
          background-color: #ff6f00 !important;
          border-color: #ff6f00 !important;
        }
        .btn-3 {
          background-color: #039be5 !important;
          border-color: #039be5 !important;
        }
        .btn-4 {
          background-color: #f9a825 !important;
          border-color: #f9a825 !important;
        }
        .opacity-50 {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>