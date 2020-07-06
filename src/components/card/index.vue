<template>
  <div class="columns is-12 is-multiline">
    <div class="column is-3" v-for="card in cards" :key="card.id">
      <article class="navigation">
        <Figure :img-url="card.imgUrl" pclass="image is-2by2"/>
        <CardTable :card="card" @addCardToCollection="addCardToCollection"/>
      </article>
    </div>
	</div>
</template>

<script>
import CardTable from '@/components/card/card-table'
import Figure from '@/components/ui/elements/figure'

export default {
  props: {
    cards: {
      type: Array,
      default: () => []
    }
  },
  components: { CardTable, Figure },
  methods: {
    addCardToCollection(card_id) {
      this.$emit('addCardToCollection', card_id)
    }
  }
}
</script>