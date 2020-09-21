<template>
  <Layout>
    <div class="container">
      <h2 class="title">MINET Lens</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum quidem cumque reiciendis quae minima consequuntur tenetur at quam corrupti nihil, praesentium possimus? Quaerat consequatur asperiores eum nostrum? Sunt, quisquam.</p>
      <label for>Name</label>
      <input type="text" placeholder="Name" />
      <label for>Email</label>
      <input type="text" placeholder="Email" />
      <label for>Phone Number</label>
      <input type="text" placeholder="Phone Number" />
      <button class="button-primary u-pull-right">Submit</button>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 1em;
  font-weight: 600;
}
</style>
