const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında', footer:'Hasan MERCAN' });
}

module.exports={

	hakkinda
}
