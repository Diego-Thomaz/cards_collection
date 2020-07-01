<template>
  <tr>
    <td><strong>{{ title }}</strong></td><td>{{ value }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ""
    },
    value: {
      type: String,
      default: () => ""
    }
  }
}
</script>