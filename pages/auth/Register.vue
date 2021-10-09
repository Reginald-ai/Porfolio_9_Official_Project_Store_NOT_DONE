script<template>
  <div class="pt-100c mb-100">
    <v-container>
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
                    <v-col md="12" sm="6" lg="6">
                      <v-text-field
                        label="First Name"
                        outlined
                        :rules="rules.name"
                        v-model="first"
                      ></v-text-field>
                    </v-col>

                    <v-col md="12" sm="6" lg="6">
                      <v-text-field
                        label="Last Name"
                        :rules="rules.name"
                        outlined
                        v-model="last"
                      ></v-text-field>
                    </v-col>
                    <v-col md="12" sm="12" lg="6">
                      <v-text-field
                        label="Email"
                        :rules="rules.name"
                        outlined
                        v-model="email"
                      ></v-text-field>
                    </v-col>
                    <v-col md="12" sm="6" lg="6">
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
                    <v-col md="12" sm="6" lg="12">
                      <v-text-field
                        v-model="password2"
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
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi blanditiis quibusdam omnis adipisci veniam
                        doloremque totam, eum molestiae consequatur. Voluptatum.
                      </p>
                    </v-col>
                    <v-col cols="12">
                      <div class="d-flex">
                        <h4>Have a account?</h4>
                        <NuxtLink to="/auth/Login"> Sign in Here </NuxtLink>
                      </div>
                    </v-col>
                    <v-btn class="ma-2" color="dark" @click.prevent="register">
                      Sign up now
                    </v-btn>
                  </v-row>
                </v-container>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </div>
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
      first: "",
      last: "",
      email: "",
      password: "",
      password2: "",
    };
  },
  computed: {
    rules() {
      return this.$store.state.rules;
    },
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.first !== "" &&
        this.last !== ""
      ) {
        this.snackbar = false;
        this.snackbarText = "";
        const firebaseAuth = await this.$fire.auth;
        const createUser = await firebaseAuth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            const result = createUser;
            const dataBase = this.$fire.firestore
              .collection("users")
              .doc(user.uid);
            dataBase.set({
              firstName: this.first,
              lastName: this.last,
              email: this.email,
            });
            $nuxt.$router.push("/");
            return;
          })
          .catch((error) => {
            this.snackbarText = error.message;
            this.snackbar = true;
          });
      }
    },
  },
};
</script>

<style lang="scss" >
.pt-100c {
  padding: 100px 0px;
}
.wrap-dd {
  background: #242534;
  border: 1px solid #fff;
  padding: 15px;
  .ma-2 {
    margin-left: 11px !important;
  }
  .svg-sUp {
    width: 100%;
  }
  .form-wp {
    align-self: center;
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

const createUser = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((cred) => {
            const result = await createUser;
            const dataBase = db.collection("users").doc(result.user.uid);
            await dataBase.set({
              firstName: this.firstName,
              lastName: this.lastName,
              username: this.username,
              email: this.email,
            });
            this.$router.push("/");
            return;
          })
          .catch((err) => {
            this.error = true;
            this.errorMsg = err.message;
          });
      