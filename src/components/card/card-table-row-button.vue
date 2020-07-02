<template>
  <tr>
    <td colspan="2">
      <button
        class="button is-small is-dark is-fullwidth is-outlined"
        @click="addCardToCollection(card_id)"
      >
        Add to cart
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    card_id: {}
  },
  methods: {
    addCardToCollection(card_id) {
      this.$emit('addCardToCollection', card_id)
    }
  }
}
</script>