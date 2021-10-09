<template>
  <v-container>
    <div class="pt-100 mb-100">
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
                    <v-col>
                      <h1>Rexsahvan</h1>
                      <p>
                        Find your email Put your phone number or email to
                        recover
                      </p>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Email"
                        :rules="rules.name"
                        outlined
                        v-model="email"
                      ></v-text-field>
                    </v-col>

                    <div class="btn-21">
                      <v-btn
                        @click.prevent="reset"
                        class="ma-2"
                        large
                        color="dark"
                      >
                        Reset password
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

<script >
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
    reset() {
      this.$fire.auth
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.snackbarText = "reset link sent to " + this.email;
          this.snackbar = true;
        })
        .catch((error) => {
          this.snackbarText = error.message;
          this.snackbar = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
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
