/* 一些js动画的插值函数，从Android框架抄过来的 */

/**
 * ease-in-out型动画
 * @param {Number} v 自变量
 */
export function accelerateDecelerateInterpolator(v) {
    return Math.cos((v + 1) * Math.PI) / 2 + 0.5;
}
