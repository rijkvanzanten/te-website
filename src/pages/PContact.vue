<template>
  <div id="contact">
    <p>{{ $t("contact_1") }}</p>
    <ul>
      <li>
        {{ $t("contact_2") }} <a href="#">{{ $t("contact_3") }}</a
        >.
      </li>
      <li>
        <a href="#">{{ $t("contact_4") }}</a> {{ $t("contact_5") }}
      </li>
      <li>{{ $t("contact_6") }}</li>
      <li>{{ $t("contact_7") }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "p-contact"
};
</script>

<style lang="scss" scoped>
#contact {
  width: 543px;
}
</style>
