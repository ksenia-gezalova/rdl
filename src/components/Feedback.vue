<template>
  <div class="form">
    <form class="form__block">
      <fieldset class="form__fieldset">
        <legend class="form__legend">Связаться с нами</legend>
        <p>
          <label for="name">
            Имя
            <em>*</em>
          </label>
          <input type="text" id="name">
        </p>
        <p>
          <label for="email">E-mail</label>
          <input type="email" id="email">
        </p>
      </fieldset>
      <p>
        <input type="submit" value="Отправить">
      </p>
    </form>
  </div>
</template>
