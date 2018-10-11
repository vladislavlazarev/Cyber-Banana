$(document).ready(function() {

	console.log('hello my second year of suffering');

	let currentUser = null;
	let userLoggedIn = false;

	let userList = [
		{
			id: 7836, 
			type: 'admin',
			name: 'Vlad',
			age: 29
		},
		{
			id: 4836, 
			type: 'user',
			name: 'Lobster',
			age: 13
		}, 
		{
			id: 5636, 
			type: 'hacker',
			name: 'Leonardo Di Capremont',
			age: 36
		}
	];
 

	// interfaceBuilder.build('login');


	$('.js-authBtn').click(function(){
		checkPass($('.js-authInput').val());
	});
	$('.js-authInput').focus(function(){
		$('.js-authParent').removeClass('-error');
	});

	$('.auth-form').on('submit', function(event) {
		event.preventDefault();
		checkPass($('.js-authInput').val());
	})


	function checkPass(userPass) {
		for (let i = 0; i < userList.length; i++) {
			if (userPass == userList[i].id) {
				userLoggedIn = true;
				currentUser = userList[i];
			}
			else {
				interfaceBuilder.showMessage('Welocome on Board, ' + currentUser.name);
			}
		}

		if (!userLoggedIn) {
			$('.js-authParent').addClass('-error');
		} 
	}
});

