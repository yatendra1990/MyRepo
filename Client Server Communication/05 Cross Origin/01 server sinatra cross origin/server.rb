require 'sinatra'
require 'json'
require 'sinatra/cross_origin'

set :bind, '0.0.0.0'

get '/' do
	"Try an ajax GET to <br> #{request.ip}:#{request.port}/fetch <br> or an ajax POST to <br> #{request.ip}:#{request.port}/send"
end

get '/fetch' do
	cross_origin
	return {
		:message => 'Received GET request',
		:success => true
	}.to_json
end


post '/send' do
	cross_origin
	return {
		:message => 'Received POST request',
		:success => true
	}.to_json
end

