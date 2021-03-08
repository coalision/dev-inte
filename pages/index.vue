<template>
  <div>
    <ul class="skipLink">
      <li>
        <a href="#main" ref="skipLink">Skip to main content</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  head: {
    title: "Shop Lolë",
    meta: [
      {
        hid: "Lole Home page",
        name: "Shop Lolë",
        content:
          "Lolë, Lole, Lole Montreal, Lole Canada, Lole Sale, leggings canada, jackets canada, activewear, canadian label, athlesure, montreal fashion, women's fashion, men's fashion"
      }
    ],
    watch: {
      $route() {
        this.$refs.skipLink.focus();
      }
    }
  }
};
</script>

<style>
.skipLink {
  white-space: nowrap;
  margin: 1em auto;
  top: 0;
  position: fixed;
  left: 50%;
  margin-left: -72px;
  opacity: 0;
}
.skipLink:focus {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
}
</style>
