require 'rack'

use Rack::ContentLength

app = lambda do |env|
	[
		200,
		{ 'Content-Type' => 'text/html' },
		['Hello World from Rack']
	]
end
run app

=begin
Requests and Responses have the same format
Three lines

Request

1. Request-Line
a. Begins with method token - 'GET', 'POST', 'PUT', 'DELETE' etc.

b. URI and protocol version
e.g.

GET http://www.w3.org/pub/WWW/TheProject.html HTTP/1.1

ends with CRLF

2. Headers
Header fields:
Accept, Accept-Charset, Accept-Encoding, Accept-Language, Authorization etc. etc.

ends with CRLF


3. Message Body
Actual content


Response

1. Status-Line
a. Begins with status code -
1xx (information)
2xx (success)
3xx (redirection)
4xx (Client Error)
5xx (Server Error)

2. Headers
Header fields:
Accept-Ranges, Age, ETag, Location, Proxy-Authentication, Retry-After etc. etc.

3. Message Body
Actual content
=end
