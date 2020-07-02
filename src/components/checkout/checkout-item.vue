<template>
  <article class="media">
    <CheckoutMediaImg :card-img-url="card.imgUrl" />
    <div class="media-content">
      <CheckoutMediaContent :card-name="card.name" :card-types="card.kinds" />
      <CheckoutMediaNav :card="card" @recalcPrice="recalcPrice" />
    </div>
    <CheckoutMediaButton :card-id="parseInt(card.id)" @removeCard="removeCard" />
  </article>
</template>

<script>
import CheckoutMediaImg from '@/components/checkout/checkout-media-img'
import CheckoutMediaContent from '@/components/checkout/checkout-media-content'
import CheckoutMediaNav from '@/components/checkout/checkout-media-nav'
import CheckoutMediaButton from '@/components/checkout/checkout-media-button'

export default {
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  },
  components: { CheckoutMediaImg, CheckoutMediaContent, CheckoutMediaNav, CheckoutMediaButton },
  methods: {
    recalcPrice(card){
      this.$emit('recalcPrice', card);
    },
    removeCard(cardId) {
      this.$emit('removeCard', cardId);
    }
  },
}
</script>