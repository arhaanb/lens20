<template>
  <Layout>
    <div class="container">
      <div class="mbtop"></div>
      <img src="../lens.svg" alt class="lenslog" draggable="false" />
      <div class="mbbtm"></div>
      <h5 class="sub">Recruitments</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum quidem cumque reiciendis quae minima consequuntur tenetur at quam corrupti nihil, praesentium possimus? Quaerat consequatur asperiores eum nostrum? Sunt, quisquam.</p>
      <form action="#">
        <label for>Name</label>
        <input type="text" placeholder="Name" />
        <label for>Email</label>
        <input type="text" placeholder="Email" />
        <label for>Phone Number</label>
        <input type="text" placeholder="Phone Number" />
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
        <!-- <br /> -->
        <div class="longq">
          <label
            for
          >What kind of gear do you use? (Camera type and model, lenses, flashes, filters, any other photography/film-making related equipment that you possess)</label>
          <textarea name id>i think this question super dumb ngl</textarea>

          <label
            for
          >What are the qualities of an ideal photographer/cinematographer/director? (only fill for the post you are applying for)</label>
          <textarea name id></textarea>

          <label
            for
          >What about you makes you stand out and perhaps better than the other contenders applying for the same post?</label>
          <textarea name id></textarea>

          <label
            for
          >What are the qualities of an ideal photographer/cinematographer/director? (only fill for the post you are applying for)</label>
          <textarea name id></textarea>

          <label for>How would you describe your style of work?</label>
          <textarea name id></textarea>

          <label
            for
          >Please compile your portfolio on google drive and share the link below. Include as many original creative works as possible.</label>
          <textarea name id></textarea>

          <label for>Lastly, do you have any creative work experience? If yes, please mention.</label>
          <textarea name id></textarea>
        </div>

        <div class="anti-center">
          <button class="button-primary">Submit</button>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Recruitments",
  },
};
</script>

<style lang="scss" scoped>
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
}
</style>
