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
          <a href="mailto:minet@themis.in" target="_blank">minet@themis.in</a>,
          or drop us a message on our instagram account
          <a href="//instagram.com/minetlens" target="_blank">@minetlens</a>.
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
        <label>Name</label>
        <input type="text" placeholder="Name" v-model="name" required />
        <label>Email</label>
        <input type="email" placeholder="Email" v-model="email" required />
        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Phone Number"
          v-model="phone"
          required
        />
        <div class="row">
          <div class="one-half column">
            <label>Select Class</label>
            <select required v-model="class1" class="u-full-width">
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
            <label>Select Section</label>
            <select required v-model="section" class="u-full-width">
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
            <!-- <h5>{{ radio }}</h5> -->
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

          <label>
            What about you makes you stand out and perhaps better than the other
            contenders applying for the same post?
          </label>
          <textarea v-model="q1" placeholder="Answer" required></textarea>

          <label>
            What are the qualities of an ideal
            Photographer/Cinematographer/Director? (fill this for the post
            you're applying for)
          </label>
          <textarea v-model="q2" placeholder="Answer" required></textarea>

          <label>How would you describe your style of work?</label>
          <textarea v-model="q3" placeholder="Answer" required></textarea>

          <label>
            Please compile your portfolio on google drive and share the link.
          </label>
          <textarea v-model="q4" placeholder="Answer" required></textarea>

          <label>
            Do you have any creative work experience? If yes, please mention.
          </label>
          <textarea v-model="q5" placeholder="Answer"></textarea>
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
.applying {
  margin-bottom: 0.5em;
}

.red {
  color: rgb(235, 68, 68);
}

// .check {
//   input {
//     margin-right: 0.5em;
//   }
//   label {
//     margin-bottom: -3em;
//   }
// }

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
