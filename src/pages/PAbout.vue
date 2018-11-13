<template>
  <div id="about">
    <p>{{ $t("about_intro") }}</p>
    <p>{{ $t("about_date") }}</p>
    <p>{{ $t("about_location_1") }}<br />{{ $t("about_location_2") }}</p>
  </div>
</template>

<script>
export default {
  name: "p-about"
};
</script>

<style scoped lang="scss">
#about {
  width: 414px;
}
</style>
