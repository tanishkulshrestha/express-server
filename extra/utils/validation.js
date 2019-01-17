const users = [
  {
    traineeEmail : 'trainee1@successive.tech' ,
    reviewerEmail : 'reviewer1@successive.tech'
  },

  {
    traineeEmail : 'trainee2@succsive.tech' ,
  reviewerEmail : 'reviewer2@succesive.tech'
  }  ]

let validUsers = [];
let invalidUsers = [];
function validateUsers(users)
{

  users.forEach(function(user)  {
  let { traineeEmail , reviewerEmail } = user;
  if(validateEmail(traineeEmail) && validateEmail(reviewerEmail))
    {
      console.log("True");
      validUsers.push(user);

    }
    else
    {
      console.log("False");
    invalidUsers.push(user);
    }
  });
  console.log("These are Valid Users: ",validUsers,"and the counts are",validUsers.length);
  console.log("These are Invalid Users: ",invalidUsers,"and the counts are",invalidUsers.length);
}
function validateEmail( email )
{

  let regex = RegExp  ("^[A-Za-z0-9._%+-]+@successive.tech$") ;
  if( regex.test( email ))
  {
    return true;
  }
  else
  {
    return false;
  }

}
validateUsers(users);
