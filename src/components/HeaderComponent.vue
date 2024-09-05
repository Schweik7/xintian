<template>
  <section class="section">
    <div class="header-section container">
      <div class="columns is-vcentered is-mobile">
        <!-- Logo 部分 -->
        <div class="column is-4-mobile is-4-desktop is-flex">
          <img class="logo" src="@/images/心田首页.png" alt="Logo" />
        </div>
        <!--  -->
        <!-- Header Actions 部分 -->
        <div
          class="column is-3-mobile is-offset-2-mobile is-3-desktop is-offset-6-desktop  is-flex is-justify-content-center header-actions">
          <button id="help-btn" class="button is-light is-normal is-rounded ">
            <span class="icon-text">
              <span class="icon">
                <!-- <i class="fas fa-headset"></i> -->
                <img src="@/assets/icons/user-headset.svg" alt="帮助" />
              </span>
              <span class="is-hidden-mobile">帮助</span>
            </span>
          </button>

          <button id="login-btn" class="button is-light is-normal is-rounded ml-2">
            <span class="icon-text">
              <span class="icon">
                <i class="fas fa-user"></i>
              </span>
              <span class="is-hidden-mobile">登录</span>
            </span>
          </button>
        </div>

        <!-- Search Box 部分 -->
        <div id="search-box"
          class="column is-offset-1-mobile is-2-mobile is-2-desktop is-offset-3-desktop  field has-addons is-flex is-justify-content-center">
          <p class="control">
            <input class="input is-hidden-mobile" type="text" placeholder="请输入搜索关键词">
          </p>
          <p class="control">
            <button class="button is-static">
              <span class="icon">
                <i class="fas fa-search"></i>
              </span>
            </button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped>
.section {
  background-color: rgba(255, 237, 165, 1);
  --bulma-section-padding: 0rem 0rem;
  --bulma-section-padding-desktop: 0rem 0rem;
}

.header-section {
  padding: 1rem 5vw;
}

.logo {
  width: 20vw;
  height: auto;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

.text {
  padding-left: 0.5rem;
}

#search-box .input {
  border-radius: 20px 0 0 20px;
  border: 1px solid rgba(238, 238, 238, 1);
}

#search-box .button {
  border-radius: 0 20px 20px 0;
}

@media (max-width: 768px) {
  .header-section {
    padding: 1rem;
  }

  .logo {
    width: 20vw;
  }

  .header-actions .text {
    display: none;
  }

  #search-box .input {
    display: none;
  }
  span.icon {
    /* margin-left: 50%; */
    /* margin-right: 10px; */
    margin-inline-start:0px;
    --bulma-button-padding-horizontal: 0rem;
}
}

@media (min-width: 769px) {
  .header-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 10vw;
  }

  .header-actions {
    justify-content: flex-end;
  }

  #search-box {
    justify-content: flex-end;
  }

  #search-box .input {
    display: block;
  }


}
</style>
