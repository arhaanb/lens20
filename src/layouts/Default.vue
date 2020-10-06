<template>
  <div class="layout">
		<ClientOnly>
			<div class="sidenav">
				<img
					src="../assets/img/favicon.svg"
					alt="MINET Lens Logo"
					class="logo"
					draggable="false"
				/>

				<g-image
					src="../assets/img/darsh.jpg"
					alt="Bird by Darsh Vohra"
					class="sideimg"
					draggable="false"
				/>
			</div>

			<div class="main">
				<slot />
			</div>
		<ClientOnly/>
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
  .promo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
  }
}

.main {
  margin-left: 42vw;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
  }
}
</style>