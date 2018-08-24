<template>
<div>
 <mt-swipe :auto="4000">
        <mt-swipe-item>
            <img src="../images/banner1.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../images/banner2.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../images/banner3.png" alt="">
        </mt-swipe-item>
    </mt-swipe>

    <div class="mui-content">
		        <div class="mui-table-view mui-grid-view mui-grid-9 grid-myself">
		            <div class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">主页</div></a></div>
		            <div class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">邮箱</div></a></div>
		            <div class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">聊天</div></a></div>
		        </div> 
		        <div class="mui-table-view mui-grid-view mui-grid-9 grid-myself">
		            <div class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">我的位置</div></a></div>
		            <div class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索</div></a></div>
		            <div class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">电话</div></a></div>
		        </div> 
		</div>
</div>
</template>
<style scoped>
.mint-swipe{
	height: 175px;
}

.mint-swipe img{
	height: 175px;
	width: 100%;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0px !important;
}

.mui-grid-view.mui-grid-9{
    border: 0px;
    background-color: #ffffff
}

.grid-myself{
    display: flex;
    justify-content: space-around
}
</style>

