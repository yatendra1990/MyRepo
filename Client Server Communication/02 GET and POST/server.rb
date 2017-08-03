require 'sinatra'

get '/favicon.ico' do
	""
end

get '/' do
	"Hello World! Try <a href='/main'>/main</a> or <a href='/form'>/form</a>"
end

get '/main' do
	send_file 'main.html'
end

get '/form' do
	send_file 'form.html'
end

get '/thanks' do
	"thank you"
end

post '/send' do
	p params
	# "thank you"
	redirect '/thanks'
end
