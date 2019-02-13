<template>
  <div class="banner">
    <article class="banner__block">
      <div class="banner__bg-video">
        <video
          id="vid"
          class="banner__bg-video-content banner__bg-video-content--big"
          frameborder="0"
          allowfullscreen
          autobuffer
          preload="auto"
          autoplay
          muted
          loop
          playsinline
          poster="../../public/moment.jpg"
        >
          <source src="m.webm" type="video/webm">
          <source src="m.mp4" type="video/mp4">Your browser is not supported!
        </video>
        
        <video
          id="vid"
          class="banner__bg-video-content banner__bg-video-content--small"
          frameborder="0"
          allowfullscreen
          autobuffer
          preload="auto"
          autoplay
          muted
          loop
          playsinline
          poster="../../public/moment.jpg"
        >
          <source src="m.webm" type="video/webm">
          <source src="m.mp4" type="video/mp4">Your browser is not supported!
        </video>
      </div>
      <div class="banner__text">IT решения для транспорта</div>
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
            if (!char || Math.random() < 0.18) {
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
      "интернет в пути",
      "высокоскоростной интернет для поездов",
      "уникальные системы оффлайн авторизации",
      "доступ в интернет в движении"
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

    setTimeout(this.play, 1000);
  },
  methods: {
    play() {
      const video = document.getElementById("vid");
      video.muted = true;
      video.play();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";
.banner {
  &__bg-video {
    background-color: $color_dark;
    background-image: url("../../public/moment.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    top: 5rem;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.95;
    overflow: hidden;
    height: 100vh;
    &-content {
      height: 100%;
      width: 100%;
      object-fit: cover;

      &--small {
        @media (min-width: $tablet-width) {
          display: none;
        }
      }

      &--big {
        display: none;
        @media (min-width: $tablet-width) {
          display: block;
        }
      }
    }
  }

  &__text {
    overflow: hidden;
    font-family: "Roboto Mono", monospace;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: $color_orange;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 5rem;
    width: 30rem;
    //width: max-content;
    font-size: 2rem;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 3rem;
    line-height: 3rem;

    @media (min-width: $tablet-width) {
      width: max-content;
      //width: 50rem;
      font-size: 3rem;
    }

    @media (min-width: $desktop-width) {
      top: 50%;
      font-size: 4rem;
    }
  }
}
.dud {
  color: #757575;
}
</style>
