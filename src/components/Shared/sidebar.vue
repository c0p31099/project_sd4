<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="sidebar-link-area">
        <!-- サイドバーメニュー -->
        <p><router-link to="/" class="sidebar-link">ホーム</router-link></p>
        <p><router-link to="/setting" class="sidebar-link">設定</router-link></p>
        <p><router-link to="/chat" class="sidebar-link">チャット</router-link></p>
        <p><router-link to="/good" class="sidebar-link">いいねした人</router-link></p>
      </div>
    </div>
  </div>
</template>

<style>
.sidebar {
  background-color: #f7f6f3;
  height: 100%; /* サイドバーの高さ */
  width: 250px; /* サイドバーのwidthを指定 */
  max-width: 250px; /* widthの最大値 */
  position: fixed; /* 左上に要素を固定する(スクロールしても位置は固定される) */
  overflow-x: hidden; /* 横軸ではみ出た要素を非表示にする */
  box-sizing: border-box; /* paddingとborderを、widthとheightに含める */
  top:0;
}

.sidebar-link-area {
  padding-top: 20px; /* サイドバーリンクの上部に空白を作る */
}

.sidebar-link {
  color: black;
  opacity:0.9;
}

.sidebar-link:hover {
  background-color: #ffffff /* マウスがリンクに乗った時も文字色を白に */
}
</style>