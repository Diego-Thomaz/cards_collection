<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">
        Magic The Gathering Area, Cards Collection
      </h1>
      <div class="columns is-12 is-multiline">
        <div class="column is-3" v-for="card in cards" :key="card.id">
          <article class="navigation">
            <figure class="image is-2by2">
              <img :src="card.image">
              <div class="ml-3">
                <div class="is-3">
                  <span><strong>Name:</strong> {{ card.name }}</span>
                </div>
                <div class="is-3">
                  <span><strong>Rarity:</strong> {{ card.rarity }}</span>
                </div>
                <div class="is-3">
                  <span><strong>Race:</strong> {{ card.race }}</span>
                </div>
              </div>
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
          name: 'Ayula, Queen Among Bears',
          rarity: 'Legendary Creature',
          race: 'Bear',
          image: 'https://i.pinimg.com/564x/c8/dc/cc/c8dccc56c988bc5d20883ef77d68dfd2.jpg',
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
          name: 'Knight of Glory',
          rarity: 'Creature',
          race: 'Human Knight',
          image: 'https://i.pinimg.com/564x/11/05/43/1105432ea57e74efb3579fddd7b9ceef.jpg',
        },
      ],
    };
  },
}
</script>
