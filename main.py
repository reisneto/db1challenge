import os
import json
import model
from google.appengine.ext.webapp import template
import webapp2

def AsDict(user):
	return {'id': user.key.id(), 'name': user.name, 'bday': user.bday, 'ptype': user.ptype, 'addr': user.addr}


class RestHandler(webapp2.RequestHandler):
	def dispatch(self):
		#time.sleep(1)
		super(RestHandler, self).dispatch()

	def SendJson(self, r):
		self.response.headers['content-type'] = 'text/plain'
		self.response.write(json.dumps(r))

class QueryHandler(RestHandler):
	def get(self):
		users = model.allUsers()
		r = [ AsDict(user) for user in users ]
		self.SendJson(r)

class InsertHandler(RestHandler):

	def post(self):
		r = json.loads(self.request.body)
		user = model.InsertUser(r)
		r = AsDict(user)
		self.SendJson(r)

application = webapp2.WSGIApplication([
    ('/rest/query', QueryHandler),
    ('/rest/insert', InsertHandler)
], debug=True)
