<template>
  <nav class="level is-mobile">
    <div class="level-left">
      <a class="level-item">
        <div class="field">
          <div class="control">
            <input
              class="input is-small is-rounded"
              v-model="card.qtde"
              type="number"
              value="1"
              min="0"
              @change="recalcPrice(card, $event)">
          </div>
        </div>
      </a>
      <span>R$ {{ card.subtotal }}</span>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    recalcPrice(card) {
      this.$emit('recalcPrice', card);
    }
  }
}
</script>