<template>
  <div>
    <br />
    <h2>{{ progres.titleN }}</h2>
    <br />
    <v-progress-linear
      :color="progres.color"
      height="25"
      :value="progres.num"
      striped
    >
      <strong>{{ Math.ceil(progres.num) }}%</strong>
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  props: ["progres"],
};
</script>

<style>
</style>