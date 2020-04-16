import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });

export const CommonController = {

// 轮播图列表
    async rotationChart(option) { return api.post("/rotation/chart", option) },

}

export const AgentController = {

// 代理商品列表
    async agentGoodsList(option) { return api.post("/agent/goods/list", option) },

// 代理产品列表
    async agentProductList(option) { return api.post("/agent/product/list", option) },

}

export const RelationAccountController = {

// 账号关联请求审核
    async relationAccountExamine(option) { return api.post("/relation/account/examine", option) },

// 我的关联账号列表
    async relationAccountList(option) { return api.post("/relation/account/list", option) },

// 账号关联请求
    async relationRequest(option) { return api.post("/relation/request", option) },

// 我的账号关联请求列表
    async relationRequestList(option) { return api.post("/relation/request/list", option) },

}

export const CategoryController = {

// 分类分页查询
    async categoryList(option) { return api.post("/category/list", option) },

}

export const InvoiceController = {

// 添加发票
    async invoiceAdd(option) { return api.post("/invoice/add", option) },

// 获取默认发票
    async invoiceDefault(option) { return api.post("/invoice/default", option) },

// 删除发票
    async invoiceDel(option) { return api.post("/invoice/del", option) },

// 编辑发票
    async invoiceEdit(option) { return api.post("/invoice/edit", option) },

// 获取发票
    async invoiceGet(option) { return api.post("/invoice/get", option) },

// 发票列表
    async invoiceList(option) { return api.post("/invoice/list", option) },

}

export const GoodsController = {

// 发布商品评价
    async goodsAppraise(option) { return api.post("/goods/appraise", option) },

// 发布商品评价的评论
    async goodsAppraiseComment(option) { return api.post("/goods/appraise/comment", option) },

// 商品评价评论列表
    async goodsAppraiseCommentList(option) { return api.post("/goods/appraise/comment/list", option) },

// 商品评价详情
    async goodsAppraiseDetail(option) { return api.post("/goods/appraise/detail", option) },

// 商品评价列表
    async goodsAppraiseList(option) { return api.post("/goods/appraise/list", option) },

// 商品属性/规格
    async goodsAttribute(option) { return api.post("/goods/attribute", option) },

// 商品收藏
    async goodsCollection(option) { return api.post("/goods/collection", option) },

// 商品收藏列表
    async goodsCollectionList(option) { return api.post("/goods/collection/list", option) },

// 商品详情
    async goodsDetail(option) { return api.post("/goods/detail", option) },

}

export const CardController = {

// 收藏/取消收藏 帖子
    async cardCollection(option) { return api.post("/card/collection", option) },

// 发表评论
    async cardComment(option) { return api.post("/card/comment", option) },

// 删除 评论/回复
    async cardCommentDel(option) { return api.post("/card/comment/del", option) },

// 评论/回复 列表
    async cardCommentList(option) { return api.post("/card/comment/list", option) },

// 删除帖子
    async cardDel(option) { return api.post("/card/del", option) },

// 帖子详情
    async cardDetail(option) { return api.post("/card/detail", option) },

// 关注/取消关注 帖子发布人
    async cardFollowAccount(option) { return api.post("/card/follow/account", option) },

// 商品帖子列表
    async cardGoodsList(option) { return api.post("/card/goods/list", option) },

// 点赞/取消点赞 帖子
    async cardLike(option) { return api.post("/card/like", option) },

// 板块帖子列表
    async cardList(option) { return api.post("/card/list", option) },

// 我发布帖子列表
    async cardMyList(option) { return api.post("/card/my/list", option) },

// 保存帖子
    async cardSave(option) { return api.post("/card/save", option) },

}

export const RankController = {

// 分身币排行
    async rankCoin(option) { return api.post("/rank/coin", option) },

// 积分排行
    async rankIntegral(option) { return api.post("/rank/integral", option) },

}

export const SearchController = {

// 商品搜索
    async search(option) { return api.post("/search", option) },

// 用户搜索记录
    async searchLog(option) { return api.post("/search/log", option) },

// 用户搜索记录
    async searchLogDel(option) { return api.post("/search/log/del", option) },

// 热门搜索/推荐搜索词
    async searchRecommend(option) { return api.post("/search/recommend", option) },

}

export const PaymentController = {

// 订单支付
    async paymentOrder(option) { return api.post("/payment/order", option) },

// 获取支付方式
    async paymentWay(option) { return api.post("/payment/way", option) },

}

export const DeliveryAddressController = {

// 获取默认收货地址
    async deliveryAddressDefault(option) { return api.post("/delivery/address/default", option) },

// 通过ID删除收货地址
    async deliveryAddressDel(option) { return api.post("/delivery/address/del", option) },

// 通过id获取收货地址
    async deliveryAddressGet(option) { return api.post("/delivery/address/get", option) },

// 新增收货地址
    async deliveryAddressInsert(option) { return api.post("/delivery/address/insert", option) },

// 收货地址列表
    async deliveryAddressList(option) { return api.post("/delivery/address/list", option) },

// 修改收货地址
    async deliveryAddressUpdate(option) { return api.post("/delivery/address/update", option) },

}

export const UploadController = {

// 上传文件
    async upload(option) { return api.post("/upload", option) },

}

export const PlateController = {

// 板块详情
    async plateDetail(option) { return api.post("/plate/detail", option) },

// 关注/取消 板块
    async plateFollow(option) { return api.post("/plate/follow", option) },

// 热门板块列表
    async plateHotList(option) { return api.post("/plate/hot/list", option) },

// 板块列表
    async plateList(option) { return api.post("/plate/list", option) },

}

