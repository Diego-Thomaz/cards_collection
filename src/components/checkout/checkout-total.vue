<template>
  <div>
    <strong>Total: R$ </strong> {{ sumTotal }}
  </div>
</template>

<script>
export default {
  props: {
    sumTotal: {
      type: String,
      default: () => ""
    }
  }
}
</script>