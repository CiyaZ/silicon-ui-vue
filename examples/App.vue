<template>
  <div :style="{ overflow: 'hidden' }">
    <si-loading :loading="false" :fullScreen="true">
      <si-message ref="m" :toastDelay="5" :notifyDelay="3">
        <si-header :fixed="true">
          <si-container :fluid="true">
            <span :style="{ color: 'white', fontSize: '30px' }">标题</span>
          </si-container>
        </si-header>
        <si-container :style="{ marginTop: '75px' }">
          <div
            @contextmenu.prevent="menuPopup"
            @click="menuCheckAndHide"
            :style="{ marginTop: '15px' }"
          >
            <si-tab
              ref="tab"
              :items="tabItems"
              @item-selected="bbbb($event)"
              @item-deleted="cccc($event)"
            />
            <si-card>
              <si-button-group>
                <si-button shape="circle" :disabled="false" fgColor="white"
                  >1</si-button
                >
                <si-button shape="circle" :disabled="false">2</si-button>
                <si-button shape="circle" :disabled="false">3</si-button>
                <si-button shape="circle" :disabled="false">4</si-button>
              </si-button-group>
            </si-card>

            <si-card
              :style="{ marginTop: '10px' }"
              bgColor="light-green-lighten-4"
            >
              <si-row>
                <si-col :span="8">
                  <si-form autocomplete="off">
                    <si-input label="用户名：" placeholder="请输入用户名" />
                    <si-input
                      htmlType="password"
                      label="密码："
                      placeholder="请输入密码"
                    />
                    <si-textarea label="用户名：" placeholder="请输入用户名" />
                    <si-select
                      :options="[
                        { value: 'a', text: '中国' },
                        { value: 'b', text: '美国' },
                        { value: 'c', text: '其它' },
                      ]"
                      label="用户名："
                      initialValue="c"
                    >
                      <si-select-item value="d" text="默认" />
                    </si-select>
                    <si-radio
                      :items="[
                        { value: 'a', text: '中国' },
                        { value: 'b', text: '美国' },
                        { value: 'c', text: '其它' },
                      ]"
                      label="国家："
                    >
                    </si-radio>
                    <si-checkbox
                      v-model="m"
                      :items="[
                        { value: 'a', text: '中国' },
                        { value: 'b', text: '美国' },
                        { value: 'c', text: '其它' },
                      ]"
                      label="国家："
                    ></si-checkbox>
                    <si-button>提交表单</si-button>
                  </si-form>
                </si-col>
                <si-col :span="16">
                  <si-input
                    layout="block"
                    label="姓名"
                    placeholder="请输入您的名字"
                  />
                  <si-textarea
                    layout="block"
                    label="用户名"
                    placeholder="请输入用户名"
                  />
                  <si-select
                    :options="[
                      { value: 'a', text: '中国' },
                      { value: 'b', text: '美国' },
                      { value: 'c', text: '其它' },
                    ]"
                    layout="block"
                    label="用户名"
                  />
                </si-col>
              </si-row>
            </si-card>

            <si-card :style="{ marginTop: '10px' }">
              <si-step
                @step-selected="bbbb($event)"
                :clickable="true"
                :initialStep="1"
                ref="step"
                direction="vertical"
                :items="[
                  { text: '选择业务' },
                  { text: '确认缴费' },
                  { text: '支付完成' },
                ]"
              ></si-step>
              <si-button @click="handleStepBtn">步骤函数触发</si-button>
            </si-card>

            <si-card :style="{ marginTop: '10px' }">
              <si-progress :value="6" />
            </si-card>

            <si-card :style="{ marginTop: '10px' }">
              <si-button
                :loading="this.loading"
                @click="this.handleClick()"
                :style="{ marginLeft: '10px' }"
                size="large"
                >点我</si-button
              >
              <si-button
                :loading="this.loading"
                @click="this.handleClick()"
                :style="{ marginLeft: '10px' }"
                >点我</si-button
              >
              <si-button
                :loading="this.loading"
                @click="this.showLayer()"
                :style="{ marginLeft: '10px' }"
                size="small"
                >点我</si-button
              >
              <si-layer
                ref="layer"
                title="警告"
                bgColor="white"
                fgColor="black"
              >
                <div :style="{ padding: '5px 15px' }">
                  <div :style="{ textAlign: 'left' }">你确定要这样做吗?</div>
                  <div
                    :style="{
                      marginTop: '15px',
                      marginBottom: '5px',
                      overflow: 'hidden',
                    }"
                  >
                    <si-button
                      bgColor="red"
                      :style="{ float: 'right' }"
                      size="small"
                      >确认</si-button
                    >
                    <si-button
                      bgColor="light-green"
                      size="small"
                      :style="{ float: 'right', marginRight: '5px' }"
                      >取消</si-button
                    >
                  </div>
                </div>
              </si-layer>
            </si-card>

            <!-- <si-container :fluid="true" :style="{ marginTop: '10px' }"> -->
            <si-row :gap="10" :style="{ marginTop: '10px' }">
              <si-col :span="6">
                <si-collapse title="江雪">
                  <p>千山鸟飞绝，</p>
                  <p>万径人踪灭。</p>
                  <p>孤舟蓑笠翁，</p>
                  <p>独钓寒江雪。</p>
                </si-collapse>
              </si-col>
              <si-col :span="18">
                <si-loading :loading="loading">
                  <si-card>
                    <si-button>呵呵了</si-button>
                    <si-search
                      size="large"
                      placeholder="请输入搜索内容..."
                      @search="log($event)"
                    />
                  </si-card>
                </si-loading>
              </si-col>
            </si-row>
            <!-- </si-container> -->
            <si-context-menu
              ref="menu"
              bgColor="light-green-lighten-3"
              defaultFgColor="black"
              linkFgColor="red"
            >
              <si-menu-item text="按钮菜单测试" @click="showMsg"></si-menu-item>
              <si-menu-item
                text="链接菜单测试"
                type="menu-link"
                href="https://www.ciyaz.com"
              ></si-menu-item>
              <si-menu-item text="子菜单弹出测试1" type="menu-set">
                <si-context-menu>
                  <si-menu-item text="子菜单1-1"></si-menu-item>
                  <si-menu-item text="子菜单1-2"></si-menu-item>
                  <si-menu-item text="子菜单1-3" type="menu-set">
                    <si-context-menu>
                      <si-menu-item text="子菜单1-3-1"></si-menu-item>
                      <si-menu-item text="子菜单1-3-2"></si-menu-item>
                      <si-menu-item text="子菜单1-3-3" type="menu-set">
                        <si-context-menu>
                          <si-menu-item text="子菜单1-3-3-1"></si-menu-item>
                          <si-menu-item text="子菜单1-3-3-2"></si-menu-item>
                        </si-context-menu>
                      </si-menu-item>
                    </si-context-menu>
                  </si-menu-item>
                </si-context-menu>
              </si-menu-item>
              <si-menu-item text="禁用菜单测试" :disabled="true"></si-menu-item>
              <si-menu-item text="子菜单弹出测试2" type="menu-set">
                <si-context-menu>
                  <si-menu-item text="子菜单2-1"></si-menu-item>
                  <si-menu-item text="子菜单2-2"></si-menu-item>
                  <si-menu-item text="子菜单2-3" type="menu-set">
                    <si-context-menu>
                      <si-menu-item text="子菜单2-3-1"></si-menu-item>
                      <si-menu-item text="子菜单2-3-2"></si-menu-item>
                    </si-context-menu>
                  </si-menu-item>
                </si-context-menu>
              </si-menu-item>
            </si-context-menu>
          </div>
          <si-backtop />
        </si-container>
      </si-message>
    </si-loading>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      m: [],
      cnt: 0,
      loading: false,
      items: [
        { key: "index", text: "首页", href: "http://www.ciyaz.com" },
        { key: "hualushui", text: "花露水", href: "http://www.ciyaz.com" },
        { key: "feiteng", text: "沸腾", href: "http://www.ciyaz.com" },
        { key: "huawii", text: "华为" },
      ],
      tabItems: [
        { key: "index", text: "首页", allowClose: true },
        { key: "hualushui", text: "花露水", allowClose: true },
        { key: "feiteng", text: "沸腾", allowClose: true },
        { key: "huawii", text: "华为" },
      ],
    };
  },
  methods: {
    handleStepBtn() {
      this.$refs.step.nextStep();
      console.log(this.$refs.step.getCurrentStep());
    },
    showLayer() {
      this.$refs.layer.show();
    },
    aaaa() {
      this.$refs.tab.pushItem({ key: "huawii", text: "华为222" });
    },
    bbbb(key) {
      console.log(key);
      this.$refs.m.showToast(key);
      this.$refs.m.pushNotify({
        title: "测试标题" + this.cnt++,
        msg: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
      });
      this.$refs.m.showSystemNotify({
        title: "测试标题" + this.cnt++,
        msg: "测试内容",
      });
    },
    cccc(key) {
      console.log(key);
    },
    dddd() {
      this.$refs.m.showToast(this.m);
    },
    handleClick() {
      this.loading = !this.loading;
    },
    h2() {
      console.log("ff");
    },
    menuPopup(ev) {
      this.$refs.menu.menuPopup(ev.clientX, ev.clientY);
    },
    menuCheckAndHide(ev) {
      let clickPosX = ev.clientX;
      let clickPosY = ev.clientY;
      this.$refs.menu.menuCheckAndHide(clickPosX, clickPosY);
    },
    showMsg() {
      alert("clicked");
    },
    log(m) {
      console.log(m);
    },
    log1() {
      alert("111");
    },
    log2() {
      alert("222");
    },
  },
};
</script>
<style scoped>
</style>