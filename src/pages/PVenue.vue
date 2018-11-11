<template>
  <div id="venue">
    <p>
      Makuhari Messe<br />2-1, Nakase, Mihama-ku, Chiba-city, 261-8550 Japan
    </p>
    <img src="../assets/venue.jpg" alt="The Venue" />
  </div>
</template>

<script>
export default {
  name: "p-venue"
};
</script>

<style lang="scss" scoped>
#venue {
  width: 388px;
  position: relative;

  img {
    width: 100%;
  }
}
</style>
