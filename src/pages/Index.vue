<template>
  <Layout>
    <div class="container">
      <div class="mbtop"></div>
      <img
        src="../lens.svg"
        alt="Lens Logo"
        class="lenslog"
        draggable="false"
      />
      <div class="mbbtm"></div>
      <h5 class="sub">Recruitments</h5>
      <div v-if="submitted">
        <h1 class="semi" style="margin: 1em 0 0.2em 0">
          Let's Make Beautiful Pictures.
        </h1>
        <h5>
          Thank you for applying to MINET Lens. We will contact you regarding
          your application shortly.
        </h5>
        <a href="//minet.co">
          <button class="cool minetbtn button-primary">Team MINET</button>
        </a>
        <div class="successmargin"></div>
      </div>
      <div v-if="!submitted">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum
          quidem cumque reiciendis quae minima consequuntur tenetur at quam
          corrupti nihil, praesentium possimus? Quaerat consequatur asperiores
          eum nostrum? Sunt, quisquam.
        </p>
        <form action="#">
          <label>Name</label>
          <input type="text" placeholder="Name" v-model="name" required />
          <label>Email</label>
          <input type="email" placeholder="Email" v-model="email" required />
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            v-model="pnumber"
            required
          />
          <div class="row">
            <div class="one-half column">
              <label>Select Class</label>
              <select required class="u-full-width">
                <option value="0" selected disabled>Class</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
              </select>
            </div>

            <div class="one-half column">
              <label>Select Section</label>
              <select required class="u-full-width">
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
            <h6 class="semi applying">What are you applying for?</h6>
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
                  <label for="direction"
                    >Creative Direction and Scripting</label
                  >
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
              What about you makes you stand out and perhaps better than the
              other contenders applying for the same post?
            </label>
            <textarea v-model="q1"></textarea>

            <label>
              What are the qualities of an ideal
              photographer/cinematographer/director? (only fill for the post you
              are applying for)
            </label>
            <textarea v-model="q2"></textarea>

            <label>How would you describe your style of work?</label>
            <textarea v-model="q3"></textarea>

            <label>
              Please compile your portfolio on google drive and share the link
              below. Include as many original creative works as possible.
            </label>
            <textarea v-model="q4"></textarea>

            <label>
              Lastly, do you have any creative work experience? If yes, please
              mention.
            </label>
            <textarea v-model="q5"></textarea>
          </div>

          <div class="anti-center">
            <button class="button-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Recruitments",
  },
  data: () => ({
    submitted: false,
    radio: {
      photography: "",
      direction: "",
    },
    name: "",
    email: "",
    pnumber: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  }),
};
</script>

<style lang="scss">
.applying {
  margin-bottom: 0.5em;
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
