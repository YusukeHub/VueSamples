<template>
  <div class="hello">
    <ChildList ref="childList"></ChildList>
    <button v-on:click.prevent="onProcess">process</button>
  </div>
</template>

<script>
import ChildList from "./ChildList";
export default {
  name: 'HelloWorld',
  components: {ChildList},
  methods: {
    onProcess: function () {
      console.log("HelloWorld.process()");

      // 入力が不正なら中断する
      if (false === this.$refs.childList.validate()) {
        return;
      }

      // 登録前にしなければならない処理を受け取る(ない場合は長さ0の配列が返される)
      // ※添付ファイルアップロードなど、登録前の通信が必要なオペレーションを実行するため
      // 　ChildコンポーネントからPromiseオブジェクトのリストを受け取る
      let promises = this.$refs.childList.getRegistPromises();

      // 登録する
      let config = null;
      if (0 < promises.length) {
        // Promiseオブジェクトを受け取った場合、全てのPromiseを処理した後に登録する
        let self = this;
        Promise.all(promises).then(function (results) {
          config = self.$refs.childList.buildConfig();
          self.registConfig(config);
        });
      } else {
        // Promiseオブジェクトがないならすぐに登録する
        config = this.$refs.childList.buildConfig();
        this.registConfig(config);
      }
    },
    registConfig: function (config) {
      // 本来ならサーバ保存処理を書く
      console.log("registConfig(" + config.toString())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
