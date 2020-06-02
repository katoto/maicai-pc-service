<template>
  <div class="intro">
    <img
      class="img"
      src="@/assets/intro/1.png"
      alt="公司简介"
    />
    <div class="intro-box">
      <p>
        深圳市农家好实业有限公司配送中心位广东省深圳市龙岗区宝龙街道龙东社区深汕路78号B栋农贸市场B185。交通方便，中心配有专业配送车辆，专业加工，采购人员，在运输过程中，严格按照市政菜蓝子工程配送车的有关卫生要求进行运输。所配送的蔬菜新鲜，无公害，客户所谓的放心菜，并拥有多种有机蔬菜，优质菌类，南北稀有蔬菜和特色蔬菜，可满足不同客户的需求。保证每天所配送的蔬菜新鲜优质。热忱欢迎新老客户洽谈业务，我们将为您推提供优良的产品和最优质的服务……
      </p>
    </div>
    <img
      class="img"
      src="@/assets/intro/2.png"
      alt="我们的精神文化"
    />
  </div>
</template>
<style lang="less" scoped>
.intro {
  width: 100%;
  .img {
    display: block;
    width: 100%;
    margin: 0 auto;
    min-height: 300px;
  }
  .intro-box {
    width: 960px;
    height: 500px;
    margin: 0 auto;
    margin-top: -240px;
    background: #fff;
    position: relative;
    z-index: 1;
    p {
      font-size: 24px;
      line-height: 50px;
      padding: 84px 98px;
      color: #000;
      text-align: left;
      word-wrap: break-word;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .intro {
    .intro-box {
      width: 78%;
      margin-top: -120px;
      p {
        padding: 32px 39px;
      }
    }
  }
}
</style>
