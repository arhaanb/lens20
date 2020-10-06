<template>
  <Layout>
    <div class="container">
      <div class="mbtop"></div>
      <img
        src="../assets/img/lens.svg"
        alt="Lens Logo"
        class="lenslog"
        draggable="false"
      />
      <div class="mbbtm"></div>
      <h5 class="sub">Recruitments</h5>
      <div v-if="over">
        <h1 class="semi" style="margin: 1em 0 0.2em 0">
          Let's Make Beautiful Pictures.
        </h1>
        <h5 class="desc">
          Recruitments for this session have been closed. If you applied, you
          will be contacted shortly. If you have any queries, email us at
          <a href="mailto:minet@themis.in" target="_blank" rel="noreferrer"
            >minet@themis.in</a
          >, or drop us a message on our instagram account
          <a href="//instagram.com/minetlens" target="_blank" rel="noreferrer"
            >@minetlens</a
          >.
        </h5>
        <a href="//minet.co">
          <button class="cool minetbtn button-primary">Team MINET</button>
        </a>
        <div class="successmargin"></div>
      </div>
      <div v-if="submitted && !over">
        <h1 class="semi" style="margin: 1em 0 0.2em 0">
          Let's Make Beautiful Pictures.
        </h1>
        <h5 class="desc">
          Thank you for applying to MINET Lens. We will contact you regarding
          your application shortly. If you have any queries, email us at
          <a href="mailto:minet@themis.in" target="_blank">minet@themis.in</a>,
          or drop us a message on our instagram account
          <a href="//instagram.com/minetlens" target="_blank">@minetlens</a>.
        </h5>
        <a href="//minet.co">
          <button class="cool minetbtn button-primary">Team MINET</button>
        </a>
        <div class="successmargin"></div>
      </div>
      <form v-if="!submitted && !over" @submit="addUser">
        <p>
          MINET Lens is The Mother's International School's photography club.
          Fill out the form if you are interested in joining. If you have any
          queries, email us at
          <a href="mailto:minet@themis.in" target="_blank">minet@themis.in</a>,
          or drop us a message on our instagram account
          <a href="//instagram.com/minetlens" target="_blank">@minetlens</a>.
        </p>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          v-model="name"
          required
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          v-model="email"
          required
        />
        <label for="pnumber">Phone Number</label>
        <input
          type="number"
          id="pnumber"
          placeholder="Phone Number"
          v-model="phone"
          required
        />
        <div class="row">
          <div class="one-half column">
            <label for="class1">Select Class</label>
            <select required id="class1" v-model="class1">
              <option value="0" selected disabled>Class</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>

          <div class="one-half column">
            <label for="section">Select Section</label>
            <select required id="section" v-model="section">
              <option value="0" selected disabled>Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>

        <div class="check">
          <h6 class="semi applying">What field are you applying for?</h6>
          <div class="row">
            <div class="six columns">
              <div class="xboxbox">
                <input
                  v-model="radio.photography"
                  type="checkbox"
                  id="photography"
                  name="field"
                  value="Photography/Cinematography"
                />
                <label for="photography">Photography/Cinematography</label>
              </div>

              <div class="xboxbox">
                <input
                  v-model="radio.direction"
                  type="checkbox"
                  id="direction"
                  name="field"
                  value="Creative Direction and Scripting"
                />
                <label for="direction">Creative Direction and Scripting</label>
              </div>
            </div>
            <div class="u-cf"></div>
          </div>
        </div>

        <div class="longq">
          <!-- <label for
              >What kind of gear do you use? (Camera type and model, lenses,
              flashes, filters, any other photography/film-making related
              equipment that you possess)</label
            >
            <textarea name id>i think this question super dumb ngl</textarea> -->

          <!-- <label for
              >What are the qualities of an ideal
              photographer/cinematographer/director? (only fill for the post you
              are applying for)</label
            >
            <textarea name id></textarea> -->

          <label for="q1">
            What about you makes you stand out and perhaps better than the other
            contenders applying for the same post?
          </label>
          <textarea
            v-model="q1"
            id="q1"
            placeholder="Answer"
            required
          ></textarea>

          <label for="q2">
            What are the qualities of an ideal
            Photographer/Cinematographer/Director? (fill this for the post
            you're applying for)
          </label>
          <textarea
            v-model="q2"
            id="q2"
            placeholder="Answer"
            required
          ></textarea>

          <label for="q3">How would you describe your style of work?</label>
          <textarea
            v-model="q3"
            id="q3"
            placeholder="Answer"
            required
          ></textarea>

          <label for="q4">
            Please compile your portfolio on google drive and share the link.
          </label>
          <textarea
            v-model="q4"
            id="q4"
            placeholder="Answer"
            required
          ></textarea>

          <label for="q5">
            Do you have any creative work experience? If yes, please mention.
          </label>
          <textarea v-model="q5" id="q5" placeholder="Answer"></textarea>
        </div>

        <h6 v-if="classerror" class="semi red zero">
          Please choose your class
        </h6>
        <h6 v-if="fielderror" class="semi red" style="margin-bottom: 0.5em">
          Please pick a field
        </h6>
        <div v-if="errors.length">
          <ul class="zero" style="margin-bottom: 0.5em">
            <li class="zero red" v-for="error in errors" :key="error">
              {{ error }}
            </li>
          </ul>
        </div>
        <div class="anti-center">
          <button class="button-primary" :disabled="loading">
            <span v-if="!loading">Submit</span>
            <span v-if="loading">Loading</span>
          </button>
        </div>
      </form>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="six columns">
          <h6>
            <a
              href="//github.com/arhaanb/lens20"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="../assets/img/github.svg"
                alt="GitHub"
                class="github icon"
              />
              View Source</a
            >
          </h6>
        </div>
        <div class="six columns">
          <h6 class="right">
            <a href="//arhaanb.co/" rel="noreferrer" target="_blank">
              Made with
              <img
                src="../assets/img/heart.svg"
                alt="Heart"
                class="heart icon"
              />
              by Arhaan</a
            >
          </h6>
        </div>
      </div>
    </footer>
  </Layout>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Recruitments",
  },
  data: () => ({
    errors: [],
    over: false,
    submitted: false,
    loading: false,
    classerror: false,
    fielderror: false,
    name: "",
    email: "",
    phone: "",
    class1: 0,
    section: 0,
    radio: {
      photography: false,
      direction: false,
    },
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  }),
  methods: {
    async addUser(e) {
      e.preventDefault();
      this.loading = true;
      this.errors = [];

      if (this.errors.length > 0) {
        this.loading = false;
      }

      if (this.class1 == 0 || this.section == 0) {
        // this.classerror = true;
        this.errors.push("Please select your class.");
        this.loading = false;
      }

      if (this.radio.photography == false && this.radio.direction == false) {
        // this.fielderror = true;
        this.errors.push("Please choose a field.");
        this.loading = false;
      } else {
        if (this.errors.length > 0) {
          this.loading = false;
        } else {
          await axios
            .post("https://lensapi.arhaanb.co/lens", {
              name: this.name,
              email: this.email,
              phone: this.phone,
              class: this.class1,
              section: this.section,
              field: this.radio,
              q1: this.q1,
              q2: this.q2,
              q3: this.q3,
              q4: this.q4,
              q5: this.q5,
            })
            .then((response) => {
              const data = response.data;
              // console.log(data);
              this.msg = data.msg;
            });
          this.loading = false;
          this.submitted = true;
        }
      }
    },
  },
};
</script>

