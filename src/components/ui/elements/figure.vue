<template>
  <figure :class="fclass">
    <p :class="pclass">
      <img :src="imgUrl">
    </p>
  </figure>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: () => "https://bulma.io/images/placeholders/64x64.png"
    },
    pclass: {
      type: String,
      default: () => "image is-64x64"
    },
    fclass: {
      type: String,
      default: () => ""
    }
  }
}
</script>