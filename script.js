  console.log('lock/load');
  var div = document.getElementsByClassName('main')[0];
  var i = 0;

  var storyline = ['<h1>dark bargains</h1>', 
  '<p>You are thirty-one and you decide to live in her forest, because the children always come back.</p>', 
  '<p> Not that you have children, with your husband who has shoulders like bear traps and who intimates about dark bargains that we all have to make when meeting strangers.</p>', 
  '<p>You know dark bargains, you are one, and you help him build your house together at the base of her mountain, in the sweep of the forest that everyone has grown to avoid, on that mountain by the sea.</p>',  
  '<p></p>',
  '<p>It&apos;s good for the two of you because the bad men are kept away by the stories of her appearing with her netting that she doesn&apos;t use to catch fish. </p>', 
  '<p>Your husband captures live animals and sells them to traveling circuses, but he doesn&apos;t declaw any of the big cats no matter how much the circuses ask him to</p>',  
  '<p>The animals live on and on and sometimes they come back with scars and stories and sometimes they stalk around your home at night.</p>',
  '<p class="asides"><strike><xsl:text>Sometimes they talk in the voices of those men you escaped.</xsl:text></strike></p>',
  '<p></p>',
  '<p></p>',
  '<p></p>'];


  div.addEventListener('click', function(event){
    var words = document.getElementById('words');
    words.innerHTML=storyline[i++];
    if(i === storyline.length) {i = 0};
    });

  // div.onkeypress=function(event){
  //   var words = document.getElementById('words');
  //   words.innerHTML=storyline[i++];
  //   if(i === storyline.length) {i = 0};
  //   });







