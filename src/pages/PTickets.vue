<template>
  <div id="tickets">
    <p>
      Early bird registration is $695 and is limited to the first 100 tickets or
      November 30!
    </p>
    <small>Does not include a workshop ticket.</small>
    <a href="#" id="tickets-button">Get Tickets</a>
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
