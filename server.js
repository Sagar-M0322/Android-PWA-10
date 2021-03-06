var express = require('express'); 
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/public/images'));
app.get('/',function(req,resp)
{
	resp.sendFile(__dirname+"/"+"public/index.html")
});
app.post('/login',function(req,resp)
{
	if(req.body.username=='' && req.body.password=='')
	{
		console.log('Logged in successfully');
		resp.sendFile(__dirname+"/"+"public/success.html")
	}
	else
	{
		console.log('invalid credentials');
		resp.sendFile(__dirname+"/"+"public/error.html")
	}
});
app.listen(4000,function(){
	console.log('Listening at port 4000');
});
