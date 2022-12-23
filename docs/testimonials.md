<script>
class Testimonial {
  constructor(name, avatar, ...text) {
    this.name = name;
    this.avatar = avatar;
    this.text = text.join("\n")
  }
};

const testimonials = [
  new Testimonial(
    "spiltcoffee",
    "https://github.com/spiltcoffee.png",
    "⭐⭐⭐⭐⭐",
    "good wife 10/10, would marry again"
  ),
  new Testimonial(
    "Willow, pet dog",
    "./avatars/willow.jpg",
    "⭐⭐",
    "*yelling*"
  ),
  new Testimonial(
    "Humble-bumble-bee",
    "./avatars/humble-bumble-bee.png",
    "⭐⭐⭐⭐⭐",
    "Life and loudspeaker of the party"
  ),
  new Testimonial(
    "charlemagne",
    "https://github.com/charlottepierce.png",
    "10/10 hugs, many warm ⭐️⭐️⭐️⭐️⭐️🎉"
  ),
  new Testimonial(
    "FitzYordle",
    "./avatars/fitzyordle.png",
    "Top strimmer, would invite to wedding again ⭐️⭐️⭐️⭐️⭐️"
  ),
  new Testimonial(
    "ItsMeTonyG",
    "./avatars/itsmetonyg.jpg",
    "⭐️⭐️⭐️⭐️⭐️",
    "10/10, Perfectly loud and full of laughs. She knows of my horcruxes, thus I must give a perfect score or I will die of laughter."
  ),
  new Testimonial(
    "Her Dad",
    "https://github.com/RogerRaamjet.png",
    "Bit of a ratbag really, but all in all, not too bad.",
    "(Some of the things I could tell you.......but I won't)"
  )
].sort(() => 0.5 - Math.random());

export default {
  data: () => ({ testimonials })
}
</script>

# Testimonials

Here is what people are saying about me!

<template v-for="{ name, avatar, text } in testimonials">
  <Testimonial :name="name" :avatar="avatar">
    {{ text }}
  </Testimonial>
</template>

_Want to give me a review? You can do so [here!](https://github.com/spiltcoffee/aciddotexe.github.io/issues/new/choose)_
