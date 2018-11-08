<template>
  <div id="countdown">
    <time :datetime="conferenceDate"
      >{{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}</time
    >
  </div>
</template>

<script>
export default {
  name: "count-down",
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  computed: {
    conferenceDate() {
      return "2018-11-23T09:00:00";
    }
  },
  methods: {
    startCountDown() {
      const endDate = new Date(this.conferenceDate).getTime();

      const calculate = () => {
        const startDate = new Date().getTime();

        let timeRemaining = (endDate - startDate) / 1000;

        if (timeRemaining < 0) return;

        this.days = Math.floor(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;

        this.hours = this.zeroFormat(Math.floor(timeRemaining / 3600));
        timeRemaining = timeRemaining % 3600;

        this.minutes = this.zeroFormat(Math.floor(timeRemaining / 60));
        timeRemaining = timeRemaining % 60;

        this.seconds = this.zeroFormat(Math.floor(timeRemaining));
      };

      calculate();

      setInterval(calculate, 1000);
    },
    zeroFormat(num) {
      return String(num).padStart(2, "0");
    }
  },
  created() {
    this.startCountDown();
  }
};
</script>

<style lang="scss" scoped>
#countdown {
}
</style>
