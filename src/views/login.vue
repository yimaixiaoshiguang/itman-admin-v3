<template>
	<div class="app-login">
		<div class="login-container">
			<div class="login-left">
				<div class="text-box">
					<div class="text-box-item">
						<span class="word1">让数字</span>
						<span class="txt1">高度智能</span>
					</div>
					<div class="text-box-item">
						<span class="word1">让商业更为</span>
						<span class="txt1">灵动</span>
					</div>
					<div class="text-box-item">
						<span class="word1">让互联网</span>
						<span class="txt1">连接万物</span>
					</div>
				</div>
			</div>

			<div class="login-right">
				<el-form :model="loginForm" :rules="rules" ref="loginFormRef" class="login-form" label-position="top">
					<div class="login-header">
						<p class="welcomeText">Welcome 美物纪</p>
						<!-- <p class="welcomeText sys-title" style="font-weight: 500">{{title}}</p> -->
						<p class="sys-title-sup">让数字高度智能，让商业更为灵动，让互联网连接万物</p>
					</div>
					<el-form-item prop="principal" label="请输入您的账户">
						<el-input placeholder="请输入您的账户" v-model="loginForm.principal" size="large" clearable class="inputWidth">
							<template #prefix>
								<icon-svg icon="zhanghao" size="26" class="iconsvg"></icon-svg>
							</template>
						</el-input>
					</el-form-item>
					<el-form-item prop="credentials" label="请输入您的密码" style="margin-bottom:76px">
						<el-input placeholder="请输入您的登录密码" v-model="loginForm.credentials" type="credentials" size="large" show-password class="inputWidth">
							<template #prefix>
								<icon-svg icon="mima" size="26" class="iconsvg"></icon-svg>
							</template>
						</el-input>

					</el-form-item>
					<el-form-item>
							<el-button type="primary" class="black-btn bg" @click="loginSubmit"  v-loading="loading">登录</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';

export default {
	setup () {
		const state = reactive({
			loginForm: {
				principal: 'admin',
				credentials: '123456',
			},
			rules: {
				principal: [{
					required: true,
					message: "请输入账户",
					trigger: "blur"
				}],
				credentials: [{
					required: true,
					message: "请输入密码",
					trigger: "blur"
				}]
			},
			loading:false,
		})

		const loginFormRef = ref(null)

		const router = useRouter()
		const store = useStore()

		const loginSubmit = () => {
			loginFormRef.value.validate((valid) => {
				if (valid) {
					state.loading = true
					store.dispatch('user/LoginByUserName', state.loginForm).then(res => {
						//有首页的情况，直接跳转到首页
						router.push('/dashboard')

					}).catch(err => {
					}).finally(()=>{
						state.loadding = false
					})
					// router.push('/dashboard')
				}else{
					return false
				}
			})
		}

		return {
			...toRefs(state),
			loginFormRef,
			loginSubmit
		}
	}
}
</script>

<style lang="scss" scoped>

	.app-login {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background-image: linear-gradient(135deg, #59B3FF 0%, #1C87F0 100%);

		.login-container {
			position: relative;
			width: 100%;
			height: 100vh;
			overflow: hidden;
			// top: calc(50% - 450px);
			// left: calc(50% - 720px);
			// width: 1440px;
			// height: 900px;
			// padding:87px 60px;
			// border-radius: 20px;
			background: #fff;
			// box-shadow: 1px 1px 0px #eee;
			display: flex;

			.login-left {
				width: 480px;
				height: 100%;
				background-image: linear-gradient(to top, #2E3CB3 0%, #222653 100% );


				.text-box {
					font-size: 40px;
					color: #fff;
					margin-top: 120px;
					margin-left: 40px;

					.text-box-item {
						margin: 16px 0;
					}

					.txt1 {
						color: #FF683D;
					}
				}
			}

			.login-right {
				flex: 1;
				padding-top: 167px;
				// padding-left: 170px;
				// padding-right: 170px;
			}

			.login-form {
				width: 70%;
				margin: 0 auto;
			}

			.login-header {
				padding: 0 0 48px;
				// text-align: center;
				font-size: 20px;

				.welcomeText {
					font-size: 36px;
					font-weight: bold;
					color: #3A3F63;
					line-height: 54px;
				}

				.sys-title-sup {
					font-size: 16px;
					font-weight: 400;
					color: #6A74A5;
					line-height: 24px;
					margin-top: 8px;
				}
			}

			.svg-icon {
				vertical-align: middle;
			}

			.black-btn {
				width: 240px;
				height: 54px;
				border-radius: 29px;
				font-size: 26px;
			}

			.inputWidth {
				width: 80%;
			}
		}
	}

	.login-form .el-form-item {
		margin-bottom: 40px;
	}

	:deep .el-input--large .el-input__inner{
		height: 50px;
		// border-radius: 25px;
		line-height:50px;
		// background-color: rgba(240, 250, 255, 1) !important;
		// border: 1px solid rgba(240, 250, 255, 1);
		padding-left: 48px;
		font-size: 22px;
	}

	:deep .el-input__prefix {
		left: 16px;
		line-height: 50px;
	}

	:deep .el-input__suffix {
		right: 16px;
		line-height: 50px;
	}

	:deep .el-form-item__label {
		font-size: 16px;
	}
</style>
