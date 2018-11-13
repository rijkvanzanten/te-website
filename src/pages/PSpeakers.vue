<template>
  <div id="speakers">
    <ul>
      <li data-name="Daisy-May Wagner">
        <img src="../assets/speaker-1.jpg" alt="Daisy-May Wagner" />
      </li>
      <li data-name="Abigail Johns">
        <img src="../assets/speaker-12.jpg" alt="Abigail Johns" />
      </li>
      <li data-name="Isha Farrington">
        <img src="../assets/speaker-3.jpg" alt="Isha Farrington" />
      </li>
      <li data-name="Zahrah Mata">
        <img src="../assets/speaker-4.jpg" alt="Zahrah Mata" />
      </li>
      <li data-name="Gianni Bartlett">
        <img src="../assets/speaker-5.jpg" alt="Gianni Bartlett" />
      </li>
      <li data-name="Cally Donaldson">
        <img src="../assets/speaker-6.jpg" alt="Cally Donaldson" />
      </li>
      <li data-name="Sidrah Bell">
        <img src="../assets/speaker-7.jpg" alt="Sidrah Bell" />
      </li>
      <li data-name="Rosemarie Hansen">
        <img src="../assets/speaker-8.jpg" alt="Rosemarie Hansen" />
      </li>
      <li data-name="Melissa Quintana">
        <img src="../assets/speaker-9.jpg" alt="Melissa Quintana" />
      </li>
      <li data-name="Maggie Firth">
        <img src="../assets/speaker-10.jpg" alt="Maggie Firth" />
      </li>
      <li data-name="Phoenix Howarth">
        <img src="../assets/speaker-11.jpg" alt="Phoenix Howarth" />
      </li>
      <li data-name="Giacomo Nolan">
        <img src="../assets/speaker-2.jpg" alt="Giacomo Nolan" />
      </li>
      <li data-name="Sonny Friedman">
        <img src="../assets/speaker-13.jpg" alt="Sonny Friedman" />
      </li>
      <li data-name="Aryan Mcknight">
        <img src="../assets/speaker-14.jpg" alt="Aryan Mcknight" />
      </li>
      <li data-name="Izzy Fellows">
        <img src="../assets/speaker-15.jpg" alt="Izzy Fellows" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "p-speakers"
};
</script>

<style lang="scss" scoped>
#speakers {
  width: 588px;
  position: relative;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  li {
    width: 150px;
    height: 150px;
    margin-bottom: 40px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: var(--orange-500);
      opacity: 0;
      transition: opacity 200ms var(--transition-out);
    }

    &:hover::before {
      opacity: 0.8;
      transition: opacity 200ms var(--transition-in);
    }

    &:hover::after {
      content: attr(data-name);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
