<template>
  <Layout>
    <div class="container">
      <div class="mbtop"></div>
      <img src="../lens.svg" alt="MINET Lens" class="lenslog" draggable="false" />
      <div class="mbbtm"></div>
      <h1 class="semi zero four">404</h1>
      <h5 class="desc">
        Page not found. You can go back <g-link to="/">home</g-link>. If you
        think this was a mistake, email us at
        <a href="mailto:minet@themis.in" target="_blank">minet@themis.in</a>, or
        drop us a message on our instagram account
        <a href="//instagram.com/minetlens" target="_blank">@minetlens</a>.
      </h5>
    </div>
    <div class="successmargin"></div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "404",
  },
  data: () => ({
    submitted: false,
  }),
};
</script>

<style lang="scss" scoped>
.mbtop {
  margin-top: 4em;
}

.four {
  margin-top: 0.3em;
}

.desc {
  font-size: 1.2em;
}

.mbbtm {
  margin-bottom: 0.5em;
}

.lenslog {
  width: 13em;
}

a {
  text-decoration: none;
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
