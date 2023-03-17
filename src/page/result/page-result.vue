<script lang="ts" setup>
import { IconBrain, IconEye, IconLightning, IconMsg } from "@/component/icons";
</script>

<template>
  <div class="box">
    <main>
      <section>
        <h1>Your Result</h1>
        <p><span>76</span>of 100</p>
        <p>Great</p>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
      <section>
        <h2>Summary</h2>
        <ul>
          <li>
            <div>
              <icon-lightning />
              <h3>Reaction</h3>
            </div>
            <p><span>80</span> / 100</p>
          </li>
          <li>
            <div>
              <icon-brain />
              <h3>Reaction</h3>
            </div>
            <p><span>80</span> / 100</p>
          </li>
          <li>
            <div>
              <icon-msg />
              <h3>Reaction</h3>
            </div>
            <p><span>80</span> / 100</p>
          </li>
          <li>
            <div>
              <icon-eye />
              <h3>Reaction</h3>
            </div>
            <p><span>80</span> / 100</p>
          </li>
        </ul>
        <button>Continue</button>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.box {
  height: 100%;
  display: grid;
  place-items: center;
}
main {
  box-shadow: $box-shadow;
  display: flex;
  flex-wrap: wrap;
  max-width: 46rem;
  > * {
    flex: 1 0 20rem;
  }
}
ul {
  list-style: none;
  padding: 0;
  @extend .b;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 0.5rem;
  border-radius: 0.5rem;
  color: black;
  background-color: aquamarine;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}

li + li {
  margin-top: 0.5rem;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
