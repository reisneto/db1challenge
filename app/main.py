import os
from google.appengine.ext.webapp import template
import webapp2

class Main(webapp2.RequestHandler):
    def get(self):
    	template_values = {}
        path = os.path.join(os.path.dirname(__file__), 'index.html')
        self.response.out.write(template.render(path, template_values))

application = webapp2.WSGIApplication([
    ('/', Main),
], debug=True)