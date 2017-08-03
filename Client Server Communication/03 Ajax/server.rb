require 'sinatra'

set :bind, '0.0.0.0'

get '/' do
	'Try /main'
end

get '/main' do
	send_file 'main.html'
end

get '/getajax' do
	p params
	p request.xhr?

	'Welcome'
end