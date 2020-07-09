<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">
        Magic: The Gathering Arena, Cards Registration
      </h1>
      <form @submit.prevent="saveCard(card, $event)">
        <div class="column is-6">
          <div class="field">
            <div class="control">
              <div class="columns is-vcentered">
                <div class="column is-2">
                  <Figure :img-url="cardImg" pclass="image is-2by2"/>
                </div>
                <div class="column">
                  <label for="imgUrl" class="label">Card image url</label>
                  <input 
                    class="input is-rounded"
                    type="text"
                    placeholder="Card image url"
                    name="imgUrl"
                    v-model="card.imgUrl"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label for="name" class="label">Name</label>
              <input
                class="input is-rounded"
                type="text"
                placeholder="Card name"
                name="name"
                v-model="card.name"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label for="manaCost" class="label">Mana Cost</label>
              <input
                class="input is-rounded"
                type="number"
                placeholder="Mana Cost"
                name="manaCost"
                v-model="card.manaCost"
                min="0"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label for="price" class="label">Price</label>
              <currency-input
                class="input is-rounded"
                currency="USD"
                locale="en-US"
                placeholder="0.00"
                v-model="card.price" 
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Rarity</label>
            <div class="control">
              <div class="select is-rounded is-fullwidth">
                <select v-model="card.rarity" name="rarity">
                  <option v-for="rarity in rarities" :key="rarity" :value="rarity">{{ rarity }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Kinds</label>
            <div class="control">
              <label class="checkbox mr-4" v-for="kind in kinds" :key="kind.id">
                <input type="checkbox" v-model="card.kinds" name="card.kinds" :value="kind.id">
                {{ kind.name }}
              </label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-light mr-2">Cancel</button>
              <button class="button is-primary" type="submit">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Figure from '@/components/ui/elements/figure'
import CardQueries from '@/assets/js/apollo-queries'
import gql from 'graphql-tag';

export default {
  data() {
    return {
      card: {
        name: "",
        rarity: "",
        imgUrl: "",
        manaCost: 0,
        price: 0.00,
        kinds: []
      },
      rarities: [],
      kinds: [],
    }
  },
  components: { Figure },
  async created() {
    let response = await this.$apollo.query({
      query: CardQueries.CARD_RARITIES, update: data => data.__type
    })
    this.rarities = response.data.__type.enumValues.map((obj) => obj.name)

    response = await this.$apollo.query({
      query: CardQueries.CARD_KINDS
    })
    this.kinds = response.data.kinds
  },
  computed: {
    cardImg() {
      return this.card.imgUrl !== "" 
        ? this.card.imgUrl 
        : "https://bulma.io/images/placeholders/64x64.png"
    },
  },
  methods: {
    saveCard(card) {
      this.$apollo.mutate({
        mutation: gql`mutation($name: String!, $price: Float!, $imgUrl: String!, $rarity: String!, $manaCost: Int!, $kinds: [KindInput!]) {
          createCard(input: {
            attributes: {
              name: $name,
              price: $price,
              imgUrl: $imgUrl,
              rarity: $rarity,
              manaCost: $manaCost,
              kinds: $kinds
            }
          }) {
            card {
              id
              name
              price
              imgUrl
              rarity
              manaCost
              kinds {
                name
              }
            }
            errors
          }
        }`,
        variables: {
          name: card.name,
          price: card.price,
          imgUrl: card.imgUrl,
          rarity: card.rarity.toLowerCase(),
          manaCost: parseInt(card.manaCost),
          kinds: card.kinds.map(function(x) {
            return {
              id: x
            }
          })
        }
      }).then((data) => {
        if(data.data.createCard.errors.length){
          console.error(data.data.createCard.errors)
        }
        else {
          this.$router.push({ path: '/home' })
        }
      }).catch((errors) => {
        console.error(errors)
      })
    }
  }
}
</script>