<style lang="scss">
footer.footer {
  background-color: rgba(240, 240, 240, 0.6);
  border-top: solid 1px rgba(190, 190, 190, 0.8);
  margin: 0;
  padding: 0.8em 0;
  margin-top: 2em;
  .github {
    width: 1.5em;
    margin-bottom: -0.35em;
  }
  .heart {
    width: 1.2em;
    margin-bottom: -0.2em;
  }
  .right {
    text-align: right;
  }
  h6 {
    margin: 0;
    font-size: 0.9em;
    a {
      color: #222;
    }
    a:hover {
      color: #6699ee;
    }
  }
  @media (max-width: 550px) {
    h6,
    .right {
      text-align: center;
    }
  }
}

.applying {
  margin-bottom: 0.5em;
}

.red {
  color: rgb(235, 68, 68);
}

.check {
  margin: 2em 0;
}

.xboxbox {
  input {
    margin-right: 0.5em;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  label {
    margin-top: -1.1em;
    font-family: "europa-regular";
  }
}

.title {
  font-family: "virgo 01";
  color: #6699ee;
  text-align: left;
  font-size: 2.5em;
  text-transform: uppercase;
  margin-top: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0;
}

.minetbtn {
  margin-top: 2.5em;
}

.sub {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgb(63, 63, 63);
  font-size: 1.2em;
  font-family: "europa";
  // font-weight: 400;
}

.mbtop {
  margin-top: 4em;
}

.mbbtm {
  margin-bottom: 0.5em;
}

.lenslog {
  width: 13em;
}

.row {
  margin-bottom: 1em;
}

button {
  margin-top: 1em;
}

.longq textarea {
  margin-top: 0.5em;
}

@media (max-width: 750px) {
  .mbtop {
    margin-top: 2em;
  }
  .anti-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .successmargin {
    height: 50vh;
  }
}
</style>
