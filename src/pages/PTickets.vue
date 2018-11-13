<template>
  <div id="tickets">
    <p>{{ $t("tickets_1") }}</p>
    <small>{{ $t("tickets_2") }}</small>
    <a
      href="https://www.eventbrite.com/e/techethics-tickets-52506837364"
      id="tickets-button"
      >{{ $t("tickets_3") }}</a
    >
  </div>
</template>

<script>
export default {
  name: "p-tickets"
};
</script>

<style lang="scss" scoped>
#tickets {
  width: 506px;
}

#tickets-button {
  background-color: var(--red-500);
  padding: 10px 20px;
  display: block;
  box-shadow: 2px 2px 0 0 var(--red-700);
  width: max-content;
  margin: 20px 0;
  box-shadow: 4px 4px 0 0 var(--red-600);
}
</style>
