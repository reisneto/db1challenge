from google.appengine.ext import ndb

class User(ndb.Model):
	name = ndb.StringProperty()
	bday = ndb.StringProperty()
	ptype = ndb.StringProperty()
	addr = ndb.StringProperty()
	
def allUsers():
	return User.query()	

def InsertUser(user):
	user = User(name = user['name'], bday = user['bday'], ptype = user['ptype'], addr = user['addr'])
	user.put()
	return user