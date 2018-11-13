<template>
  <div id="schedule">
    <h3>{{ $t("day1") }}</h3>
    <table>
      <tbody>
        <tr>
          <td>{{ $t("times.1") }}</td>
          <td>{{ $t("titles.doors") }}</td>
          <td>{{ $t("titles.opening") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.2") }}</td>
          <td>Daisy-May Wagner</td>
          <td>{{ $t("titles.1") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.3") }}</td>
          <td>Abigail Johns</td>
          <td>{{ $t("titles.2") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.4") }}</td>
          <td>{{ $t("titles.break") }}</td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("times.5") }}</td>
          <td>Isha Farrington</td>
          <td>{{ $t("titles.3") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.6") }}</td>
          <td>Zahrah Mata</td>
          <td>{{ $t("titles.4") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.7") }}</td>
          <td>{{ $t("titles.lunch") }}</td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("times.7") }}</td>
          <td>Gianni Bartlett</td>
          <td>{{ $t("titles.5") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.8") }}</td>
          <td>Cally Donaldson</td>
          <td>{{ $t("titles.6") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.9") }}</td>
          <td>{{ $t("titles.break") }}</td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("times.10") }}</td>
          <td>Sidrah Bell</td>
          <td>{{ $t("titles.7") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.11") }}</td>
          <td>Rosemarie Hansen</td>
          <td>{{ $t("titles.8") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.12") }}</td>
          <td>{{ $t("titles.afterparty") }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h3>{{ $t("day2") }}</h3>
    <table>
      <tbody>
        <tr>
          <td>{{ $t("times.1") }}</td>
          <td>{{ $t("titles.doors") }}</td>
          <td>{{ $t("titles.opening") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.2") }}</td>
          <td>Melissa Quintana</td>
          <td>{{ $t("titles.9") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.3") }}</td>
          <td>Maggie Firth</td>
          <td>{{ $t("titles.10") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.4") }}</td>
          <td>{{ $t("titles.break") }}</td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("times.5") }}</td>
          <td>Phoenix Howarth</td>
          <td>{{ $t("titles.11") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.6") }}</td>
          <td>Giacomo Nolan</td>
          <td>{{ $t("titles.12") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.7") }}</td>
          <td>{{ $t("titles.lunch") }}</td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("times.7") }}</td>
          <td>Sonny Friedman</td>
          <td>{{ $t("titles.13") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.8") }}</td>
          <td>Aryan Mcknight</td>
          <td>{{ $t("titles.14") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.9") }}</td>
          <td>{{ $t("titles.break") }}</td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("times.10") }}</td>
          <td>Izzy Fellows</td>
          <td>{{ $t("titles.15") }}</td>
        </tr>
        <tr>
          <td>{{ $t("times.11") }}</td>
          <td>{{ $t("titles.afterparty") }}</td>
          <td>{{ $t("titles.drinks") }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "p-schedule"
};
</script>

<style lang="scss" scoped>
#schedule {
  width: 580px;

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 12px;
  }

  td {
    padding: 0.5em;
  }
}
</style>
