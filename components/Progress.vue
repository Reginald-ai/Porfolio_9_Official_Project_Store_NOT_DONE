<template>
  <div class="graph">
    <h2>Html Development</h2>
    <v-progress-linear v-model="power" color="amber" height="25">
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />
    <h2>Javascript Development</h2>

    <v-progress-linear v-model="skill" color="blue-grey" height="25">
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />
    <h2>Cascading Style Sheets Development</h2>

    <v-progress-linear v-model="knowledge" height="25">
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </v-progress-linear>

    <br />
    <h2>Git Development</h2>

    <v-progress-linear v-model="knowledge" color="pink darken-2" height="25">
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  data: () => ({
    skill: 20,
    knowledge: 33,
    power: 78,
  }),
};
</script>

<style>
</style>