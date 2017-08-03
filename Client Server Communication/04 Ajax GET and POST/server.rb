require 'sinatra'

get '/' do
	'Try <a href="/main">/main</a> for an Ajax example'
end


get '/main' do
  send_file 'public/main.html'
end


get '/main.js' do
  send_file 'public/main.js'
end


get '/fetch' do
	'Received GET request'
end


post '/send' do
	'Received POST request'
end

