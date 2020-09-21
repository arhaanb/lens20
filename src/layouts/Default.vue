<template>
  <div class="layout">
    <div class="sidenav">
      <div class="container">
        <div class="promo">
          <h3>MINET Lens</h3>
          <p>Recruitments</p>
        </div>
      </div>
    </div>

    <div class="main">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.layout {
  font-family: "inter";
}

.sidenav {
  height: 100%;
  width: 45vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background-image: url("../0409.jpeg");
  background-size: cover;
  background-position: center;
  .promo {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // background-color: rgba(0, 0, 0, 0.637);
    color: #fff;
  }
}

.main {
  margin-left: 45vw; /* Same as the width of the sidenav */
  padding: 2em 0;
}

@media (max-width: 750px) {
  .sidenav {
    width: 100%;
    z-index: -2;
    height: 70vh;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 1.5em;
    .promo {
      height: auto;
    }
  }
  .main {
    margin: 0;
    margin-top: 80vh;
    background-color: #fff;
  }
}
</style>
