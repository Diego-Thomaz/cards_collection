<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">
        Magic: The Gathering Arena, Checkout
      </h1>
      <Checkout :shop-cart-cards="checkoutCards" />
    </div>
  </section>
</template>

<script>
import Checkout from '@/components/checkout/'

export default {
  data() {
    return {
      checkoutCards: [],
    }
  },
  components: { Checkout },
  props: {
    cartCards: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    for(var i = 0; i < this.cartCards.length; i++) {
      this.checkoutCards[i] = this.cartCards[i];
      this.$set(this.checkoutCards[i], 'qtde', 1);
      this.$set(this.checkoutCards[i], 'subtotal', this.cartCards[i].price);
    }
  },
}
</script>