export const BillController = {

// 海报详情
    async billDetail(option) { return api.post("/bill/detail", option) },

// 海报列表
    async billList(option) { return api.post("/bill/list", option) },

}

export const TouristController = {

// 海报
    async touristBill{accountNo}{billId}(option) { return api.patch("/tourist/bill/{accountNo}/{billId}", option) },

// 生成商品的分享海报
    async touristBill{goodsId}(option) { return api.patch("/tourist/bill/{goodsId}", option) },

// 临时提供删除用户
    async touristDel{phone}(option) { return api.patch("/tourist/del/{phone}", option) },

// 邀请信息
    async touristInvitation{accountNo}(option) { return api.patch("/tourist/invitation/{accountNo}", option) },

}

export const LoginController = {

// 已注册用户绑定微信
    async bindLogin(option) { return api.post("/bind/login", option) },

// 校验是否绑定了微信
    async checkBindWechat(option) { return api.post("/check/bind/wechat", option) },

// 邀请登录
    async invitationLogin(option) { return api.post("/invitation/login", option) },

// 密码登录
    async login(option) { return api.post("/login", option) },

// 刷新Token
    async refreshToken(option) { return api.post("/refresh/token", option) },

// 设置登录密码
    async settingPassword(option) { return api.post("/setting/password", option) },

// 短信登录
    async smsLogin(option) { return api.post("/sms/login", option) },

// 微信登录
    async wechatLogin(option) { return api.post("/wechat/login", option) },

}

export const RegionController = {

// region
    async region(option) { return api.post("/region", option) },

}

export const SmsController = {

// 发送验证码
    async smsSend(option) { return api.post("/sms/send", option) },

}

export const OrderController = {

// 代理订单提交
    async orderAgentSubmit(option) { return api.post("/order/agent/submit", option) },

// 订单取消
    async orderCancel(option) { return api.post("/order/cancel", option) },

// 订单确认
    async orderConfirm(option) { return api.post("/order/confirm", option) },

// 确认收货
    async orderConfirmReceipt(option) { return api.post("/order/confirm/receipt", option) },

// 删除订单
    async orderDel(option) { return api.post("/order/del", option) },

// 订单详情
    async orderDetail(option) { return api.post("/order/detail", option) },

// 我的订单列表
    async orderList(option) { return api.post("/order/list", option) },

// 订单支付结果：true：已支付，false：未支付
    async orderPaymentResult(option) { return api.post("/order/payment/result", option) },

// 订单退款
    async orderRefund(option) { return api.post("/order/refund", option) },

// 订单提交
    async orderSubmit(option) { return api.post("/order/submit", option) },

}

export const DeviceController = {

// 保存心率信息
    async deviceHeartRate(option) { return api.post("/device/heart/rate", option) },

// 心率信息列表
    async deviceHeartRateDetail(option) { return api.post("/device/heart/rate/detail", option) },

// 心率信息列表
    async deviceHeartRateList(option) { return api.post("/device/heart/rate/list", option) },

}

export const AccountController = {

// 账号设置
    async accountSetting(option) { return api.post("/account/setting", option) },

// 校验手机号码是否注册了账号
    async checkPhone(option) { return api.post("/check/phone", option) },

// 意见反馈
    async feedback(option) { return api.post("/feedback", option) },

// 邀请接口
    async invitation{accountNo}(option) { return api.post("/invitation/{accountNo}", option) },

// 我的信息
    async my(option) { return api.post("/my", option) },

// 我的帖子列表
    async myCard(option) { return api.post("/my/card", option) },

// 我的分身币
    async myCoin(option) { return api.post("/my/coin", option) },

// 我的分身币明细
    async myCoinLog(option) { return api.post("/my/coin/log", option) },

// 我收藏的帖子
    async myCollectionCard(option) { return api.post("/my/collection/card", option) },

// 我的CV
    async myCv(option) { return api.post("/my/cv", option) },

// 我的CV明细
    async myCvLog(option) { return api.post("/my/cv/log", option) },

// 我的粉丝
    async myFans(option) { return api.post("/my/fans", option) },

// 我关注的人
    async myFollowAccount(option) { return api.post("/my/follow/account", option) },

// 我关注的板块
    async myFollowPlate(option) { return api.post("/my/follow/plate", option) },

// 我的收益
    async myIncome(option) { return api.post("/my/income", option) },

// 我的信息-帖子相关
    async myInfo(option) { return api.post("/my/info", option) },

// 我的积分
    async myIntegral(option) { return api.post("/my/integral", option) },

// 我的积分明细
    async myIntegralLog(option) { return api.post("/my/integral/log", option) },

// 我点赞的帖子
    async myLikeCard(option) { return api.post("/my/like/card", option) },

// 我的团队
    async myTeam(option) { return api.post("/my/team", option) },

// 二维码
    async qrcode{accountNo}(option) { return api.patch("/qrcode/{accountNo}", option) },

// 修改密码
    async updatePassword(option) { return api.post("/update/password", option) },

// 修改手机号码
    async updatePhone(option) { return api.post("/update/phone", option) },

}

export const ShopCartController = {

// 加入购物车
    async shopCartAdd(option) { return api.post("/shop/cart/add", option) },

// 删除购物车中一个或多个商品
    async shopCartDel(option) { return api.post("/shop/cart/del", option) },

// 我的购物车商品列表
    async shopCartList(option) { return api.post("/shop/cart/list", option) },

// 修改购物车商品数量或规格
    async shopCartUpdate(option) { return api.post("/shop/cart/update", option) },

}

