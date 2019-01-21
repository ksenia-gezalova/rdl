<template>
  <div class="banner">
    <article class="banner__block">
      <div class="banner__bg-video">
        <video class="banner__bg-video-content" autoplay muted loop>
          <!--<source src="../assets/Under.mp4" type="video/mp4">-->
          <source src="Under1.webm" type="video/webm">
          Your browser is not supported!
        </video>
      </div>
      <div
        class="banner__text"
      >IT решения для транспорта: доступ к мультимедийному контенту и Интернету в пути.</div>
    </article>
  </div>
</template>


<script>
export default {
  name: "Banner",
  created() {
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || "";
          const to = newText[i] || "";
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      update() {
        let output = "";
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const phrases = [
      "IT решения для транспорта",
      "бесперебойный доступ",
      "доступ к мультимедийному контенту",
      "Интернет в пути",
      "Высокоскоростной интернет для поездов",
      "уникальные системы оффлайн авторизации",
      "Доступ в интернет в движении"
    ];

    setTimeout(() => {
      const el = document.querySelector(".banner__text");
      const fx = new TextScramble(el);

      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 800);
        });
        counter = (counter + 1) % phrases.length;
      };

      next();
    }, 500);
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";
.banner {
  &__bg-video {
    background-color: $color_dark;
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.95;
    overflow: hidden;
    &-content {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__text {
    font-family: "Roboto Mono", monospace;
    position: absolute;
    top: 12rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: $color_white;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 1.2rem;
    width: 80%;

    @media (min-width: $tablet-width) {
      top: 30vh;
      font-size: 1.8rem;
    }
    @media (min-width: $desktop-width) {
      top: 50%;
      font-size: 2.8rem;
    }
  }
}
.dud {
  color: #757575;
}
</style>



