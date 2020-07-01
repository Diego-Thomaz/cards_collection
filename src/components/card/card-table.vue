<template>
  <table class="table is-fullwidth card__table">
    <tbody>
      <CardTableRow title="Name" :value="card.name" />
      <CardTableRow title="Rarity" :value="card.rarity" />
      <CardTableRow title="Types" :value="type" />
      <CardTableRow title="Price" :value="price" />
      <CardTableRowButton :card_id="card.id" @addCardToCollection="addCardToCollection" />
    </tbody>
  </table>
</template>

<script>
import CardTableRow from '@/components/card/card-table-row'
import CardTableRowButton from '@/components/card/card-table-row-button'

export default {
  data() {
    return {
      type: "",
      price: 0.0,
    }
  },
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  },
  components: { CardTableRow, CardTableRowButton },
  methods: {
    addCardToCollection(card_id) {
      this.$emit('addCardToCollection', card_id);
    },
    formatTypes() {
      this.type = this.card.kinds.map((k) => k.name).join(", ");
    },
    formatPrice() {
      this.price = this.card.price.toFixed(2);
    }
  },
  mounted() {
    this.formatTypes();
    this.formatPrice();
  }
}
</script>

<style lang="scss" scoped>
@import '../../design/colors';

.card__table {
  background-color: $wheat;
  border-collapse: separate;
  border: solid $tan 1px;
  border-radius: 6px;
  -moz-border-radius: 6px;
  font-size: 14px;

  td, th {
    border-top:solid $tan 1px;
  }

  th {
    border-top: none;
  }

  td:first-child, th:first-child {
    border-left: none;
  }
  tbody tr:nth-child(even) {
    background-color: $burlywood;
  }
}
</style>