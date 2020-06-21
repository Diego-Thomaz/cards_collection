<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">
        Magic: The Gathering Arena, Checkout
      </h1>
      <div class="columns is-12 is-multiline">
        <div class="column is-12 mt-3" v-for="card in checkoutCards" :key="card.id">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img :src="card.image">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ card.name }}</strong>
                  <br>
                  {{ card.rarity }}, {{ card.race }}
                </p>
              </div>
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
            </div>
            <div class="media-right">
              <button class="delete"></button>
            </div>
          </article>
        </div>
        <div class="">
          Valor Total: R$ {{ sumTotal }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Checkout',
  data() {
    return {
      checkoutCards: [],
    }
  },
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
  computed: {
    sumTotal() {
      let total = 0.0;
      this.checkoutCards.forEach(function(card) {
        total += parseFloat(card.subtotal);
      });
      return total.toFixed(2);
    },
  },
  methods: {
    recalcPrice: function(card) {
      card.subtotal = (card.qtde * parseFloat(card.price)).toFixed(2)
      return card.subtotal
    }
  },
}
</script>

<style lang="scss">
@import '@/design/home.scss';
</style>
