<template>
  <div>
    <div class="is-12 mt-1">
      <div class="column is-12">
        <router-link
          class="link notif home__cart"
          :to="{ name: 'Checkout', params: { cartCards: cartCards } }"
        >
          <span class="button__badge" v-if="cartCounter > 0">{{ cartCounter }}</span>
        </router-link>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">
          Magic: The Gathering Arena, Cards Collection
        </h1>
        <div class="columns is-12 is-multiline">
          <div class="column is-3" v-for="card in cards" :key="card.id">
            <article class="navigation">
              <figure class="image is-2by2">
                <img :src="card.imgUrl" :alt="card.name">
                <table class="table is-fullwidth home__table">
                  <tbody>
                    <tr>
                      <td><strong>Name:</strong></td><td>{{ card.name }}</td>
                    </tr>
                    <tr>
                      <td><strong>Rarity:</strong></td><td>{{ card.rarity }}</td>
                    </tr>
                    <tr>
                      <td><strong>Type:</strong></td><td>{{ card.kinds }}</td>
                    </tr>
                    <tr>
                      <td><strong>Price:</strong></td><td>R$ {{ card.price }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <button
                          class="button is-small is-dark is-fullwidth is-outlined"
                          @click="addCardToCollection(card.id)"
                        >
                          Add to cart
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </figure>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import gql from "graphql-tag";

const GET_CARDS = gql`
  query {
    cards {
      id
      name
      rarity
      price
      imgUrl
      kinds {
        name
      }
    }
  }
`;

export default {
  name: 'Home',
  data() {
    return {
      cartCards: [],
      cards: [],
    };
  },
  apollo: {
    cards: {
      query: GET_CARDS
    }
  },
  computed: {
    cartCounter() {
      return this.cartCards.length;
    }
  },
  methods: {
    addCardToCollection(card_id) {
      this.addCard(card_id);
      this.removeCardFromDeck(card_id);
    },
    addCard(card_id) {
      return this.cartCards.push(this.cards.filter((obj) => obj.id === card_id)[0]);
    },
    removeCardFromDeck(card_id) {
      return this.cards = this.cards.filter((obj) => obj.id !== card_id);
    },
  },
}
</script>

<style lang="scss">
@import '@/design/home.scss';
</style>
