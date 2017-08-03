
# ======================
# Usage:
# $ rackup
# ======================

%w(
	json
).each { |lib| require lib }

map '/ajax' do
	app = lambda do |env|

		status = 200

		headers = {
			'Access-Control-Allow-Origin' => '*',
			'Access-Control-Allow-Methods' => 'GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD',
			'Access-Control-Allow-Headers' => '*,x-requested-with,Content-Type,If-Modified-Since,If-None-Match'
		}

		body = [{:name => 'Abhijit', :job => 'programming'}.to_json]

		response = Rack::Response.new(body, status, headers)

		response.finish
	end

	run app
end

