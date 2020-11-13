<template>
  <div class="message">
    <slot></slot>
    <transition name="toast-fade">
      <si-toast
        :bgColor="this.toastBgColor"
        :fgColor="this.toastFgColor"
        :msg="this.currentToast.msg"
        :pos="this.toastPosition"
        v-if="this.currentToast"
      />
    </transition>
    <div class="notify-container">
      <transition-group name="notify-fade" tag="div">
        <si-notify
          v-for="item in this.currentNotifies"
          :key="item.pk"
          :bgColor="this.notifyBgColor"
          :fgColor="this.notifyFgColor"
          :title="item.title"
          :msg="item.msg"
          @notify-close="this.clearNotifyByPk(item.pk)"
        />
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "si-message",
  props: {
    toastDelay: {
      type: Number,
      default: 5,
    },
    toastPosition: {
      type: String,
      default: "bottom",
      validator: function (value) {
        return ["top", "bottom"].indexOf(value) !== -1;
      },
    },
    toastBgColor: {
      type: String,
      default: "black-lighten-3",
    },
    toastFgColor: {
      type: String,
      default: "white",
    },
    notifyDelay: {
      type: Number,
      default: 5,
    },
    notifyBgColor: {
      type: String,
      default: "white-lighten-1",
    },
    notifyFgColor: {
      type: String,
      default: "gray",
    },
  },
  data() {
    return {
      currentToast: null,
      notifyPk: 0,
      currentNotifies: [],
    };
  },
  methods: {
    clearToast() {
      if (this.currentToast) {
        clearTimeout(this.currentToast.timer);
        this.currentToast = null;
      }
    },
    showToast(msg) {
      this.clearToast();
      const timer = setTimeout(this.clearToast, this.toastDelay * 1000);
      this.currentToast = { msg, timer };
    },
    __getNotifyPk() {
      let result = this.notifyPk;
      this.notifyPk++;
      return result;
    },
    clearNotify(notify) {
      clearTimeout(notify.timer);
      let pk = notify.pk;
      this.__deleteNotifyByPk(pk);
    },
    clearNotifyByPk(pk) {
      console.log(pk);
      let i;
      for (i = 0; i < this.currentNotifies.length; i++) {
        if (pk === this.currentNotifies[i].pk) break;
      }
      clearTimeout(this.currentNotifies[i].timer);
      this.__deleteNotifyByIndex(i);
    },
    __deleteNotifyByPk(pk) {
      let i;
      for (i = 0; i < this.currentNotifies.length; i++) {
        if (pk === this.currentNotifies[i].pk) break;
      }
      this.__deleteNotifyByIndex(i);
    },
    __deleteNotifyByIndex(index) {
      this.currentNotifies.splice(index, 1);
    },
    pushNotify({ title, msg }) {
      let notify = { pk: this.__getNotifyPk(), title, msg };
      const timer = setTimeout(() => {
        this.clearNotify(notify);
      }, this.notifyDelay * 1000);
      notify.timer = timer;
      this.currentNotifies.push(notify);
    },
    showSystemNotify({ icon, title, msg, onclick }) {
      if (window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
          if (permission === "granted") {
            var notification = new Notification(title, {
              icon,
              body: msg,
            });
            notification.onclick = function () {
              if (onclick) onclick();
            };
          }
        });
      }
    },
  },
};
</script>
<style scoped>
.message {
  position: relative;
}
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.3s ease;
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
}
.message .notify-container {
  position: fixed;
  top: 50px;
  right: 20px;
  z-index: 20;
}
.notify-fade-enter-active,
.notify-fade-leave-active {
  transition: all 0.3s ease;
}
.notify-fade-enter-from,
.notify-fade-leave-to {
  opacity: 0;
}
</style>