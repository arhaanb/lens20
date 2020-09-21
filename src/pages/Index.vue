<template>
  <Layout>
    <div class="container">
      <h2>MINET Lens</h2>
      <p>
        <a href="//minet.co">MINET Lens</a>
        is the official Image component for use in building Gatsby websites. It
        provides the fastest, most optimized image loading performance possible
        for Gatsby (and other React) websites.
      </p>
      <p>
        The component requires
        <strong>no configuration</strong>
        when used within Gatsby. All image processing is done within Gatsby and
        official plugins.
      </p>
      <p>
        See the
        <a href="https://www.gatsbyjs.org/">component’s documentation</a>
        as well as
        <a href="https://github.com/arhaanb/">view this site’s source</a>
        to learn how to start using gatsby-image on your Gatsby sites.
      </p>
      <h4>Out of the box it:</h4>
      <ul>
        <li>
          Loads the optimal size of image for each device size and screen
          resolution
        </li>
        <li>
          Holds the image position while loading so your page doesn’t jump around
          as images load
        </li>
        <li>
          Uses the “blur-up” effect i.e. it loads a tiny version of the image to
          show while the full image is loading
        </li>
        <li>Alternatively provides a “traced placeholder” SVG of the image.</li>
        <li>
          Lazy loads images which reduces bandwidth and speeds the initial load
          time
        </li>
        <li>Uses WebP images if browser supports the format</li>
      </ul>
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

<style>
</style>
