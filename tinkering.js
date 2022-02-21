let facebookProfile = {
  name: 'Aldi',
  friends: 515,
  messages: ['Netflix and chill for tonight', 'Michael Jordan is truly the GOAT!', 'NBA Allstar weekend is finally here!'],
  postMessage: function(message) {
    messages.push(message);
  },
  deleteMessage: function(index) {
    this.messages.splice(index,1);
  },
  addFriend: function() {
    friends += 1;
  },
  removeFriend: function() {
    friends = friends - 1;
  }
}