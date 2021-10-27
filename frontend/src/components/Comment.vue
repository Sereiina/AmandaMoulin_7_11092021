<script>
export default {
  name: "Comment",
  props: ["comment"],
};
</script>


<template>
  <div>
    <p>{{ this.comment.content }}</p>
  </div>
</template>

<style>
</style>

