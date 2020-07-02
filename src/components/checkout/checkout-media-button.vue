<template>
  <div class="media-right">
    <button class="delete" @click="removeCard(cardId, $event)"></button>
  </div>
</template>

<script>
export default {
  props: {
    cardId: {
      type: Number,
      default: () => 0.0
    }
  },
  methods: {
    removeCard(cardId) {
      this.$emit('removeCard', cardId);
    }
  }
}
</script>