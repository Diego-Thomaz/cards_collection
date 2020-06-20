<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">
        Magic: The Gathering Arena, Cards Collection
      </h1>
      <div class="columns is-12 is-multiline">
        <div class="column is-3" v-for="card in cards" :key="card.id">
          <article class="navigation">
            <figure class="image is-2by2">
              <img :src="card.image">
              <table class="table is-fullwidth home_table">
                <tbody>
                  <tr>
                    <td><strong>Name:</strong></td><td>{{ card.name }}</td>
                  </tr>
                  <tr>
                    <td><strong>Rarity:</strong></td><td>{{ card.rarity }}</td>
                  </tr>
                  <tr>
                    <td><strong>Race:</strong></td><td>{{ card.race }}</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <button
                        class="button is-small is-dark is-fullwidth is-outlined"
                        @click="addCardToCollection(card.id)"
                      >
                        Add
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
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      // Data is mocked for test porpouses
      my_cards: [],
      cards: [
        {
          id: 1,
          name: 'Raynor, Ravinican Icon',
          rarity: 'Legendary Creature',
          race: 'Human Knight',
          image: 'https://i.pinimg.com/564x/64/12/2f/64122f3bade82e0c4cbea7b2b2a0c424.jpg',
        },
        {
          id: 2,
          name: 'Salgar, Spirit Binder',
          rarity: 'Legendary Creature',
          race: 'Ogre Shaman',
          image: 'https://i.pinimg.com/564x/80/87/a8/8087a814e4b09145b334218f55f0dbc9.jpg',
        },
        {
          id: 3,
          name: 'The Bountiful Court',
          rarity: 'Legendary Creature',
          race: 'Zombie Advisor',
          image: 'https://i.pinimg.com/564x/c4/a1/c7/c4a1c7b6d269daf370067c438fade0d8.jpg',
        },
        {
          id: 4,
          name: 'Squirrel Champion',
          rarity: 'Creature',
          race: 'Squirrel Knight',
          image: 'https://i.pinimg.com/564x/09/13/db/0913db2b51dd052c798fb8eb1a2eb704.jpg',
        },
        {
          id: 5,
          name: 'Shedun, Who Serves All',
          rarity: 'Legendary Creature',
          race: 'Cat',
          image: 'https://i.pinimg.com/564x/6a/fe/a0/6afea04fc2cf087f1cb0d51638559392.jpg',
        },
        {
          id: 6,
          name: 'Nylea, God of the Hunt',
          rarity: 'Legendary Enchantment Creature',
          race: 'God',
          image: 'https://i.pinimg.com/564x/b2/df/3f/b2df3f9bc3b803a6db35e97f7780884a.jpg',
        },
        {
          id: 7,
          name: 'Atemsis, All-Seeing',
          rarity: 'Legendary Creature',
          race: 'Sphinx',
          image: 'https://i.pinimg.com/564x/f5/a4/1e/f5a41eb1dca80b937c14b31af2113ecd.jpg',
        },
        {
          id: 8,
          name: 'Snapcaster Mage',
          rarity: 'Creature',
          race: 'Human Wizard',
          image: 'https://i.pinimg.com/564x/d7/a9/fa/d7a9fa1f2d1976844e8601f08a88eb14.jpg',
        },
      ],
    };
  },
  methods: {
    addCardToCollection(card_id) {
      this.addCard(card_id);
      this.removeCardFromDeck(card_id);
    },
    addCard(card_id) {
      return this.my_cards.push(this.cards.filter((obj) => obj.id === card_id)[0]);
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
