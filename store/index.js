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
      href: "https://porfolio-1-cebu-city.pages.dev/",
      id: 1,
      title: "Cebu City",
      subtitle: "Html Css ",
      description:
        "One of the first projects I've made way back 2020. It may not the best but I certainly enjoy making it. . . ",
      photo: "Calendar-Poster-For-Facebook_small.png",
      category: "Html",
      page: {
        summary:
          "One of the first projects I've made way back 2020. It may not the best but I certainly enjoy making it, Still need some improvements, I rember making this thing was a huge amount of time no libray just using position absolute to align things well, I guess it's realy true the first step that I've made back then was realy hard to be self-taught developer, looking back at that time dam how did I survive? maybe there is one of my soul telling me that I'll be better someday."
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
      href: "https://porfolio-2-you-pro.pages.dev/",
      id: 2,
      title: "You pro",
      subtitle: "Html Css ",
      description:
        "One of my first animation websites, I realy enjoy the animation that I learned from youtube ",
      photo: "Web-Design-For-Linked-In_small.png",
      category: "Html",
      page: {
        summary:
          "I learned a lot from youtube, It may not the most complex animation today, but still I'm proud of it, maybe someday I'll make some imporvements😅 , I remeber making this thing was quite hard I was knew to css key frames and I was advised to use libray to make it easier, but still I just use keyframse I don't know maybe I'm tired learning gsap and anime.js, I'm a bit weak at animating, But I hope that someday I will improved.  "
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
      href: "https://porfolio-3-semai-colon.pages.dev/",
      id: 3,
      title: "Semai Colon",
      subtitle: "Js Css Html ",
      description:
        "One of the best websites I made so far my 3 months experience from html css and ux/ui gain me alot knowledge. ",
      photo: "Social-Media-With-Phone_small.png",
      category: "Html",
      page: {
        summary:
          "One of the best ui/ux website I've made so far, I remember making this thing that I had to spend bunch of time creating waves and finding MIT sources because you know I don't know to draw, Thanks to them they are life saver, becuase if not I will be still tuck creating this waves. I try my best to look it more beatiful and use some fading scroll effect I had trouble a bit but I managed to get it done, It still need some improvements   "
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
      href: "https://porfolio-3-semai-colon.pages.dev/",
      id: 4,
      title: "Food Store",
      subtitle: "Js Css Html ",
      description:
        "One of the food websites I made so far my 3 months experience from html css and ux/ui gain me alot knowledge. ",
      photo:
        "vector-illustration-flat-style-grocery-store-concept-supermarket-different-177590654 1.png",
      category: "Html",
      page: {
        summary:
          "I Learn so much in youtube that I decide to make one of my own food website, I remember making this thing is realy hard to a newbie js I've been stuck for couple of days just to figure out something.  I try my best to manipulate dom elements and using local storage to store data & etc. At that time I was using plain js without framework js, but i managed to make it from scratch. But still need some improvements, I will not stop learning and progressing to future "
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
      href: "https://porfolio-4-animewb.pages.dev/",
      id: 5,
      title: "Anime Wb",
      subtitle: "Css JS Html",
      description:
        "I'm so fan on anime websites I can't help making one for myself. but still need some impovements",
      photo: "House-Flat_small.png",
      category: "Css",
      page: {
        summary:
          "I realy love anime, I spend half of my time watching some bleach, naruto, onepice, akami gakill, etc, That's why I decided to make one for myslef. I remember making this thing was quite exitement I wanted to cover up everything like manga,web novel, light novel , and  I realize back then I still need learned backend or api, Instead of hard coding bunch of data, kinda sad for myself I hope i will imporved"
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
      href: "https://porfolio-5-gg-gallery.pages.dev/",
      id: 6,
      title: "GG Gallery",
      subtitle: "Html Css Vue ",
      description:
        "One of the first vue projects I've made, I was thinking back then to put some gallery pictures that I loved",
      photo: "High-Street-Flat_small.png",

      category: "Html",
      page: {
        summary:
          "I was thining back then what if I make my own photos storage of gallery instead of uploading it on facebook and other's social platform, Well I tried but backend still needed I can't help myself for implanting bunch of data in vscode. I got idea still needed some time to fully run this thing. I remember making this thing was super hard in vue cli, I was knew to vue cli but I managed to get the grasp of it, I realy think hard how to use share compoenents and how to use vuex store etc, I also got stuck at stackoverflow for countless hours. glad I've finnish this thing way back. "
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
      href: "https://porfolio-6-nature.pages.dev/",
      id: 7,
      title: "Earth Gates",
      subtitle: "Nuxt Html Css Js",
      description:
        "I made this website to help people and make them realize that earth also need care and help",
      photo: "Park-Flat-Design_small.png",

      category: "Javascript",
      page: {
        summary:
          "there's no lies about global warming, deforestaion, floading, etc. I want to make one for myself to see how I value lifes on earth. When I got old I realize how life is short with just blink of an eye, That's the time I realize that I need to do something good for me and family other's, I realized that we should value our earth more than it should be, we won't be born if earth dosen't have the essential of life.  "
      },
      //for carousel
      photos: [
        {
          src: "16.png"
        },
        {
          src: "17.png"
        }
      ]
    },
    {
      href: "https://porfolio-7-space.pages.dev/",
      id: 8,
      title: "SpaceY",
      subtitle: "Nuxt Css Js Html ",
      description:
        "when I was a kid,I always wanted to catch a star, but when I grow old it become Imposible but I keep trying.",
      photo: "Web-Design-Flat_small.png",
      category: "Nuxt",
      page: {
        summary:
          "I told myself if I can't catch it then I will make it. that's why I decided to make a website about plantes, starts, etc. I also love watching documentary about some new mision on nasa and space x, I'm a huge fan, I always need some answer from space like, how did they eat? how they breath? I wanted to learn more about more upcoming mision and knowledge discovery that might help us our daily lives."
      },
      //for carousel
      photos: [
        {
          src: "18.png"
        },
        {
          src: "19.png"
        },
        {
          src: "20.png"
        }
      ]
    },
    {
      href: "https://porfolio-11-black-meravle.pages.dev/",
      id: 9,
      title: "Black Meravle",
      subtitle: "Nuxt Html Css ",
      description:
        "Yeah one of my best landing page I've made, but still need some more idea to put some pages ",
      photo: "Web-Design-For-Linked-In_small.png",
      category: "Nuxt",
      page: {
        summary:
          "I tried many landing pages, but this one is in the bag, This is so special that I can't forget how I spend so much time just to desgin this website on figma, but still need some new pages, currenly in developement. I got hard time thinking new styles and animation and I always searching for new trends. But still I can't decide maybe someday. I remember making this thing in nuxt that I almost forgot that it has auto imports components😄 maybe I was just tired at that time."
      },
      //for carousel
      photos: [
        {
          src: "22.png"
        },
        {
          src: "23.png"
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
