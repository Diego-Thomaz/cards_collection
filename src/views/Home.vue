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
        <Card :cards="cards" @addCardToCollection="addCardToCollection" />
      </div>
    </section>
  </div>
</template>

<script>
import Card from '@/components/card/card'
import gql from 'graphql-tag';

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
  components: { Card },
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
@import '../design/colors';

.home__cart {
  float: right;
  margin-right: 20px;
}

a.notif {
  position: relative;
  display: block;
  height: 50px;
  width: 50px;
  background-size: contain;
  text-decoration: none;
}

a.notif:before {
  content: "\f07a";
  font-family: "Font Awesome 5 Free";
  left: 5px;
  position: absolute;
  top: 0;
  font-weight: 900;
}

.button__badge {
  background-color: $crimson;
  border-radius: 2px;
  color: white;

  padding: 1px 3px;
  font-size: 10px;

  position: absolute;
  top: -8px;
  right: 12px;
}
</style>
