var language = {
	'name' : 'en',
	'desc' : 'English',
	'icon' : 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAyIDUxMi4wMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDIgNTEyLjAwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM0MTQ3OUI7IiBkPSJNNTAzLjE3Miw0MjMuNzI1SDguODI4Yy00Ljg3NSwwLTguODI4LTMuOTUzLTguODI4LTguODI4Vjk3LjEwNGMwLTQuODc1LDMuOTUzLTguODI4LDguODI4LTguODI4ICBoNDk0LjM0NWM0Ljg3NSwwLDguODI4LDMuOTUzLDguODI4LDguODI4djMxNy43OTNDNTEyLDQxOS43NzIsNTA4LjA0Nyw0MjMuNzI1LDUwMy4xNzIsNDIzLjcyNXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0Y1RjVGNTsiIGQ9Ik01MTIsOTcuMTA0YzAtNC44NzUtMy45NTMtOC44MjgtOC44MjgtOC44MjhoLTM5LjQ5NWwtMTYzLjU0LDEwNy4xNDdWODguMjc2aC04OC4yNzZ2MTA3LjE0NyAgTDQ4LjMyMiw4OC4yNzZIOC44MjhDMy45NTMsODguMjc2LDAsOTIuMjI5LDAsOTcuMTA0djIyLjgzMWwxNDAuMzA5LDkxLjkyN0gwdjg4LjI3NmgxNDAuMzA5TDAsMzkyLjA2NnYyMi44MzEgIGMwLDQuODc1LDMuOTUzLDguODI4LDguODI4LDguODI4aDM5LjQ5NWwxNjMuNTQtMTA3LjE0N3YxMDcuMTQ3aDg4LjI3NlYzMTYuNTc4bDE2My41NCwxMDcuMTQ3aDM5LjQ5NSAgYzQuODc1LDAsOC44MjgtMy45NTMsOC44MjgtOC44Mjh2LTIyLjgzMWwtMTQwLjMwOS05MS45MjdINTEydi04OC4yNzZIMzcxLjY5MUw1MTIsMTE5LjkzNVY5Ny4xMDR6Ii8+CjxnPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGNEI1NTsiIHBvaW50cz0iNTEyLDIyOS41MTggMjgyLjQ4MywyMjkuNTE4IDI4Mi40ODMsODguMjc2IDIyOS41MTcsODguMjc2IDIyOS41MTcsMjI5LjUxOCAwLDIyOS41MTggICAgMCwyODIuNDgzIDIyOS41MTcsMjgyLjQ4MyAyMjkuNTE3LDQyMy43MjUgMjgyLjQ4Myw0MjMuNzI1IDI4Mi40ODMsMjgyLjQ4MyA1MTIsMjgyLjQ4MyAgIi8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkY0QjU1OyIgZD0iTTE3OC45NDgsMzAwLjEzOEwwLjI1LDQxNi4xMzVjMC42MjUsNC4yNjMsNC4xNCw3LjU5LDguNTc3LDcuNTloMTIuMTU5bDE5MC4zOS0xMjMuNTg2aC0zMi40MjggICBWMzAwLjEzOHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRjRCNTU7IiBkPSJNMzQ2LjM4OCwzMDAuMTM4SDMxMy45NmwxOTAuMTEzLDEyMy40MDRjNC40MzEtMC40NzIsNy45MjgtNC4wOSw3LjkyOC04LjY0NnYtNy4yNTggICBMMzQ2LjM4OCwzMDAuMTM4eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGNEI1NTsiIGQ9Ik0wLDEwNi44NDlsMTYxLjc3OSwxMDUuMDE0aDMyLjQyOEw1LjE0Myw4OS4xMzdDMi4xMjMsOTAuNTQsMCw5My41NTUsMCw5Ny4xMDRWMTA2Ljg0OXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRjRCNTU7IiBkPSJNMzMyLjU2NiwyMTEuODYzTDUxMS42OTMsOTUuNTg2Yy0wLjc0NC00LjEyMi00LjE4NC03LjMwOS04LjUyMS03LjMwOWgtMTIuNjQ3TDMwMC4xMzgsMjExLjg2MyAgIEgzMzIuNTY2eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
	'phrases' : {
		//----------A-----------
		address: 'Address',

		//----------B-----------
		brand: 'Passion Bakery',

		//----------C-----------
		classes: 'Classes',
		contact_us: 'Contact us',
		//----------D-----------
		
		//----------E-----------
		
		//----------E-rror-------
		
		//----------F-----------
		'follow_us_on': 'Follow us on',
		
		//----------H-----------
		home: 'Home',

		//----------I-----------
		

		//----------L-----------
		

		//----------M-----------
		
		//----------N-----------
		
		//----------O-----------
		our_passion: 'Our passion',
		//----------P-----------
		phone: 'Phone',

		//----------R-----------
		
		//----------S-----------
		

		//----------T-----------
	

		//----------U-----------
		
		//----------W-----------
		
	}
};

module.exports = language;