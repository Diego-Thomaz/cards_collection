<template>
  <div class="columns is-12 is-multiline">
    <div class="column is-12 mt-3" v-for="card in checkoutCards" :key="card.id">
      <CheckoutItem :card="card" @recalcPrice="recalcPrice" @removeCard="removeCard" />
    </div>
    <CheckoutTotal :sum-total="sumTotal" />
  </div>
</template>

<script>
import CheckoutItem from '@/components/checkout/checkout-item'
import CheckoutTotal from '@/components/checkout/checkout-total'

export default {
  name: 'Checkout',
  props: {
    shopCartCards: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      checkoutCards: this.shopCartCards
    }
  },
  components: { CheckoutItem, CheckoutTotal },
  methods: {
    recalcPrice: function(card) {
      card.subtotal = (card.qtde * parseFloat(card.price)).toFixed(2)
      return card.subtotal
    },
    removeCard: function(cardId) {
      return this.checkoutCards = this.checkoutCards.filter((card) =>  parseInt(card.id) !== cardId)
    }
  },
  created(){
    this.sumTotal
  },
  computed: {
    sumTotal() {
      let total = 0.0;
      this.checkoutCards.forEach(function(card) {
        total += parseFloat(card.subtotal);
      });
      return total.toFixed(2);
    },
  },
}
</script>