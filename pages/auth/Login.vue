<template>
  <v-container>
    <div class="pt-100">
      <h1>Welcome to Dashbord</h1>
      <p>Sign up rexsahvan</p>
      <div class="wrap-dd">
        <v-snackbar
          :timeout="4000"
          v-model="snackbar"
          color="red"
          absolute
          top
          center
        >
          {{ snackbarText }}
        </v-snackbar>
        <v-container>
          <v-row>
            <v-col sm="12" md="6">
              <SvgSignup class="svg-sUp" />
            </v-col>
            <v-col class="form-wp" sm="12" md="6">
              <v-form class="form-db">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Email"
                        :rules="rules.name"
                        outlined
                        v-model="email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <div class="d-flex">
                        <h4>Forgot Password?</h4>
                        <NuxtLink to="/auth/ForgotEmail"> Click Here </NuxtLink>
                      </div>
                    </v-col>
                    <v-col cols="12">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi blanditiis quibusdam omnis adipisci veniam
                        doloremque totam, eum molestiae consequatur. Voluptatum.
                      </p>
                    </v-col>
                    <v-col cols="12">
                      <div class="d-flex">
                        <h4>Don't have account?</h4>
                        <NuxtLink to="/auth/Register"> Create Here </NuxtLink>
                      </div>
                    </v-col>
                    <div class="btn-21">
                      <v-btn
                        class="ma-2"
                        large
                        color="dark"
                        @click.prevent="login"
                      >
                        Sign in
                      </v-btn>
                    </div>
                  </v-row>
                </v-container>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-container>
</template>

<script>
import SvgSignup from "@/assets/img/undraw_Welcome2.svg";
export default {
  components: {
    SvgSignup,
  },
  data() {
    return {
      snackbar: false,
      snackbarText: "No error message",
      show1: false,
      first: null,
      last: null,
      email: "",
      password: "",
    };
  },
  computed: {
    rules() {
      return this.$store.state.rules;
    },
  },
  methods: {
    login() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          //we are signed in

          $nuxt.$router.push("/");
          console.log(this.$fire.auth.currentUser.uid);
        })
        .catch((error) => {
          this.snackbarText = error.message;
          this.snackbar = true;
        });
    },
  },
};
</script>

<style lang="scss" >
.pt-100 {
  padding: 100px 0px;
}
.wrap-dd {
  background: #242534;
  border: 1px solid #fff;
  padding: 15px;
  position: relative;
  .ma-2 {
    margin-left: 13px !important;
  }
  .svg-sUp {
    width: 100%;
  }
  .form-wp {
    align-self: center;
  }
  .btn-21 {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid transparent;
  -webkit-text-fill-color: #fff;
  box-shadow: none;
  // -webkit-box-shadow: none;
  // color: #fff;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
