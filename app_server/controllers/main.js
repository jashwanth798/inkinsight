module.exports.index=function(req,res){
    res.render('index', { title: 'Inkinsight' });
   };
   module.exports.signin=function(req,res){
    res.render('signin', { title: 'Inkinsight' });
   };
   module.exports.review=function(req,res){
    res.render('review', { title: 'Inkinsight' });
   };