<script lang="ts" setup></script>

<template>
  <div class="box">
    <section>
      <h2>Spikes</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
        culpa tempora libero cum earum maiores suscipit, unde excepturi, quaerat
        optio. Deserunt placeat illo, nihil cumque est et excepturi enim?
      </p>
    </section>
    <section class="spikes">
      <h2>Spikes</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
        culpa tempora libero cum earum maiores suscipit, unde excepturi, quaerat
        optio. Deserunt placeat illo, nihil cumque est et excepturi enim?
      </p>
    </section>
    <section>
      <h2>Spikes</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
        culpa tempora libero cum earum maiores suscipit, unde excepturi, quaerat
        optio. Deserunt placeat illo, nihil cumque est et excepturi enim?
      </p>
    </section>
    <section class="diagnoal">
      <h2>Diagonal</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
        culpa tempora libero cum earum maiores suscipit, unde excepturi, quaerat
        optio. Deserunt placeat illo, nihil cumque est et excepturi enim?
      </p>
    </section>
    <section>
      <h2>Spikes</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
        culpa tempora libero cum earum maiores suscipit, unde excepturi, quaerat
        optio. Deserunt placeat illo, nihil cumque est et excepturi enim?
      </p>
    </section>
    <section class="wavy">
      <h2>Wavy</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
        culpa tempora libero cum earum maiores suscipit, unde excepturi, quaerat
        optio. Deserunt placeat illo, nihil cumque est et excepturi enim?
      </p>
    </section>
    <section>
      <h2>Spikes</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
        culpa tempora libero cum earum maiores suscipit, unde excepturi, quaerat
        optio. Deserunt placeat illo, nihil cumque est et excepturi enim?
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
$main-bg: hsl(0, 0%, 25%);
$main-color: white;
.box {
  font-size: 1.2rem;
  font-family: "consolas";
}
section {
  h2 {
    text-align: center;
  }
  p {
    max-width: 50rem;
    margin-inline: auto;
    padding-inline: 2rem;
    line-height: 1.5;
  }
}
.spikes {
  position: relative;
  padding-block: 2rem;
  color: black;

  $spikes-width: 50px;
  $spikes-height: 10px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: $spikes-height;
    background-color: $main-bg;
    -webkit-mask-image: url("@/assets/image/logo/spikes.svg");
    -webkit-mask-size: $spikes-width $spikes-height;
    // -webkit-mask-repeat: repeat-x;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
    transform: rotate(0.5turn);
  }
}
.diagnoal {
  position: relative;
  isolation: isolate;
  padding: 1rem;
  //   overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    transform: skewY(-3deg);
  }
}

$mask: radial-gradient(50.39px at 50% 68.7px);
.wavy {
  padding: 2rem;

  --mask: radial-gradient(50.39px at 50% 68.75px, #000 99%, #0000 101%)
      calc(50% - 50px) 0/100px 51% repeat-x,
    radial-gradient(50.39px at 50% -43.75px, #0000 99%, #000 101%) 50% 25px/100px
      calc(51% - 25px) repeat-x,
    radial-gradient(50.39px at 50% calc(100% - 68.75px), #000 99%, #0000 101%)
      calc(50% - 50px) 100%/100px 51% repeat-x,
    radial-gradient(50.39px at 50% calc(100% + 43.75px), #0000 99%, #000 101%)
      50% calc(100% - 25px) / 100px calc(51% - 25px) repeat-x;
  -webkit-mask: var(--mask);
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
