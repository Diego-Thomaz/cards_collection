<template>
  <figure class="media-left">
    <p class="image is-64x64">
      <img :src="cardImgUrl">
    </p>
  </figure>
</template>

<script>
export default {
  props: {
    cardImgUrl: {
      type: String,
      default: () => ""
    }
  }
}
</script>