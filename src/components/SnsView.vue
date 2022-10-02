<template>
  
    <section class="sns">
      <div class="inner">
        <div class="sns-top">
          <h2>MASIGRAY <b>SNS</b></h2>
          <span>#masigray</span>
        </div>
      </div>
    </section>

</template>

<script>
export default {

}
</script>

<style>

.sns {
  position: relative;
  display: block;
  padding: 100px 0;
}

.sns .inner {}

.sns-top {
  position: relative;
  display: block;
  text-align: center;
}

.sns-top h2 {
  position: relative;
  display: block;
  font-size: 40px;
  color: #000;
  font-weight: 300;
}

.sns-top h2 b {
  font-weight: 500;
}

.sns-top span {
  position: relative;
  display: block;
  font-size: 20px;
  color: #666;
}

@media all and (max-width:1000px) {
  .sns {
    padding: 10vw 0;
  }

  .sns-top h2 {
    font-size: 30px;
  }

  .sns-top span {
    font-size: 15px;
  }
}
</style>