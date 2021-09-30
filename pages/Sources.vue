<template>
  <div class="pt-100">
    <v-container>
      <div class="bb-sources">
        <h1>MIT Sources</h1>
        <div class="btn-category">
          <button class="btns btn-1" @click="toggle($event)">Ui/Ux</button>

          <button class="btns btn-2" @click="toggle($event)">Html</button>
          <button class="btns btn-3" @click="toggle($event)">Css</button>
          <button class="btns btn-4" @click="toggle($event)">Javascript</button>
          <button class="btns btn-5" @click="toggle($event)">Others</button>
        </div>
      </div>
      <hr class="m-s100" />
      <v-row>
        <v-col
          v-for="(source, i) in wfiltered"
          :key="i"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="2"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344">
                <v-img
                  :src="require(`@/assets/img/id-sources/${source.src}`)"
                ></v-img>

                <v-card-text>
                  <h2 class="text-h6 primary--text">{{ source.title }}</h2>
                  {{ source.text }}
                </v-card-text>

                <v-card-title class="align-base">
                  <v-rating
                    :value="source.value"
                    dense
                    color="orange"
                    background-color="orange"
                    hover
                    class="mr-2"
                  ></v-rating>
                  <span class="primary--text text-subtitle-2">{{
                    source.reviews
                  }}</span>
                </v-card-title>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <a :href="source.href" target="_blank" class="btns btn-6"
                      >See more info</a
                    >
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ["Ui/Ux", "Html", "Css", "Javascript", "Others"],
      compKey: 0,
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
    wfiltered() {
      if (this.selected.length == 0) {
        return;
      } else {
        return this.sources.filter((source) =>
          this.selected.includes(source.category)
        );
      }
    },
    sources() {
      return this.$store.state.sources;
    },
  },
};
</script>

<style lang="scss">
.bb-sources {
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
    .btn-5 {
      background-color: #78909c !important;
      border-color: #78909c !important;
    }

    .opacity-50 {
      opacity: 0.5;
    }
  }
}
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
.btn-6 {
  background-color: #272727;
  // caret-color: #fff;
  color: #fff !important;
}
.m-s100 {
  margin-bottom: 50px;
}
</style>