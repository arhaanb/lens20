<template>
  <div class="layout">
    <div class="sidenav">
      <img src="../favicon.svg" class="logo" draggable="false" />
      <div class="flex-center">
        <g-image src="../darsh.jpg" class="sideimg" draggable="false" />
      </div>
      <!-- <div class="container">
        <div class="promo">
          <h3>MINET Lens</h3>
          <p>Recruitments</p>
        </div>
      </div> -->
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

.sidenav {
  height: 100%;
  width: 42vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-y: hidden;
  // background-image: url("../darsh.jpg");
  // background-size: cover;
  // background-position: center;
  .promo {
    // height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // background-color: rgba(0, 0, 0, 0.637);
    color: #fff;
  }
}

.main {
  margin-left: 42vw; /* Same as the width of the sidenav */
  padding: 2em 0;
}

.sideimg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 750px) {
  .sidenav {
    width: 100%;
    z-index: -2;
    height: 70vh;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 1.5em;
    // margin: 1.5em 1em 0 1em;
    .promo {
      height: auto;
    }
  }
  .main {
    margin: 0;
    margin-top: 70vh;
    background-color: #fff;
  }
  .sideimg {
    width: 90%;
    // margin-top: 0;
  }
}
</style>
