const state = () => ({
  //skills
  progress: [
    {
      titleN: "Html Development - Fundamentals",
      num: 99,
      color: "deep-orange"
    },
    {
      titleN: "Cascading Style Sheets Development - Fundamentals",
      num: 95,
      color: "light-blue darken-4"
    },
    {
      titleN: "Syntactically Awesome Style Sheets Development - Fundamentals",
      num: 95,
      color: "purple accent-4"
    },
    {
      titleN: "Javascript Development - Fundamentals",
      num: 75,
      color: "lime darken-3"
    },
    {
      titleN: "Ui / Ux Development - Fundamentals",
      num: 80,
      color: "deep-purple darken-3 "
    },
    {
      titleN: "Webpack Development- Module Bundler  ",
      num: 78,
      color: "grey darken-2"
    },
    {
      titleN: "Git / Yarn / Github / Gitlab Development - Version Control",
      num: 80,
      color: "red darken-1"
    },
    {
      titleN: "Gsap / Third.js / Anime.js Development - Animation",
      num: 60,
      color: "blue-grey darken-3"
    },
    {
      titleN: "Vue / Nuxt / Vuetify Development - Frontend Framework",
      num: 80,
      color: "green accent-4"
    },
    {
      titleN: "Firebase Development - Backend Framework",
      num: 20,
      color: "amber darken-3"
    }
  ],

  //for projects web projects
  projects: [
    {
      id: 1,
      title: "Cebu City",
      subtitle: "Html Css ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "Calendar-Poster-For-Facebook_small.png",
      category: "Html",
      page: {
        summary:
          "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum repellendus vel cupiditate doloremque. Et, natus autem nobis accusamus cumque sit sed dolore hic quae temporibus iure quod consequatur eum, corporis nam incidunt eligendi quas. Eius molestiae corrupti corporis iure vitae eos soluta officia architecto eligendi officiis mollitia, neque maxime, suscipit minima magni nemo iste omnis eum consequatur dolor culpa?"
      },
      //for carousel
      photos: [
        {
          src: "1.png"
        },
        {
          src: "2.png"
        },
        {
          src: "3.png"
        }
      ]
    },
    {
      id: 2,
      title: "You pro",
      subtitle: "Html Css ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "Ecommerce-With-Phone_small.png",
      category: "Html",
      page: {
        summary:
          "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum repellendus vel cupiditate doloremque. Et, natus autem nobis accusamus cumque sit sed dolore hic quae temporibus iure quod consequatur eum, corporis nam incidunt eligendi quas. Eius molestiae corrupti corporis iure vitae eos soluta officia architecto eligendi officiis mollitia, neque maxime, suscipit minima magni nemo iste omnis eum consequatur dolor culpa?"
      },
      //for carousel
      photos: [
        {
          src: "4.png"
        },
        {
          src: "5.png"
        },
        {
          src: "6.png"
        },
        {
          src: "7.png"
        }
      ]
    },
    {
      id: 3,
      title: "Semai Colon",
      subtitle: "Js Css Html ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "High-Street-Flat_small.png",
      category: "Html",
      page: {
        summary:
          "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum repellendus vel cupiditate doloremque. Et, natus autem nobis accusamus cumque sit sed dolore hic quae temporibus iure quod consequatur eum, corporis nam incidunt eligendi quas. Eius molestiae corrupti corporis iure vitae eos soluta officia architecto eligendi officiis mollitia, neque maxime, suscipit minima magni nemo iste omnis eum consequatur dolor culpa?"
      },
      //for carousel
      photos: [
        {
          src: "8.png"
        },
        {
          src: "9.png"
        },
        {
          src: "10.png"
        }
      ]
    },
    {
      id: 4,
      title: "Anime Wb",
      subtitle: "Css JS Html",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "House-Flat_small.png",
      category: "Css",
      page: {
        summary:
          "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum repellendus vel cupiditate doloremque. Et, natus autem nobis accusamus cumque sit sed dolore hic quae temporibus iure quod consequatur eum, corporis nam incidunt eligendi quas. Eius molestiae corrupti corporis iure vitae eos soluta officia architecto eligendi officiis mollitia, neque maxime, suscipit minima magni nemo iste omnis eum consequatur dolor culpa?"
      },
      //for carousel
      photos: [
        {
          src: "11.png"
        },
        {
          src: "12.png"
        },
        {
          src: "13.png"
        }
      ]
    },
    {
      id: 5,
      title: "Website Gallery",
      subtitle: "Html Css Vue ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "Park-Flat-Design_small.png",
      category: "Html",
      page: {
        summary:
          "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum repellendus vel cupiditate doloremque. Et, natus autem nobis accusamus cumque sit sed dolore hic quae temporibus iure quod consequatur eum, corporis nam incidunt eligendi quas. Eius molestiae corrupti corporis iure vitae eos soluta officia architecto eligendi officiis mollitia, neque maxime, suscipit minima magni nemo iste omnis eum consequatur dolor culpa?"
      },
      //for carousel
      photos: [
        {
          src: "14.png"
        },
        {
          src: "15.png"
        }
      ]
    },
    {
      id: 6,
      title: "Shortly",
      subtitle: "Api Html Css Js",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "Social-Media-With-Phone_small.png",
      category: "Javascript",
      page: {
        summary:
          "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum repellendus vel cupiditate doloremque. Et, natus autem nobis accusamus cumque sit sed dolore hic quae temporibus iure quod consequatur eum, corporis nam incidunt eligendi quas. Eius molestiae corrupti corporis iure vitae eos soluta officia architecto eligendi officiis mollitia, neque maxime, suscipit minima magni nemo iste omnis eum consequatur dolor culpa?"
      },
      //for carousel
      photos: [
        {
          src: "1.png"
        },
        {
          src: "2.png"
        },
        {
          src: "3.png"
        }
      ]
    },
    {
      id: 7,
      title: "Web Fire",
      subtitle: "Nuxt Css Js Html ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "Web-Design-Flat_small.png",
      category: "Nuxt",
      page: {
        summary:
          "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum repellendus vel cupiditate doloremque. Et, natus autem nobis accusamus cumque sit sed dolore hic quae temporibus iure quod consequatur eum, corporis nam incidunt eligendi quas. Eius molestiae corrupti corporis iure vitae eos soluta officia architecto eligendi officiis mollitia, neque maxime, suscipit minima magni nemo iste omnis eum consequatur dolor culpa?"
      },
      //for carousel
      photos: [
        {
          src: "1.png"
        },
        {
          src: "2.png"
        },
        {
          src: "3.png"
        }
      ]
    },
    {
      id: 8,
      title: "Cebu City",
      subtitle: "Html Css ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eligendi doloremque et at?",
      photo: "Web-Design-For-Linked-In_small.png",
      category: "Css",
      page: {
        summary:
          "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum repellendus vel cupiditate doloremque. Et, natus autem nobis accusamus cumque sit sed dolore hic quae temporibus iure quod consequatur eum, corporis nam incidunt eligendi quas. Eius molestiae corrupti corporis iure vitae eos soluta officia architecto eligendi officiis mollitia, neque maxime, suscipit minima magni nemo iste omnis eum consequatur dolor culpa?"
      },
      //for carousel
      photos: [
        {
          src: "1.png"
        },
        {
          src: "2.png"
        },
        {
          src: "3.png"
        }
      ]
    }
  ],
  //for sources page
  sources: [
    {
      src: "1.png",
      title: "Box shadow",
      text:
        "The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas..",
      reviews: "10 Reviews",
      value: 4.5,
      href: "https://getcssscan.com/css-box-shadow-examples",
      category: "Css"
    },
    {
      src: "2.png",
      title: "Undraw Illustration",
      text:
        "You can use the illustrations in any project, commercial or personal without attribution or any costs. A truly open license  open license..",
      reviews: "46 Reviews",
      value: 4.9,
      href: "https://undraw.co/",
      category: "Ui/Ux"
    },
    {
      src: "3.png",
      title: "Google Font",
      text:
        "If you're looking for some new fonts, this list of the best Google Fonts is a great place to start. All of the fonts listed  open license..",
      reviews: "65 Reviews",
      value: 4.5,
      href: "https://fonts.google.com/",
      category: "Ui/Ux"
    },
    {
      src: "4.png",
      title: "Avast Security",
      text:
        "Download Avast Free Antivirus and protect your PC against viruses and malware. Our best antivirus to keep your PC secure and..",
      reviews: "820 Reviews",
      value: 4.5,
      href: "https://www.avast.com/tl-ph/index#pc",
      category: "Others"
    },
    {
      src: "5.png",
      title: "DuckDuck Go",
      text:
        "The Internet privacy company that empowers you to seamlessly take control of your personal information online, without any trad... ",
      reviews: "1,310 Reviews",
      value: 3.5,
      href: " https://duckduckgo.com/",
      category: "Others"
    },
    {
      src: "6.jpg",
      title: "Vuetify",
      text:
        "Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required information online, with..",
      reviews: "176 Reviews",
      value: 4.5,
      href: "https://vuetifyjs.com/en/",
      category: "Css"
    },
    {
      src: "7.png",
      title: "Material Design",
      text:
        "Material is an adaptable system of guidelines, components, and tools that support the best practices of user interface design....",
      reviews: "44 Reviews",
      value: 4.5,
      href: "https://material.io/design",
      category: "Ui/Ux"
    },
    {
      src: "8.png",
      title: "Bootstrap",
      text:
        "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source inter...",
      reviews: "17 Reviews",
      value: 4.5,
      href: "https://getbootstrap.com/",
      category: "Css"
    },
    {
      src: "9.png",
      title: "Responsive Breakpoints",
      text:
        "In responsive design, a breakpoint is the “point” at which a website's content and design will adapt in a certain way interface d.. ",
      reviews: "217 Reviews",
      value: 4.5,
      href:
        "https://unidad22.com/tools-for-testing-responsive-website-layouts/",
      category: "Css"
    },
    {
      src: "10.png",
      title: "Background image",
      text:
        "The background-image property sets one or more background images for an element. By default, a background-image e background image....",
      reviews: "417 Reviews",
      value: 4.5,
      href:
        "https://www.blog.duomly.com/css-background-image-tutorial-with-examples/",
      category: "Css"
    },
    {
      src: "11.png",
      title: "Clip path",
      text:
        "The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the ima....",
      reviews: "1267 Reviews",
      value: 4.5,
      href: "https://www.smashingmagazine.com/2015/06/the-making-of-in-pieces/",
      category: "Css"
    },
    {
      src: "12.png",
      title: "iFrames",
      text:
        "HTML Iframe Syntax. The HTML <iframe> tag specifies an inline frame. An inline frame is used to embed another document within the curren...",
      reviews: "1157 Reviews",
      value: 4.5,
      href: " https://www.youtube.com/watch?v=s4BibernJxU",
      category: "Html"
    },
    {
      src: "13.png",
      title: "Box Model",
      text:
        "In CSS, the term 'box model' is used when talking about design and layout. The CSS box model is essentially a box that wraps around the...",
      reviews: "187 Reviews",
      value: 4.5,
      href: " https://www.freecodecamp.org/news/css-box-model-b3e68ceea756/",
      category: "Css"
    },
    {
      src: "14.png",
      title: "Position Model",
      text:
        "The position property specifies the type of positioning method used for an element. There are five different position values: is essent....",
      reviews: "177 Reviews",
      value: 4.5,
      href: "https://www.educba.com/css-position-relative/ ",
      category: "Css"
    },
    {
      src: "15.png",
      title: "Flexbox Layout",
      text:
        "The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the mi...",
      reviews: "157 Reviews",
      value: 4.5,
      href:
        "https://labs.tadigital.com/index.php/2020/06/05/responsive-web-design-using-flexbox/",
      category: "Css"
    },
    {
      src: "16.png",
      title: "Grid Layout",
      text:
        "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having x...",
      reviews: "147 Reviews",
      value: 4.5,
      href: "https://devzigma.com/ui-ux/learn-css-grid-by-an-example/",
      category: "Css"
    },
    {
      src: "17.png",
      title: "JS Loops",
      text:
        "Different Kinds of Loops · for - loops through a block of code a number of times · for/in - loops through the properties of an making it easx..",
      reviews: "172 Reviews",
      value: 4.5,
      href: "https://www.edureka.co/blog/javascript-loops/",
      category: "Javascript"
    },
    {
      src: "18.png",
      title: "JS Nested Loops",
      text:
        "Javascript supports the nested loop in javascript. The loop can have one or more or simple can have any number of loops defined inside  th...",
      reviews: "17 Reviews",
      value: 4.5,
      href: "https://www.educba.com/nested-loop-in-javascript/",
      category: "Javascript"
    }
  ],
  //for input red rules
  rules: {
    age: [val => val < 10 || `I don't believe you!`],
    animal: [val => (val || "").length > 0 || "This field is required"],
    name: [val => (val || "").length > 0 || "This field is required"],
    required: value => !!value || "Required.",
    min: v => v.length >= 8 || "Min 8 characters",
    emailMatch: () => `The email and password you entered don't match`
  },

  // for reviews
  items_2: [
    { header: "Reviews" },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      title: "Brunch this weekend?",
      subtitle: `<span class="font-weight-bold">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      title: "Oui oui",
      subtitle:
        '<span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      title: "Something new",
      subtitle:
        '<span class="font-weight-bold">Jesica Paul</span> &mdash; Lets try something new!'
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      title: "To the future",
      subtitle:
        '<span class="font-weight-bold">Sarah Newhart</span> &mdash; Make something to make it hot'
    }
  ],

  //end of value
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
