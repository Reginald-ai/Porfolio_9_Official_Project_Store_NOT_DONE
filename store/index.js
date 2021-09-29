const state = () => ({
  projects: [
    {
      id: 1,
      title: "Semai Colon",
      subtitle: "Html Css ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "Calendar-Poster-For-Facebook_small.png",
      category: "Html",
      page: {
        summary:
          "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum repellendus vel cupiditate doloremque. Et, natus autem nobis accusamus cumque sit sed dolore hic quae temporibus iure quod consequatur eum, corporis nam incidunt eligendi quas. Eius molestiae corrupti corporis iure vitae eos soluta officia architecto eligendi officiis mollitia, neque maxime, suscipit minima magni nemo iste omnis eum consequatur dolor culpa?"
      }
    },
    {
      id: 2,
      title: "Anime Wb",
      subtitle: "Html Css ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "Ecommerce-With-Phone_small.png",
      category: "Html"
    },
    {
      id: 3,
      title: "Gallery Image",
      subtitle: "Vue Js Css Html ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "High-Street-Flat_small.png",
      category: "Nuxt"
    },
    {
      id: 4,
      title: "Movie Weebs",
      subtitle: "Nuxt Css JS Html",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "House-Flat_small.png",
      category: "Nuxt"
    },
    {
      id: 5,
      title: "Black Website",
      subtitle: "Html Css ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "Park-Flat-Design_small.png",
      category: "Html"
    },
    {
      id: 6,
      title: "Shortly",
      subtitle: "Api Html Css Js",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "Social-Media-With-Phone_small.png",
      category: "Javascript"
    },
    {
      id: 7,
      title: "Web Fire",
      subtitle: "Nuxt Css Js Html ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "Web-Design-Flat_small.png",
      category: "Nuxt"
    },
    {
      id: 8,
      title: "Cebu City",
      subtitle: "Html Css ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "Web-Design-For-Linked-In_small.png",
      category: "Css"
    }
  ],
  user: null,
  //display profile information
  profileEmail: "",
  profileFirstname: "",
  profileLastname: "",
  profileId: "",
  profileInitials: ""
});
const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  // UPDATE_USER(state, payload) {
  //   state.user = payload;
  // },
  setProfileInfo(state, doc) {
    state.profileId = doc.id;
    state.profileEmail = doc.data().email;
    state.profileFirstName = doc.data().firstName;
    state.profileLastName = doc.data().lastName;
  },
  setProfileInitials(state) {
    state.profileInitials =
      state.profileFirstName.match(/(\b\S)?/g).join("") +
      state.profileLastName.match(/(\b\S)?/g).join("");
  }
};
const actions = {
  //firebase
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // claims = null
      // Perform logout operations
      state.commit("SET_USER", null);

      this.$router.push("/auth/signin");
    } else {
      // Do something with the authUser and the claims object...
      const { uid, email } = authUser;
      state.commit("SET_USER", {
        uid,
        email
      });
    }
  },
  //firebase pushing the create account to firebase
  async getCurrentUser({ commit }) {
    const database = await db.collection(this.$fire.auth.currentUser.uid);
    const dbResult = await database.get();
    commit("setProfileInfo", dbResult);
    commit("setProfileInitials");
    // console.log(dbResult);
    console.log(database);
  }
};

const getters = {
  //user data retrun state
  getUser(state) {
    return state.user;
  },
  getProjects: state => id => {
    return state.projects.find(project => project.id == id);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
