#NODE 学习
##接受参数
* req.query： 处理 get 请求，获取 get 请求参数
* req.params： 处理 /:xxx 形式的 get 或 post 请求，获取请求参数
* req.body： 处理 post 请求，获取 post 请求体
* 处理 get 和 post 请求，但查找优先级由高到低为 req.params→req.body→req.query
##Mongoose
* const schema = new mongoose.Schema({ num:Number, name: String, size: String });
* const MyModel = mongoose.model('MyModel', schema);
* var doc1 = new MyModel({ name:'zheng', size: 'small' });
* dov1.save(function(){err,doc});