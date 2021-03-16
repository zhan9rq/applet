<template>
	<view class="rf-swiper-slide">
		<slot name="header" v-if="list.length > 0"></slot>
		<swiper
			class="rf-swiper"
			:indicator-dots="indicatorDots"
			:autoplay="autoplay"
			:interval="interval"
			:duration="duration"
			vertical="true">
			<swiper-item
				class="rf-swiper-item"
				@tap="navTo"
				v-for="(item, index) in list"
				:key="index">
				<view class="text in1line">
					<text class="newsTitle">{{
						item.title || `${item.member_nickname} 拼团成功`
					}}</text>
				</view>
				<text class="iconfont iconyou"></text>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	name: 'rf-swiper-slide',
	data() {
		return {
			indicatorDots: false, //是否显示面板指示点
			autoplay: true, //是否自动切换
			interval: 2000, //自动切换时间间隔
			duration: 500 //滑动动画时长
		};
	},
	props: {
		list: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	methods: {
		navTo() {
			this.$emit('navTo');
		}
	}
};
</script>

<style scoped lang="scss">
.rf-swiper-slide {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80upx;
	padding: 0 $spacing-lg;
	background-color: $color-white;
	.rf-swiper {
		height: 100%;
		flex: 1;
		margin-left: 30upx;
		.rf-swiper-item {
			display: flex;
			justify-content: space-between;
			.text,
			.iconfont {
				height: 80upx;
				line-height: 80upx;
			}
			.iconfont {
				color: $font-color-light;
			}
		}
	}
}
</style>
