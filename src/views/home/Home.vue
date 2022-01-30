<template>
  <div class="home">
    <div class="home__title">
      <h1>Домашняя</h1>
    </div>
    <div class="home__wallet">
      <div class="home__wallet-name">
        0000-0000-0000-0001
      </div>
      <div class="home__wallet-balance">
        <div class="balance__value">
          2560,57
        </div>
        <div class="balance__currency">
          РУБ
        </div>
      </div>
      <div class="home__wallet-stats">
        <div class="stats__value">
          +40%
        </div>
        <div class="stats__title">
          this week
        </div>
      </div>
    </div>
    <div class="home__chart">
      <div class="home__chart-buttons">
        <div class="buttons__item button_blue">
          &#9679; Income
        </div>
        <div class="buttons__item button_red active">
          &#9679; Expenses
        </div>
      </div>
      <div class="home__chart-main">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}

</script>

<style>
  .home__wallet {
    height: 250px;
    width: 450px;

    background-color: #fff;
    border: 1px solid #f6f7f8;
    border-radius: 5px;

    padding: 40px;
    position: relative;
  }

  .home__wallet-name {
    color: #22214b;
    font-size: 24px;
  }
  
  .home__wallet-balance {
    display: flex;
    align-items: center;
  }

  .balance__value {
    font-size: 36px;
    font-weight: bold;

    margin-right: 5px;
  }

  .home__wallet-stats {
    position: absolute;

    bottom: 30px;
    right: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .stats__value {
    font-weight: bold;
    color: #2bbb7b;
  }

  .home__wallet {
    margin-bottom: 25px;
  }
  
  .home__chart {
    height: 600px;
    width: 900px;

    background-color: #fff;
    border: 1px solid #f6f7f8;
    border-radius: 5px;

    padding: 25px;
  }

  .home__chart-buttons {
    display: flex;

    float: right;
  }

  .buttons__item {
    width: 150px;
    height: 30px;
    
    background-color: #ddfffb;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;

    color: #5addcf;
    font-weight: bold;
    padding-top: 4px;

    margin-left: 25px;
    background-color: transparent;
    cursor: pointer;
  }

  .button_blue {
    color: #5addcf;
  }

  .button_blue.active {
    background-color: #ddfffb;
  }

  .button_blue:hover {
    background-color: #ddfffb;
  }
  
  .button_red {
    color: #ff5668;
  }

  .button_red.active {
    background-color: #ffdde1;
  }

  .button_red:hover {
    background-color: #ffdde1;
  }
</style>
