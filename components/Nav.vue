<template>
  <nav>
    <v-app-bar absolute color="dark" elevate-on-scroll class="v-nav">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <NuxtLink to="/" class="text-none text-light"> Rexsahvan </NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <div class="input-ad12-wper">
        <v-text-field
          label="Search.."
          class="input-ad12"
          single-line
          outlined
          dense
        ></v-text-field>
        <v-btn class="input-seo" dark>
          <v-icon>search</v-icon>
        </v-btn>
      </div> -->
      <v-spacer></v-spacer>

      <ul class="v-ul">
        <li>
          <NuxtLink to="#"> <v-icon icon>mdi-facebook</v-icon></NuxtLink>
        </li>
        <li>
          <NuxtLink to="#"><v-icon>mdi-twitter</v-icon></NuxtLink>
        </li>
        <li>
          <NuxtLink to="#"><v-icon>mdi-instagram</v-icon></NuxtLink>
        </li>
        <li>
          <NuxtLink to="#"><v-icon>mdi-linkedin</v-icon></NuxtLink>
        </li>

        <!-- <v-avatar class="avatar-ab2" size="39" color="blue-grey darken-3">
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar> -->
      </ul>
      <!-- <NuxtLink to="/auth/Login" class="text-light text-none text-nones">
        <v-icon color="#3ea6ff">mdi-account</v-icon>
        <span> Sign in </span>
      </NuxtLink> -->
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app
      class="grey darken-4"
    >
      <v-list flat>
        <v-subheader>Website Rexsahvan</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <NuxtLink
            class="text-none"
            :to="item.url"
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </NuxtLink>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      selectedItem: 0,
      items: [
        { text: "Home", icon: "mdi-home", url: "/" },
        { text: "Sources", icon: "mdi-account", url: "/Sources" },
        { text: "Projects", icon: "mdi-file", url: "/Projects" },
        { text: "Schemes", icon: "mdi-format-list-checks", url: "/Schemes" },
      ],
    };
  },
};
</script>

<style lang="scss">
.v-card.on-hover.theme--dark {
  background-color: rgba(#fff, 0.8);
}
> .v-card__text {
  color: #000;
}
.v-nav {
  .input-ad12-wper {
    width: 40%;
    display: flex;
    display: none;

    @include breakpoint-up(md) {
      display: flex;
    }
    .input-ad12 {
      position: relative;
      align-items: center;
      border-right: none;
      border-radius: 2px 0 0 2px;
      -ms-flex: 1 1 0.000000001px;
      -webkit-flex: 1;
      flex: 1;
      -webkit-flex-basis: 0.000000001px;
      flex-basis: 0.000000001px;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -ms-flex-direction: row;
      -webkit-flex-direction: row;
      flex-direction: row;
      position: relative;
      .v-text-field__details {
        display: none;
      }
    }
    .input-seo {
      background-color: hsla(0, 0%, 100%, 0.08);
      border-radius: 0 2px 2px 0;
      cursor: pointer;
      height: 40px;
      width: 64px;
      margin: 0;
      border-right: 1px solid #616161;
      border-bottom: 1px solid #616161;
      border-top: 1px solid #616161;
      border-left: none;
    }
  }

  .v-ul {
    display: flex;
    align-items: center;
    padding: 0;
    display: none;
    @include breakpoint-up(md) {
      display: flex;
    }
    li {
      list-style-type: none;
      padding: 0px 10px;
      position: relative;

      a {
        text-decoration: none;
        &::before {
          height: 36px;
          width: 36px;
          background-color: #d4d4d4;
          border-radius: 50%;
          bottom: 0;
          color: inherit;
          content: "";
          left: 4px;
          opacity: 0;
          pointer-events: none;
          position: absolute;
          right: 0;
          top: -5px;
          transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
        }
        &:hover::before {
          opacity: 0.4;
        }
      }
    }
    .avatar-ab2 {
      margin-left: 20px;
    }
  }
  .text-nones {
    margin-left: 20px;

    display: flex;
    padding: 5px;
    border: 1px solid #3ea6ff;
    color: #3ea6ff !important;
    align-items: center;
    white-space: nowrap;
  }
}
</style>
