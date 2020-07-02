<template>
  <div class="columns is-12 is-multiline">
    <div class="column is-3" v-for="card in cards" :key="card.id">
      <article class="navigation">
        <figure class="image is-2by2">
          <img :src="card.imgUrl" :alt="card.name">
        </figure>
        <CardTable :card="card" @addCardToCollection="addCardToCollection"/>
      </article>
    </div>
	</div>
</template>

<script>
import CardTable from '@/components/card/card-table'

export default {
  props: {
    cards: {
      type: Array,
      default: () => []
    }
  },
  components: { CardTable },
  methods: {
    addCardToCollection(card_id) {
      this.$emit('addCardToCollection', card_id)
    }
  }
}
</script>