<template>
  <div class="content">
    <p>
      <strong>{{ cardName }}</strong>
      <br>
      {{ types }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: ""
    }
  },
  props: {
    cardName: {
      type: String,
      default: () => ""
    },
    cardTypes: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.formatTypes()
  },
  methods: {
    formatTypes() {
      this.types = this.cardTypes.map((k) => k.name).join(", ");
    }
  }
}
</script>